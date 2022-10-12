import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { SubjectReference } from "./core";
import { ObjectReference } from "./core";
/**
 * DebugInformation defines debug information returned by an API call in a footer when
 * requested with a specific debugging header.
 *
 * The specific debug information returned will depend on the type of the API call made.
 *
 * See the github.com/authzed/authzed-go project for the specific header and footer names.
 *
 * @generated from protobuf message authzed.api.v1.DebugInformation
 */
export interface DebugInformation {
    /**
     * check holds debug information about a check request.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace check = 1;
     */
    check?: CheckDebugTrace;
    /**
     * schema_used holds the schema used for the request.
     *
     * @generated from protobuf field: string schema_used = 2;
     */
    schemaUsed: string;
}
/**
 * CheckDebugTrace is a recursive trace of the requests made for resolving a CheckPermission
 * API call.
 *
 * @generated from protobuf message authzed.api.v1.CheckDebugTrace
 */
export interface CheckDebugTrace {
    /**
     * resource holds the resource on which the Check was performed.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 1;
     */
    resource?: ObjectReference;
    /**
     * permission holds the name of the permission or relation on which the Check was performed.
     *
     * @generated from protobuf field: string permission = 2;
     */
    permission: string;
    /**
     * permission_type holds information indicating whether it was a permission or relation.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.PermissionType permission_type = 3;
     */
    permissionType: CheckDebugTrace_PermissionType;
    /**
     * subject holds the subject on which the Check was performed. This will be static across all calls within
     * the same Check tree.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 4;
     */
    subject?: SubjectReference;
    /**
     * result holds the result of the Check call.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.Permissionship result = 5;
     */
    result: CheckDebugTrace_Permissionship;
    /**
     * @generated from protobuf oneof: resolution
     */
    resolution: {
        oneofKind: "wasCachedResult";
        /**
         * was_cached_result, if true, indicates that the result was found in the cache and returned directly.
         *
         * @generated from protobuf field: bool was_cached_result = 6;
         */
        wasCachedResult: boolean;
    } | {
        oneofKind: "subProblems";
        /**
         * sub_problems holds the sub problems that were executed to resolve the answer to this Check. An empty list
         * and a permissionship of PERMISSIONSHIP_HAS_PERMISSION indicates the subject was found within this relation.
         *
         * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.SubProblems sub_problems = 7;
         */
        subProblems: CheckDebugTrace_SubProblems;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message authzed.api.v1.CheckDebugTrace.SubProblems
 */
export interface CheckDebugTrace_SubProblems {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.CheckDebugTrace traces = 1;
     */
    traces: CheckDebugTrace[];
}
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.PermissionType
 */
export declare enum CheckDebugTrace_PermissionType {
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_RELATION = 1;
     */
    RELATION = 1,
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_PERMISSION = 2;
     */
    PERMISSION = 2
}
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.Permissionship
 */
export declare enum CheckDebugTrace_Permissionship {
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_NO_PERMISSION = 1;
     */
    NO_PERMISSION = 1,
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_HAS_PERMISSION = 2;
     */
    HAS_PERMISSION = 2
}
declare class DebugInformation$Type extends MessageType<DebugInformation> {
    constructor();
    create(value?: PartialMessage<DebugInformation>): DebugInformation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DebugInformation): DebugInformation;
    internalBinaryWrite(message: DebugInformation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DebugInformation
 */
export declare const DebugInformation: DebugInformation$Type;
declare class CheckDebugTrace$Type extends MessageType<CheckDebugTrace> {
    constructor();
    create(value?: PartialMessage<CheckDebugTrace>): CheckDebugTrace;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckDebugTrace): CheckDebugTrace;
    internalBinaryWrite(message: CheckDebugTrace, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace
 */
export declare const CheckDebugTrace: CheckDebugTrace$Type;
declare class CheckDebugTrace_SubProblems$Type extends MessageType<CheckDebugTrace_SubProblems> {
    constructor();
    create(value?: PartialMessage<CheckDebugTrace_SubProblems>): CheckDebugTrace_SubProblems;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckDebugTrace_SubProblems): CheckDebugTrace_SubProblems;
    internalBinaryWrite(message: CheckDebugTrace_SubProblems, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace.SubProblems
 */
export declare const CheckDebugTrace_SubProblems: CheckDebugTrace_SubProblems$Type;
export {};
