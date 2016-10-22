angular.module('app').component('tagEditor', {

  bindings: {
    taglist: '=?'
  },

  // templateUrl: 'tag-editor/tag-editor.html',

  template:"<div>tag editor {{$ctrl.taglist}}</div>",

  controller: function($scope, $firebaseObject, $firebaseArray) {

    // this.taglist = "taglist";
      //sync tags to object
      var tagsRef = firebase.database().ref('groups/groupkey1/tags');
      // var tagsObj = $firebaseObject(tagsRef);
      this.taglist = $firebaseArray(tagsRef);
      // console.log($firebaseArray(tagsRef));


    }
});
