var app = angular
  .module('app', ['firebase', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('deep-orange')
      .warnPalette('red')
      .backgroundPalette('blue-grey');
    })
    // .controller('appController', function($scope, $firebaseObject) {
    //
    //     var tagsDB = firebase.database().ref('groups/groupkey1/tags');
    //
    //     // sync as object
    //     var syncObject = $firebaseObject(tagsDB);
    //
    //     // three way data binding
    //     syncObject.$bindTo($scope, 'tags');
    //
    //     $scope.reset = function() {
    //       console.log('reset test data');
    //         // WRITING TO FIREBASE DB
    //         tagsDB.set({
    //                     tags: {
    //                         tagkey1: {
    //                             name: 'tag1fghj',
    //                             order: '1'
    //                         },
    //                         tagkey2: {
    //                             name: 'tag2',
    //                             order: '2'
    //                         },
    //                         tagkey3: {
    //                             name: 'tag3',
    //                             order: '3'
    //                         }
    //                     }
    //             });
    //     }
    // });
