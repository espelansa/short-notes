// 1. 函数（类型）定义
// 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空
// 但是 void 并没有什么约束力

// 方法一：
function add1(x: number, y: number) {
  return x + y
}

// 方法二：
let add2: (x: number, y: number) => number
let add2Complete: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; }

// 方法三：
type add3 = (x: number, y: number) => void
let add3Complete: add3 = (x: number, y: number) => { return x + y }

// 方法四：
interface add4 {
  (x: number, y: number): number
}
let add4Complete: add4 = (x: number, y: number) => x + y


// 2. 
