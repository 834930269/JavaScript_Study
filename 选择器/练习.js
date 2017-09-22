/*使用jQuery选择器分别选出指定元素：

    仅选择JavaScript

    仅选择Erlang

    选择JavaScript和Erlang

    选择所有编程语言

    选择名字input

    选择邮件和名字input

<!-- HTML结构 -->
<div id="test-jquery">
    <p id="para-1" class="color-red">JavaScript</p>
    <p id="para-2" class="color-green">Haskell</p>
    <p class="color-red color-green">Erlang</p>
    <p name="name" class="color-black">Python</p>
    <form class="test-form" target="_blank" action="#0" onsubmit="return false;">
        <legend>注册新用户</legend>
        <fieldset>
            <p><label>名字: <input name="name"></label></p>
            <p><label>邮件: <input name="email"></label></p>
            <p><label>口令: <input name="password" type="password"></label></p>
            <p><button type="submit">注册</button></p>
        </fieldset>
    </form>
</div>

运行查看结果：*/
'use strict';

var selected = null;
selected = $('#para-1'); 
//selected = $('[class="color-red color-green"]') 
//selected = $('.color-red') 
//selected = $('p[class^="color"]') 
//selected = $('input[name="name"]')
//selected = $('input[name=name],input[name=email]');

// 高亮结果:
if (!(selected instanceof jQuery)) {
    return alert('不是有效的jQuery对象!');
}
$('#test-jquery').find('*').css('background-color', '');
selected.css('background-color', '#ffd351');