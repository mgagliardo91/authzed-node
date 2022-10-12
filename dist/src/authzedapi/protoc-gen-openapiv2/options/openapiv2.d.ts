import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Value } from "../../google/protobuf/struct";
/**
 * `Swagger` is a representation of OpenAPI v2 specification's Swagger object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#swaggerObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: ";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    schemes: HTTPS;
 *    consumes: "application/json";
 *    produces: "application/json";
 *  };
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Swagger
 */
export interface Swagger {
    /**
     * Specifies the OpenAPI Specification version being used. It can be
     * used by the OpenAPI UI and other clients to interpret the API listing. The
     * value MUST be "2.0".
     *
     * @generated from protobuf field: string swagger = 1;
     */
    swagger: string;
    /**
     * Provides metadata about the API. The metadata can be used by the
     * clients if needed.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.Info info = 2;
     */
    info?: Info;
    /**
     * The host (name or ip) serving the API. This MUST be the host only and does
     * not include the scheme nor sub-paths. It MAY include a port. If the host is
     * not included, the host serving the documentation is to be used (including
     * the port). The host does not support path templating.
     *
     * @generated from protobuf field: string host = 3;
     */
    host: string;
    /**
     * The base path on which the API is served, which is relative to the host. If
     * it is not included, the API is served directly under the host. The value
     * MUST start with a leading slash (/). The basePath does not support path
     * templating.
     * Note that using `base_path` does not change the endpoint paths that are
     * generated in the resulting OpenAPI file. If you wish to use `base_path`
     * with relatively generated OpenAPI paths, the `base_path` prefix must be
     * manually removed from your `google.api.http` paths and your code changed to
     * serve the API from the `base_path`.
     *
     * @generated from protobuf field: string base_path = 4;
     */
    basePath: string;
    /**
     * The transfer protocol of the API. Values MUST be from the list: "http",
     * "https", "ws", "wss". If the schemes is not included, the default scheme to
     * be used is the one used to access the OpenAPI definition itself.
     *
     * @generated from protobuf field: repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 5;
     */
    schemes: Scheme[];
    /**
     * A list of MIME types the APIs can consume. This is global to all APIs but
     * can be overridden on specific API calls. Value MUST be as described under
     * Mime Types.
     *
     * @generated from protobuf field: repeated string consumes = 6;
     */
    consumes: string[];
    /**
     * A list of MIME types the APIs can produce. This is global to all APIs but
     * can be overridden on specific API calls. Value MUST be as described under
     * Mime Types.
     *
     * @generated from protobuf field: repeated string produces = 7;
     */
    produces: string[];
    /**
     * An object to hold responses that can be used across operations. This
     * property does not define global responses for all operations.
     *
     * @generated from protobuf field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 10;
     */
    responses: {
        [key: string]: Response;
    };
    /**
     * Security scheme definitions that can be used across the specification.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions security_definitions = 11;
     */
    securityDefinitions?: SecurityDefinitions;
    /**
     * A declaration of which security schemes are applied for the API as a whole.
     * The list of values describes alternative security schemes that can be used
     * (that is, there is a logical OR between the security requirements).
     * Individual operations can override this definition.
     *
     * @generated from protobuf field: repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12;
     */
    security: SecurityRequirement[];
    /**
     * Additional external documentation.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 14;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> extensions = 15;
     */
    extensions: {
        [key: string]: Value;
    };
}
/**
 * `Operation` is a representation of OpenAPI v2 specification's Operation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#operationObject
 *
 * Example:
 *
 *  service EchoService {
 *    rpc Echo(SimpleMessage) returns (SimpleMessage) {
 *      option (google.api.http) = {
 *        get: "/v1/example/echo/{id}"
 *      };
 *
 *      option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation) = {
 *        summary: "Get a message.";
 *        operation_id: "getMessage";
 *        tags: "echo";
 *        responses: {
 *          key: "200"
 *            value: {
 *            description: "OK";
 *          }
 *        }
 *      };
 *    }
 *  }
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Operation
 */
