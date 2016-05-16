//当前版本大于比较版本返回 1，小于返回 -1，等于返回 0
function vCompare (currVer, promoteVer) {
    if (!currVer) return -1;
    if (!promoteVer) return 1;
    if (currVer === promoteVer) return 0;
    var currVerArr = currVer.split(".");
    var promoteVerArr = promoteVer.split(".");
    var currVerArrLen = currVer.length;
    var promoteVerArrLen = promoteVerArr.length;
    var len = currVerArrLen > promoteVerArrLen ? currVerArrLen : promoteVerArrLen;
    for (var i = 0; i < len; i++) {
        var currVerValue = currVerArr[i];
        var promoteVerValue = promoteVerArr[i];
        if (currVerValue > promoteVerValue) {
            return 1;
        }
        if (currVerValue < promoteVerValue){
            return -1;
        }
    }
    if (len === currVerArrLen) {
        return 1;
    }
    if (len === promoteVerArrLen) {
        return -1;
    }
}

if ( typeof define === "function" && define.amd ) {
    define( "vcompare", [], function() {
        return vCompare;
    });
}