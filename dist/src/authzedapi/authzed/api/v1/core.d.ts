import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Relationship specifies how a resource relates to a subject. Relationships
 * form the data for the graph over which all permissions questions are
 * answered.
 *
 * @generated from protobuf message authzed.api.v1.Relationship
 */
export interface Relationship {
    /**
     * resource is the resource to which the subject is related, in some manner
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 1;
     */
    resource?: ObjectReference;
    /**
     * relation is how the resource and subject are related.
     *
     * @generated from protobuf field: string relation = 2;
     */
    relation: string;
    /**
     * subject is the subject to which the resource is related, in some manner.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 3;
     */
    subject?: SubjectReference;
}
/**
 * SubjectReference is used for referring to the subject portion of a
 * Relationship. The relation component is optional and is used for defining a
 * sub-relation on the subject, e.g. group:123#members
 *
 * @generated from protobuf message authzed.api.v1.SubjectReference
 */
export interface SubjectReference {
    /**
     * @generated from protobuf field: authzed.api.v1.ObjectReference object = 1;
     */
    object?: ObjectReference;
    /**
     * @generated from protobuf field: string optional_relation = 2;
     */
    optionalRelation: string;
}
/**
 * ObjectReference is used to refer to a specific object in the system.
 *
 * @generated from protobuf message authzed.api.v1.ObjectReference
 */
export interface ObjectReference {
    /**
     * @generated from protobuf field: string object_type = 1;
     */
    objectType: string;
    /**
     * @generated from protobuf field: string object_id = 2;
     */
    objectId: string;
}
/**
 * ZedToken is used to provide causality metadata between Write and Check
 * requests.
 *
 * See the authzed.api.v1.Consistency message for more information.
 *
 * @generated from protobuf message authzed.api.v1.ZedToken
 */
export interface ZedToken {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
}
/**
 * RelationshipUpdate is used for mutating a single relationship within the
 * service.
 *
 * CREATE will create the relationship only if it doesn't exist, and error
 * otherwise.
 *
 * TOUCH will upsert the relationship, and will not error if it
 * already exists.
 *
 * DELETE will delete the relationship and error if it doesn't
 * exist.
 *
 * @generated from protobuf message authzed.api.v1.RelationshipUpdate
 */
export interface RelationshipUpdate {
    /**
     * @generated from protobuf field: authzed.api.v1.RelationshipUpdate.Operation operation = 1;
     */
    operation: RelationshipUpdate_Operation;
    /**
     * @generated from protobuf field: authzed.api.v1.Relationship relationship = 2;
     */
    relationship?: Relationship;
}
/**
 * @generated from protobuf enum authzed.api.v1.RelationshipUpdate.Operation
 */
export declare enum RelationshipUpdate_Operation {
    /**
     * @generated from protobuf enum value: OPERATION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: OPERATION_CREATE = 1;
     */
    CREATE = 1,
    /**
     * @generated from protobuf enum value: OPERATION_TOUCH = 2;
     */
    TOUCH = 2,
    /**
     * @generated from protobuf enum value: OPERATION_DELETE = 3;
     */
    DELETE = 3
}
/**
 * PermissionRelationshipTree is used for representing a tree of a resource and
 * its permission relationships with other objects.
 *
 * @generated from protobuf message authzed.api.v1.PermissionRelationshipTree
 */