export interface Operation {
    /**
     * A list of tags for API documentation control. Tags can be used for logical
     * grouping of operations by resources or any other qualifier.
     *
     * @generated from protobuf field: repeated string tags = 1;
     */
    tags: string[];
    /**
     * A short summary of what the operation does. For maximum readability in the
     * swagger-ui, this field SHOULD be less than 120 characters.
     *
     * @generated from protobuf field: string summary = 2;
     */
    summary: string;
    /**
     * A verbose explanation of the operation behavior. GFM syntax can be used for
     * rich text representation.
     *
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * Additional external documentation for this operation.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 4;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * Unique string used to identify the operation. The id MUST be unique among
     * all operations described in the API. Tools and libraries MAY use the
     * operationId to uniquely identify an operation, therefore, it is recommended
     * to follow common programming naming conventions.
     *
     * @generated from protobuf field: string operation_id = 5;
     */
    operationId: string;
    /**
     * A list of MIME types the operation can consume. This overrides the consumes
     * definition at the OpenAPI Object. An empty value MAY be used to clear the
     * global definition. Value MUST be as described under Mime Types.
     *
     * @generated from protobuf field: repeated string consumes = 6;
     */
    consumes: string[];
    /**
     * A list of MIME types the operation can produce. This overrides the produces
     * definition at the OpenAPI Object. An empty value MAY be used to clear the
     * global definition. Value MUST be as described under Mime Types.
     *
     * @generated from protobuf field: repeated string produces = 7;
     */
    produces: string[];
    /**
     * The list of possible responses as they are returned from executing this
     * operation.
     *
     * @generated from protobuf field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Response> responses = 9;
     */
    responses: {
        [key: string]: Response;
    };
    /**
     * The transfer protocol for the operation. Values MUST be from the list:
     * "http", "https", "ws", "wss". The value overrides the OpenAPI Object
     * schemes definition.
     *
     * @generated from protobuf field: repeated grpc.gateway.protoc_gen_openapiv2.options.Scheme schemes = 10;
     */
    schemes: Scheme[];
    /**
     * Declares this operation to be deprecated. Usage of the declared operation
     * should be refrained. Default value is false.
     *
     * @generated from protobuf field: bool deprecated = 11;
     */
    deprecated: boolean;
    /**
     * A declaration of which security schemes are applied for this operation. The
     * list of values describes alternative security schemes that can be used
     * (that is, there is a logical OR between the security requirements). This
     * definition overrides any declared top-level security. To remove a top-level
     * security declaration, an empty array can be used.
     *
     * @generated from protobuf field: repeated grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement security = 12;
     */
    security: SecurityRequirement[];
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> extensions = 13;
     */
    extensions: {
        [key: string]: Value;
    };
}
/**
 * `Header` is a representation of OpenAPI v2 specification's Header object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#headerObject
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Header
 */
export interface Header {
    /**
     * `Description` is a short description of the header.
     *
     * @generated from protobuf field: string description = 1;
     */
    description: string;
    /**
     * The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported.
     *
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * `Format` The extending format for the previously mentioned type.
     *
     * @generated from protobuf field: string format = 3;
     */
    format: string;
    /**
     * `Default` Declares the value of the header that the server will use if none is provided.
     * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
     * Unlike JSON Schema this value MUST conform to the defined type for the header.
     *
     * @generated from protobuf field: string default = 6;
     */
    default: string;
    /**
     * 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3.
     *
     * @generated from protobuf field: string pattern = 13;
     */
    pattern: string;
}
/**
 * `Response` is a representation of OpenAPI v2 specification's Response object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#responseObject
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Response
 */
