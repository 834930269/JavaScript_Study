/*
JSON有如下几种类型

    number：和JavaScript的number完全一致；
    boolean：就是JavaScript的true或false；
    string：就是JavaScript的string；
    null：就是JavaScript的null；
    array：就是JavaScript的Array表示方式——[]；
    object：就是JavaScript的{ ... }表示方式。

JSON还定死了字符集必须是UTF-8
JSON的字符串规定必须用双引号""，Object的键也必须用双引号""
*/

//序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
JSON.stringify(xiaoming);
//"{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}"

//输出的好看一些,可以加上参数,按缩进输出
JSON.stringify(xiaoming,null,' ');
//第二个参数用于筛选对象的键值
JSON.stringify(xiaoming, ['name', 'skills'], '  ');

//还可以传入一个函数,这样每个对象的每个键值都会被函数先处理
function convert(key,value){
	if(typeof value == 'string'){
		return value.toUpperCase();
	}
	return value;
}

JSON.stringify(xiaoming,convert,' ');

//可以直接在对象中定义一个toJSON方法,直接返回JSON应序列化的数据
var xiaoming2 = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
	toJSON: function(){
		return{
			'Name':this.name,
			'Age':this.age
		};
	}
};
JSON.stringify(xiaoming2);

//反序列化
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

//parse还可以接受一个函数,用于转换解析出的属性
JSON.parse('{"name":"小明","age":14}',function(key,value){
	if(key=='name'){
		return value+'同学';
	}
	return value;
});

//Yahoo天气API
/*
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json
*/