'use strict';

(function ($) {
    var showpop = false;
    $.fn.myshow = function (options) {

        var config = $.extend({
            orignal: '.list',
            target: '.wrapper',
            close: '.btn-danger'
        }, options);

        var setting = $.extend({}, config, options);

        

        var action = {
            show: function (id) {
                 console.log('start:'+showpop);
                if (showpop) {
                    return;
                } else {

                    $('#' + id).find(setting.target).slideDown();
                    showpop = true;
                }
                console.log('end:'+showpop);

            },
            close: function (id) {

                $('#' + id).find(setting.target).slideUp();
                showpop = false;
            }
        };

        return this.each(function () {

            $(this).click(function () {
                var id = 'id' + parseInt(Math.random() * 100000);
                $(this).parents(setting.orignal).attr('id', id);
                action.show(id);

            });

            $(this).parents(setting.orignal).find(setting.close).click(function () {
                var id = $(this).parents(setting.orignal).attr('id');
                action.close(id);
            });

        });
    };

}(jQuery));
