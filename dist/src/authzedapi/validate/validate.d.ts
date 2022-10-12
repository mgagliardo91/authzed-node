import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../google/protobuf/timestamp";
import { Duration } from "../google/protobuf/duration";
/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 *
 * @generated from protobuf message validate.FieldRules
 */
export interface FieldRules {
    /**
     * @generated from protobuf field: optional validate.MessageRules message = 17;
     */
    message?: MessageRules;
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "float";
        /**
         * Scalar Field Types
         *
         * @generated from protobuf field: validate.FloatRules float = 1;
         */
        float: FloatRules;
    } | {
        oneofKind: "double";
        /**
         * @generated from protobuf field: validate.DoubleRules double = 2;
         */
        double: DoubleRules;
    } | {
        oneofKind: "int32";
        /**
         * @generated from protobuf field: validate.Int32Rules int32 = 3;
         */
        int32: Int32Rules;
    } | {
        oneofKind: "int64";
        /**
         * @generated from protobuf field: validate.Int64Rules int64 = 4;
         */
        int64: Int64Rules;
    } | {
        oneofKind: "uint32";
        /**
         * @generated from protobuf field: validate.UInt32Rules uint32 = 5;
         */
        uint32: UInt32Rules;
    } | {
        oneofKind: "uint64";
        /**
         * @generated from protobuf field: validate.UInt64Rules uint64 = 6;
         */
        uint64: UInt64Rules;
    } | {
        oneofKind: "sint32";
        /**
         * @generated from protobuf field: validate.SInt32Rules sint32 = 7;
         */
        sint32: SInt32Rules;
    } | {
        oneofKind: "sint64";
        /**
         * @generated from protobuf field: validate.SInt64Rules sint64 = 8;
         */
        sint64: SInt64Rules;
    } | {
        oneofKind: "fixed32";
        /**
         * @generated from protobuf field: validate.Fixed32Rules fixed32 = 9;
         */
        fixed32: Fixed32Rules;
    } | {
        oneofKind: "fixed64";
        /**
         * @generated from protobuf field: validate.Fixed64Rules fixed64 = 10;
         */
        fixed64: Fixed64Rules;
    } | {
        oneofKind: "sfixed32";
        /**
         * @generated from protobuf field: validate.SFixed32Rules sfixed32 = 11;
         */
        sfixed32: SFixed32Rules;
    } | {
        oneofKind: "sfixed64";
        /**
         * @generated from protobuf field: validate.SFixed64Rules sfixed64 = 12;
         */
        sfixed64: SFixed64Rules;
    } | {
        oneofKind: "bool";
        /**
         * @generated from protobuf field: validate.BoolRules bool = 13;
         */
        bool: BoolRules;
    } | {
        oneofKind: "string";
        /**
         * @generated from protobuf field: validate.StringRules string = 14;
         */
        string: StringRules;
    } | {
        oneofKind: "bytes";
        /**
         * @generated from protobuf field: validate.BytesRules bytes = 15;
         */
        bytes: BytesRules;
    } | {
        oneofKind: "enum";
        /**
         * Complex Field Types
         *
         * @generated from protobuf field: validate.EnumRules enum = 16;
         */
        enum: EnumRules;
    } | {
        oneofKind: "repeated";
        /**
         * @generated from protobuf field: validate.RepeatedRules repeated = 18;
         */
        repeated: RepeatedRules;
    } | {
        oneofKind: "map";
        /**
         * @generated from protobuf field: validate.MapRules map = 19;
         */
        map: MapRules;
    } | {
        oneofKind: "any";
        /**
         * Well-Known Field Types
         *
         * @generated from protobuf field: validate.AnyRules any = 20;
         */
        any: AnyRules;
    } | {
        oneofKind: "duration";
        /**
         * @generated from protobuf field: validate.DurationRules duration = 21;
         */
        duration: DurationRules;
    } | {
        oneofKind: "timestamp";
        /**
         * @generated from protobuf field: validate.TimestampRules timestamp = 22;
         */
        timestamp: TimestampRules;
    } | {
        oneofKind: undefined;
    };
}
/**
 * FloatRules describes the constraints applied to `float` values
 *
 * @generated from protobuf message validate.FloatRules
 */
