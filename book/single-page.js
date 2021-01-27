require(['gitbook', 'jQuery'], function (gitbook, $) {
    gitbook.events.bind('page.change', function () {
        var $summary = $('.book-summary');
        var $bookBody = $('.book-body');
        //隐藏左侧菜单
        $summary.outerWidth(0);
        $bookBody.offset({left: 0});
        //隐藏头部
        document.getElementsByClassName('book-header')[0].style.visibility = 'hidden';
        //隐藏左右导航
        [].forEach.call(document.querySelectorAll('.navigation'), function (el) {
            el.style.visibility = 'hidden';
        });
    });
});