export interface Response {
    /**
     * `Description` is a short description of the response.
     * GFM syntax can be used for rich text representation.
     *
     * @generated from protobuf field: string description = 1;
     */
    description: string;
    /**
     * `Schema` optionally defines the structure of the response.
     * If `Schema` is not provided, it means there is no content to the response.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.Schema schema = 2;
     */
    schema?: Schema;
    /**
     * `Headers` A list of headers that are sent with the response.
     * `Header` name is expected to be a string in the canonical format of the MIME header key
     * See: https://golang.org/pkg/net/textproto/#CanonicalMIMEHeaderKey
     *
     * @generated from protobuf field: map<string, grpc.gateway.protoc_gen_openapiv2.options.Header> headers = 3;
     */
    headers: {
        [key: string]: Header;
    };
    /**
     * `Examples` gives per-mimetype response examples.
     * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#example-object
     *
     * @generated from protobuf field: map<string, string> examples = 4;
     */
    examples: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> extensions = 5;
     */
    extensions: {
        [key: string]: Value;
    };
}
/**
 * `Info` is a representation of OpenAPI v2 specification's Info object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#infoObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: ";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    ...
 *  };
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Info
 */
export interface Info {
    /**
     * The title of the application.
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * A short description of the application. GFM syntax can be used for rich
     * text representation.
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * The Terms of Service for the API.
     *
     * @generated from protobuf field: string terms_of_service = 3;
     */
    termsOfService: string;
    /**
     * The contact information for the exposed API.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.Contact contact = 4;
     */
    contact?: Contact;
    /**
     * The license information for the exposed API.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.License license = 5;
     */
    license?: License;
    /**
     * Provides the version of the application API (not to be confused
     * with the specification version).
     *
     * @generated from protobuf field: string version = 6;
     */
    version: string;
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> extensions = 7;
     */
    extensions: {
        [key: string]: Value;
    };
}
/**
 * `Contact` is a representation of OpenAPI v2 specification's Contact object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#contactObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Contact
 */
export interface Contact {
    /**
     * The identifying name of the contact person/organization.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a
     * URL.
     *
     * @generated from protobuf field: string url = 2;
     */
    url: string;
    /**
     * The email address of the contact person/organization. MUST be in the format
     * of an email address.
     *
     * @generated from protobuf field: string email = 3;
     */
    email: string;
}
/**
 * `License` is a representation of OpenAPI v2 specification's License object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#licenseObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.License
 */
export interface License {
    /**
     * The license name used for the API.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     *
     * @generated from protobuf field: string url = 2;
     */
    url: string;
}
/**
 * `ExternalDocumentation` is a representation of OpenAPI v2 specification's
 * ExternalDocumentation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#externalDocumentationObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    ...
 *    external_docs: {
 *      description: "More about gRPC-Gateway";
 *      url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *    }
 *    ...
 *  };
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation
 */
export interface ExternalDocumentation {
    /**
     * A short description of the target documentation. GFM syntax can be used for
     * rich text representation.
     *
     * @generated from protobuf field: string description = 1;
     */
    description: string;
    /**
     * The URL for the target documentation. Value MUST be in the format
     * of a URL.
     *
     * @generated from protobuf field: string url = 2;
     */
    url: string;
}
/**
 * `Schema` is a representation of OpenAPI v2 specification's Schema object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Schema
 */
export interface Schema {
    /**
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.JSONSchema json_schema = 1;
     */
    jsonSchema?: JSONSchema;
    /**
     * Adds support for polymorphism. The discriminator is the schema property
     * name that is used to differentiate between other schema that inherit this
     * schema. The property name used MUST be defined at this schema and it MUST
     * be in the required property list. When used, the value MUST be the name of
     * this schema or any schema that inherits it.
     *
     * @generated from protobuf field: string discriminator = 2;
     */
    discriminator: string;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property as
     * "read only". This means that it MAY be sent as part of a response but MUST
     * NOT be sent as part of the request. Properties marked as readOnly being
     * true SHOULD NOT be in the required list of the defined schema. Default
     * value is false.
     *
     * @generated from protobuf field: bool read_only = 3;
     */
    readOnly: boolean;
    /**
     * Additional external documentation for this schema.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 5;
     */
    externalDocs?: ExternalDocumentation;
    /**
     * A free-form property to include an example of an instance for this schema in JSON.
     * This is copied verbatim to the output.
     *
     * @generated from protobuf field: string example = 6;
     */
    example: string;
}
/**
 * `JSONSchema` represents properties from JSON Schema taken, and as used, in
 * the OpenAPI v2 spec.
 *
 * This includes changes made by OpenAPI v2.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * See also: https://cswr.github.io/JsonSchema/spec/basic_types/,
 * https://github.com/json-schema-org/json-schema-spec/blob/master/schema.json
 *
 * Example:
 *
 *  message SimpleMessage {
 *    option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema) = {
 *      json_schema: {
 *        title: "SimpleMessage"
 *        description: "A simple message."
 *        required: ["id"]
 *      }
 *    };
 *
 *    // Id represents the message identifier.
 *    string id = 1; [
 *        (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {
 *          description: "The unique identifier of the simple message."
 *        }];
 *  }
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema
 */
