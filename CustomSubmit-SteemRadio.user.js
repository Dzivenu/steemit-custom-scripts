// ==UserScript==
// @name          Steemit.com CustomSubmit +SteemRadio
// @description   Easier to post to @SteemRadio's #musictrends contest
// @author        eaposztrof
// @updateURL     https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-SteemRadio.user.js
// @downloadURL   https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-SteemRadio.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/steemdev/@eaposztrof/customsubmit-steemradio-v1-0-for-steemit-com-released
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       1.1
// ==/UserScript==

(function() {
    var musictrends="musictrends02"; // edit the number here when it change
    var content = [
        "- - -",
        "<center><sup>This is my entry for @steemradio's #"+musictrends+" - [\"Win STEEM and SBD just for posting your favorite music!\"](https://steemit.com/"+musictrends+"/@steemradio/music-trends-on-steem-radio-01-winners-announced-the-start-of-the-music-trends-on-steemradio-02)</sup>",
        "Browse some of the @steemradio tags: <br>[dance](https://steemit.com/created/steemradio-dance) | [pop](https://steemit.com/created/steemradio-pop) | [rock](https://steemit.com/created/steemradio-rock) | [latino](https://steemit.com/created/steemradio-latin) | [funk](https://steemit.com/created/steemradio-funk) | [alternative](https://steemit.com/created/steemradio-alternative) | [hip hop](https://steemit.com/created/steemradio-hiphop) | [electronic](https://steemit.com/created/steemradio-electronic) | [chill](https://steemit.com/created/steemradio-chill) | [reggae](https://steemit.com/created/steemradio-reggae) | [indie](https://steemit.com/created/steemradio-indie) | [country](https://steemit.com/created/steemradio-country) | [r&b/soul](https://steemit.com/created/steemradio-rnbsoul) | [jazz](https://steemit.com/created/steemradio-jazz) | [world](https://steemit.com/created/steemradio-world) | [dubstep](https://steemit.com/created/steemradio-dubstep) | [metal](https://steemit.com/created/steemradio-metal) | [powermetal](https://steemit.com/created/powermetal) | [edm](https://steemit.com/created/steemradio-edm) | [classical](https://steemit.com/created/steemradio-classical)",
        ""+atou("PGJyPlshW3N0ZWVtcmFkaW8tbG9nby1lYXBvLTEyOHB4LnBuZ10oaHR0cHM6Ly9zdGVlbWl0aW1hZ2VzLmNvbS9EUW1adzYyaEwyamN2eWFYQ0Q2RXVnaVU0eE1XcWhWWmkxUUhMVXl6S0tZOHhMQi9zdGVlbXJhZGlvLWxvZ28tZWFwby0xMjhweC5wbmcpXShodHRwczovL3N0ZWVtaXQuY29tL3N0ZWVtZGV2L0BlYXBvc3p0cm9mL2N1c3RvbXN1Ym1pdC1zdGVlbXJhZGlvLXYxLTAtZm9yLXN0ZWVtaXQtY29tLXJlbGVhc2VkKTxicj48c3ViPmNyZWF0ZWQgcXVpY2tseSB3aXRoIHRoZSBuZXc8c3VwPnYxPC9zdXA+IFtDdXN0b21TdWJtaXQgK1N0ZWVtUmFkaW8gc2NyaXB0XShodHRwczovL3N0ZWVtaXQuY29tL3N0ZWVtZGV2L0BlYXBvc3p0cm9mL2N1c3RvbXN1Ym1pdC1zdGVlbXJhZGlvLXYxLTAtZm9yLXN0ZWVtaXQtY29tLXJlbGVhc2VkKSBieSBAZWFwb3N6dHJvZjwvc3ViPg==")+"",
        "",
    ].join("\n");
    var css = [
        "/* @steemradio */",
        ".App__content {",
        " margin-top: 1em;",
        "}",
        "/* /steemradio */",
        ".SidePanel>div ul:nth-of-type(n+3) {",
        " margin-top: 1px;",
        "}",
        ".SidePanel>div .menu>li>a {",
        " padding: 0.3em 0.8em;",
        "}",
        ".SidePanel>div .menu>li>a {",
        " padding: 0.3em 0.8em;",
        "}",
        ".SidePanel .menu {",
        " -ms-flex-wrap: wrap !important;",
        " flex-wrap: wrap !important;",
        "border-bottom: #fff 1px solid;",
        "}",
        ".SidePanel .menu>li {",
        " -webkit-box-flex: 0;",
        " -ms-flex: 0 0 100% !important;",
        " flex: 0 0 100% !important;",
        "}",
    ].join("\n");

    console.log("%cSteemit.com %cCustomSubmit %c+SteemRadio! CustomScript %cby @eaposztrof", "color:#1a5099; font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif; font-size:large", "font-style: italic;font-size:large","color:#1a5099; font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif; font-size:large","font-family:consolas,courier");

    function atou(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.id = "SteemRadio";
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

        var mainMenu = $('.Header ul.HorizontalMenu.menu > *').detach();
        mainMenu.appendTo('.Header__top .columns:first-child ul.menu');

        // @steemradio
        if (window.location.href.indexOf("submit.html") > -1) {
            $('.SidePanel .menu:nth-child(3) li:nth-child(1)').fadeIn(200).attr('id','steemradio').html('<a href="#steemradio"><img src="https://steemitimages.com/132x48/https://steemitimages.com/DQmNvNEqwbFjYAL5FbJTVPRj3uFeqDxQ8Ap6q7ZEH7uQcKt/steemradio-logo-eapo.gif" width="132" height="48"></a>');
        } else {
        }

        $('.MarkdownViewer.Markdown > div a[href^="https://steemit.com/created/"]').live('click', function(e) {
            e.preventDefault();
            var cat = $('input[name="category"]');
            if(cat.val().indexOf('steemradio') > -1){
                cat.val(cat.val()+" "+this.href.replace('https://steemit.com/created/','')+'').focus();
            } else {
                cat.val("steemradio-music music "+musictrends+" "+cat.val()+this.href.replace('https://steemit.com/created/','')+'').focus();
            }
        });

        var textarea=$('.SubmitPost textarea');

        $('#steemradio > *').live('click', function(e) {
            e.preventDefault();
            var position = textarea.getCursorPosition();
            var oriContent = textarea.val();
            var newContent = oriContent.substr(0, position) + "\n"+ content +"\n" + oriContent.substr(position);
            textarea.val(newContent).focus().get(0).setSelectionRange(0,0);
        });

        // /steemradio
    });
})();