export interface FloatRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional float const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional float lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional float lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional float gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional float gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated float in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated float not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * DoubleRules describes the constraints applied to `double` values
 *
 * @generated from protobuf message validate.DoubleRules
 */
export interface DoubleRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional double const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional double lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional double lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional double gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional double gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated double in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated double not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * Int32Rules describes the constraints applied to `int32` values
 *
 * @generated from protobuf message validate.Int32Rules
 */
export interface Int32Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional int32 const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional int32 lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional int32 lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional int32 gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional int32 gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int32 in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int32 not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * Int64Rules describes the constraints applied to `int64` values
 *
 * @generated from protobuf message validate.Int64Rules
 */
export interface Int64Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional int64 const = 1;
     */
    const?: string;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional int64 lt = 2;
     */
    lt?: string;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional int64 lte = 3;
     */
    lte?: string;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional int64 gt = 4;
     */
    gt?: string;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional int64 gte = 5;
     */
    gte?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int64 in = 6;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int64 not_in = 7;
     */
    notIn: string[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * UInt32Rules describes the constraints applied to `uint32` values
 *
 * @generated from protobuf message validate.UInt32Rules
 */
export interface UInt32Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional uint32 const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional uint32 lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional uint32 lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional uint32 gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional uint32 gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated uint32 in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated uint32 not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * UInt64Rules describes the constraints applied to `uint64` values
 *
 * @generated from protobuf message validate.UInt64Rules
 */
export interface UInt64Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional uint64 const = 1;
     */
    const?: string;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional uint64 lt = 2;
     */
    lt?: string;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional uint64 lte = 3;
     */
    lte?: string;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional uint64 gt = 4;
     */
    gt?: string;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional uint64 gte = 5;
     */
    gte?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated uint64 in = 6;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated uint64 not_in = 7;
     */
    notIn: string[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * SInt32Rules describes the constraints applied to `sint32` values
 *
 * @generated from protobuf message validate.SInt32Rules
 */
export interface SInt32Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional sint32 const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional sint32 lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional sint32 lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional sint32 gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional sint32 gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sint32 in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sint32 not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * SInt64Rules describes the constraints applied to `sint64` values
 *
 * @generated from protobuf message validate.SInt64Rules
 */
export interface SInt64Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional sint64 const = 1;
     */
    const?: string;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional sint64 lt = 2;
     */
    lt?: string;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional sint64 lte = 3;
     */
    lte?: string;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional sint64 gt = 4;
     */
    gt?: string;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional sint64 gte = 5;
     */
    gte?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sint64 in = 6;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sint64 not_in = 7;
     */
    notIn: string[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * Fixed32Rules describes the constraints applied to `fixed32` values
 *
 * @generated from protobuf message validate.Fixed32Rules
 */
export interface Fixed32Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional fixed32 const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional fixed32 lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional fixed32 lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional fixed32 gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional fixed32 gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated fixed32 in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated fixed32 not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * Fixed64Rules describes the constraints applied to `fixed64` values
 *
 * @generated from protobuf message validate.Fixed64Rules
 */
export interface Fixed64Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional fixed64 const = 1;
     */
    const?: string;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional fixed64 lt = 2;
     */
    lt?: string;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional fixed64 lte = 3;
     */
    lte?: string;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional fixed64 gt = 4;
     */
    gt?: string;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional fixed64 gte = 5;
     */
    gte?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated fixed64 in = 6;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated fixed64 not_in = 7;
     */
    notIn: string[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * SFixed32Rules describes the constraints applied to `sfixed32` values
 *
 * @generated from protobuf message validate.SFixed32Rules
 */
export interface SFixed32Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional sfixed32 const = 1;
     */
    const?: number;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional sfixed32 lt = 2;
     */
    lt?: number;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional sfixed32 lte = 3;
     */
    lte?: number;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional sfixed32 gt = 4;
     */
    gt?: number;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional sfixed32 gte = 5;
     */
    gte?: number;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sfixed32 in = 6;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sfixed32 not_in = 7;
     */
    notIn: number[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * SFixed64Rules describes the constraints applied to `sfixed64` values
 *
 * @generated from protobuf message validate.SFixed64Rules
 */
export interface SFixed64Rules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional sfixed64 const = 1;
     */
    const?: string;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional sfixed64 lt = 2;
     */
    lt?: string;
    /**
     * Lte specifies that this field must be less than or equal to the
     * specified value, inclusive
     *
     * @generated from protobuf field: optional sfixed64 lte = 3;
     */
    lte?: string;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     * range is reversed.
     *
     * @generated from protobuf field: optional sfixed64 gt = 4;
     */
    gt?: string;
    /**
     * Gte specifies that this field must be greater than or equal to the
     * specified value, inclusive. If the value of Gte is larger than a
     * specified Lt or Lte, the range is reversed.
     *
     * @generated from protobuf field: optional sfixed64 gte = 5;
     */
    gte?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sfixed64 in = 6;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated sfixed64 not_in = 7;
     */
    notIn: string[];
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 8;
     */
    ignoreEmpty?: boolean;
}
/**
 * BoolRules describes the constraints applied to `bool` values
 *
 * @generated from protobuf message validate.BoolRules
 */
export interface BoolRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional bool const = 1;
     */
    const?: boolean;
}
/**
 * StringRules describe the constraints applied to `string` values
 *
 * @generated from protobuf message validate.StringRules
 */
export interface StringRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional string const = 1;
     */
    const?: string;
    /**
     * Len specifies that this field must be the specified number of
     * characters (Unicode code points). Note that the number of
     * characters may differ from the number of bytes in the string.
     *
     * @generated from protobuf field: optional uint64 len = 19;
     */
    len?: string;
    /**
     * MinLen specifies that this field must be the specified number of
     * characters (Unicode code points) at a minimum. Note that the number of
     * characters may differ from the number of bytes in the string.
     *
     * @generated from protobuf field: optional uint64 min_len = 2;
     */
    minLen?: string;
    /**
     * MaxLen specifies that this field must be the specified number of
     * characters (Unicode code points) at a maximum. Note that the number of
     * characters may differ from the number of bytes in the string.
     *
     * @generated from protobuf field: optional uint64 max_len = 3;
     */
    maxLen?: string;
    /**
     * LenBytes specifies that this field must be the specified number of bytes
     * at a minimum
     *
     * @generated from protobuf field: optional uint64 len_bytes = 20;
     */
    lenBytes?: string;
    /**
     * MinBytes specifies that this field must be the specified number of bytes
     * at a minimum
     *
     * @generated from protobuf field: optional uint64 min_bytes = 4;
     */
    minBytes?: string;
    /**
     * MaxBytes specifies that this field must be the specified number of bytes
     * at a maximum
     *
     * @generated from protobuf field: optional uint64 max_bytes = 5;
     */
    maxBytes?: string;
    /**
     * Pattern specifes that this field must match against the specified
     * regular expression (RE2 syntax). The included expression should elide
     * any delimiters.
     *
     * @generated from protobuf field: optional string pattern = 6;
     */
    pattern?: string;
    /**
     * Prefix specifies that this field must have the specified substring at
     * the beginning of the string.
     *
     * @generated from protobuf field: optional string prefix = 7;
     */
    prefix?: string;
    /**
     * Suffix specifies that this field must have the specified substring at
     * the end of the string.
     *
     * @generated from protobuf field: optional string suffix = 8;
     */
    suffix?: string;
    /**
     * Contains specifies that this field must have the specified substring
     * anywhere in the string.
     *
     * @generated from protobuf field: optional string contains = 9;
     */
    contains?: string;
    /**
     * NotContains specifies that this field cannot have the specified substring
     * anywhere in the string.
     *
     * @generated from protobuf field: optional string not_contains = 23;
     */
    notContains?: string;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated string in = 10;
     */
    in: string[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated string not_in = 11;
     */
    notIn: string[];
    /**
     * @generated from protobuf oneof: well_known
     */
    wellKnown: {
        oneofKind: "email";
        /**
         * Email specifies that the field must be a valid email address as
         * defined by RFC 5322
         *
         * @generated from protobuf field: bool email = 12;
         */
        email: boolean;
    } | {
        oneofKind: "hostname";
        /**
         * Hostname specifies that the field must be a valid hostname as
         * defined by RFC 1034. This constraint does not support
         * internationalized domain names (IDNs).
         *
         * @generated from protobuf field: bool hostname = 13;
         */
        hostname: boolean;
    } | {
        oneofKind: "ip";
        /**
         * Ip specifies that the field must be a valid IP (v4 or v6) address.
         * Valid IPv6 addresses should not include surrounding square brackets.
         *
         * @generated from protobuf field: bool ip = 14;
         */
        ip: boolean;
    } | {
        oneofKind: "ipv4";
        /**
         * Ipv4 specifies that the field must be a valid IPv4 address.
         *
         * @generated from protobuf field: bool ipv4 = 15;
         */
        ipv4: boolean;
    } | {
        oneofKind: "ipv6";
        /**
         * Ipv6 specifies that the field must be a valid IPv6 address. Valid
         * IPv6 addresses should not include surrounding square brackets.
         *
         * @generated from protobuf field: bool ipv6 = 16;
         */
        ipv6: boolean;
    } | {
        oneofKind: "uri";
        /**
         * Uri specifies that the field must be a valid, absolute URI as defined
         * by RFC 3986
         *
         * @generated from protobuf field: bool uri = 17;
         */
        uri: boolean;
    } | {
        oneofKind: "uriRef";
        /**
         * UriRef specifies that the field must be a valid URI as defined by RFC
         * 3986 and may be relative or absolute.
         *
         * @generated from protobuf field: bool uri_ref = 18;
         */
        uriRef: boolean;
    } | {
        oneofKind: "address";
        /**
         * Address specifies that the field must be either a valid hostname as
         * defined by RFC 1034 (which does not support internationalized domain
         * names or IDNs), or it can be a valid IP (v4 or v6).
         *
         * @generated from protobuf field: bool address = 21;
         */
        address: boolean;
    } | {
        oneofKind: "uuid";
        /**
         * Uuid specifies that the field must be a valid UUID as defined by
         * RFC 4122
         *
         * @generated from protobuf field: bool uuid = 22;
         */
        uuid: boolean;
    } | {
        oneofKind: "wellKnownRegex";
        /**
         * WellKnownRegex specifies a common well known pattern defined as a regex.
         *
         * @generated from protobuf field: validate.KnownRegex well_known_regex = 24;
         */
        wellKnownRegex: KnownRegex;
    } | {
        oneofKind: undefined;
    };
    /**
     * This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
     * strict header validation.
     * By default, this is true, and HTTP header validations are RFC-compliant.
     * Setting to false will enable a looser validations that only disallows
     * \r\n\0 characters, which can be used to bypass header matching rules.
     *
     * @generated from protobuf field: optional bool strict = 25;
     */
    strict?: boolean;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 26;
     */
    ignoreEmpty?: boolean;
}
/**
 * BytesRules describe the constraints applied to `bytes` values
 *
 * @generated from protobuf message validate.BytesRules
 */
export interface BytesRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional bytes const = 1;
     */
    const?: Uint8Array;
    /**
     * Len specifies that this field must be the specified number of bytes
     *
     * @generated from protobuf field: optional uint64 len = 13;
     */
    len?: string;
    /**
     * MinLen specifies that this field must be the specified number of bytes
     * at a minimum
     *
     * @generated from protobuf field: optional uint64 min_len = 2;
     */
    minLen?: string;
    /**
     * MaxLen specifies that this field must be the specified number of bytes
     * at a maximum
     *
     * @generated from protobuf field: optional uint64 max_len = 3;
     */
    maxLen?: string;
    /**
     * Pattern specifes that this field must match against the specified
     * regular expression (RE2 syntax). The included expression should elide
     * any delimiters.
     *
     * @generated from protobuf field: optional string pattern = 4;
     */
    pattern?: string;
    /**
     * Prefix specifies that this field must have the specified bytes at the
     * beginning of the string.
     *
     * @generated from protobuf field: optional bytes prefix = 5;
     */
    prefix?: Uint8Array;
    /**
     * Suffix specifies that this field must have the specified bytes at the
     * end of the string.
     *
     * @generated from protobuf field: optional bytes suffix = 6;
     */
    suffix?: Uint8Array;
    /**
     * Contains specifies that this field must have the specified bytes
     * anywhere in the string.
     *
     * @generated from protobuf field: optional bytes contains = 7;
     */
    contains?: Uint8Array;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated bytes in = 8;
     */
    in: Uint8Array[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated bytes not_in = 9;
     */
    notIn: Uint8Array[];
    /**
     * @generated from protobuf oneof: well_known
     */
    wellKnown: {
        oneofKind: "ip";
        /**
         * Ip specifies that the field must be a valid IP (v4 or v6) address in
         * byte format
         *
         * @generated from protobuf field: bool ip = 10;
         */
        ip: boolean;
    } | {
        oneofKind: "ipv4";
        /**
         * Ipv4 specifies that the field must be a valid IPv4 address in byte
         * format
         *
         * @generated from protobuf field: bool ipv4 = 11;
         */
        ipv4: boolean;
    } | {
        oneofKind: "ipv6";
        /**
         * Ipv6 specifies that the field must be a valid IPv6 address in byte
         * format
         *
         * @generated from protobuf field: bool ipv6 = 12;
         */
        ipv6: boolean;
    } | {
        oneofKind: undefined;
    };
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 14;
     */
    ignoreEmpty?: boolean;
}
/**
 * EnumRules describe the constraints applied to enum values
 *
 * @generated from protobuf message validate.EnumRules
 */
export interface EnumRules {
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional int32 const = 1;
     */
    const?: number;
    /**
     * DefinedOnly specifies that this field must be only one of the defined
     * values for this enum, failing on any undefined value.
     *
     * @generated from protobuf field: optional bool defined_only = 2;
     */
    definedOnly?: boolean;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int32 in = 3;
     */
    in: number[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated int32 not_in = 4;
     */
    notIn: number[];
}
/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 *
 * @generated from protobuf message validate.MessageRules
 */
export interface MessageRules {
    /**
     * Skip specifies that the validation rules of this field should not be
     * evaluated
     *
     * @generated from protobuf field: optional bool skip = 1;
     */
    skip?: boolean;
    /**
     * Required specifies that this field must be set
     *
     * @generated from protobuf field: optional bool required = 2;
     */
    required?: boolean;
}
/**
 * RepeatedRules describe the constraints applied to `repeated` values
 *
 * @generated from protobuf message validate.RepeatedRules
 */
export interface RepeatedRules {
    /**
     * MinItems specifies that this field must have the specified number of
     * items at a minimum
     *
     * @generated from protobuf field: optional uint64 min_items = 1;
     */
    minItems?: string;
    /**
     * MaxItems specifies that this field must have the specified number of
     * items at a maximum
     *
     * @generated from protobuf field: optional uint64 max_items = 2;
     */
    maxItems?: string;
    /**
     * Unique specifies that all elements in this field must be unique. This
     * contraint is only applicable to scalar and enum types (messages are not
     * supported).
     *
     * @generated from protobuf field: optional bool unique = 3;
     */
    unique?: boolean;
    /**
     * Items specifies the contraints to be applied to each item in the field.
     * Repeated message fields will still execute validation against each item
     * unless skip is specified here.
     *
     * @generated from protobuf field: optional validate.FieldRules items = 4;
     */
    items?: FieldRules;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 5;
     */
    ignoreEmpty?: boolean;
}
/**
 * MapRules describe the constraints applied to `map` values
 *
 * @generated from protobuf message validate.MapRules
 */
export interface MapRules {
    /**
     * MinPairs specifies that this field must have the specified number of
     * KVs at a minimum
     *
     * @generated from protobuf field: optional uint64 min_pairs = 1;
     */
    minPairs?: string;
    /**
     * MaxPairs specifies that this field must have the specified number of
     * KVs at a maximum
     *
     * @generated from protobuf field: optional uint64 max_pairs = 2;
     */
    maxPairs?: string;
    /**
     * NoSparse specifies values in this field cannot be unset. This only
     * applies to map's with message value types.
     *
     * @generated from protobuf field: optional bool no_sparse = 3;
     */
    noSparse?: boolean;
    /**
     * Keys specifies the constraints to be applied to each key in the field.
     *
     * @generated from protobuf field: optional validate.FieldRules keys = 4;
     */
    keys?: FieldRules;
    /**
     * Values specifies the constraints to be applied to the value of each key
     * in the field. Message values will still have their validations evaluated
     * unless skip is specified here.
     *
     * @generated from protobuf field: optional validate.FieldRules values = 5;
     */
    values?: FieldRules;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     * evaluated only if the field is not empty
     *
     * @generated from protobuf field: optional bool ignore_empty = 6;
     */
    ignoreEmpty?: boolean;
}
/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 *
 * @generated from protobuf message validate.AnyRules
 */
export interface AnyRules {
    /**
     * Required specifies that this field must be set
     *
     * @generated from protobuf field: optional bool required = 1;
     */
    required?: boolean;
    /**
     * In specifies that this field's `type_url` must be equal to one of the
     * specified values.
     *
     * @generated from protobuf field: repeated string in = 2;
     */
    in: string[];
    /**
     * NotIn specifies that this field's `type_url` must not be equal to any of
     * the specified values.
     *
     * @generated from protobuf field: repeated string not_in = 3;
     */
    notIn: string[];
}
/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 *
 * @generated from protobuf message validate.DurationRules
 */
export interface DurationRules {
    /**
     * Required specifies that this field must be set
     *
     * @generated from protobuf field: optional bool required = 1;
     */
    required?: boolean;
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional google.protobuf.Duration const = 2;
     */
    const?: Duration;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional google.protobuf.Duration lt = 3;
     */
    lt?: Duration;
    /**
     * Lt specifies that this field must be less than the specified value,
     * inclusive
     *
     * @generated from protobuf field: optional google.protobuf.Duration lte = 4;
     */
    lte?: Duration;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional google.protobuf.Duration gt = 5;
     */
    gt?: Duration;
    /**
     * Gte specifies that this field must be greater than the specified value,
     * inclusive
     *
     * @generated from protobuf field: optional google.protobuf.Duration gte = 6;
     */
    gte?: Duration;
    /**
     * In specifies that this field must be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated google.protobuf.Duration in = 7;
     */
    in: Duration[];
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     * values
     *
     * @generated from protobuf field: repeated google.protobuf.Duration not_in = 8;
     */
    notIn: Duration[];
}
/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 *
 * @generated from protobuf message validate.TimestampRules
 */
export interface TimestampRules {
    /**
     * Required specifies that this field must be set
     *
     * @generated from protobuf field: optional bool required = 1;
     */
    required?: boolean;
    /**
     * Const specifies that this field must be exactly the specified value
     *
     * @generated from protobuf field: optional google.protobuf.Timestamp const = 2;
     */
    const?: Timestamp;
    /**
     * Lt specifies that this field must be less than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional google.protobuf.Timestamp lt = 3;
     */
    lt?: Timestamp;
    /**
     * Lte specifies that this field must be less than the specified value,
     * inclusive
     *
     * @generated from protobuf field: optional google.protobuf.Timestamp lte = 4;
     */
    lte?: Timestamp;
    /**
     * Gt specifies that this field must be greater than the specified value,
     * exclusive
     *
     * @generated from protobuf field: optional google.protobuf.Timestamp gt = 5;
     */
    gt?: Timestamp;
    /**
     * Gte specifies that this field must be greater than the specified value,
     * inclusive
     *
     * @generated from protobuf field: optional google.protobuf.Timestamp gte = 6;
     */
    gte?: Timestamp;
    /**
     * LtNow specifies that this must be less than the current time. LtNow
     * can only be used with the Within rule.
     *
     * @generated from protobuf field: optional bool lt_now = 7;
     */
    ltNow?: boolean;
    /**
     * GtNow specifies that this must be greater than the current time. GtNow
     * can only be used with the Within rule.
     *
     * @generated from protobuf field: optional bool gt_now = 8;
     */
    gtNow?: boolean;
    /**
     * Within specifies that this field must be within this duration of the
     * current time. This constraint can be used alone or with the LtNow and
     * GtNow rules.
     *
     * @generated from protobuf field: optional google.protobuf.Duration within = 9;
     */
    within?: Duration;
}
/**
 * WellKnownRegex contain some well-known patterns.
 *
 * @generated from protobuf enum validate.KnownRegex
 */
export declare enum KnownRegex {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * HTTP header name as defined by RFC 7230.
     *
     * @generated from protobuf enum value: HTTP_HEADER_NAME = 1;
     */
    HTTP_HEADER_NAME = 1,
    /**
     * HTTP header value as defined by RFC 7230.
     *
     * @generated from protobuf enum value: HTTP_HEADER_VALUE = 2;
     */
    HTTP_HEADER_VALUE = 2
}
declare class FieldRules$Type extends MessageType<FieldRules> {
    constructor();
    create(value?: PartialMessage<FieldRules>): FieldRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldRules): FieldRules;
    internalBinaryWrite(message: FieldRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.FieldRules
 */
export declare const FieldRules: FieldRules$Type;
declare class FloatRules$Type extends MessageType<FloatRules> {
    constructor();
    create(value?: PartialMessage<FloatRules>): FloatRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FloatRules): FloatRules;
    internalBinaryWrite(message: FloatRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.FloatRules
 */
export declare const FloatRules: FloatRules$Type;
declare class DoubleRules$Type extends MessageType<DoubleRules> {
    constructor();
    create(value?: PartialMessage<DoubleRules>): DoubleRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DoubleRules): DoubleRules;
    internalBinaryWrite(message: DoubleRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.DoubleRules
 */
export declare const DoubleRules: DoubleRules$Type;
declare class Int32Rules$Type extends MessageType<Int32Rules> {
    constructor();
    create(value?: PartialMessage<Int32Rules>): Int32Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Int32Rules): Int32Rules;
    internalBinaryWrite(message: Int32Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.Int32Rules
 */
export declare const Int32Rules: Int32Rules$Type;
declare class Int64Rules$Type extends MessageType<Int64Rules> {
    constructor();
    create(value?: PartialMessage<Int64Rules>): Int64Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Int64Rules): Int64Rules;
    internalBinaryWrite(message: Int64Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.Int64Rules
 */
export declare const Int64Rules: Int64Rules$Type;
declare class UInt32Rules$Type extends MessageType<UInt32Rules> {
    constructor();
    create(value?: PartialMessage<UInt32Rules>): UInt32Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UInt32Rules): UInt32Rules;
    internalBinaryWrite(message: UInt32Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.UInt32Rules
 */
export declare const UInt32Rules: UInt32Rules$Type;
declare class UInt64Rules$Type extends MessageType<UInt64Rules> {
    constructor();
    create(value?: PartialMessage<UInt64Rules>): UInt64Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UInt64Rules): UInt64Rules;
    internalBinaryWrite(message: UInt64Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.UInt64Rules
 */
export declare const UInt64Rules: UInt64Rules$Type;
declare class SInt32Rules$Type extends MessageType<SInt32Rules> {
    constructor();
    create(value?: PartialMessage<SInt32Rules>): SInt32Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SInt32Rules): SInt32Rules;
    internalBinaryWrite(message: SInt32Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.SInt32Rules
 */
export declare const SInt32Rules: SInt32Rules$Type;
declare class SInt64Rules$Type extends MessageType<SInt64Rules> {
    constructor();
    create(value?: PartialMessage<SInt64Rules>): SInt64Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SInt64Rules): SInt64Rules;
    internalBinaryWrite(message: SInt64Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.SInt64Rules
 */
export declare const SInt64Rules: SInt64Rules$Type;
declare class Fixed32Rules$Type extends MessageType<Fixed32Rules> {
    constructor();
    create(value?: PartialMessage<Fixed32Rules>): Fixed32Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fixed32Rules): Fixed32Rules;
    internalBinaryWrite(message: Fixed32Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.Fixed32Rules
 */
export declare const Fixed32Rules: Fixed32Rules$Type;
declare class Fixed64Rules$Type extends MessageType<Fixed64Rules> {
    constructor();
    create(value?: PartialMessage<Fixed64Rules>): Fixed64Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fixed64Rules): Fixed64Rules;
    internalBinaryWrite(message: Fixed64Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.Fixed64Rules
 */
export declare const Fixed64Rules: Fixed64Rules$Type;
declare class SFixed32Rules$Type extends MessageType<SFixed32Rules> {
    constructor();
    create(value?: PartialMessage<SFixed32Rules>): SFixed32Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SFixed32Rules): SFixed32Rules;
    internalBinaryWrite(message: SFixed32Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.SFixed32Rules
 */
export declare const SFixed32Rules: SFixed32Rules$Type;
declare class SFixed64Rules$Type extends MessageType<SFixed64Rules> {
    constructor();
    create(value?: PartialMessage<SFixed64Rules>): SFixed64Rules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SFixed64Rules): SFixed64Rules;
    internalBinaryWrite(message: SFixed64Rules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.SFixed64Rules
 */
export declare const SFixed64Rules: SFixed64Rules$Type;
declare class BoolRules$Type extends MessageType<BoolRules> {
    constructor();
    create(value?: PartialMessage<BoolRules>): BoolRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BoolRules): BoolRules;
    internalBinaryWrite(message: BoolRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.BoolRules
 */
export declare const BoolRules: BoolRules$Type;
declare class StringRules$Type extends MessageType<StringRules> {
    constructor();
    create(value?: PartialMessage<StringRules>): StringRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StringRules): StringRules;
    internalBinaryWrite(message: StringRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.StringRules
 */
export declare const StringRules: StringRules$Type;
declare class BytesRules$Type extends MessageType<BytesRules> {
    constructor();
    create(value?: PartialMessage<BytesRules>): BytesRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BytesRules): BytesRules;
    internalBinaryWrite(message: BytesRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.BytesRules
 */
export declare const BytesRules: BytesRules$Type;
declare class EnumRules$Type extends MessageType<EnumRules> {
    constructor();
    create(value?: PartialMessage<EnumRules>): EnumRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnumRules): EnumRules;
    internalBinaryWrite(message: EnumRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.EnumRules
 */
export declare const EnumRules: EnumRules$Type;
declare class MessageRules$Type extends MessageType<MessageRules> {
    constructor();
    create(value?: PartialMessage<MessageRules>): MessageRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MessageRules): MessageRules;
    internalBinaryWrite(message: MessageRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.MessageRules
 */
export declare const MessageRules: MessageRules$Type;
declare class RepeatedRules$Type extends MessageType<RepeatedRules> {
    constructor();
    create(value?: PartialMessage<RepeatedRules>): RepeatedRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RepeatedRules): RepeatedRules;
    internalBinaryWrite(message: RepeatedRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.RepeatedRules
 */
export declare const RepeatedRules: RepeatedRules$Type;
declare class MapRules$Type extends MessageType<MapRules> {
    constructor();
    create(value?: PartialMessage<MapRules>): MapRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MapRules): MapRules;
    internalBinaryWrite(message: MapRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.MapRules
 */
export declare const MapRules: MapRules$Type;
declare class AnyRules$Type extends MessageType<AnyRules> {
    constructor();
    create(value?: PartialMessage<AnyRules>): AnyRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AnyRules): AnyRules;
    internalBinaryWrite(message: AnyRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.AnyRules
 */
export declare const AnyRules: AnyRules$Type;
declare class DurationRules$Type extends MessageType<DurationRules> {
    constructor();
    create(value?: PartialMessage<DurationRules>): DurationRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DurationRules): DurationRules;
    internalBinaryWrite(message: DurationRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.DurationRules
 */
export declare const DurationRules: DurationRules$Type;
declare class TimestampRules$Type extends MessageType<TimestampRules> {
    constructor();
    create(value?: PartialMessage<TimestampRules>): TimestampRules;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TimestampRules): TimestampRules;
    internalBinaryWrite(message: TimestampRules, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message validate.TimestampRules
 */
export declare const TimestampRules: TimestampRules$Type;
export {};