export interface JSONSchema {
    /**
     * Ref is used to define an external reference to include in the message.
     * This could be a fully qualified proto message reference, and that type must
     * be imported into the protofile. If no message is identified, the Ref will
     * be used verbatim in the output.
     * For example:
     *  `ref: ".google.protobuf.Timestamp"`.
     *
     * @generated from protobuf field: string ref = 3;
     */
    ref: string;
    /**
     * The title of the schema.
     *
     * @generated from protobuf field: string title = 5;
     */
    title: string;
    /**
     * A short description of the schema.
     *
     * @generated from protobuf field: string description = 6;
     */
    description: string;
    /**
     * @generated from protobuf field: string default = 7;
     */
    default: string;
    /**
     * @generated from protobuf field: bool read_only = 8;
     */
    readOnly: boolean;
    /**
     * A free-form property to include a JSON example of this field. This is copied
     * verbatim to the output swagger.json. Quotes must be escaped.
     * This property is the same for 2.0 and 3.0.0 https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#schemaObject  https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
     *
     * @generated from protobuf field: string example = 9;
     */
    example: string;
    /**
     * @generated from protobuf field: double multiple_of = 10;
     */
    multipleOf: number;
    /**
     * Maximum represents an inclusive upper limit for a numeric instance. The
     * value of MUST be a number,
     *
     * @generated from protobuf field: double maximum = 11;
     */
    maximum: number;
    /**
     * @generated from protobuf field: bool exclusive_maximum = 12;
     */
    exclusiveMaximum: boolean;
    /**
     * minimum represents an inclusive lower limit for a numeric instance. The
     * value of MUST be a number,
     *
     * @generated from protobuf field: double minimum = 13;
     */
    minimum: number;
    /**
     * @generated from protobuf field: bool exclusive_minimum = 14;
     */
    exclusiveMinimum: boolean;
    /**
     * @generated from protobuf field: uint64 max_length = 15;
     */
    maxLength: string;
    /**
     * @generated from protobuf field: uint64 min_length = 16;
     */
    minLength: string;
    /**
     * @generated from protobuf field: string pattern = 17;
     */
    pattern: string;
    /**
     * @generated from protobuf field: uint64 max_items = 20;
     */
    maxItems: string;
    /**
     * @generated from protobuf field: uint64 min_items = 21;
     */
    minItems: string;
    /**
     * @generated from protobuf field: bool unique_items = 22;
     */
    uniqueItems: boolean;
    /**
     * @generated from protobuf field: uint64 max_properties = 24;
     */
    maxProperties: string;
    /**
     * @generated from protobuf field: uint64 min_properties = 25;
     */
    minProperties: string;
    /**
     * @generated from protobuf field: repeated string required = 26;
     */
    required: string[];
    /**
     * Items in 'array' must be unique.
     *
     * @generated from protobuf field: repeated string array = 34;
     */
    array: string[];
    /**
     * @generated from protobuf field: repeated grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes type = 35;
     */
    type: JSONSchema_JSONSchemaSimpleTypes[];
    /**
     * `Format`
     *
     * @generated from protobuf field: string format = 36;
     */
    format: string;
    /**
     * Items in `enum` must be unique https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1
     *
     * @generated from protobuf field: repeated string enum = 46;
     */
    enum: string[];
}
/**
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.JSONSchemaSimpleTypes
 */
