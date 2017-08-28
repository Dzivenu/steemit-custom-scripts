// ==UserScript==
// @name          DTube + js-markdown-extra
// @description   Automaticaly Convert DTube Markdown comments to HTML in browser supported by jsdelivr.net CDN
// @author        eaposztrof
// @updateURL     https://github.com/eapo/steemit-custom-scripts/raw/master/DTube+js-markdown-extra.user.js
// @downloadURL   https://github.com/eapo/steemit-custom-scripts/raw/master/DTube+js-markdown-extra.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof
// @include       https://dtube.video/*
// @require       https://cdn.jsdelivr.net/js-markdown-extra/1.2.4/js-markdown-extra.min.js
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       0.1.0
// ==/UserScript==

(function() {
    var css = [
        "/* @eaposztrof */",
        "h3.ui.dividing.header {",
        " border: outset 1px;",
        " border-radius: 4px;",
        " padding: 0.1em 0.4em;",
        " cursor: pointer;",
        " box-shadow: 1px 1px 9px -5px;",
        "}",
        "h3.ui.dividing.header:after {",
        " content: 'Click for Markup ♥';",
        " font-size: small;",
        " color: gray;",
        " float: right;",
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

    $(document).on('click', 'h3.ui.dividing.header' , function(e){
        e.preventDefault();
        console.log(e);
        $('.comment .text').each(function() {
//			var comment_nolink = $(this).html().replace(/\[\!\[(.*)\]\(<a href\=\"(.*?)\)\]\((.*?)\"(.*?)>(.*?)<\/\a>\)/gi,'<a href="$3" class="comment-url"$4><img src="$2" class="comment-img" alt="$1" /></a>'); // sub, sup not supported
            var comment_nolink = $(this).html().replace(/\[\!\[(.*)\]\(<a href\=\"(.*?)\)\]\((.*?)\"(.*?)>(.*?)<\/\a>\)/gi,'<a href="$3" class="comment-url"$4><img src="$2" class="comment-img" alt="$1" /></a>').replace(/\^(.*?)\^/g, '<sup>$1</sup>').replace(/\~(.*?)\~/g, '<sub>$1</sub>');
            var comment_nobr = comment_nolink.replace(/<br>/gi,'\n');
            var toMarkdown = comment_nobr.replace(/^\s+|^\t+/g, '');

            // https://github.com/tanakahisateru/js-markdown-extra compatibility
            $( this ).html(Markdown(toMarkdown));

// @require       https://cdnjs.cloudflare.com/ajax/libs/markdown.js/0.5.0/markdown.min.js
//            $( this ).html(markdown.toHTML(toMarkdown));

        });
    });

})();
