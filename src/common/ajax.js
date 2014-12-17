define(
    function (require) {
        
        var ajax = {};

        var blankfn = function () {};

        ajax.get = function (url, data, successCallback, failCallback) {
            successCallback = successCallback || blankfn;
            failCallback = failCallback || blankfn;

            var ajaxObject = $.ajax(url, {
                data: data,
                dataType: 'json'
            }).done(function (json) {
                if (json.status == 0) {
                    successCallback(json.data);
                }
                else {
                    failCallback(json);
                }
            }).error(function (resp) {
                failCallback({
                    status: -1,
                    statusInfo: resp
                });
            });

            return ajaxObject;
        };

        ajax.post = function (url, data, successCallback, failCallback) {
            successCallback = successCallback || blankfn;
            failCallback = failCallback || blankfn;

            var ajaxObject = $.ajax(url, {
                type: 'post',
                data: data,
                dataType: 'json'
            }).done(function (json) {
                if (json.status == 0) {
                    successCallback(json.data);
                }
                else {
                    failCallback(json);
                }
            }).error(function (resp) {
                failCallback({
                    status: -1,
                    statusInfo: resp
                });
            });

            return ajaxObject;
        };

        return ajax;
    }
);