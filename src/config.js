/**
 * @file config
 */
define(
    function (require) {
        var actions = [
            {
                path: '/',
                type: 'act/List'
            },
            {
                path: 'act/list',
                type: 'act/List'
            },
            {
                path: 'act/review',
                type: 'act/Review'
            },
            {
                path: 'act/comment',
                type: 'act/Comment'
            },
            {
                path: '/act/create',
                type: 'act/Form',
                args: { formType: 'create' }
            }, 
            {
                path: '/act/edit',
                type: 'act/Form',
                args: { formType: 'edit' }
            }
        ];

        var controller = require('er/controller');

        for (var i = 0, len = actions.length; i < len; i++ ) {
            controller.registerAction(actions[i]);
        }

        return {};
    }
);