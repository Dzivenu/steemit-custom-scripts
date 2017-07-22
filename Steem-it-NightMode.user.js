// ==UserScript==
// @name          Steemit.com NightMode
// @namespace     http://userstyles.org
// @description   Inverted colors of Steemit.
// @author        eaposztrof
// @updateURL     https://github.com/eapo/steemit-custom-scripts/raw/master/Steem-it-NightMode.user.js
// @downloadURL   https://github.com/eapo/steemit-custom-scripts/raw/master/Steem-it-NightMode.user.js
// @supportURL    https://github.com/eapo/steemit-custom-scripts/issues?q=is%3Aissue+is%3Aopen+-label%3Abug
// @icon          https://steemitimages.com/0x0/https://pbs.twimg.com/profile_images/863235834379632640/EaeAlfaC.jpg
// @homepageURL   https://steemit.com/@eaposztrof
// @include       http://steemit.com/*
// @include       https://steemit.com/*
// @include       http://*.steemit.com/*
// @include       https://*.steemit.com/*
// @require       https://code.jquery.com/jquery-1.8.3.js
// @run-at        document-start
// @version       0.1.4
// ==/UserScript==

(function() {var css = [
    "html, .UserProfile__banner.row.expanded, .App__content, div.Header__top.header, .UserProfile__top, .drag-and-drop, .App, .index-page, .Header, .menu, div.Header__sub-nav.expanded.show-for-medium.row, .Reputation, .PostsList__post_container, .dropdown-pane {",
    "background-color: #fefefe",
    "}",
    "body, .videoWrapper {",
    "filter: invert(1);",
    "}",
    ".Header__sub-nav li>a {",
    "border: none !important;",
    "}",
    "body, .SidePanel>div {",
    "box-shadow: inset 1px 1px 2px #333;",
    "padding: 1px;",
    "}",
    "img, body .Userpic, .PostSummary__image {",
    "opacity: 0.6;",
    "position: relative;",
    "filter:invert(1) !important",
    "}",
    "img:hover, .Userpic:hover, .PostSummary__image:hover {",
    "opacity: 1;",
    "}",
    ".PostsList .PostSummary__image:hover, body .Userpic:hover {",
    "position: absolute;",
    "min-width: 256px;",
    "min-height: 169px;",
    "background-position-y: 0;",
    "background-color: transparent;",
    "border: none;",
    "z-index: 999",
    "}",
    "body .Userpic:hover {",
    "min-width: 256px;",
    "min-height: 256px;",
    "border-radius: 0;",
    "margin-left: -200px;",
    "margin-top: -23px",
    "}",
    ".PostsList__post_container .PostFull, .ReplyEditor__options select  {",
    "border-bottom: 1px solid rgba(255, 255, 255, 0.26) !important;",
    "}",
    "[type=text], .ReplyEditor__title, .dropzone, .category, .SidePanel .menu {",
    "background-color: #111 !important;",
    "}",
    ".PostSummary__header>h3>a, .UserProfile__top-nav .menu>li>a {",
    "color: #1a5099;",
    "}",
    ".PostSummary__header>h3>a:visited {",
    "text-decoration: line-through !important;",
    "}",
    ".SubmitPost {",
    "min-height: 1000px !important;",
    "}",
    ".UserProfile__top-nav {",
    "padding: 0;",
    "}",
    ".UserProfile__banner>div.column, .UserProfile__banner>div.columns {",
    "opacity: 0.7;",
    "}",
    ".callout {",
    "}",
    "code, .Header__sub-nav li>a {",
    "}",
    "a, .PostFull__body a {",
    "opacity: 0.60;",
    "}",
    "a:focus, a:hover {",
    "opacity: 1;",
    "filter. invert(0) !important",
    "}",
    ".TagList__horizontal a {",
    "background-color: rgba(22, 69, 132, 0.25) !important;",
    "}",
    ".PostFull__time_author_category, .PostFull__footer .FoundationDropdownMenu__label, .PostFull__footer a, .PostFull__time_author_category, .Reblog__button path, .PostFull__footer span, .Icon>svg, .Icon span.icon, .PostSummary__reblogged_by, .PostSummary__reblogged_by .Icon path {",
    "}",
    "table, table th, table thead, table td, table tbody, table tfoot, table thead {",
    "background-color: transparent !important;",
    "box-shadow: inset -1px -1px 0px #ccc;",
    "padding: 0.2em 0.4em;",
    "}",
    ".SidePanel>div .menu>li>a, .VerticalMenu>li>a, blockquote, .UserProfile__banner .UserProfile__buttons label.button, .UserProfile__top-nav .menu>li>a.active, .UserProfile__top-nav  {",
    " background-color: transparent !important;",
    "}",
    ".SidePanel .menu>li>a {",
    "padding: 0.3em !important;",
    "}",
    ".SidePanel>div ul:nth-of-type(n+3) {",
    "margin-top: 1rem !important;",
    "}",
    ".Header__sub-nav.expanded.show-for-medium.row, .Header__top, [type=color], [type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], .ReplyEditor .Preview .Markdown, .drag-and-drop, .PostsList__post_container .PostFull, .ReplyEditor__options select {",
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
    "li.Header__userpic {",
    " margin-right: 50px;",
    "}",
    ".Header__top.header .columns {",
    " padding: 0;",
    "}",
    "li.Header__top-steemit, li.delim {",
    " display: none;",
    "}",
    "li.submit-story {",
    " padding: 0 !important;",
    " text-indent: -70px;",
    " display: none;",
    " overflow: hidden;",
    "}",
    "li.toggle-menu.Header__hamburger {",
    " position: absolute;",
    " top: 0;",
    " right: 0;",
    " background-color: #777;",
    "}",
    "li.show-for-small-only {",
    " display: block !important;",
    " padding: 0 !important;",
    "}",
    "li.show-for-small-only > a {",
    " padding: .7rem;",
    "}",
    "a span.Icon > * > * {",
    " fill: #164584 !important;",
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

 jQuery(document).ready(function($) {

     var mainMenu = $('.Header ul.HorizontalMenu.menu > *').detach();
     mainMenu.appendTo('.Header__top .columns:first-child ul.menu');

 })();

})();
