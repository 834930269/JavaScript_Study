//对象
var xiaoming={
    name:'小明',
    birth:1990,
    age:function(){
		//JS的设计缺陷,所以最好在一开始捕获this,接下来用that
		var that=this;
		var y = new Date().getFullYear();
		return y-that.birth;
    }
};

//----------------
function getAge(){
		var y = new Date().getFullYear();
		return y-this.birth;
}

//apply修复this指向缺陷
var xiaoming2={
    name:'小明',
    birth:1990,
	age: getAge
};

xiaoming2.age();
getAge.apply(xiaoming,[]);

//装饰器
var count=0;
var oldParseInt=parseInt;//保存原函数

window.parseInt=function (){
	count+=1;
	return oldParseInt.apply(null,arguments);
};
parseInt('10');
parseInt('20');
parseInt('30');
count;

//高阶函数
function add(x,y,f){
	return f(x)+f(y);
}

add(-5,6,Math.abs);
