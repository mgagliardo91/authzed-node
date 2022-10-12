import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ReadSchemaRequest is the required data to read Object Definitions from
 * a Schema.
 *
 * @generated from protobuf message authzed.api.v1alpha1.ReadSchemaRequest
 */
export interface ReadSchemaRequest {
    /**
     * The list of names of the Object Definitions that are being requested.
     *
     * These names must be fully qualified with their namespace (e.g.
     * myblog/post).
     *
     * @generated from protobuf field: repeated string object_definitions_names = 1;
     */
    objectDefinitionsNames: string[];
}
/**
 * ReadSchemaResponse is the resulting data after having read the Object
 * Definitions from a Schema.
 *
 * @generated from protobuf message authzed.api.v1alpha1.ReadSchemaResponse
 */
export interface ReadSchemaResponse {
    /**
     * The Object Definitions that were requested.
     *
     * @generated from protobuf field: repeated string object_definitions = 1;
     */
    objectDefinitions: string[];
    /**
     * The computed revision of the returned object definitions.
     *
     * @generated from protobuf field: string computed_definitions_revision = 2;
     */
    computedDefinitionsRevision: string;
}
/**
 * WriteSchemaRequest is the required data used to "upsert" the Schema of a
 * Permissions System.
 *
 * @generated from protobuf message authzed.api.v1alpha1.WriteSchemaRequest
 */
export interface WriteSchemaRequest {
    /**
     * The Schema containing one or more Object Definitions that will be written
     * to the Permissions System.
     *
     * @generated from protobuf field: string schema = 1;
     */
    schema: string;
    /**
     * If specified, the existing revision of object definitions in the schema that must be present for
     * the write to succeed. If the revision specified differs (i.e. the underlying schema has changed),
     * the write call will fail with a FAILED_PRECONDITION error.
     *
     * @generated from protobuf field: string optional_definitions_revision_precondition = 2;
     */
    optionalDefinitionsRevisionPrecondition: string;
}
/**
 * WriteSchemaResponse is the resulting data after having written a Schema to
 * a Permissions System.
 *
 * @generated from protobuf message authzed.api.v1alpha1.WriteSchemaResponse
 */
export interface WriteSchemaResponse {
    /**
     * The names of the Object Definitions that were written.
     *
     * @generated from protobuf field: repeated string object_definitions_names = 1;
     */
    objectDefinitionsNames: string[];
    /**
     * The computed revision of the written object definitions.
     *
     * @generated from protobuf field: string computed_definitions_revision = 2;
     */
    computedDefinitionsRevision: string;
}
declare class ReadSchemaRequest$Type extends MessageType<ReadSchemaRequest> {
    constructor();
    create(value?: PartialMessage<ReadSchemaRequest>): ReadSchemaRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadSchemaRequest): ReadSchemaRequest;
    internalBinaryWrite(message: ReadSchemaRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.ReadSchemaRequest
 */
export declare const ReadSchemaRequest: ReadSchemaRequest$Type;
declare class ReadSchemaResponse$Type extends MessageType<ReadSchemaResponse> {
    constructor();
    create(value?: PartialMessage<ReadSchemaResponse>): ReadSchemaResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadSchemaResponse): ReadSchemaResponse;
    internalBinaryWrite(message: ReadSchemaResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.ReadSchemaResponse
 */
export declare const ReadSchemaResponse: ReadSchemaResponse$Type;
declare class WriteSchemaRequest$Type extends MessageType<WriteSchemaRequest> {
    constructor();
    create(value?: PartialMessage<WriteSchemaRequest>): WriteSchemaRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteSchemaRequest): WriteSchemaRequest;
    internalBinaryWrite(message: WriteSchemaRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.WriteSchemaRequest
 */
export declare const WriteSchemaRequest: WriteSchemaRequest$Type;
declare class WriteSchemaResponse$Type extends MessageType<WriteSchemaResponse> {
    constructor();
    create(value?: PartialMessage<WriteSchemaResponse>): WriteSchemaResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteSchemaResponse): WriteSchemaResponse;
    internalBinaryWrite(message: WriteSchemaResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.WriteSchemaResponse
 */
export declare const WriteSchemaResponse: WriteSchemaResponse$Type;
/**
 * @generated ServiceType for protobuf service authzed.api.v1alpha1.SchemaService
 */
export declare const SchemaService: ServiceType;
export {};
