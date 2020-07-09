// Mapped Types

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

