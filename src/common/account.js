define(
    function (require) {

        var account = $({});

        var url = require('common/URL').GET_ACCOUNT;

        require('common/ajax').get(
            url, '',
            function (data) {
                console.log(data);

                account.trigger('loaded');
            }, function () {
                account.trigger('loaderror');
            }
        );

        return account;
    }
);