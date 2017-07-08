// ==UserScript==
// @name          Steemit.com NightMode
// @namespace     http://userstyles.org
// @version       0.0.2.3
// @description   Easier CSS on the eyes for Steemit.
// @author        eaposztrof
// @supportURL    https://steemit.com/steemit/@eaposztrof/steemit-com-mod-night-mode-v0-0-2#comments
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://github.com/eapo/steemit-custom-scripts
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @run-at        document-start
// @updateURL     https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/Steemit-mod-NightMode.user.js
// @downloadURL   https://raw.githubusercontent.com/eapo/steemit-custom-scripts/master/Steemit-mod-NightMode.user.js
// ==/UserScript==

(function() {var css = [
    "html, .App__content, div.Header__top.header, .UserProfile__top, .drag-and-drop, .App, .index-page, .PostSummary__content, .PostSummary, .Header, .menu, div.Header__sub-nav.expanded.show-for-medium.row, .Reputation, .PostsList__post_container, .dropdown-pane {",
     "background: none !important;",
     "background-color: #000 !important;",
    "}",
    ".Header__sub-nav li>a {",
     "border: none !important;",
    "}",
    "body, .SidePanel>div {",
     "color: #000 !important;",
     "min-height: 100%;",
     "background-color: #111;",
     "box-shadow: inset 1px 1px 2px #333;",
     "padding: 1px;",
    "}",
    "img, .Userpic, .PostSummary__image {",
     "opacity: 0.25;",
     "position: relative",
    "}",
    "img:hover, .Userpic:hover, .PostSummary__image:hover {",
     "opacity: 1;",
    "}",
    ".PostsList .PostSummary__image:hover {",
     "position: absolute;",
     "min-width: 256px;",
     "min-height: 169px;",
     "background-position-y: 0;",
     "background-color: transparent;",
     "border: none;",
     "z-index: 999",
    "}",
    ".PostsList__post_container .PostFull, .ReplyEditor__options select  {",
     "background-color: #000 !important;",
     "color: #888 !important;",
     "border-bottom: 1px solid rgba(255, 255, 255, 0.26) !important;",
    "}",
    "[type=text], .ReplyEditor__title, .dropzone, .upload-enabled, .category, span.Reputation {",
     "background-color: #111 !important;",
     "color: #888 !important;",
    "}",
    ".PostSummary__header>h3>a {",
     "color: #888 !important;",
    "}",
    ".PostSummary__header>h3>a:visited {",
     "text-decoration: line-through !important;",
    "}",
    ".SubmitPost {",
     "min-height: 1000px !important;",
    "}",
     ".UserProfile__top-nav {",
     "background-color: #000;",
     "padding: 0;",
    "}",
    ".UserProfile__banner>div.column, .UserProfile__banner>div.columns {",
     "background: rgba(35, 87, 157, 0.27) !important;",
     "background: linear-gradient(180deg,rgba(35, 87, 157, 0.27) 0,#000) !important;",
     "min-height: 155px;",
    "}",
    ".callout {",
     "background-color: #000;",
     "color: rgba(255, 255, 255, 0.25) !important;",
    "}",
    "code, .Header__sub-nav li>a {",
     "background-color: #343436 !important;",
     "color: #888 !important;",
    "}",
    "a, .PostFull__body a {",
     "opacity: 0.60;",
    "}",
    "a:focus, a:hover {",
     "opacity: 0.90;",
    "}",
    ".TagList__horizontal a {",
     "background-color: rgba(22, 69, 132, 0.25) !important;",
    "}",
    ".PostFull__time_author_category, .PostFull__footer .FoundationDropdownMenu__label, .PostFull__footer a, .PostFull__time_author_category, .Reblog__button path, .PostFull__footer span, .Icon>svg, .Icon span.icon, .PostSummary__reblogged_by, .PostSummary__reblogged_by .Icon path {",
     "color: rgba(255, 255, 255, 0.25) !important;",
     "fill: rgba(255, 255, 255, 0.25) !important;",
    "}",
    "table, table th, table thead, table td, table tbody, table tfoot, table thead {",
     "background-color: transparent !important;",
     "box-shadow: inset -1px -1px 1px #222;",
     "padding: 0.2em 0.4em;",
    "}",
    ".SidePanel>div .menu>li>a, .VerticalMenu>li>a, blockquote, .UserProfile__banner .UserProfile__buttons label.button, .UserProfile__top-nav .menu>li>a.active  {",
     "background-color: rgba(240, 240, 240, 0.3) !important;",
     "color: #000 !important;",
    "}",
    ".SidePanel .menu>li>a {",
     "padding: 0.3em !important;",
    "}",
    ".SidePanel>div ul:nth-of-type(n+3) {",
     "margin-top: 1rem !important;",
    "}",
    ".Header__sub-nav.expanded.show-for-medium.row, .Header__top, [type=color], [type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, .ReplyEditor .Preview .Markdown, .drag-and-drop, .PostsList__post_container .PostFull, .ReplyEditor__options select {",
     "border-color: #164584 !important;",
     "background: none transparent !important;",
    "}",
    ".UserWallet__balance.UserWallet__balance.zebra, table tbody tr:nth-child(2n) {",
     "background: rgba(242, 242, 242, 0.05);",
    "}",
    ".entry-content {",
     "color: #666 !important;",
    "}",
    ".SidePanel ul:last-of-type:after {",
     "content: 'Night Mode by @klye & @eaposztrof';",
     "color: rgba(240, 240, 240, 0.3);",
     "padding: 0.4em;",
     "font-size: small;",
    "}",
    ".SidePanel>div .close-button {",
     "background: #000;",
     "z-index: 9;",
     "padding: 0 0.2em;",
     "right: 1px;",
    "}",
    ".ReplyEditor.row {",
     "max-width: 100% !important;",
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
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        // no head yet, stick it whereever
        document.documentElement.appendChild(node);
    }    
}
})();
