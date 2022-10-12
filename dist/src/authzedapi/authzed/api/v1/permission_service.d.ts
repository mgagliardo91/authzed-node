import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PermissionRelationshipTree } from "./core";
import { SubjectReference } from "./core";
import { ObjectReference } from "./core";
import { RelationshipUpdate } from "./core";
import { Relationship } from "./core";
import { ZedToken } from "./core";
/**
 * Consistency will define how a request is handled by the backend.
 * By defining a consistency requirement, and a token at which those
 * requirements should be applied, where applicable.
 *
 * @generated from protobuf message authzed.api.v1.Consistency
 */
export interface Consistency {
    /**
     * @generated from protobuf oneof: requirement
     */
    requirement: {
        oneofKind: "minimizeLatency";
        /**
         * minimize_latency indicates that the latency for the call should be
         * minimized by having the system select the fastest snapshot available.
         *
         * @generated from protobuf field: bool minimize_latency = 1;
         */
        minimizeLatency: boolean;
    } | {
        oneofKind: "atLeastAsFresh";
        /**
         * at_least_as_fresh indicates that all data used in the API call must be
         * *at least as fresh* as that found in the ZedToken; more recent data might
         * be used if available or faster.
         *
         * @generated from protobuf field: authzed.api.v1.ZedToken at_least_as_fresh = 2;
         */
        atLeastAsFresh: ZedToken;
    } | {
        oneofKind: "atExactSnapshot";
        /**
         * at_exact_snapshot indicates that all data used in the API call must be
         * *at the given* snapshot in time; if the snapshot is no longer available,
         * an error will be returned to the caller.
         *
         * @generated from protobuf field: authzed.api.v1.ZedToken at_exact_snapshot = 3;
         */
        atExactSnapshot: ZedToken;
    } | {
        oneofKind: "fullyConsistent";
        /**
         * fully_consistent indicates that all data used in the API call *must* be
         * at the most recent snapshot found.
         *
         * NOTE: using this method can be *quite slow*, so unless there is a need to
         * do so, it is recommended to use `at_least_as_fresh` with a stored
         * ZedToken.
         *
         * @generated from protobuf field: bool fully_consistent = 4;
         */
        fullyConsistent: boolean;
    } | {
        oneofKind: undefined;
    };
}
/**
 * RelationshipFilter is a collection of filters which when applied to a
 * relationship will return relationships that have exactly matching fields.
 *
 * resource_type is required. All other fields are optional and if left
 * unspecified will not filter relationships.
 *
 * @generated from protobuf message authzed.api.v1.RelationshipFilter
 */
export interface RelationshipFilter {
    /**
     * @generated from protobuf field: string resource_type = 1;
     */
    resourceType: string;
    /**
     * @generated from protobuf field: string optional_resource_id = 2;
     */
    optionalResourceId: string;
    /**
     * @generated from protobuf field: string optional_relation = 3;
     */
    optionalRelation: string;
    /**
     * @generated from protobuf field: authzed.api.v1.SubjectFilter optional_subject_filter = 4;
     */
    optionalSubjectFilter?: SubjectFilter;
}
/**
 * SubjectFilter specifies a filter on the subject of a relationship.
 *
 * subject_type is required and all other fields are optional, and will not
 * impose any additional requirements if left unspecified.
 *
 * @generated from protobuf message authzed.api.v1.SubjectFilter
 */
export interface SubjectFilter {
    /**
     * @generated from protobuf field: string subject_type = 1;
     */
    subjectType: string;
    /**
     * @generated from protobuf field: string optional_subject_id = 2;
     */
    optionalSubjectId: string;
    /**
     * @generated from protobuf field: authzed.api.v1.SubjectFilter.RelationFilter optional_relation = 3;
     */
    optionalRelation?: SubjectFilter_RelationFilter;
}
/**
 * @generated from protobuf message authzed.api.v1.SubjectFilter.RelationFilter
 */
export interface SubjectFilter_RelationFilter {
    /**
     * @generated from protobuf field: string relation = 1;
     */
    relation: string;
}
/**
 * ReadRelationshipsRequest specifies one or more filters used to read matching
 * relationships within the system.
 *
 * @generated from protobuf message authzed.api.v1.ReadRelationshipsRequest
 */
