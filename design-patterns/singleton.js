var DBConnection = (function () {

    var firstInstance = null;

    return function () {

        if (firstInstance !== null) {
            return firstInstance;
        }

        // Do bunch of initiailzation;

        firstInstance = this;
        return this;

    };

})();

var db1 = new DBConnection();
var db2 = new DBConnection();

console.log(db1 === db2);