export declare enum JSONSchema_JSONSchemaSimpleTypes {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: ARRAY = 1;
     */
    ARRAY = 1,
    /**
     * @generated from protobuf enum value: BOOLEAN = 2;
     */
    BOOLEAN = 2,
    /**
     * @generated from protobuf enum value: INTEGER = 3;
     */
    INTEGER = 3,
    /**
     * @generated from protobuf enum value: NULL = 4;
     */
    NULL = 4,
    /**
     * @generated from protobuf enum value: NUMBER = 5;
     */
    NUMBER = 5,
    /**
     * @generated from protobuf enum value: OBJECT = 6;
     */
    OBJECT = 6,
    /**
     * @generated from protobuf enum value: STRING = 7;
     */
    STRING = 7
}
/**
 * `Tag` is a representation of OpenAPI v2 specification's Tag object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#tagObject
 *
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Tag
 */
export interface Tag {
    /**
     * A short description for the tag. GFM syntax can be used for rich text
     * representation.
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * Additional external documentation for this tag.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation external_docs = 3;
     */
    externalDocs?: ExternalDocumentation;
}
/**
 * `SecurityDefinitions` is a representation of OpenAPI v2 specification's
 * Security Definitions object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityDefinitionsObject
 *
 * A declaration of the security schemes available to be used in the
 * specification. This does not enforce the security schemes on the operations
 * and only serves to provide the relevant details for each scheme.
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions
 */
export interface SecurityDefinitions {
    /**
     * A single security scheme definition, mapping a "name" to the scheme it
     * defines.
     *
     * @generated from protobuf field: map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme> security = 1;
     */
    security: {
        [key: string]: SecurityScheme;
    };
}
/**
 * `SecurityScheme` is a representation of OpenAPI v2 specification's
 * Security Scheme object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securitySchemeObject
 *
 * Allows the definition of a security scheme that can be used by the
 * operations. Supported schemes are basic authentication, an API key (either as
 * a header or as a query parameter) and OAuth2's common flows (implicit,
 * password, application and access code).
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme
 */
export interface SecurityScheme {
    /**
     * The type of the security scheme. Valid values are "basic",
     * "apiKey" or "oauth2".
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type type = 1;
     */
    type: SecurityScheme_Type;
    /**
     * A short description for security scheme.
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * The name of the header or query parameter to be used.
     * Valid for apiKey.
     *
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * The location of the API key. Valid values are "query" or
     * "header".
     * Valid for apiKey.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In in = 4;
     */
    in: SecurityScheme_In;
    /**
     * The flow used by the OAuth2 security scheme. Valid values are
     * "implicit", "password", "application" or "accessCode".
     * Valid for oauth2.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow flow = 5;
     */
    flow: SecurityScheme_Flow;
    /**
     * The authorization URL to be used for this flow. This SHOULD be in
     * the form of a URL.
     * Valid for oauth2/implicit and oauth2/accessCode.
     *
     * @generated from protobuf field: string authorization_url = 6;
     */
    authorizationUrl: string;
    /**
     * The token URL to be used for this flow. This SHOULD be in the
     * form of a URL.
     * Valid for oauth2/password, oauth2/application and oauth2/accessCode.
     *
     * @generated from protobuf field: string token_url = 7;
     */
    tokenUrl: string;
    /**
     * The available scopes for the OAuth2 security scheme.
     * Valid for oauth2.
     *
     * @generated from protobuf field: grpc.gateway.protoc_gen_openapiv2.options.Scopes scopes = 8;
     */
    scopes?: Scopes;
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> extensions = 9;
     */
    extensions: {
        [key: string]: Value;
    };
}
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type
 */
export declare enum SecurityScheme_Type {
    /**
     * @generated from protobuf enum value: TYPE_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: TYPE_BASIC = 1;
     */
    BASIC = 1,
    /**
     * @generated from protobuf enum value: TYPE_API_KEY = 2;
     */
    API_KEY = 2,
    /**
     * @generated from protobuf enum value: TYPE_OAUTH2 = 3;
     */
    OAUTH2 = 3
}
/**
 * The location of the API key. Valid values are "query" or "header".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In
 */
