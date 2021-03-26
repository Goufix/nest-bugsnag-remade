import bugsnag from "@bugsnag/js";
import { Injectable } from "@nestjs/common";
import {
  BugsnagClientInterface,
  BugsnagModuleOptions,
} from "./bugsnag.interfaces";

@Injectable()
export class BugsnagService {
  get instance(): BugsnagClientInterface {
    return this._instance;
  }

  private readonly _instance: BugsnagClientInterface;

  constructor(options: BugsnagModuleOptions) {
    this._instance = bugsnag.start(options);
  }
}
