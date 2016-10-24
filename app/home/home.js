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
          // loadTags();
        };
        this.loadGroup2 = function() {
          that.groupID = "groupkey2";
          // loadTags();
        };

        //
        // this.createExpense = function(expenseData) {
        //     this.expensesInOrder.$add(expenseData)
        // }
        //
        // this.editExpense = function(expense) {
        //     this.editedExpense = expense;
        // }
        //
        // this.updateExpense = function() {
        //     this.expensesInOrder.$save(this.editedExpense);
        // }

    }

});
