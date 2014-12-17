exports.execute = function (context) {
    var response = {
        status: 0,
        data: {
            userid: 12345678,
            username: 'pmtest'
        }
    };

    context.content = JSON.stringify(response);
};