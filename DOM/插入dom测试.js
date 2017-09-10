/*


对于一个已有的HTML结构：

    Haskell
    JavaScript
    Python
    Ruby
    Scheme

<!-- HTML结构 -->
<ol id="test-list">
    <li class="lang">Scheme</li>
    <li class="lang">JavaScript</li>
    <li class="lang">Python</li>
    <li class="lang">Ruby</li>
    <li class="lang">Haskell</li>
</ol>

按字符串顺序重新排序DOM节点：
*/
'use strict';
// sort list:
function sorttp(a,b){
if(a>b)return 1;
else return 0;
}
var tp=document.getElementsByClassName('lang');
var le=document.getElementById('test-list');

var arr=Array.from(tp,function(x){
return x.innerText;
});
arr.sort(sorttp);
// 将arr里的元素重新转换为<li>元素包裹的形态
arr.forEach(function(ele, index, array) {
  var item = `<li class="lang">${ele}</li>`;
  array[index] = item;
})

// 将数组转化为字符串
// 得到'<li>...</li><li>...</li<li>...</li>'
var node = arr.join('')

// 通过innerHTML重写ol
le.innerHTML = node;
//测试
(function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 5) {
        arr = [];
        for (i=0; i<t.children.length; i++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
            alert('测试通过!');
        }
        else {
            alert('测试失败: ' + arr.toString());
        }
    }
    else {
        alert('测试失败!');
    }
})();