((): void => {
    'use strict';

    angular
        .module('app.blocks')
        .config(config);

    config.$inject = ['app.blocks.ApiEndpointProvider'];

    function config(apiEndpointProvider: app.blocks.IApiEndpointProvider): void {
        apiEndpointProvider.configure('/api');
    }

    // use the provider to $get values that are set up during configuration

})();