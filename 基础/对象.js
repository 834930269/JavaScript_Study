//JS的对象是一组由键-值组成的无序集合
var person = {
	name:'Bob',
	age:20,
	tags:['js','web','mobile'],
	city:'Beijing',
	hasCar:true,
	zipcode:null
};
//如果对象中必须加入特殊字符
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
//访问不能通过'.'
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'

//由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性：
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
//检测对象中是否存在属性
xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false

//不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：
'toString' in xiaoming; // true
//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法：
xiaoming.hasOwnProperty('name');
xiaoming.hasOwnProperty('toString');
