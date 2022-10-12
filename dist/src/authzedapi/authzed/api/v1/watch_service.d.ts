import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RelationshipUpdate } from "./core";
import { ZedToken } from "./core";
/**
 * WatchRequest specifies the object definitions for which we want to start
 * watching mutations, and an optional start snapshot for when to start
 * watching.
 *
 * @generated from protobuf message authzed.api.v1.WatchRequest
 */
export interface WatchRequest {
    /**
     * @generated from protobuf field: repeated string optional_object_types = 1;
     */
    optionalObjectTypes: string[];
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken optional_start_cursor = 2;
     */
    optionalStartCursor?: ZedToken;
}
/**
 * WatchResponse contains all tuple modification events in ascending
 * timestamp order, from the requested start snapshot to a snapshot
 * encoded in the watch response. The client can use the snapshot to resume
 * watching where the previous watch response left off.
 *
 * @generated from protobuf message authzed.api.v1.WatchResponse
 */
export interface WatchResponse {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.RelationshipUpdate updates = 1;
     */
    updates: RelationshipUpdate[];
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken changes_through = 2;
     */
    changesThrough?: ZedToken;
}
declare class WatchRequest$Type extends MessageType<WatchRequest> {
    constructor();
    create(value?: PartialMessage<WatchRequest>): WatchRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchRequest): WatchRequest;
    internalBinaryWrite(message: WatchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WatchRequest
 */
export declare const WatchRequest: WatchRequest$Type;
declare class WatchResponse$Type extends MessageType<WatchResponse> {
    constructor();
    create(value?: PartialMessage<WatchResponse>): WatchResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchResponse): WatchResponse;
    internalBinaryWrite(message: WatchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WatchResponse
 */
export declare const WatchResponse: WatchResponse$Type;
/**
 * @generated ServiceType for protobuf service authzed.api.v1.WatchService
 */
export declare const WatchService: ServiceType;
export {};
