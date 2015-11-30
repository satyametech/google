(function() {
    'use strict';
    angular.module('mapsApp', ['uiGmapgoogle-maps'])
            .config(
                    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
                            GoogleMapApiProviders.configure({
                                map: true,
                                key: AIzaSyCd6VPMPM-ZABfVeeHslkAi_Tp4tUvRTac,
                                libraries: 'geometry',
                            });
                        }]
                    )
})();
        