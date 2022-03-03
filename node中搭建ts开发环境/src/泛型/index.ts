// function take<T>(arr: T[], n: number) {
//     if(n >= arr.length) {
//         return arr;
//     }
//     const newArr: T[] = [];
//     for (let index = 0; index < n; index++) {
//         newArr.push(arr[index]);
//     }
//     return newArr;
// }

// const res = take<number>([1,2,3,4], 2);
// console.log(res);


// 类型别名
// type callback<T> = (n: T, i: number) => boolean

// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     arr.forEach((n, i) => {
//         if(callback(n, i)) {
//             newArr.push(arr[i]);
//         }
//     })
//     return newArr;
// }

// const res = filter<number>([1,2,3,4], n => n % 2 === 0);
// console.log(res);

// 接口
// interface callback<T> {
//     (n: T, i: number): boolean
// }

// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     arr.forEach((n, i) => {
//         if (callback(n, i)) {
//             newArr.push(arr[i]);
//         }
//     })
//     return newArr;
// }

// const res = filter<number>([1, 2, 3, 4], n => n % 2 === 0);
// console.log(res);

// 类
// class ArrayHelper<T> {
//     constructor(private arr: T[]) {

//     }
// }

// const o = new ArrayHelper<string>(['1']);


// 泛型约束
/**
 * 将名字的首字母大写
 */

// interface hasNameProp {
//     name: string
// }
// // 接口的继承
// function nameToBigWrite<T extends hasNameProp>(obj: T): T {
//     obj.name = obj.name.split(" ").map(item => item[0].toUpperCase() + item.substr(1)).join(" ");
//     return obj;
// }

// const o = {
//     name: 'jack tang',
//     age: 18,
//     sex: 0
// }

// const newO = nameToBigWrite(o);
// console.log(newO)

/**
 * 将两个相同长度的数组混合 [1, 2, 3]  ['a', 'b', 'c'] =====> [1, 'a', 2, 'b', 3, 'c']
 */
function mixinArr<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    if(arr1.length !== arr2.length) {
        throw new Error('length is error');
    }
    const newArr: (T | K)[] = [];
    for (let index = 0; index < arr1.length; index++) {
        newArr.push(arr1[index]);
        newArr.push(arr2[index]);
    }
    return newArr;
}

let newArr = mixinArr([1, 2, 3], ['a', 'b', 'c']);
console.log(newArr)
