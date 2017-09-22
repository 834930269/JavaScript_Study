$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点

$('ul.lang li:first-child'); // 仅选出JavaScript
$('ul.lang li:last-child'); // 仅选出Lua
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素


表单相关

针对表单元素，jQuery还有一组特殊的选择器：

    :input：可以选择<input>，<textarea>，<select>和<button>；

    :file：可以选择<input type="file">，和input[type=file]一样；

    :checkbox：可以选择复选框，和input[type=checkbox]一样；

    :radio：可以选择单选框，和input[type=radio]一样；

    :focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；

    :checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；

    :enabled：可以选择可以正常输入的<input>、<select>
    等，也就是没有灰掉的输入；

    :disabled：和:enabled正好相反，选择那些不能输入的。

此外，jQuery还有很多有用的选择器，例如，选出可见的或隐藏的元素：

$('div:visible'); // 所有可见的div
$('div:hidden'); // 所有隐藏的div
