//构造函数法创建对象
function Student(name){
	this.name=name;
	this.hello=function(){
		alert('Hello,'+this.name+'!');
	}
}

var xiaoming=new Student('小明');
xiaoming.name;
xiaoming.hello();