// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package rpc

import (
	"context"
	"crypto/tls"
	"fmt"
	"sync"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/backoff"
	"google.golang.org/grpc/credentials"
)

const (
	// DefaultServiceConfig is a default gRPC connection service config which enables DNS round robin between IPs.
	// To use DNS resolver, a "dns:///" prefix should be applied to the hostPort.
	// https://github.com/grpc/grpc/blob/master/doc/naming.md
	DefaultServiceConfig = `{"loadBalancingConfig": [{"round_robin":{}}]}`

	// MaxBackoffDelay is a maximum interval between reconnect attempts.
	MaxBackoffDelay = 10 * time.Second

	// minConnectTimeout is the minimum amount of time we are willing to give a connection to complete.
	minConnectTimeout = 20 * time.Second
)

// RPCFactory builds RPC & TLS config
type RPCFactory struct {
	Address string

	sync.Mutex
	tlsFactory TLSConfigProvider
}

// NewFactory builds a new RPCFactory
// conforming to the underlying configuration
func NewFactory(rpcAddress string, tlsProvider TLSConfigProvider) *RPCFactory {
	return &RPCFactory{
		Address:    rpcAddress,
		tlsFactory: tlsProvider,
	}
}

func (d *RPCFactory) GetTLSConfig() (*tls.Config, error) {
	if d.tlsFactory != nil {
		return d.tlsFactory.GetTLSConfig()
	}

	return nil, nil
}

// CreateGRPCConnection creates connection for gRPC calls
func CreateGRPCConnection(hostName string, tls *tls.Config) *grpc.ClientConn {
	connection, err := Dial(hostName, tls)

	if err != nil {
		fmt.Println("Failed to create gRPC connection")
	}

	return connection
}

// Dial creates a client connection to the given target with default options.
// The hostName syntax is defined in
// https://github.com/grpc/grpc/blob/master/doc/naming.md.
// e.g. to use dns resolver, a "dns:///" prefix should be applied to the target.
func Dial(hostName string, tlsConfig *tls.Config) (*grpc.ClientConn, error) {
	// Default to insecure
	grpcSecureOpt := grpc.WithInsecure()
	if tlsConfig != nil {
		grpcSecureOpt = grpc.WithTransportCredentials(credentials.NewTLS(tlsConfig))
	}

	// gRPC maintains connection pool inside grpc.ClientConn.
	// This connection pool has auto reconnect feature.
	// If connection goes down, gRPC will try to reconnect using exponential backoff strategy:
	// https://github.com/grpc/grpc/blob/master/doc/connection-backoff.md.
	// Default MaxDelay is 120 seconds which is too high.
	var cp = grpc.ConnectParams{
		Backoff:           backoff.DefaultConfig,
		MinConnectTimeout: minConnectTimeout,
	}
	cp.Backoff.MaxDelay = MaxBackoffDelay

	return grpc.Dial(hostName,
		grpcSecureOpt,
		grpc.WithChainUnaryInterceptor(
			errorInterceptor),
		grpc.WithDefaultServiceConfig(DefaultServiceConfig),
		grpc.WithDisableServiceConfig(),
		grpc.WithConnectParams(cp),
	)
}

func errorInterceptor(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
	err := invoker(ctx, method, req, reply, cc, opts...)
	// err = serviceerrors.FromStatus(status.Convert(err))
	return err
}
