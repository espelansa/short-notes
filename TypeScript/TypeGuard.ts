
// 类型保护的四种方法

// 使用场景
enum Type {
  Strong,
  Week
}

class Java {
  helloJava() {
    console.log('hello java')
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('hello javascript')
  }
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if ((lang as Java).helloJava) { // 没有使用类型保护机制时的代码
    (lang as Java).helloJava();
  } else {
    (lang as JavaScript).helloJavaScript();
  }
  return lang
}

// 类型保护能够在特定的区块中保证变量属于某种确定的类型，这样就不用上述类型断言的方法了

// 方法一： instanceof
function getLanguage1(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang
}

// 方法二：使用in关键词
function getLanguage2(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if ('helloJava' in lang) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang
}

// 方法三：typeof
let x: string | number;
if (typeof x === 'string') {
  x.length;
} else {
  x.toFixed();
}

// 方法四：创建类型保护函数
function isJava(lang: Java | JavaScript): lang is Java { // lang is Java 这种返回值叫做类型谓词
  return (lang as Java).helloJava !== undefined
}
function getLanguage4(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang
}

