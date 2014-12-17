define(
    function(require) {
        var Action = require('er/Action');

        function ActList() {
            Action.apply(this, arguments);
        }

        ActList.prototype.modelType = require('./ListModel');

        ActList.prototype.viewType = require('./ListView');


        ActList.prototype.initBehavior = function() {
            
        };

        require('er/util').inherits(ActList, Action);

        return ActList;
    }
);