// 类型断言用在你肯定知道这是什么类型，然后告诉编译器的时候，减少不必要的类型检查

// 类型断言的两种方式

// 方法一：<>
let valueA: any = 'string';
let lengthA: number = (<string>valueA).length

// 方法二：as
let value2: any = 'string';
let length2: number = (value2 as string).length



// Interface

// 1. readonly 表示只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5;         error!

// TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;       error!
// ro.push(5);       error!
// ro.length = 100;  error!
// a = ro;           error!


// 2. ? 表示可选属性
interface SquareConfig {
  color?: string
  width?: Number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  return newSquare
}
let mySquare = createSquare({ color: "black" })
console.log(mySquare) // { color: 'white', area: 100 }


// 3. 额外属性检查
// 上述 mySquare 如果传入参数如果为 { colour: 'red' } 则会报错，原因是对象字面量赋值给变量/作为参数传递的时候会经过额外属性检查，一旦存在目标类型不包含的属性就会报错。

// 绕开检查的方法一和方法二：类型断言的两种方法
let anotherSquare1 = createSquare({ colour: 'red' } as SquareConfig);
let anotherSquare2 = createSquare((<SquareConfig>{ colour: 'red' }));

// 绕开检查的方法三：增加任意数量的其他属性（最佳）
interface NewSquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}
function newCreateSquare(config: NewSquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  return newSquare
}
let anotherSquare3 = newCreateSquare({ colour: 'red' })

// 绕开检查的方法四：把字面量先赋值给一个变量，再用变量传参
let squareOptions = { colour: "red", width: 100 };
let anotherSquare4 = createSquare(squareOptions);



