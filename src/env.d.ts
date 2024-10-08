/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    APP_VERSION: string;
    APP_NAME: string;
    APP_LICENSE: string;
    APP_AUTHOR: string;
  }
}
