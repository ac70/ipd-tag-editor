angular.module('app').component('tagEditor', {

  templateUrl: 'tag-editor/tag-editor.html',
  bindings: {
    tags: '='
  },
  controller: function($scope, $firebaseObject, $firebaseArray) {

      var tagsDB = firebase.database().ref('groups/groupkey1');

      // sync as object
      var syncObject = $firebaseObject(tagsDB);

      // three way data binding
      syncObject.$bindTo($scope, '$ctrl.group');

      this.deleteTag = function(id) {
        var tagRef = firebase.database().ref('groups/groupkey1/tags/'+id);
        var tagObject = $firebaseObject(tagRef);
        tagObject.$remove();
      };

      this.addNewTag = function() {
        var tagsRef = firebase.database().ref('groups/groupkey1/tags/');
        var tagsObject = $firebaseArray(tagsRef);

        tagsObject.$add({ name: this.newTag }).then((function(ref){
          this.newTag = "";
        }).bind(this));
      }

      // function to set the default data
      $scope.reset = function() {
        console.log('reset test data');
          // WRITING TO FIREBASE DB
          tagsDB.set({
                        tags: {
                          tagkey1: {
                              name: 'tag1',
                              order: '1'
                          },
                          tagkey2: {
                              name: 'tag2',
                              order: '2'
                          },
                          tagkey3: {
                              name: 'tag3',
                              order: '3'
                          }
                        }
              });
      }


    }
});
