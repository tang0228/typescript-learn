
// 接口对象
// interface User {
//     name: string
//     age: number
// }
// let u:User = {
//     name: "tyq",
//     age: 123
// }

// 接口函数
// interface Condition {
//     (n: number): boolean
// }

// function sum(numbers: number[], callback: Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if(callback(n)) {
//             s += n;
//         }
//     });
//     console.log(s);
// }

// sum([1,2,3,4,5], (n) => {
//     return n %2 !== 0;
// })

// 接口继承
// interface A {
//     T1: string
// }

// interface B {
//     T2: number
// }

// interface C extends A, B {
//     T3: boolean
// }

// let c:C = {
//     T1: "tyq",
//     T2: 12,
//     T3: true
// }

// type A = {
//     T1: string
// }

// type B = {
//     T2: number
// }

// type C = {
//     T3: boolean
// } & A & B

// let c: C = {
//     T1: "tyq",
//     T2: 12,
//     T3: true
// }

// 修饰符只读 readonly
// interface User {
//     readonly id: string
//     name: string
//     age: number
// }

// let u: User = {
//     id: "123",
//     name: "tyq",
//     age: 18
// }

// const arr: readonly number[] = [1,2,3,4];

// type User = {
//     id: string
//     name: string
//     age: number
//     readonly loves: readonly string[]
// }

// let u:User = {
//     id: "1",
//     name: "tyq",
//     age: 12,
//     loves: ["ball", "swim"]
// }




