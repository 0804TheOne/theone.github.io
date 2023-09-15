// 个性化Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	let $favicon = document.querySelector("link[rel='icon']") || document.querySelector("link[rel='shortcut icon']");
    if (document.hidden) {
        $favicon.href='/img/favicon.ico';
        document.title = '再见~~' + OriginTitle;
        clearTimeout(titleTime);
    } else {
        $favicon.href='/img/favicon.ico';
        document.title = '又见面了~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});