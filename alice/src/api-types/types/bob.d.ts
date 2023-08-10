/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    get: operations["AppController_getHello"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    GreetingRequestDto: {
      /**
       * @description Age of greeting
       * @example 2
       */
      age?: number;
    };
    ResponseGreetingRequestDto: {
      /**
       * @description Greeting response
       * @example 18
       */
      greeting: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  AppController_getHello: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["GreetingRequestDto"];
      };
    };
    responses: {
      /** @description Hello World! */
      200: {
        content: {
          "application/json": components["schemas"]["ResponseGreetingRequestDto"];
        };
      };
    };
  };
}