export declare enum SecurityScheme_In {
    /**
     * @generated from protobuf enum value: IN_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: IN_QUERY = 1;
     */
    QUERY = 1,
    /**
     * @generated from protobuf enum value: IN_HEADER = 2;
     */
    HEADER = 2
}
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow
 */
export declare enum SecurityScheme_Flow {
    /**
     * @generated from protobuf enum value: FLOW_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: FLOW_IMPLICIT = 1;
     */
    IMPLICIT = 1,
    /**
     * @generated from protobuf enum value: FLOW_PASSWORD = 2;
     */
    PASSWORD = 2,
    /**
     * @generated from protobuf enum value: FLOW_APPLICATION = 3;
     */
    APPLICATION = 3,
    /**
     * @generated from protobuf enum value: FLOW_ACCESS_CODE = 4;
     */
    ACCESS_CODE = 4
}
/**
 * `SecurityRequirement` is a representation of OpenAPI v2 specification's
 * Security Requirement object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityRequirementObject
 *
 * Lists the required security schemes to execute this operation. The object can
 * have multiple security schemes declared in it which are all required (that
 * is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme
 * declared in the Security Definitions.
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement
 */
export interface SecurityRequirement {
    /**
     * Each name must correspond to a security scheme which is declared in
     * the Security Definitions. If the security scheme is of type "oauth2",
     * then the value is a list of scope names required for the execution.
     * For other security scheme types, the array MUST be empty.
     *
     * @generated from protobuf field: map<string, grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue> security_requirement = 1;
     */
    securityRequirement: {
        [key: string]: SecurityRequirement_SecurityRequirementValue;
    };
}
/**
 * If the security scheme is of type "oauth2", then the value is a list of
 * scope names required for the execution. For other security scheme types,
 * the array MUST be empty.
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue
 */
export interface SecurityRequirement_SecurityRequirementValue {
    /**
     * @generated from protobuf field: repeated string scope = 1;
     */
    scope: string[];
}
/**
 * `Scopes` is a representation of OpenAPI v2 specification's Scopes object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#scopesObject
 *
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * @generated from protobuf message grpc.gateway.protoc_gen_openapiv2.options.Scopes
 */
export interface Scopes {
    /**
     * Maps between a name of a scope to a short description of it (as the value
     * of the property).
     *
     * @generated from protobuf field: map<string, string> scope = 1;
     */
    scope: {
        [key: string]: string;
    };
}
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 *
 * @generated from protobuf enum grpc.gateway.protoc_gen_openapiv2.options.Scheme
 */
