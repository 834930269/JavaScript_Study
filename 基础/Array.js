//js的数组可以是任意类型
var arr=[1,2,3.14,'Hello',null,true];
//另一种方法
new Array(1,2,3);
arr.length;//6
//JS可以对length赋值
arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
arr = ['A', 'B', 'C'];
arr[1] = 99;
arr; // arr现在变为['A', 99, 'C']
//js可以越界赋值
arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']

//indexOf
arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2

//slice切片,切string的区间,返回一个string,切Array,返回Array
arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
//不赋值则切全部
arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false

//push()向Array的末尾添加若干元素，pop()
//则把Array的最后一个元素删除掉：

//如果要往Array的头部添加若干元素，使用
//unshift()方法，shift()方法则把Array的第一个元素删掉：

//sort
arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']
//反转数组,reverse()

//splice修改Array的方法
arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

//concat连接任意个元素和Array->自动拆开Array
arr=['A','B','C'];
var added=arr.concat([1,2,3]);
added;
arr;

//join他把当前Array每个元素都用指定的字符串连接起来
//然后返回连接字符串:
arr=['A','B','C',1,2,3];
arr.join('-');//'A-B-C-1-2-3'

//多维数组
arr=[[1,2,3],[400,500,600],'-'];

//-----------*-------------练习
//练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！
arr = ['小明', '小红', '大军', '阿黄'];
alert(`欢迎${arr.sort().slice(0,3).join(',')}和${arr[3]}同学`);
