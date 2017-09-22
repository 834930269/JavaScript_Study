/*
除了列出的3种语言外，请再添加Pascal、Lua和Ruby，然后按字母顺序排序节点：

<!-- HTML结构 -->
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>
*/
'use strict';
var ul=$('test-div>ul');	
['Pascal','Lua','Ruby'].forEach(function(x){
	ul.append('<li><span>'+x+'</span></li>');
});
var arr=ul.children().get().sort(function(x,y){
	return $(x).text()>$(y).text?1:-1;
});
ul.append(arr);
// 测试:
;(function () {
    var s = $('#test-div>ul>li').map(function () {
        return $(this).text();
    }).get().join(',');
    if (s === 'JavaScript,Lua,Pascal,Python,Ruby,Swift') {
        alert('测试通过!');
    } else {
        alert('测试失败: ' + s);
    }
})();