export interface PermissionRelationshipTree {
    /**
     * @generated from protobuf oneof: tree_type
     */
    treeType: {
        oneofKind: "intermediate";
        /**
         * @generated from protobuf field: authzed.api.v1.AlgebraicSubjectSet intermediate = 1;
         */
        intermediate: AlgebraicSubjectSet;
    } | {
        oneofKind: "leaf";
        /**
         * @generated from protobuf field: authzed.api.v1.DirectSubjectSet leaf = 2;
         */
        leaf: DirectSubjectSet;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: authzed.api.v1.ObjectReference expanded_object = 3;
     */
    expandedObject?: ObjectReference;
    /**
     * @generated from protobuf field: string expanded_relation = 4;
     */
    expandedRelation: string;
}
/**
 * AlgebraicSubjectSet is a subject set which is computed based on applying the
 * specified operation to the operands according to the algebra of sets.
 *
 * UNION is a logical set containing the subject members from all operands.
 *
 * INTERSECTION is a logical set containing only the subject members which are
 * present in all operands.
 *
 * EXCLUSION is a logical set containing only the subject members which are
 * present in the first operand, and none of the other operands.
 *
 * @generated from protobuf message authzed.api.v1.AlgebraicSubjectSet
 */
export interface AlgebraicSubjectSet {
    /**
     * @generated from protobuf field: authzed.api.v1.AlgebraicSubjectSet.Operation operation = 1;
     */
    operation: AlgebraicSubjectSet_Operation;
    /**
     * @generated from protobuf field: repeated authzed.api.v1.PermissionRelationshipTree children = 2;
     */
    children: PermissionRelationshipTree[];
}
/**
 * @generated from protobuf enum authzed.api.v1.AlgebraicSubjectSet.Operation
 */
export declare enum AlgebraicSubjectSet_Operation {
    /**
     * @generated from protobuf enum value: OPERATION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: OPERATION_UNION = 1;
     */
    UNION = 1,
    /**
     * @generated from protobuf enum value: OPERATION_INTERSECTION = 2;
     */
    INTERSECTION = 2,
    /**
     * @generated from protobuf enum value: OPERATION_EXCLUSION = 3;
     */
    EXCLUSION = 3
}
/**
 * DirectSubjectSet is a subject set which is simply a collection of subjects.
 *
 * @generated from protobuf message authzed.api.v1.DirectSubjectSet
 */
export interface DirectSubjectSet {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.SubjectReference subjects = 1;
     */
    subjects: SubjectReference[];
}
declare class Relationship$Type extends MessageType<Relationship> {
    constructor();
    create(value?: PartialMessage<Relationship>): Relationship;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Relationship): Relationship;
    internalBinaryWrite(message: Relationship, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.Relationship
 */
export declare const Relationship: Relationship$Type;
declare class SubjectReference$Type extends MessageType<SubjectReference> {
    constructor();
    create(value?: PartialMessage<SubjectReference>): SubjectReference;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SubjectReference): SubjectReference;
    internalBinaryWrite(message: SubjectReference, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.SubjectReference
 */
export declare const SubjectReference: SubjectReference$Type;
declare class ObjectReference$Type extends MessageType<ObjectReference> {
    constructor();
    create(value?: PartialMessage<ObjectReference>): ObjectReference;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ObjectReference): ObjectReference;
    internalBinaryWrite(message: ObjectReference, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ObjectReference
 */
export declare const ObjectReference: ObjectReference$Type;
declare class ZedToken$Type extends MessageType<ZedToken> {
    constructor();
    create(value?: PartialMessage<ZedToken>): ZedToken;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ZedToken): ZedToken;
    internalBinaryWrite(message: ZedToken, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.ZedToken
 */
export declare const ZedToken: ZedToken$Type;
declare class RelationshipUpdate$Type extends MessageType<RelationshipUpdate> {
    constructor();
    create(value?: PartialMessage<RelationshipUpdate>): RelationshipUpdate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RelationshipUpdate): RelationshipUpdate;
    internalBinaryWrite(message: RelationshipUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.RelationshipUpdate
 */
export declare const RelationshipUpdate: RelationshipUpdate$Type;
declare class PermissionRelationshipTree$Type extends MessageType<PermissionRelationshipTree> {
    constructor();
    create(value?: PartialMessage<PermissionRelationshipTree>): PermissionRelationshipTree;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PermissionRelationshipTree): PermissionRelationshipTree;
    internalBinaryWrite(message: PermissionRelationshipTree, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.PermissionRelationshipTree
 */
export declare const PermissionRelationshipTree: PermissionRelationshipTree$Type;
declare class AlgebraicSubjectSet$Type extends MessageType<AlgebraicSubjectSet> {
    constructor();
    create(value?: PartialMessage<AlgebraicSubjectSet>): AlgebraicSubjectSet;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AlgebraicSubjectSet): AlgebraicSubjectSet;
    internalBinaryWrite(message: AlgebraicSubjectSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.AlgebraicSubjectSet
 */
export declare const AlgebraicSubjectSet: AlgebraicSubjectSet$Type;
declare class DirectSubjectSet$Type extends MessageType<DirectSubjectSet> {
    constructor();
    create(value?: PartialMessage<DirectSubjectSet>): DirectSubjectSet;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DirectSubjectSet): DirectSubjectSet;
    internalBinaryWrite(message: DirectSubjectSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DirectSubjectSet
 */
export declare const DirectSubjectSet: DirectSubjectSet$Type;
export {};
