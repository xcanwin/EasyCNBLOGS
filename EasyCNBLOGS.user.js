// ==UserScript==
// @name         EasyCNBLOGS
// @description  这是一款促进博客园极致简洁和高效的插件。免费共享大量创新功能，如：净化页面等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      1.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyCNBLOGS/
// @supportURL   https://github.com/xcanwin/EasyCNBLOGS/
// @license      GPL-2.0-only
// @match        *://www.cnblogs.com/*/p/*.html
// @match        *://www.cnblogs.com/*/archive/*.html
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    /*电脑端净化样式*/
    const purify_style_pc = `
#top_nav /*隐藏[置顶的][顶部的]菜单栏*/,
#top /*隐藏[置顶的][顶部的]菜单栏2*/,
#mynavbar /*隐藏[置顶的][顶部的]菜单栏3*/,
#navigator /*隐藏[置顶的][顶部的]菜单栏4*/,
#mytopmenu /*隐藏[置顶的][顶部的]菜单栏5*/,
#header /*隐藏[正文的][顶部的]用户介绍*/,
#leftmenu /*隐藏[左边的]栏*/,
#leftcontent /*隐藏[左边的]栏2*/,
#sideBar /*隐藏[右边的]栏*/,
#right_meun /*隐藏[右边的]栏2*/,
#blog_post_info_block /*隐藏[正文的][底部的]推荐关注*/,
#comment_form /*隐藏[正文的][底部的]登录提示和推荐文章*/,
#footer /*隐藏[正文的][底部的]powered by*/,
.footer /*隐藏[正文的][底部的]powered by2*/
{
    display: none !important;
}
`;

    //净化页面
    const purifyPage = function() {
        GM_addStyle(purify_style_pc);
    };

    purifyPage();

})();
