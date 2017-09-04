//自增id
'use strict';
function* next_id() {
	var piid=1;
	while(1){
		yield piid;
		piid++;
	}
}
// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        alert('测试失败!');
        break;
    }
}
if (pass) {
    alert('测试通过!');
}