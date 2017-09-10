//在函数里不能全部声明,我不知道为什么
/*
利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：

    用户名必须是3-10位英文字母或数字；

    口令必须是6-20位；

    两次输入口令必须一致。

<!-- HTML结构 -->
<form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>
*/
'use strict';
var checkRegisterForm = function () {
	var f1=document.getElementById('username');
	var f2=document.getElementById('password');
	var f3=document.getElementById('password-2');
	if(f2.value!=f3.value){
		alert(f3.value,f2.value);
		return false;
	}
  
	if(f2.value.length<6||f2.value.length>20){
		alert("错了兄弟");
		return false;
	}
	var st=f1.value;
	var str = /^[A-Za-z0-9]*$/;
	if(!str.test(st)) return false;
    return true;
}
//其实可以全用正则的
// 测试:
;(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
            bubbles: true,
            cancelable: true
          });
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();