export declare enum Scheme {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: HTTP = 1;
     */
    HTTP = 1,
    /**
     * @generated from protobuf enum value: HTTPS = 2;
     */
    HTTPS = 2,
    /**
     * @generated from protobuf enum value: WS = 3;
     */
    WS = 3,
    /**
     * @generated from protobuf enum value: WSS = 4;
     */
    WSS = 4
}
declare class Swagger$Type extends MessageType<Swagger> {
    constructor();
    create(value?: PartialMessage<Swagger>): Swagger;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Swagger): Swagger;
    private binaryReadMap10;
    private binaryReadMap15;
    internalBinaryWrite(message: Swagger, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Swagger
 */
export declare const Swagger: Swagger$Type;
declare class Operation$Type extends MessageType<Operation> {
    constructor();
    create(value?: PartialMessage<Operation>): Operation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Operation): Operation;
    private binaryReadMap9;
    private binaryReadMap13;
    internalBinaryWrite(message: Operation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Operation
 */
export declare const Operation: Operation$Type;
declare class Header$Type extends MessageType<Header> {
    constructor();
    create(value?: PartialMessage<Header>): Header;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Header): Header;
    internalBinaryWrite(message: Header, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Header
 */
export declare const Header: Header$Type;
declare class Response$Type extends MessageType<Response> {
    constructor();
    create(value?: PartialMessage<Response>): Response;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Response): Response;
    private binaryReadMap3;
    private binaryReadMap4;
    private binaryReadMap5;
    internalBinaryWrite(message: Response, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Response
 */
export declare const Response: Response$Type;
declare class Info$Type extends MessageType<Info> {
    constructor();
    create(value?: PartialMessage<Info>): Info;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Info): Info;
    private binaryReadMap7;
    internalBinaryWrite(message: Info, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Info
 */
export declare const Info: Info$Type;
declare class Contact$Type extends MessageType<Contact> {
    constructor();
    create(value?: PartialMessage<Contact>): Contact;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Contact): Contact;
    internalBinaryWrite(message: Contact, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Contact
 */
export declare const Contact: Contact$Type;
declare class License$Type extends MessageType<License> {
    constructor();
    create(value?: PartialMessage<License>): License;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: License): License;
    internalBinaryWrite(message: License, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.License
 */
export declare const License: License$Type;
declare class ExternalDocumentation$Type extends MessageType<ExternalDocumentation> {
    constructor();
    create(value?: PartialMessage<ExternalDocumentation>): ExternalDocumentation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExternalDocumentation): ExternalDocumentation;
    internalBinaryWrite(message: ExternalDocumentation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation
 */
export declare const ExternalDocumentation: ExternalDocumentation$Type;
declare class Schema$Type extends MessageType<Schema> {
    constructor();
    create(value?: PartialMessage<Schema>): Schema;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Schema): Schema;
    internalBinaryWrite(message: Schema, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Schema
 */
export declare const Schema: Schema$Type;
declare class JSONSchema$Type extends MessageType<JSONSchema> {
    constructor();
    create(value?: PartialMessage<JSONSchema>): JSONSchema;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JSONSchema): JSONSchema;
    internalBinaryWrite(message: JSONSchema, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.JSONSchema
 */
export declare const JSONSchema: JSONSchema$Type;
declare class Tag$Type extends MessageType<Tag> {
    constructor();
    create(value?: PartialMessage<Tag>): Tag;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Tag): Tag;
    internalBinaryWrite(message: Tag, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Tag
 */
export declare const Tag: Tag$Type;
declare class SecurityDefinitions$Type extends MessageType<SecurityDefinitions> {
    constructor();
    create(value?: PartialMessage<SecurityDefinitions>): SecurityDefinitions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SecurityDefinitions): SecurityDefinitions;
    private binaryReadMap1;
    internalBinaryWrite(message: SecurityDefinitions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions
 */
export declare const SecurityDefinitions: SecurityDefinitions$Type;
declare class SecurityScheme$Type extends MessageType<SecurityScheme> {
    constructor();
    create(value?: PartialMessage<SecurityScheme>): SecurityScheme;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SecurityScheme): SecurityScheme;
    private binaryReadMap9;
    internalBinaryWrite(message: SecurityScheme, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme
 */
export declare const SecurityScheme: SecurityScheme$Type;
declare class SecurityRequirement$Type extends MessageType<SecurityRequirement> {
    constructor();
    create(value?: PartialMessage<SecurityRequirement>): SecurityRequirement;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SecurityRequirement): SecurityRequirement;
    private binaryReadMap1;
    internalBinaryWrite(message: SecurityRequirement, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement
 */
export declare const SecurityRequirement: SecurityRequirement$Type;
declare class SecurityRequirement_SecurityRequirementValue$Type extends MessageType<SecurityRequirement_SecurityRequirementValue> {
    constructor();
    create(value?: PartialMessage<SecurityRequirement_SecurityRequirementValue>): SecurityRequirement_SecurityRequirementValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SecurityRequirement_SecurityRequirementValue): SecurityRequirement_SecurityRequirementValue;
    internalBinaryWrite(message: SecurityRequirement_SecurityRequirementValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue
 */
export declare const SecurityRequirement_SecurityRequirementValue: SecurityRequirement_SecurityRequirementValue$Type;
declare class Scopes$Type extends MessageType<Scopes> {
    constructor();
    create(value?: PartialMessage<Scopes>): Scopes;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Scopes): Scopes;
    private binaryReadMap1;
    internalBinaryWrite(message: Scopes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.gateway.protoc_gen_openapiv2.options.Scopes
 */
export declare const Scopes: Scopes$Type;
export {};
