import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ReadSchemaRequest returns the schema from the database.
 *
 * @generated from protobuf message authzed.api.v1.ReadSchemaRequest
 */
export interface ReadSchemaRequest {
}
/**
 * ReadSchemaResponse is the resulting data after having read the Object
 * Definitions from a Schema.
 *
 * @generated from protobuf message authzed.api.v1.ReadSchemaResponse
 */
export interface ReadSchemaResponse {
    /**
     * schema_text is the textual form of the current schema in the system
     *
     * @generated from protobuf field: string schema_text = 1;
     */
    schemaText: string;
}
/**
 * WriteSchemaRequest is the required data used to "upsert" the Schema of a
 * Permissions System.
 *
 * @generated from protobuf message authzed.api.v1.WriteSchemaRequest
 */
export interface WriteSchemaRequest {
    /**
     * The Schema containing one or more Object Definitions that will be written
     * to the Permissions System.
     *
     * @generated from protobuf field: string schema = 1;
     */
    schema: string;
}
/**
 * WriteSchemaResponse is the resulting data after having written a Schema to
 * a Permissions System.
 *
 * @generated from protobuf message authzed.api.v1.WriteSchemaResponse
 */
export interface WriteSchemaResponse {
}
declare class ReadSchemaRequest$Type extends MessageType<ReadSchemaRequest> {
    constructor();
    create(value?: PartialMessage<ReadSchemaRequest>): ReadSchemaRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadSchemaRequest): ReadSchemaRequest;
    internalBinaryWrite(message: ReadSchemaRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ReadSchemaRequest
 */
export declare const ReadSchemaRequest: ReadSchemaRequest$Type;
declare class ReadSchemaResponse$Type extends MessageType<ReadSchemaResponse> {
    constructor();
    create(value?: PartialMessage<ReadSchemaResponse>): ReadSchemaResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadSchemaResponse): ReadSchemaResponse;
    internalBinaryWrite(message: ReadSchemaResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ReadSchemaResponse
 */
export declare const ReadSchemaResponse: ReadSchemaResponse$Type;
declare class WriteSchemaRequest$Type extends MessageType<WriteSchemaRequest> {
    constructor();
    create(value?: PartialMessage<WriteSchemaRequest>): WriteSchemaRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteSchemaRequest): WriteSchemaRequest;
    internalBinaryWrite(message: WriteSchemaRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WriteSchemaRequest
 */
export declare const WriteSchemaRequest: WriteSchemaRequest$Type;
declare class WriteSchemaResponse$Type extends MessageType<WriteSchemaResponse> {
    constructor();
    create(value?: PartialMessage<WriteSchemaResponse>): WriteSchemaResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteSchemaResponse): WriteSchemaResponse;
    internalBinaryWrite(message: WriteSchemaResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WriteSchemaResponse
 */
export declare const WriteSchemaResponse: WriteSchemaResponse$Type;
/**
 * @generated ServiceType for protobuf service authzed.api.v1.SchemaService
 */
export declare const SchemaService: ServiceType;
export {};