export interface ReadRelationshipsRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.Consistency consistency = 1;
     */
    consistency?: Consistency;
    /**
     * @generated from protobuf field: authzed.api.v1.RelationshipFilter relationship_filter = 2;
     */
    relationshipFilter?: RelationshipFilter;
}
/**
 * ReadRelationshipsResponse contains a Relationship found that matches the
 * specified relationship filter(s). A instance of this response message will
 * be streamed to the client for each relationship found.
 *
 * @generated from protobuf message authzed.api.v1.ReadRelationshipsResponse
 */
export interface ReadRelationshipsResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken read_at = 1;
     */
    readAt?: ZedToken;
    /**
     * @generated from protobuf field: authzed.api.v1.Relationship relationship = 2;
     */
    relationship?: Relationship;
}
/**
 * Precondition specifies how and the existence or absence of certain
 * relationships as expressed through the accompanying filter should affect
 * whether or not the operation proceeds.
 *
 * MUST_NOT_MATCH will fail the parent request if any relationships match the
 * relationships filter.
 * MUST_MATCH will fail the parent request if there are no
 * relationships that match the filter.
 *
 * @generated from protobuf message authzed.api.v1.Precondition
 */
export interface Precondition {
    /**
     * @generated from protobuf field: authzed.api.v1.Precondition.Operation operation = 1;
     */
    operation: Precondition_Operation;
    /**
     * @generated from protobuf field: authzed.api.v1.RelationshipFilter filter = 2;
     */
    filter?: RelationshipFilter;
}
/**
 * @generated from protobuf enum authzed.api.v1.Precondition.Operation
 */
export declare enum Precondition_Operation {
    /**
     * @generated from protobuf enum value: OPERATION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: OPERATION_MUST_NOT_MATCH = 1;
     */
    MUST_NOT_MATCH = 1,
    /**
     * @generated from protobuf enum value: OPERATION_MUST_MATCH = 2;
     */
    MUST_MATCH = 2
}
/**
 * WriteRelationshipsRequest contains a list of Relationship mutations that
 * should be applied to the service. If the optional_preconditions parameter
 * is included, all of the specified preconditions must also be satisfied before
 * the write will be committed.
 *
 * @generated from protobuf message authzed.api.v1.WriteRelationshipsRequest
 */
export interface WriteRelationshipsRequest {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.RelationshipUpdate updates = 1;
     */
    updates: RelationshipUpdate[];
    /**
     * @generated from protobuf field: repeated authzed.api.v1.Precondition optional_preconditions = 2;
     */
    optionalPreconditions: Precondition[];
}
/**
 * @generated from protobuf message authzed.api.v1.WriteRelationshipsResponse
 */
export interface WriteRelationshipsResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken written_at = 1;
     */
    writtenAt?: ZedToken;
}
/**
 * DeleteRelationshipsRequest specifies which Relationships should be deleted,
 * requesting the delete of *ALL* relationships that match the specified
 * filters. If the optional_preconditions parameter is included, all of the
 * specified preconditions must also be satisfied before the delete will be
 * executed.
 *
 * @generated from protobuf message authzed.api.v1.DeleteRelationshipsRequest
 */
export interface DeleteRelationshipsRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.RelationshipFilter relationship_filter = 1;
     */
    relationshipFilter?: RelationshipFilter;
    /**
     * @generated from protobuf field: repeated authzed.api.v1.Precondition optional_preconditions = 2;
     */
    optionalPreconditions: Precondition[];
}
/**
 * @generated from protobuf message authzed.api.v1.DeleteRelationshipsResponse
 */
export interface DeleteRelationshipsResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken deleted_at = 1;
     */
    deletedAt?: ZedToken;
}
/**
 * CheckPermissionRequest issues a check on whether a subject has a permission
 * or is a member of a relation, on a specific resource.
 *
 * @generated from protobuf message authzed.api.v1.CheckPermissionRequest
 */
export interface CheckPermissionRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.Consistency consistency = 1;
     */
    consistency?: Consistency;
    /**
     * resource is the resource on which to check the permission or relation.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 2;
     */
    resource?: ObjectReference;
    /**
     * permission is the name of the permission (or relation) on which to execute
     * the check.
     *
     * @generated from protobuf field: string permission = 3;
     */
    permission: string;
    /**
     * subject is the subject that will be checked for the permission or relation.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 4;
     */
    subject?: SubjectReference;
}
/**
 * @generated from protobuf message authzed.api.v1.CheckPermissionResponse
 */
