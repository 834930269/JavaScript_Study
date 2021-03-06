/*
<!-- HTML结构 -->
<form id="test-form" action="test">
    <legend>请选择想要学习的编程语言：</legend>
    <fieldset>
        <p><label class="selectAll"><input type="checkbox"> <span class="selectAll">全选</span><span class="deselectAll">全不选</span></label> <a href="#0" class="invertSelect">反选</a></p>
        <p><label><input type="checkbox" name="lang" value="javascript"> JavaScript</label></p>
        <p><label><input type="checkbox" name="lang" value="python"> Python</label></p>
        <p><label><input type="checkbox" name="lang" value="ruby"> Ruby</label></p>
        <p><label><input type="checkbox" name="lang" value="haskell"> Haskell</label></p>
        <p><label><input type="checkbox" name="lang" value="scheme"> Scheme</label></p>
        <p><button type="submit">Submit</button></p>
    </fieldset>
</form>
*/

/*
绑定合适的事件处理函数，实现以下逻辑：

当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；

当用户去掉“全不选”时，自动不选中所有语言；

当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；

当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；

当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。
*/

'use strict';

var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});
// TODO:绑定事件
selectAll.click(function(){
if(selectAll.prop('checked')){
langs.prop('checked',true);
        selectAllLabel.hide();
        deselectAllLabel.show();
}else{
langs.prop('checked',false);
        deselectAllLabel.hide();
        selectAllLabel.show();
}
});

invertSelect.click(function() {
    langs.each(function() {
        if ($(this).prop('checked')) {
            $(this).prop('checked', false);
        } else {
            $(this).prop('checked', true);
        }
    });
    langs.change();
});



langs.change(function() {
    let hasCheckedCount = form.find('[name="lang"]:checked').length;

    if (hasCheckedCount === langs.length) {
        selectAll.prop('checked', true);
        selectAllLabel.hide();
        deselectAllLabel.show();
    } else {
        selectAll.prop('checked', false);
        deselectAllLabel.hide();
        selectAllLabel.show();
    }
});

// 测试:
alert('请测试功能是否正常。');