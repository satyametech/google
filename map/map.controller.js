(function() {
    'use strict';
    angular
            .module('mapsApp', ['uiGmapgoogle-maps'])
            .controller('MapCtrl', function($scope, $q, $http, $timeout, uiGmapGoogleMapApi) {
                $scope.map = {center: {latitude: 28.889816, longitude: 77.3418147, }, zoom: 8};
                $scope.options = {scrollwheel: false};
                $scope.marker = {
                    coords: {
                        latitude: 40.454018,
                        longitude: -3.509205
                    },
                    show: false,
                    id: 0
                };
                $scope.submitData = function() {
                    // alert("Click!!!");
                    var first = $scope.address;
                    var second = $scope.state;
                    var third = $scope.pin;
                    var fourth = $scope.country;
                    google(first, second, third, fourth);
                    function google(first, second, third, fourth) {
                        var add;
                        var def = $q.defer();
                        add = first + ' ' + second +' '+ third +' '+ fourth;
                        console.log(add);
                        $http.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + add + '&key=AIzaSyCd6VPMPM-ZABfVeeHslkAi_Tp4tUvRTac').then(function(data) {
                            def.resolve(data);
                            console.log(data);
                            var res = data.data.results[0].geometry.location;
                            var lati = res.lat;
                            var longi = res.lng;
                            console.log(lati);
                            console.log(longi);
                            $scope.lat = lati;
                            $scope.long = longi;
                            $scope.map = {center: {latitude: $scope.lat, longitude: $scope.long}, zoom: 12};
                            {
                                $scope.options = {scrollwheel: false};
                                $scope.marker = {
                                    options: {
                                        animation: 1,
                                        labelAnchor: "28 -5",
                                        labelClass: 'markerlabel'
                                    },
                                    coords: {
                                        latitude: $scope.lat,
                                        longitude: $scope.long
                                    },
                                    show: true,
                                    id: 0
                                };

                                $scope.windowOptions = {
                                    visible: false
                                };
                                $scope.onClick = function() {
                                    $scope.windowOptions.visible = !$scope.windowOptions.visible;
                                };
                                $scope.closeClick = function() {
                                    $scope.windowOptions.visible = false;
                                };
                                $scope.title = "You Are Here";
                            }

                        });
                        uiGmapGoogleMapApi.then(function(maps) {

                        });
                    }

                }
                ;
            });
})();

