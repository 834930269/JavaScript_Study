//选择器是jQuery的核心。一个选择器写出来类似$('#dom-id')。
//前提引用JQuery
//a按ID查找
//<div id="abc">
var div=$('#abc');//返回一个JQuery对象

//jQuery对象和DOM对象之间可以互相转化：

var div = $('#abc'); // jQuery对象
var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
var another = $(divDom); // 重新把DOM包装为jQuery对象

//按tag查找
var ps=$('p');
ps.length;//多少个<p>节点

//按Class查找
//注意在class名称前加一个.
var a=$('.red');//所有节点包含class=red的都返回
// 例如:
// <div class="red">...</div>
// <p class="green red">...</p>

//多个class
var a = $('.red.green'); // 注意没有空格！H

//按属性查找
var email=$('[name=email]');// 找出<??? name="email">
var passwordInput = $('[type=password]'); // 找出<??? type="password">
var a = $('[items="A B"]'); // 找出<??? items="A B">
//当属性的值包含空格等特殊字符时，需要用双引号括起来。

var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
// 例如: class="icon-clock", class="abc icon-home"


var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
// 例如: name="icon-1", name="icon-2"
var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
// 例如: name="startswith", name="endswith"


/*组合查找就是把上述简单选择器组合起来使用。如果我们查找$('[name=email]')，很可能把表单外的<div name="email">也找出来，但我们只希望查找<input>，就可以这么写：*/

var emailInput = $('input[name=email]'); // 不会找出<div name="email">


//同样的，根据tag和class来组合查找也很常见：

var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>


/*多项选择器

多项选择器就是把多个选择器用,组合起来一块选：*/

$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
