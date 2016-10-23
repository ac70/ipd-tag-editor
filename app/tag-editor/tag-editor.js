angular.module('app').component('tagEditor', {

  templateUrl: 'tag-editor/tag-editor.html',
  bindings: {
    groupID: '=groupId'
  },
  controller: function($scope, $firebaseObject, $firebaseArray) {
      this.editmode = true;
      this.saveTags = function(tag) {
        this.tags.$save(tag);
      }

      // var groupsRef = firebase.database().ref('groups');
      // var groupArray = $firebaseArray(groupsRef);
      // console.log(groupsRef);

      //sync tags to array
      var tagsRef = firebase.database().ref('groups/'+this.groupID+'/tags').orderByChild("order");
      this.tags = $firebaseArray(tagsRef);

      this.deleteTag = function(tag) {
        this.tags.$remove(tag).then((function(data){
          reorderTags.call(this);
        }).bind(this));
      };

      function reorderTags() {
        for (var i=0, len = this.tags.length; i < len; i++) {
          this.tags[i]['order'] = i+1;
          this.tags.$save(i);
        }
      }

      this.addNewTag = function() {
        // var tagsObject = $firebaseArray(tagsRef);
        var newOrder = this.tags.length + 1;

        this.tags.$add({ name: this.newTag, order: newOrder });
        this.newTag = "";

      }


      // function to set the default data
      // $scope.reset = function() {
      //     var groupRef = firebase.database().ref('groups/groupkey1');
      //
      //     groupRef.set({
      //                   tags: {
      //                     tagkey1: {
      //                         name: 'tag1',
      //                         order: 1
      //                     },
      //                     tagkey2: {
      //                         name: 'tag2',
      //                         order: 2
      //                     },
      //                     tagkey3: {
      //                         name: 'tag3',
      //                         order: 3
      //                     }
      //                   }
      //         });
      // };


    }
});
