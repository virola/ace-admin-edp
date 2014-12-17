define(
    function(require) {

        // 提前引入公共控件
        // require('common/require-ui');

        // 提前引入公共模板
        require('common/require-tpl');

        /**
         * 处理AJAX公用参数userId和nestId
         */
        function hookAjax(account) {

            var ajax = require('er/ajax');
                    
            // 这里做一些共用参数的注入
            ajax.hooks.beforeExecute = function (options) {

                var userId = account.getUserId();
                var nestId = account.getUserNestId();

                if (options.method === 'POST') {
                    options.url = ''
                        + options.url
                        + ((options.url.indexOf('?') < 0) ? '?' : '&')
                        + 'userId=' + userId
                        + '&nestId=' + nestId
                        + '&isAjax=1';
                }

                options.data = options.data || {};
                options.data.userId = userId;
                options.data.nestId = nestId;
                options.data.isAjax = 1;

            };

        }


        return {
            init: function () {
                var account = require('common/account');

                account.on('loaded', function() {

                    hookAjax(account);

                    // 启动er
                    require('er').start();
                });

                account.on('loadfailed', function () {
                    // error(1003);
                });

                // 加载账户信息
                account.loadUserInfo();
            }
        };

    }
);