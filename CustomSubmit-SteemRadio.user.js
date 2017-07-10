// ==UserScript==
// @name          Steemit.com CustomSubmit +SteemRadio
// @description   Easier to post to @SteemRadio's #musictrends01 contest
// @author        eaposztrof
// @updateURL     https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-SteemRadio.user.js
// @downloadURL   https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/CustomSubmit-SteemRadio.user.js
// @supportURL    https://steemit.com/steemit/@eaposztrof
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://github.com/eapo/steemit-custom-scripts
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       0.2
// ==/UserScript==

(function() {
    var css = [
        "/* @steemradio */",
        ".App__content {",
        " margin-top: 1em;",
        "}",
        "/* /steemradio */",
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
        node.id = "SteemRadio";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            document.documentElement.appendChild(node);
        }
    }

    jQuery(document).ready(function($) {

        var mainMenu = $('ul.HorizontalMenu.menu>li').detach();
        mainMenu.appendTo('.Header__top.header > .row > .columns:first-child > ul.menu');

        // @steemradio
        if (window.location.href.indexOf("submit.html") > -1) {
            $('.Header__top.header .columns:first-child ul.menu > li:first-child').fadeIn(200).attr('id','steemradio').html('<a href="#steemradio"><img src="https://steemitimages.com/132x48/https://steemitimages.com/DQmNvNEqwbFjYAL5FbJTVPRj3uFeqDxQ8Ap6q7ZEH7uQcKt/steemradio-logo-eapo.gif" width="132" height="48"></a>');
        } else {
        }
        var content = [
            "<center>[![steemradio-logo-eapo.gif](https://steemitimages.com/DQmNvNEqwbFjYAL5FbJTVPRj3uFeqDxQ8Ap6q7ZEH7uQcKt/steemradio-logo-eapo.gif)](https://steemit.com/steemradio/@eaposztrof/customsubmit-steemradio-custom-script-for-steemit-com)<br><sub>generated with the new [CustomSubmit +SteemRadio scrip](https://steemit.com/steemradio/@eaposztrof/customsubmit-steemradio-custom-script-for-steemit-com) by @eaposztrof</sub></center>",
            "paste URL here",
            "- - -",
            "This is my entry for @steemradio's #musictrends01 - [\"Win STEEM and SBD just for posting your favorite music!\"](https://steemit.com/musictrends01/@steemradio/music-trends-on-steem-radio-01-post-your-favorite-music-and-win-steem-sbd)",
            "- - -",
            "Browse some of the @steemradio tags: [dance](https://steemit.com/created/steemradio-dance) | [pop](https://steemit.com/created/steemradio-pop) | [rock](https://steemit.com/created/steemradio-rock) | [latino](https://steemit.com/created/steemradio-latin) | [funk](https://steemit.com/created/steemradio-funk) | [alternative](https://steemit.com/created/steemradio-alternative) | [hip hop](https://steemit.com/created/steemradio-hiphop) | [electronic](https://steemit.com/created/steemradio-electronic) | [chill](https://steemit.com/created/steemradio-chill) | [reggae](https://steemit.com/created/steemradio-reggae) | [indie](https://steemit.com/created/steemradio-indie) | [country](https://steemit.com/created/steemradio-country) | [r&b/soul](https://steemit.com/created/steemradio-rnbsoul) | [jazz](https://steemit.com/created/steemradio-jazz) | [world](https://steemit.com/created/steemradio-world) | [dubstep](https://steemit.com/created/steemradio-dubstep) | [metal](https://steemit.com/created/steemradio-metal) | [powermetal](https://steemit.com/created/powermetal) | [edm](https://steemit.com/created/steemradio-edm) | [classical](https://steemit.com/created/steemradio-classical)",
            "",
        ].join("\n");

        $('.MarkdownViewer.Markdown > div a[href^="https://steemit.com/created/"]').live('click', function(e) {
            e.preventDefault();
            var cat = $('input[name="category"]');
            if(cat.val().indexOf('steemradio') > -1){
                cat.val(cat.val()+" "+this.href.replace('https://steemit.com/created/','')+'').focus();
            } else {
                cat.val("steemradio-music music musictrends01 "+cat.val()+this.href.replace('https://steemit.com/created/','')+'').focus();
            }
        });

        $('#steemradio > *').live('click', function(e) {
            e.preventDefault();
            $('.SubmitPost textarea').val(content).focus().get(0).setSelectionRange(428,442);
        });

        // /steemradio
    });

})();
