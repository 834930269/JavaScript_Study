var a=['Google','Apple','Microsoft'].sort();
//sort的默认规则是把元素转换成字符串然后比较大小
//所以如果直接对数字排序
var b=[10,20,1,2].sort();//[1,10,2,20]
//需要自定义排序规则
var c=[10,20,1,2];
c.sort(function(x,y){
	if(x<y){
		return -1;
	}
	if(x>y){
		return 1;
	}
	return 0;
});//[1,2,10,20]

/*
默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以
*/
var arr=['Google','Apple','Microsoft'];
arr.sort(function(s1,s2){
	x1=s1.toUpperCase();
	x2=s2.toUpperCase();
	if(x1<x2){
		return -1;
	}
	if(x1>x2){
		return 1;
	}
	return 0;
}); // ['apple', 'Google', 'Microsoft']

//最后友情提示，sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象
