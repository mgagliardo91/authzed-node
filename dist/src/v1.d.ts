/// <reference types="node" />
import { ChannelCredentials } from "@grpc/grpc-js";
import { PermissionsServiceClient } from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
import { SchemaServiceClient } from "./authzedapi/authzed/api/v1/schema.grpc-client";
import { WatchServiceClient } from "./authzedapi/authzed/api/v1/watch_service.grpc-client";
import { ClientSecurity } from "./util";
/**
 * NewClient creates a new client for calling Authzed APIs.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param security Security level for the connection.
 * @returns Client for calling Authzed APIs.
 */
export declare function NewClient(token: string, endpoint?: string, security?: ClientSecurity): Pick<PermissionsServiceClient, "readRelationships" | "writeRelationships" | "deleteRelationships" | "checkPermission" | "expandPermissionTree" | "lookupResources" | "lookupSubjects" | "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest"> & Pick<SchemaServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "readSchema" | "writeSchema"> & Pick<WatchServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "watch">;
/**
 * NewClientWithCustomCert creates a new client for calling Authzed APIs using a custom TLS certificate.
 * @param token Secret token for authentication.
 * @param endpoint Uri for communicating with Authzed.
 * @param certificate Buffer read from certificate file.
 * @returns Client for calling Authzed APIs.
 */
export declare function NewClientWithCustomCert(token: string, endpoint: string | undefined, certificate: Buffer): Pick<PermissionsServiceClient, "readRelationships" | "writeRelationships" | "deleteRelationships" | "checkPermission" | "expandPermissionTree" | "lookupResources" | "lookupSubjects" | "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest"> & Pick<SchemaServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "readSchema" | "writeSchema"> & Pick<WatchServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "watch">;
/**
 * NewClientWithChannelCredentials creates a new client for calling Authzed APIs using custom grpc ChannelCredentials.
 * @param endpoint Uri for communicating with Authzed.
 * @param creds ChannelCredentials used for grpc.
 * @returns Client for calling Authzed APIs.
 */
export declare function NewClientWithChannelCredentials(endpoint: string | undefined, creds: ChannelCredentials): Pick<PermissionsServiceClient, "readRelationships" | "writeRelationships" | "deleteRelationships" | "checkPermission" | "expandPermissionTree" | "lookupResources" | "lookupSubjects" | "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest"> & Pick<SchemaServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "readSchema" | "writeSchema"> & Pick<WatchServiceClient, "close" | "getChannel" | "waitForReady" | "makeUnaryRequest" | "makeClientStreamRequest" | "makeServerStreamRequest" | "makeBidiStreamRequest" | "watch">;
export * from "./authzedapi/authzed/api/v1/core";
export * from "./authzedapi/authzed/api/v1/permission_service";
export * from "./authzedapi/authzed/api/v1/schema";
export * from "./authzedapi/authzed/api/v1/watch_service";
export * from "./authzedapi/authzed/api/v1/watch_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/permission_service.grpc-client";
export * from "./authzedapi/authzed/api/v1/schema.grpc-client";
export { ClientSecurity } from './util';
declare const _default: {
    NewClient: typeof NewClient;
};
export default _default;
