// 1. ArrayBuffer

let buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8个字节*8位 = 64位

// 2. TypeArray

const int8Array = new Int8Array(buffer);
console.log(int8Array.length); // 元素的长度

const int16Array = new Int16Array(buffer);
console.log(int16Array.length); 


// 3. DataView

let buffer2 = new ArrayBuffer(2);
let dataView = new DataView(buffer);
dataView.setInt8(0, 1); // 从第1个字节开始写一个8位的数（1个字节），设置值为1
dataView.setInt8(1, 2);
// 0000 0001 0000 0010
console.log(dataView.getInt8(0));
console.log(dataView.getInt8(1));
console.log('dataView.getInt16(0)', dataView.getInt16(0));



// 4. Blob

