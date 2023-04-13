<!--
 * @Author       : topfivegao
 * @Date         : 2023-04-04 17:55:09
 * @FilePath     : /front-end-interviews-resources/基础部分/HTML.md
 * @LastEditTime : 2023-04-04 23:25:56
 * @Description  : 有空一起吃个饭啊!	微信联系 treeshaking666
 * 
 * Copyright (c) 2023 by topfivegao, All Rights Reserved. 
-->
# 1. html 行内元素有哪些？块级元素有哪些？

## 行内元素 **span** **input** **img** ...( 行内元素设置宽高属性不生效，根据内含文字确定。 )
## 块级元素 **div** **p** **h1-h6** **header** **section** **footer** ...
## 空元素 **br**  **hr** 
&nbsp;
## 元素类型转换 
* display: inline;        (不独占一行，设置 width height 无效 )
* display: inline-block;  (不独占一行，设置 width height 有效 ) 
* display: block;         (独占一行，设置 width height 有效 )  
&nbsp;

# 2. 页面导入样式时，link 和 @import 有啥区别？
## link 是**html**标签，是先出现的技术方案，兼容性要比 @import 好些，而 @import 是写在css中的。
## 浏览器会先加载 link ， 后加载 @import 。
&nbsp;

# 3. html 标签 title 和 h1 、string 和 b 、 em 和 i 有啥区别？
## title 概括了网站信息，告诉搜索引擎和用户，网站的主题是什么；
## h1 概括了 html 内容的主题，告诉搜索引擎这个页面的主题是什么。
## strong 逻辑标签，用来加强字符语气的 和 b 都有加粗样式的意思。
## em 逻辑标签，用来加强字符语气的 和 i 都有加斜样式的意思。

&nbsp;

# 4. img 标签的 title 和 alt 的区别？
* title 是鼠标指向图片时提示的文字。
* alt 是图片加载失败时展示的文字，用于描述图片，有seo优化的作用。