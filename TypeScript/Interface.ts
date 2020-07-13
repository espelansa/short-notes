// 类型断言用在你肯定知道这是什么类型，然后告诉编译器的时候，减少不必要的类型检查

// 类型断言的两种方式

// 方法一：<>
let value1: any = 'string';
let length1: number = (<string>value1).length

// 方法二：as
let value2: any = 'string';
let length2: number = (value2 as string).length

