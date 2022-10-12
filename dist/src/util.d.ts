/// <reference types="node" />
import * as grpc from "@grpc/grpc-js";
export declare enum ClientSecurity {
    SECURE = 0,
    INSECURE_LOCALHOST_ALLOWED = 1,
    INSECURE_PLAINTEXT_CREDENTIALS = 2
}
declare function createClientCreds(endpoint: string, token: string, security?: ClientSecurity): grpc.ChannelCredentials;
declare function createClientCredsWithCustomCert(token: string, certificate: Buffer): grpc.ChannelCredentials;
declare const authzedEndpoint = "grpc.authzed.com:443";
export { createClientCreds, createClientCredsWithCustomCert, authzedEndpoint };
declare const _default: {
    createClientCreds: typeof createClientCreds;
    createClientCredsWithCustomCert: typeof createClientCredsWithCustomCert;
    authzedEndpoint: string;
};
export default _default;
