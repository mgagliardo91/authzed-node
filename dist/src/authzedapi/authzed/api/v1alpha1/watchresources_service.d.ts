import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ObjectReference } from "../v1/core";
import { SubjectReference } from "../v1/core";
import { ZedToken } from "../v1/core";
/**
 * WatchResourcesRequest starts a watch for specific permission updates
 * for the given resource and subject types.
 *
 * @generated from protobuf message authzed.api.v1alpha1.WatchResourcesRequest
 */
export interface WatchResourcesRequest {
    /**
     * resource_object_type is the type of resource object for which we will
     * watch for changes.
     *
     * @generated from protobuf field: string resource_object_type = 1;
     */
    resourceObjectType: string;
    /**
     * permission is the name of the permission or relation for which we will
     * watch for changes.
     *
     * @generated from protobuf field: string permission = 2;
     */
    permission: string;
    /**
     * subject_object_type is the type of the subject resource for which we will
     * watch for changes.
     *
     * @generated from protobuf field: string subject_object_type = 3;
     */
    subjectObjectType: string;
    /**
     * optional_subject_relation allows you to specify a group of subjects to watch
     * for a given subject type.
     *
     * @generated from protobuf field: string optional_subject_relation = 4;
     */
    optionalSubjectRelation: string;
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken optional_start_cursor = 5;
     */
    optionalStartCursor?: ZedToken;
}
/**
 * PermissionUpdate represents a single permission update for a specific
 * subject's permissions.
 *
 * @generated from protobuf message authzed.api.v1alpha1.PermissionUpdate
 */
export interface PermissionUpdate {
    /**
     * subject defines the subject resource whose permissions have changed.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 1;
     */
    subject?: SubjectReference;
    /**
     * resource defines the specific object in the system.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 2;
     */
    resource?: ObjectReference;
    /**
     * @generated from protobuf field: string relation = 3;
     */
    relation: string;
    /**
     * @generated from protobuf field: authzed.api.v1alpha1.PermissionUpdate.Permissionship updated_permission = 4;
     */
    updatedPermission: PermissionUpdate_Permissionship;
}
/**
 * todo: work this into the v1 core API at some point since it's used
 * across services.
 *
 * @generated from protobuf enum authzed.api.v1alpha1.PermissionUpdate.Permissionship
 */
export declare enum PermissionUpdate_Permissionship {
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
/**
 * WatchResourcesResponse enumerates the list of permission updates that have
 * occurred as a result of one or more relationship updates.
 *
 * @generated from protobuf message authzed.api.v1alpha1.WatchResourcesResponse
 */
export interface WatchResourcesResponse {
    /**
     * @generated from protobuf field: repeated authzed.api.v1alpha1.PermissionUpdate updates = 1;
     */
    updates: PermissionUpdate[];
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken changes_through = 2;
     */
    changesThrough?: ZedToken;
}
declare class WatchResourcesRequest$Type extends MessageType<WatchResourcesRequest> {
    constructor();
    create(value?: PartialMessage<WatchResourcesRequest>): WatchResourcesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchResourcesRequest): WatchResourcesRequest;
    internalBinaryWrite(message: WatchResourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.WatchResourcesRequest
 */
export declare const WatchResourcesRequest: WatchResourcesRequest$Type;
declare class PermissionUpdate$Type extends MessageType<PermissionUpdate> {
    constructor();
    create(value?: PartialMessage<PermissionUpdate>): PermissionUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PermissionUpdate): PermissionUpdate;
    internalBinaryWrite(message: PermissionUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.PermissionUpdate
 */
export declare const PermissionUpdate: PermissionUpdate$Type;
declare class WatchResourcesResponse$Type extends MessageType<WatchResourcesResponse> {
    constructor();
    create(value?: PartialMessage<WatchResourcesResponse>): WatchResourcesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchResourcesResponse): WatchResourcesResponse;
    internalBinaryWrite(message: WatchResourcesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1alpha1.WatchResourcesResponse
 */
export declare const WatchResourcesResponse: WatchResourcesResponse$Type;
/**
 * @generated ServiceType for protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
export declare const WatchResourcesService: ServiceType;
export {};
