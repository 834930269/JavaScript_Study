//插入的节点如果过本来就存在,那么会直接把对应的节点删除以后在插入

//一般是从零插入

var 
	list=document.getElementById('list');
	haskell=document.createElement('p');
haskell.id='haskell';
haskell.innerText='Haskell';
list.appendChild(haskell);
/*
Result
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>
*/

//创建一个css节点,动态添加到head节点末尾
var d=document.createElement('style');
d.setAttribute('type','text/css');
d.innerHTML='p{color:red}';
document.getElementsByTagName('head')[0].appendChild(d);

//插入到指定位置之前
var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);
/*
新结果如下
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
*/

//遍历后插入
var
    i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}