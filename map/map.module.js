(function() {
    'use strict';
    angular.module('mapsApp', ['uiGmapgoogle-maps'])
            .config(
                    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
                            GoogleMapApiProviders.configure({
                                map: true,
                                key: AIzaSyCZJMm5aP5dU7VQj_9QKit3byk3afjm0yM,
                                libraries: 'geometry',
                            });
                        }]
                    )
})();
        