define(
    function (require) {
        
        require('er/tpl!./list.html');

        var UIView = require('ef/UIView');


        function ListView() {
            UIView.apply(this, arguments);
        }

        ListView.prototype.template = 'ActList';

        require('er/util').inherits(ListView, UIView);

        return ListView;
    }
);