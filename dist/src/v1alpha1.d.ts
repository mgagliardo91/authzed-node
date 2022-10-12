import { SchemaServiceClient } from "./authzedapi/authzed/api/v1alpha1/schema.grpc-client";
import { ClientSecurity } from "./util";
declare function NewClient(token: string, endpoint?: string, security?: ClientSecurity): SchemaServiceClient;
export * from "./authzedapi/authzed/api/v1alpha1/schema";
export { ClientSecurity } from './util';
export { NewClient };
declare const _default: {
    NewClient: typeof NewClient;
};
export default _default;
