var Student = {
	name:'Robot',
	height:1.6,
	run: function(){
		console.log(this.name+'is running...');
	}
};

var xiaoming={
	name:'小明'
}
xiaoming.__proto__=Student;
xiaoming.name;

//但是尽量不要使用__proto__
//低版本IE不兼容
function createStudent(name){
	//基于student原型创建一个对象
	var s=Object.create(Student);
	s.name=name;
	return s;
}
var xiaoming=createStudent('小明');

xiaoming.run();
xiaoming.__proto__==Student;