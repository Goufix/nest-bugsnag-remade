import { Client, Config } from "@bugsnag/js";

export interface BugsnagClientInterface extends Client {}

export type BugsnagModuleOptions = string | Config;

export interface BugsnagModuleAsyncOptions {
  useFactory: (
    ...args: any[]
  ) => Promise<BugsnagModuleOptions> | BugsnagModuleOptions;
  inject?: any[];
}
