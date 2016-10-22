angular.module('app').component('tagEditor', {

  templateUrl: 'tag-editor/tag-editor.html',
  bindings: {
    tags: '=?',
    groupID: '=groupId'
  },
  controller: function($scope, $firebaseArray) {
      //sync tags to array
      var tagsRef = firebase.database().ref('groups/'+this.groupID+'/tags');
      this.tags = $firebaseArray(tagsRef);

      this.deleteTag = function(id) {
        var tagRef = firebase.database().ref('groups/groupkey1/tags/'+id);
        var tagObject = $firebaseObject(tagRef);
        tagObject.$remove();
      };

      this.addNewTag = function() {
        var tagsObject = $firebaseArray(tagsRef);

        tagsObject.$add({ name: this.newTag, order: "1" }).then((function(ref){
          this.newTag = "";
        }).bind(this));
      }


      // function to set the default data
      $scope.reset = function() {
        console.log('reset test data');
          // WRITING TO FIREBASE DB
          groupRef.set({
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
