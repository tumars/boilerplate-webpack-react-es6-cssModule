function GetSlideAngle(dx,dy) {
    return Math.atan2(dy,dx) * 180 / Math.PI;
}

//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX,startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0; // 没滑动

    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
       return result;
    }
    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
       result = 4;// 向右
    }else if (angle >= 45 && angle < 135) {
       result = 1; // 向上
    }else if (angle >= -135 && angle < -45) {
       result = 2; // 向下
    }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
       result = 3; // 向左
    }
    return result;
}

// 设置 css3 属性
function setCss3Style(el, prop, val) {
    var vendors = [
        '-webkit-',
        '-o-',
        '-moz-',
        '-ms-',
        ''
    ];
    function toCamelCase(str) {
        return str.toLowerCase().replace(/(\/-[a-z])/g, function($1) {
            return $1.toUpperCase().replace('-', '');
        });
    }

    function setCss3Style(el, prop, val) {
        vendors.forEach(function(vendor) {
            var property = toCamelCase(vendor + prop);
    
            if(property in el.style) {
                el.style[property] = val;
            }
        });
    }

    return setCss3Style(el, prop, val)
}

export {
    GetSlideDirection,
    setCss3Style
}