!﻿function () {
    var base = {
        na: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            var isIE = (ua.indexOf("msie") > -1) ? true : false;
            var isFirefox = (ua.indexOf("firefox") > -1) ? true : false;
            var isChrome = (ua.indexOf("chrome") > -1) ? true : false;
            var isSafari = (ua.indexOf("safari") > -1) ? true : false;
            var isOpera = (ua.indexOf("opera") > -1) ? true : false;
            var isAndroid = (ua.indexOf("android") > -1) ? true : false;
            if (isIE) {
                return "Microsoft Internet Explorer " + ua.match(/msie.([\d.]+)/)[1]
            } else if (isFirefox) {
                return "Firefox " + ua.match(/firefox.([\d.]+)/)[1]
            } else if (isChrome) {
                return "Chrome " + ua.match(/chrome.([\d.]+)/)[1]
            } else if (isOpera) {
                return "Opera " + ua.match(/opera.([\d.]+)/)[1]
            } else if (isSafari && isAndroid) {
                return "Android's browser " + ua.match(/version.([\d.]+)/)[1]
            } else if (isSafari) {
                return "Safari " + ua.match(/version.([\d.]+)/)[1]
            } else {
                return "unknown"
            }
        },
        os: function () {
            var ua = window.navigator.userAgent.toLowerCase();
            var isWNT = (ua.indexOf("windows nt") > -1) ? true : false;
            var isWindows = (ua.indexOf("windows") > -1) ? true : false;
            var isWP = (ua.indexOf("windows phone") > -1) ? true : false;
            var isMac = (ua.indexOf("mac") > -1) ? true : false;
            var isUnix = (ua.indexOf("x11") > -1) ? true : false;
            var isIphone = (ua.indexOf("iphone") > -1) ? true : false;
            var isIpad = (ua.indexOf("ipad") > -1) ? true : false;
            var isIpod = (ua.indexOf("ipod") > -1) ? true : false;
            var isAndroid = (ua.indexOf("android") > -1) ? true : false;
            if (isWindows) {
                var tmp = "";
                if (isWNT) {
                    switch (ua.match(/windows nt ([\d\.]+)/)[1]) {
                        case "6.2":
                            tmp = "Win8";
                            break;
                        case "6.1":
                            tmp = "Win7";
                            break;
                        case "6.0":
                            tmp = "WinVista";
                            break;
                        case "5.2":
                            tmp = "Windows Server 2003";
                            break;
                        case "5.1":
                            tmp = "WinXp";
                            break;
                        case "5.0":
                            tmp = "Win2000";
                            break;
                        default:
                            tmp = "other Windows";
                            break
                    }
                    return tmp
                } else {
                    if (isWP) {
                        return "mobile windows"
                    } else {
                        return "Lower windows"
                    }
                }
            } else if (isIphone || isIpad || isIpod) {
                return "Iphone or Ipad or Ipod"
            } else if (isMac) {
                return "Mac OS X"
            } else if (isAndroid) {
                return "Android " + ua.match(/android.([\d\.]+)/)[1]
            } else if (isUnix) {
                return "like Unix"
            } else {
                return "unknown"
            }
        },
        size: function () {
            return window.screen.width + "*" + window.screen.height
        },
        src: document.referrer,
        url: document.location.href.replace("#","%23")
    };

    function jsLoad(sUrl, sBianMa, fCallback) {
        var _script = document.createElement('script');
        _script.setAttribute('charset', sBianMa);
        _script.setAttribute('type', 'text/javascript');
        _script.setAttribute('src', sUrl);
        document.getElementsByTagName('head')[0].appendChild(_script);
        if (/msie/.test(window.navigator.userAgent.toLowerCase())) {
            _script.onreadystatechange = function () {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    _script.parentNode.removeChild(_script);
                    if (fCallback) fCallback()
                }
            }
        } else if (/gecko/.test(window.navigator.userAgent.toLowerCase()) || /opera/.test(window.navigator.userAgent.toLowerCase())) {
            _script.onload = function () {
                _script.parentNode.removeChild(_script);
                if (fCallback) fCallback()
            }
        } else {
            _script.parentNode.removeChild(_script);
            if (fCallback) fCallback()
        }
    }
    window.jsonp = function () { };
    var tmp = "na=" + base.na() + "&os=" + base.os() + "&size=" + base.size() + "&src=" + base.src + "&url=" + base.url + "&type=Mongo&v=" + Math.random();
    jsLoad("https://counter1.1234567.com.cn/?" + tmp + "&callback=jsonp", "utf-8", function () { })
}.call(this)