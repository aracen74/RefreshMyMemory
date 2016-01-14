module app.blocks {
    'use strict';

    export interface IApiEndpointConfig {
        baseUrl: string;

    }

    export interface IApiEndpointProvider {
        configure(baseUrl: string): void;
    }

    class ApiEndpointProvider implements IApiEndpointProvider, ng.IServiceProvider {

        config: IApiEndpointConfig;

        configure(baseUrl: string): void {
            this.config = { baseUrl: baseUrl };
        }

        $get(): IApiEndpointConfig {
            return this.config;
        }
        // this is what is returned , when the provider is used as a dependency in a factory
    }

    angular
        .module('app.blocks')
        .provider('app.blocks.ApiEndpoint', ApiEndpointProvider);

}