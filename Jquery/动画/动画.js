var div = $('#test-show-hide');
div.hide(3000); // 在3秒钟内逐渐消失
//这就是动画
//toggle()方法则根据当前状态决定是show()还是hide()。
/*
slideUp / slideDown

你可能已经看出来了，show()和hide()是从左上角逐渐展开或收缩的，而slideUp()和slideDown()则是在垂直方向逐渐展开或收缩的。

slideUp()把一个可见的DOM元素收起来，效果跟拉上窗帘似的，slideDown()相反，而slideToggle()则根据元素是否可见来决定下一步动作：

fadeIn / fadeOut

fadeIn()和fadeOut()的动画效果是淡入淡出，也就是通过不断设置DOM元素的opacity属性来实现，而fadeToggle()则根据元素是否可见来决定下一步动作：
*/

//自定义动画 animate(),在一段时间内逐渐到达目的状态，第三个参数是结束时执行
var div = $('#test-animate');
div.animate({
    opacity: 0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('动画已结束');
    // 恢复至初始状态:
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
}); // 在3秒钟内CSS过渡到设定值

//----------淡入淡出删除表格
'use strict';

function deleteFirstTR() {
    var tr = $('#test-table>tbody>tr:visible').first();
	tr.slideUp(1000,tr.remove.bind(0));
}

deleteFirstTR();