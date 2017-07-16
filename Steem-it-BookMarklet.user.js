// ==UserScript==
// @name          Steemit.com CustomSubmit +Steem it! BookMarklet
// @description   Steem it! Bookmarklet in Bookmark Bar to post more quickly...
// @author        eaposztrof
// @updateURL     https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-BookMarklet.user.js
// @downloadURL   https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-BookMarklet.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       1.0
// ==/UserScript==

(function() {
    console.log("%cSteemit.com %cCustomSubmit %c+Steem it! BookMarklet %cby @eaposztrof", "color:#1a5099; font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif; font-size:large", "font-style: italic;font-size:large","color:#1a5099; font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif; font-size:large","font-family:consolas,courier");
    var css = [
        "/* @steemradio */",
        ".App__content {",
        " margin-top: 1em;",
        "}",
        "/* /steemradio */",
        ".vframe__section--shrink .error {",
        " position: fixed;",
        " top: auto;",
        " left: 35%;",
        " width: 47vw;",
        " margin-left: -34vw;",
        " background-color: rgba(255, 0, 0, 0.04);",
        " bottom: 2.32143rem;",
        "}",
        ".vframe__section--shrink .error:hover {",
        " background-color: rgba(255, 0, 0, 1);",
        "}",
        ".ReplyEditor__options.float-right.text-right > label {",
        " position: relative;",
        " top: -1.32143rem;",
        " background-color: #fff;",
        " float: right;",
        "}",
        ".ReplyEditor__options.float-right.text-right > select {",
        " margin-right: 8em;",
        "}",
        ".vframe__section--shrink {",
        " position: absolute;",
        " z-index: 1000;",
        " box-shadow: 1px 1px 15px -8px #000;",
        " background-color: #fff;",
        " margin: 0;",
        " width: 49.5vw;",
        " top: 0;",
        " left: 0;",
        " z-index: 999;",
        "}",
        ".vframe__section--shrink:first-child {",
        " z-index: 10001;",
        "}",
        ".ReplyEditor__body.vframe__section--shrink {",
        " top: 2.32143rem;",
        " margin: -1px;",
        " z-index: 1001;",
        "}",
        ".vframe__section--shrink:nth-child(4) {",
        " position: fixed;",
        " bottom: 0;",
        " top: auto !important;",
        "}",
        ".vframe__section--shrink:nth-child(6) {",
        " z-index: 1000;",
        " font-size: small;",
        " right: 48px;",
        " left: auto;",
        " max-height: 2.32143rem;",
        " width: calc(50vw - 55px);",
        "}",
        ".vframe__section--shrink:nth-child(6) > * {",
        " margin: 0.32143rem 0.32143rem -0.32143rem;",
        " float: right;",
        "}",
        "button.button[type='submit'] {",
        " margin: -2px 0 2px;",
        "}",
        ".Preview.vframe__section--shrink {",
        " right: 0;",
        " left: auto !important;",
        " top: 2.32143rem",
        "}",
        ".ReplyEditor__body textarea {",
        " min-height: 80vh !important;",
        "}",
        "li.toggle-menu.Header__hamburger {",
        " position: absolute;",
        " top: 0;",
        " right: 0;",
        " background-color: #777;",
        "}",
        ".SidePanel>div ul:nth-of-type(n+3) {",
        " margin-top: 1px;",
        "}",
        ".SidePanel .menu {",
        " -ms-flex-wrap: wrap !important;",
        " flex-wrap: wrap !important;",
        "}",
        ".SidePanel .menu>li {",
        " -webkit-box-flex: 0;",
        " -ms-flex: 0 0 100% !important;",
        " flex: 0 0 100% !important;",
        "}",
    ].join("\n");

    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.id = "BookMarklet";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);

        } else {
            document.documentElement.appendChild(node);
        }
    }

    $.fn.getCursorPosition = function () {
        var el = $(this).get(0);
        var pos = 0;
        if ('selectionStart' in el) {
            pos = el.selectionStart;
        } else if ('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    };

    jQuery(document).ready(function($) {

        var mainMenu = $('.Header__top .columns:first-child ul.menu').detach();
        mainMenu.prependTo('.SidePanel > div');
        
        $('span.PostFull__reply > a:nth-child(2)').on('click',function(e){
            e.preventDefault();
            window.location.hash = $(this).text();
        });

        $('.ReplyEditor textarea').live('focus', function(e) {
            if (!$(this).hasClass("editing")){
                $(this).addClass("editing");
                $('div#comments').css({ 'left': 0,'position':'absolute','top':'93vh', 'max-width': '50vw'});
            }
        });


        // @BookMarklet
        var content = '';

        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        function atou(str) {
            return decodeURIComponent(escape(window.atob(str)));
        }
        var title = getUrlParameter('title');
        var body = getUrlParameter('body');
        console.log("title: "+title);
        console.log("body: "+body);
        title = (title?atou(title):'');
        body = (body?atou(body):'');
        console.log("title: "+title);
        console.log("body: "+body);
        if(body) {
            console.log('hash: '+body.startsWith('http')&&!body.match( /(.jpg|.jpeg|.gif|.png)/ ));

            if(body.startsWith('http')&&body.match( /(youtube.com|vimeo.com)/ )) {
                content+=body;
            } else if(body.startsWith('http')&&body.match( /(.jpg|.jpeg|.gif|.png)/ )) {
                content+="[!["+title+"]("+body+")]("+body+")";
            } else if (body.startsWith('http')) {
                content+="["+title+"]("+body+")";
            } else {
                content+= body;
            }

            content+='\n\n---\n'+atou("PHN1cD5bIVtzdGVlbWl0LWxvZ28tMjVweC5wbmddKGh0dHBzOi8vc3RlZW1pdGltYWdlcy5jb20vRFFtZW1WalRGWDdlUzRwRjd5ZmZpc1M5VXJvTktpU2pZdE41M3E4Z3gxa2VTUk0vc3RlZW1pdC1sb2dvLTI1cHgucG5nKSBzdGVlbTxzdXA+JiMxMDA4NDs8L3N1cD5dKGh0dHBzOi8vc3RlZW1pdC5jb20vdHJlbmRpbmcvc3RlZW0tcHJvbW8pICBbU3RlZW0gaXQhIEJvb2tNYXJrbGV0XShodHRwczovL3N0ZWVtaXQuY29tL3N0ZWVtZGV2L0BlYXBvc3p0cm9mL2hvdy10by1hZGQtY3VzdG9tLXNjcmlwdHMtYW5kLXN0eWxlcy10by1zdGVlbWl0KSBieSBAZWFwb3N6dHJvZjwvc3VwPg==");

            if (window.location.href.indexOf("submit.html") > -1) {
                $('.SidePanel .menu:first-child li:nth-child(2)').fadeIn(200).attr('id','precontent').html('<a href="#paste">Paste Content</a>');
            } else {
            }
            $('.SubmitPost input[name="title"]').on('focus',function(e){
                if($(this).val(title).length >= 0){
                    $(this).val(title+"| deleteme!").focus().get(0).setSelectionRange(0,0);
                }
            });

            var textarea=$('.SubmitPost textarea');
            $('#precontent > *').live('click', function(e) {
                e.preventDefault();
                var position = textarea.getCursorPosition();
                var oriContent = textarea.val();
                var newContent = oriContent.substr(0, position) + "\n"+ content +"\n" + oriContent.substr(position);
                textarea.val(newContent).focus();
            });
        }
        // /BookMarklet

        /* Bookmaklet code
        var str = prompt('Steem it!', '[![steemit-logo-25px.png](https://steemitimages.com/DQmemVjTFX7eS4pF7yffisS9UroNKiSjYtN53q8gx1keSRM/steemit-logo-25px.png) steem<sup>&#10084;</sup>](https://steemit.com/trending/steem-promo)');

        function utoa(str) {
            return window.btoa(unescape(encodeURIComponent(str)));
        }
        if (str.length > 0) {
            content = str;
        } else {
            content = document.location.href;
        }
        window.open('https://steemit.com/submit.html?body=' + utoa(content) + '&title=' + utoa(document.title), '_blank', false);
        */
        /* /Bookmaklet code

        /* Bookmaklet code.minified
        function utoa(t){return window.btoa(unescape(encodeURIComponent(t)))}var str=prompt("Steem it!","[![steemit-logo-25px.png](https://steemitimages.com/DQmemVjTFX7eS4pF7yffisS9UroNKiSjYtN53q8gx1keSRM/steemit-logo-25px.png) steem<sup>&#10084;</sup>](https://steemit.com/trending/steem-promo)");str.length>0?content=str:content=document.location.href,window.open("https://steemit.com/submit.html?body="+utoa(content)+"&title="+utoa(document.title),"_blank",!1);
        */
        /* /Bookmaklet code.minified


    });

})();
