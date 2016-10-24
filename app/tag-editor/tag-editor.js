angular.module('app').component('tagEditor', {

    templateUrl: 'tag-editor/tag-editor.html',
    bindings: {
        groupID: '=groupId'
    },
    controller: function($scope, $firebaseObject, $firebaseArray) {
        this.editmode = true;
        var that = this;
        var rootRef = firebase.database().ref('groups');
        var tagsRef = rootRef.child(that.groupID).child('tags');

        $scope.$watch('$ctrl.groupID', function() {
            tagsRef = rootRef.child(that.groupID).child('tags');
            that.tags = $firebaseArray(tagsRef.orderByChild('order'));
        })

        this.saveTag = function(tag) {
            this.tags.$save(tag);
        }

        this.deleteTag = function(tag) {
            var delTag = tag;
            this.tags.$remove(delTag).then((function(data) {
                reorderTags.call(this, delTag.order);
            }).bind(this));

            // var tagID = tag.$id;
            // var tagObj = $firebaseObject(tagsRef.child(tagID));
            //
            // tagObj.$loaded().then(function() {
            //     reorderTagsObject(tagObj.$id);
            //     // tagObj.$remove();
            // });

        };


        function reorderTags(delTagOrder) {
            for (var i = 0, len = that.tags.length; i < len; i++) {
                if (i >= (delTagOrder - 1)) {
                    that.tags[i]['order'] = i + 1;
                    that.tags.$save(i);
                }
            }
        }

        this.addNewTag = function() {
            var newOrder = this.tags.length + 1;
            if (this.newTag != "") {
              this.tags.$add({
                  name: this.newTag,
                  order: newOrder
              });
            }
            this.newTag = "";
        }

    }
});
