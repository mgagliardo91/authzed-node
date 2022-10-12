import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { WatchResourcesResponse } from "./watchresources_service";
import type { WatchResourcesRequest } from "./watchresources_service";
import * as grpc from "@grpc/grpc-js";
/**
 * WatchResourcesService is used to receive a stream of updates for resources of a
 * specific (resource type, permission, subject) combination.
 *
 * @generated from protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
export interface IWatchResourcesServiceClient {
    /**
     * WatchResources initiates a watch for permission changes for the provided
     * (resource type, permission, subject) pair.
     *
     * @generated from protobuf rpc: WatchResources(authzed.api.v1alpha1.WatchResourcesRequest) returns (stream authzed.api.v1alpha1.WatchResourcesResponse);
     */
    watchResources(input: WatchResourcesRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse>;
    watchResources(input: WatchResourcesRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse>;
}
/**
 * WatchResourcesService is used to receive a stream of updates for resources of a
 * specific (resource type, permission, subject) combination.
 *
 * @generated from protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
export declare class WatchResourcesServiceClient extends grpc.Client implements IWatchResourcesServiceClient {
    private readonly _binaryOptions;
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions, binaryOptions?: Partial<BinaryReadOptions & BinaryWriteOptions>);
    /**
     * WatchResources initiates a watch for permission changes for the provided
     * (resource type, permission, subject) pair.
     *
     * @generated from protobuf rpc: WatchResources(authzed.api.v1alpha1.WatchResourcesRequest) returns (stream authzed.api.v1alpha1.WatchResourcesResponse);
     */
    watchResources(input: WatchResourcesRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse>;
}
