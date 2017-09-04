var c=x=>{
	if(x>0){
		return x*x;
	}
	else{
		return -x*x;
	}
};
c(5);

//多参数
(x,y)=>x*x+y*y;
//可变参数
(x,y,...rest)=>{
	var i,sum=x+y;
	for(i=0;i<rest.length;++i){
		sum+=rest[i];
	}
	return sum;
}
//无参数
()=>3.14;

//如果要返回一个对象
x=>{foo: x}
//SyntaxError
//因为和函数体的{...}有语法冲突,所以要改为
// ok;
x=>({ foo: x })
//箭头函数修复了this的此法作用域
var obj={
	birth:1990,
	getAge: function(){
		var v=this.birth;//1990
		var fn=(y)=>y-this.birth;
		//var fn=()=>new Date().getFullYear()-this.birth;
		//return fn();
		return fn.call({birth:2000},year);//因为this已经在肩头函数中按照此法作用域被绑定了
		//所以call或者apply调用见图函数时,无法对this进行绑定
		//即传入的birth:2000无效
	}
};
obj.getAge(2015);//25
