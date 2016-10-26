angular.module('app').component('home', {
    templateUrl: 'home/home.html',
    bindings: {
        groupId: '=groupID'
    },
    controller: function() {

        this.groupID = "groupkey1";

        this.loadGroup1 = function() {
            this.groupID = "groupkey1";
        };
        this.loadGroup2 = function() {
            this.groupID = "groupkey2";
        };

    }

});
