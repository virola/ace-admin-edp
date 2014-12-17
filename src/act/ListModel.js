define(
    function (require) {
        var Model = require('er/Model');

        function ListModel() {
            Model.apply(this, arguments);
        }

        require('er/util').inherits(ListModel, Model);

        return ListModel;
    }
);