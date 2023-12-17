// ==UserScript==
// @name         EasyCNBLOGS
// @description  这是一款促进博客园极致简洁和高效的插件。免费共享大量创新功能，如：净化页面等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      2.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyCNBLOGS/
// @supportURL   https://github.com/xcanwin/EasyCNBLOGS/
// @license      GPL-2.0-only
// @match        *://www.cnblogs.com/*/p/*.html
// @match        *://www.cnblogs.com/*/archive/*.html
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/482368/EasyCNBLOGS.user.js
// @updateURL https://update.greasyfork.org/scripts/482368/EasyCNBLOGS.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    /*电脑端净化样式*/
    const purify_style_pc = `
#blog_post_info_block /*隐藏[正文的][底部的]推荐关注*/
{
    display: none !important;
}

/*隐藏背景*/
html body {
    background: none !important;
    background-image: unset !important;
    background-color: unset !important;
}

/*展示全屏*/
body {
    margin-left: unset !important;
    margin-right: unset !important;
    margin-bottom: unset !important;
    padding: unset !important;
    padding-bottom: unset !important;
    display: flex;
    justify-content: center;
}
.post {
    border: unset !important;
    border-bottom-width: unset !important;
    border-right-width: unset !important;
    padding: unset !important;
    margin-bottom: unset !important;
    width: 80%;
}


`;

    //净化页面
    const purifyPage = function() {
        GM_addStyle(purify_style_pc);
    };

    //超净化页面
    const purifyPageSuper = function() {
        const p = $(".post");
        $('body').innerHTML = "";
        $('body').appendChild(p);
    };

    document.addEventListener("DOMContentLoaded", function() {
        purifyPageSuper();
    });

    purifyPage();

})();
