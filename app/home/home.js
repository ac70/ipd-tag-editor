angular.module('app').component('home', {
    templateUrl: 'home/home.html',
    bindings: {
        groupId: '=groupID'
    },
    controller: function() {

        var that = this;
        this.groupID = "groupkey1";

        this.loadGroup1 = function() {
            that.groupID = "groupkey1";
        };
        this.loadGroup2 = function() {
            that.groupID = "groupkey2";
        };

    }

});
