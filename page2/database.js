'use strict';

function databaseRead(callback) {
    var cookie = getCookie();
    console.log("databaseRead",cookie);
    if (typeof cookie.name != "string") {
        setTimeout(callback,0,null);
        return;
    }
    var x = new XMLHttpRequest();
    x.open("GET","https://aws.aaronstanek.com/?op=read&name="+cookie.name,true);
    var f = () => {
        callback(x.responseText);
    };
    x.onload = f;
    x.onerror = f;
    x.ontimeout = f;
    x.onabort = f;
    x.send(null);
}

function databaseWrite(callback) {
    var cookie = getCookie();
    if (typeof cookie.name != "string" || typeof cookie.info != "object") {
        setTimeout(callback,0,null);
        return;
    }
    var x = new XMLHttpRequest();
    x.open("GET","https://aws.aaronstanek.com/?op=write&name="+cookie.name+"&info="+JSON.stringify(cookie.info),true);
    var f = () => {
        callback(x.responseText);
    };
    x.onload = f;
    x.onerror = f;
    x.ontimeout = f;
    x.onabort = f;
    x.send(null);
}