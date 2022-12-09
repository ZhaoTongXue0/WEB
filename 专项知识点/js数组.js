//创建空数组两种方法
// let arr = new Array();
let arrOne = [];

let arrTwo = [1,2,3,4,"赵同学",true,false];
//数组里的1,2,3,4,"赵同学"等成为数组元素

//输出数组元素
console.log(arrTwo);

//数组索引 从0开始与C相同
console.log(arrTwo[4]);
console.log(arrTwo[7]); //没有返回undefined

let str = "";
for ( let i =0;i<arrTwo.length;i++){
    str += arrTwo[i] + "|";
}
console.log(str);

let num;
let j = arrTwo.length;
for (let i = 0; i < arrTwo.length; i++){
    num = arrTwo[i];
    arrTwo[i] = arrTwo[--j] ;
    arrTwo[j] = num;
}
console.log(arrTwo);
