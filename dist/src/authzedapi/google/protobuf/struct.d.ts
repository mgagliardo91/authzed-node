import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import type { JsonValue } from "@protobuf-ts/runtime";
import type { JsonReadOptions } from "@protobuf-ts/runtime";
import type { JsonWriteOptions } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 *
 * @generated from protobuf message google.protobuf.Struct
 */
export interface Struct {
    /**
     * Unordered map of dynamically typed values.
     *
     * @generated from protobuf field: map<string, google.protobuf.Value> fields = 1;
     */
    fields: {
        [key: string]: Value;
    };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 *
 * @generated from protobuf message google.protobuf.Value
 */
export interface Value {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "nullValue";
        /**
         * Represents a null value.
         *
         * @generated from protobuf field: google.protobuf.NullValue null_value = 1;
         */
        nullValue: NullValue;
    } | {
        oneofKind: "numberValue";
        /**
         * Represents a double value.
         *
         * @generated from protobuf field: double number_value = 2;
         */
        numberValue: number;
    } | {
        oneofKind: "stringValue";
        /**
         * Represents a string value.
         *
         * @generated from protobuf field: string string_value = 3;
         */
        stringValue: string;
    } | {
        oneofKind: "boolValue";
        /**
         * Represents a boolean value.
         *
         * @generated from protobuf field: bool bool_value = 4;
         */
        boolValue: boolean;
    } | {
        oneofKind: "structValue";
        /**
         * Represents a structured value.
         *
         * @generated from protobuf field: google.protobuf.Struct struct_value = 5;
         */
        structValue: Struct;
    } | {
        oneofKind: "listValue";
        /**
         * Represents a repeated `Value`.
         *
         * @generated from protobuf field: google.protobuf.ListValue list_value = 6;
         */
        listValue: ListValue;
    } | {
        oneofKind: undefined;
    };
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 *
 * @generated from protobuf message google.protobuf.ListValue
 */
export interface ListValue {
    /**
     * Repeated field of dynamically typed values.
     *
     * @generated from protobuf field: repeated google.protobuf.Value values = 1;
     */
    values: Value[];
}
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 * @generated from protobuf enum google.protobuf.NullValue
 */
export declare enum NullValue {
    /**
     * Null value.
     *
     * @generated from protobuf enum value: NULL_VALUE = 0;
     */
    NULL_VALUE = 0
}
declare class Struct$Type extends MessageType<Struct> {
    constructor();
    /**
     * Encode `Struct` to JSON object.
     */
    internalJsonWrite(message: Struct, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `Struct` from JSON object.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Struct): Struct;
    create(value?: PartialMessage<Struct>): Struct;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Struct): Struct;
    private binaryReadMap1;
    internalBinaryWrite(message: Struct, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Struct
 */
export declare const Struct: Struct$Type;
declare class Value$Type extends MessageType<Value> {
    constructor();
    /**
     * Encode `Value` to JSON value.
     */
    internalJsonWrite(message: Value, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `Value` from JSON value.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Value): Value;
    create(value?: PartialMessage<Value>): Value;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Value): Value;
    internalBinaryWrite(message: Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Value
 */
export declare const Value: Value$Type;
declare class ListValue$Type extends MessageType<ListValue> {
    constructor();
    /**
     * Encode `ListValue` to JSON array.
     */
    internalJsonWrite(message: ListValue, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `ListValue` from JSON array.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: ListValue): ListValue;
    create(value?: PartialMessage<ListValue>): ListValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListValue): ListValue;
    internalBinaryWrite(message: ListValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message google.protobuf.ListValue
 */
export declare const ListValue: ListValue$Type;
export {};