export interface CheckPermissionResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken checked_at = 1;
     */
    checkedAt?: ZedToken;
    /**
     * Permissionship communicates whether or not the subject has the requested
     * permission or has a relationship with the given resource, over the given
     * relation.
     *
     * This value will be authzed.api.v1.PERMISSIONSHIP_HAS_PERMISSION if the
     * requested subject is a member of the computed permission set or there
     * exists a relationship with the requested relation from the given resource
     * to the given subject.
     *
     * @generated from protobuf field: authzed.api.v1.CheckPermissionResponse.Permissionship permissionship = 2;
     */
    permissionship: CheckPermissionResponse_Permissionship;
}
/**
 * @generated from protobuf enum authzed.api.v1.CheckPermissionResponse.Permissionship
 */
export declare enum CheckPermissionResponse_Permissionship {
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
 * ExpandPermissionTreeRequest returns a tree representing the expansion of all
 * relationships found accessible from a permission or relation on a particular
 * resource.
 *
 * ExpandPermissionTreeRequest is typically used to determine the full set of
 * subjects with a permission, along with the relationships that grant said
 * access.
 *
 * @generated from protobuf message authzed.api.v1.ExpandPermissionTreeRequest
 */
export interface ExpandPermissionTreeRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.Consistency consistency = 1;
     */
    consistency?: Consistency;
    /**
     * resource is the resource over which to run the expansion.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 2;
     */
    resource?: ObjectReference;
    /**
     * permission is the name of the permission or relation over which to run the
     * expansion for the resource.
     *
     * @generated from protobuf field: string permission = 3;
     */
    permission: string;
}
/**
 * @generated from protobuf message authzed.api.v1.ExpandPermissionTreeResponse
 */
export interface ExpandPermissionTreeResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken expanded_at = 1;
     */
    expandedAt?: ZedToken;
    /**
     * tree_root is a tree structure whose leaf nodes are subjects, and
     * intermediate nodes represent the various operations (union, intersection,
     * exclusion) to reach those subjects.
     *
     * @generated from protobuf field: authzed.api.v1.PermissionRelationshipTree tree_root = 2;
     */
    treeRoot?: PermissionRelationshipTree;
}
/**
 * LookupResourcesRequest performs a lookup of all resources of a particular
 * kind on which the subject has the specified permission or the relation in
 * which the subject exists, streaming back the IDs of those resources.
 *
 * @generated from protobuf message authzed.api.v1.LookupResourcesRequest
 */
export interface LookupResourcesRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.Consistency consistency = 1;
     */
    consistency?: Consistency;
    /**
     * resource_object_type is the type of resource object for which the IDs will
     * be returned.
     *
     * @generated from protobuf field: string resource_object_type = 2;
     */
    resourceObjectType: string;
    /**
     * permission is the name of the permission or relation for which the subject
     * must Check.
     *
     * @generated from protobuf field: string permission = 3;
     */
    permission: string;
    /**
     * subject is the subject with access to the resources.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 4;
     */
    subject?: SubjectReference;
}
/**
 * LookupResourcesResponse contains a single matching resource object ID for the
 * requested object type, permission, and subject.
 *
 * @generated from protobuf message authzed.api.v1.LookupResourcesResponse
 */
export interface LookupResourcesResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken looked_up_at = 1;
     */
    lookedUpAt?: ZedToken;
    /**
     * @generated from protobuf field: string resource_object_id = 2;
     */
    resourceObjectId: string;
}
/**
 * LookupSubjectsRequest performs a lookup of all subjects of a particular
 * kind for which the subject has the specified permission or the relation in
 * which the subject exists, streaming back the IDs of those subjects.
 *
 * @generated from protobuf message authzed.api.v1.LookupSubjectsRequest
 */
export interface LookupSubjectsRequest {
    /**
     * @generated from protobuf field: authzed.api.v1.Consistency consistency = 1;
     */
    consistency?: Consistency;
    /**
     * resource is the resource for which all matching subjects for the permission
     * or relation will be returned.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 2;
     */
    resource?: ObjectReference;
    /**
     * permission is the name of the permission (or relation) for which to find
     * the subjects.
     *
     * @generated from protobuf field: string permission = 3;
     */
    permission: string;
    /**
     * subject_object_type is the type of subject object for which the IDs will
     * be returned.
     *
     * @generated from protobuf field: string subject_object_type = 4;
     */
    subjectObjectType: string;
    /**
     * optional_subject_relation is the optional relation for the subject.
     *
     * @generated from protobuf field: string optional_subject_relation = 5;
     */
    optionalSubjectRelation: string;
}
/**
 * LookupSubjectsResponse contains a single matching subject object ID for the
 * requested subject object type on the permission or relation.
 *
 * @generated from protobuf message authzed.api.v1.LookupSubjectsResponse
 */
