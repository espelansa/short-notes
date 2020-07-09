// 3/4 Mapped Types

interface obj {
  a: string
  b: number
  c: boolean
}

// 三种同态的
type ReadonlyObj = Readonly<obj>

type PartialObj = Partial<obj>

type PickObj = Pick<obj, 'a' | 'b'>

// 非同态的
type RecordObj = Record<'prop1' | 'prop2' | 'prop3', obj>



// 4/4 Conditional Types

// T extends U ? X : Y
// T类型可赋值给类型U，结果类型就是X，否则就是Y

type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// 分布式条件类型
// (A | B) extends U ? X : Y <=> (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]>;
type T4 = TypeName<'a' | 124>; // "string" | "number"

// 利用这个特性实现一些类型过滤
type Diff<T, U> = T extends U ? never : T
// 实际作用是从T中过滤掉属于U的部分
// 官方: Exclude<T, U>

type T5 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"b", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, undefined | null>
// 官方: NonNullable<T>

type T6 = NotNull<'abc' | 123 | true | undefined | null> // true | "abc" | 123

type T7 = NotNull<string | number | boolean | undefined | null> // string | number | boolean

// 官方: Extract<T, U>
type T8 = Extract<"a" | "b" | "c", "a" | "e">;
