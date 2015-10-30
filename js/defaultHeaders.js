var app = angular.module('nbaRoutes');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {
                'X-Parse-Application-Id': 'id72pK8XO9WSdIwWhTM1ZkIw62GRVyFG1exn3GNM',
                'X-Parse-REST-API-Key': 'djIhlcU7jRDIMACUjZv6Bkw3kF028EYjbaTJoKCI'
            };
            return config;
        }
    };
});
