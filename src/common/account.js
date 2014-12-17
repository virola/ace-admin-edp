define(
    function (require) {

        var account = $({});

        account.load = function () {
            var url = require('url').GET_ACCOUNT;

            require('common/ajax').get(
                url, '',
                function (data) {
                    console.log(data);

                    account.trigger('loaded');
                }, function () {
                    account.trigger('loaderror');
                }
            );
        };

        return account;
    }
);