export interface LookupSubjectsResponse {
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken looked_up_at = 1;
     */
    lookedUpAt?: ZedToken;
    /**
     * subject_object_id is the Object ID of the subject found. May be a `*` if
     * a wildcard was found.
     *
     * @generated from protobuf field: string subject_object_id = 2;
     */
    subjectObjectId: string;
    /**
     * excluded_subject_ids are the Object IDs of the subjects excluded. This list
     * will only contain object IDs if `subject_object_id` is a wildcard (`*`) and
     * will only be populated if exclusions exist from the wildcard.
     *
     * @generated from protobuf field: repeated string excluded_subject_ids = 3;
     */
    excludedSubjectIds: string[];
}
declare class Consistency$Type extends MessageType<Consistency> {
    constructor();
    create(value?: PartialMessage<Consistency>): Consistency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Consistency): Consistency;
    internalBinaryWrite(message: Consistency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.Consistency
 */
export declare const Consistency: Consistency$Type;
declare class RelationshipFilter$Type extends MessageType<RelationshipFilter> {
    constructor();
    create(value?: PartialMessage<RelationshipFilter>): RelationshipFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RelationshipFilter): RelationshipFilter;
    internalBinaryWrite(message: RelationshipFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.RelationshipFilter
 */
export declare const RelationshipFilter: RelationshipFilter$Type;
declare class SubjectFilter$Type extends MessageType<SubjectFilter> {
    constructor();
    create(value?: PartialMessage<SubjectFilter>): SubjectFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubjectFilter): SubjectFilter;
    internalBinaryWrite(message: SubjectFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.SubjectFilter
 */
export declare const SubjectFilter: SubjectFilter$Type;
declare class SubjectFilter_RelationFilter$Type extends MessageType<SubjectFilter_RelationFilter> {
    constructor();
    create(value?: PartialMessage<SubjectFilter_RelationFilter>): SubjectFilter_RelationFilter;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubjectFilter_RelationFilter): SubjectFilter_RelationFilter;
    internalBinaryWrite(message: SubjectFilter_RelationFilter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.SubjectFilter.RelationFilter
 */
export declare const SubjectFilter_RelationFilter: SubjectFilter_RelationFilter$Type;
declare class ReadRelationshipsRequest$Type extends MessageType<ReadRelationshipsRequest> {
    constructor();
    create(value?: PartialMessage<ReadRelationshipsRequest>): ReadRelationshipsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadRelationshipsRequest): ReadRelationshipsRequest;
    internalBinaryWrite(message: ReadRelationshipsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ReadRelationshipsRequest
 */
export declare const ReadRelationshipsRequest: ReadRelationshipsRequest$Type;
declare class ReadRelationshipsResponse$Type extends MessageType<ReadRelationshipsResponse> {
    constructor();
    create(value?: PartialMessage<ReadRelationshipsResponse>): ReadRelationshipsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadRelationshipsResponse): ReadRelationshipsResponse;
    internalBinaryWrite(message: ReadRelationshipsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ReadRelationshipsResponse
 */
export declare const ReadRelationshipsResponse: ReadRelationshipsResponse$Type;
declare class Precondition$Type extends MessageType<Precondition> {
    constructor();
    create(value?: PartialMessage<Precondition>): Precondition;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Precondition): Precondition;
    internalBinaryWrite(message: Precondition, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.Precondition
 */
export declare const Precondition: Precondition$Type;
declare class WriteRelationshipsRequest$Type extends MessageType<WriteRelationshipsRequest> {
    constructor();
    create(value?: PartialMessage<WriteRelationshipsRequest>): WriteRelationshipsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteRelationshipsRequest): WriteRelationshipsRequest;
    internalBinaryWrite(message: WriteRelationshipsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WriteRelationshipsRequest
 */
export declare const WriteRelationshipsRequest: WriteRelationshipsRequest$Type;
declare class WriteRelationshipsResponse$Type extends MessageType<WriteRelationshipsResponse> {
    constructor();
    create(value?: PartialMessage<WriteRelationshipsResponse>): WriteRelationshipsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteRelationshipsResponse): WriteRelationshipsResponse;
    internalBinaryWrite(message: WriteRelationshipsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WriteRelationshipsResponse
 */
export declare const WriteRelationshipsResponse: WriteRelationshipsResponse$Type;
declare class DeleteRelationshipsRequest$Type extends MessageType<DeleteRelationshipsRequest> {
    constructor();
    create(value?: PartialMessage<DeleteRelationshipsRequest>): DeleteRelationshipsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteRelationshipsRequest): DeleteRelationshipsRequest;
    internalBinaryWrite(message: DeleteRelationshipsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DeleteRelationshipsRequest
 */
export declare const DeleteRelationshipsRequest: DeleteRelationshipsRequest$Type;
declare class DeleteRelationshipsResponse$Type extends MessageType<DeleteRelationshipsResponse> {
    constructor();
    create(value?: PartialMessage<DeleteRelationshipsResponse>): DeleteRelationshipsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteRelationshipsResponse): DeleteRelationshipsResponse;
    internalBinaryWrite(message: DeleteRelationshipsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DeleteRelationshipsResponse
 */
export declare const DeleteRelationshipsResponse: DeleteRelationshipsResponse$Type;
declare class CheckPermissionRequest$Type extends MessageType<CheckPermissionRequest> {
    constructor();
    create(value?: PartialMessage<CheckPermissionRequest>): CheckPermissionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckPermissionRequest): CheckPermissionRequest;
    internalBinaryWrite(message: CheckPermissionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckPermissionRequest
 */
export declare const CheckPermissionRequest: CheckPermissionRequest$Type;
declare class CheckPermissionResponse$Type extends MessageType<CheckPermissionResponse> {
    constructor();
    create(value?: PartialMessage<CheckPermissionResponse>): CheckPermissionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckPermissionResponse): CheckPermissionResponse;
    internalBinaryWrite(message: CheckPermissionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckPermissionResponse
 */
export declare const CheckPermissionResponse: CheckPermissionResponse$Type;
declare class ExpandPermissionTreeRequest$Type extends MessageType<ExpandPermissionTreeRequest> {
    constructor();
    create(value?: PartialMessage<ExpandPermissionTreeRequest>): ExpandPermissionTreeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpandPermissionTreeRequest): ExpandPermissionTreeRequest;
    internalBinaryWrite(message: ExpandPermissionTreeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ExpandPermissionTreeRequest
 */
export declare const ExpandPermissionTreeRequest: ExpandPermissionTreeRequest$Type;
declare class ExpandPermissionTreeResponse$Type extends MessageType<ExpandPermissionTreeResponse> {
    constructor();
    create(value?: PartialMessage<ExpandPermissionTreeResponse>): ExpandPermissionTreeResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpandPermissionTreeResponse): ExpandPermissionTreeResponse;
    internalBinaryWrite(message: ExpandPermissionTreeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ExpandPermissionTreeResponse
 */
export declare const ExpandPermissionTreeResponse: ExpandPermissionTreeResponse$Type;
declare class LookupResourcesRequest$Type extends MessageType<LookupResourcesRequest> {
    constructor();
    create(value?: PartialMessage<LookupResourcesRequest>): LookupResourcesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LookupResourcesRequest): LookupResourcesRequest;
    internalBinaryWrite(message: LookupResourcesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.LookupResourcesRequest
 */
export declare const LookupResourcesRequest: LookupResourcesRequest$Type;
declare class LookupResourcesResponse$Type extends MessageType<LookupResourcesResponse> {
    constructor();
    create(value?: PartialMessage<LookupResourcesResponse>): LookupResourcesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LookupResourcesResponse): LookupResourcesResponse;
    internalBinaryWrite(message: LookupResourcesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.LookupResourcesResponse
 */
export declare const LookupResourcesResponse: LookupResourcesResponse$Type;
declare class LookupSubjectsRequest$Type extends MessageType<LookupSubjectsRequest> {
    constructor();
    create(value?: PartialMessage<LookupSubjectsRequest>): LookupSubjectsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LookupSubjectsRequest): LookupSubjectsRequest;
    internalBinaryWrite(message: LookupSubjectsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.LookupSubjectsRequest
 */
export declare const LookupSubjectsRequest: LookupSubjectsRequest$Type;
declare class LookupSubjectsResponse$Type extends MessageType<LookupSubjectsResponse> {
    constructor();
    create(value?: PartialMessage<LookupSubjectsResponse>): LookupSubjectsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LookupSubjectsResponse): LookupSubjectsResponse;
    internalBinaryWrite(message: LookupSubjectsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.LookupSubjectsResponse
 */
export declare const LookupSubjectsResponse: LookupSubjectsResponse$Type;
/**
 * @generated ServiceType for protobuf service authzed.api.v1.PermissionsService
 */
export declare const PermissionsService: ServiceType;
export {};
