// 96. Berilgan massiv ichidagi birinchi unik elementni toping.

// function firstUnique(arr) {
//     let new_arr = []
//     let getUnique = new Set()

//     for(let item of arr) {
//         if (!getUnique.has(item)) {
//             getUnique.add(item)
//             new_arr.push(item)
//         }
//     }
//     return new_arr[0]
// }

// // Test case
// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5])); 
// // Output: 4



// 97.  Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.

// function extractAndSortNumbers(str) {
//     let arr = str.split('')
//     let result = []
    
//     arr.forEach(element => {
//        if (!isNaN(element)) {
//             result.push(element)
//        } 
//     });
//     return result.sort()
// }

// // Test case
// console.log(extractAndSortNumbers("a3c2d4b1")); 
// // Output: [1, 2, 3, 4]



// 98. Berilgan ob'ekt ichidagi barcha qiymatlar son bo'lsa, ularni ikki barobar oshiring.

// function doubleNumericValues(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = {}
//     for (let i = 0; i < arr.length; i++) {
//         const {value,step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else if(typeof value[key] === "number") {
//                 result[key] = value[key] * 2
//             }
//         }
//     }
//     return result

    
// }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3,
//              f: 4
//          }
//      }
//  };
//  console.log(doubleNumericValues(obj)); 
//  // Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }



// 99. Berilgan ob'ekt ichidagi barcha kalitlarni camelCase formatida qaytaring.

// function toCamelCase(obj) {
//     let arr = [{ value: obj, resultObj: {} }];
//     let result = arr[0].resultObj;

//     for (let i = 0; i < arr.length; i++) {
//         const { value, resultObj } = arr[i];
//         for (let key in value) {
//             let camelCaseKey = key.replace(/[_-](\w)/g, (_, letter) => letter.toUpperCase());
//             if (typeof value[key] === "object" && value[key] !== null) {
//                 resultObj[camelCaseKey] = {};
//                 arr.push({ value: value[key], resultObj: resultObj[camelCaseKey] });
//             } else {
//                 resultObj[camelCaseKey] = value[key];
//             }
//         }
//     }

//     return result;
     
   
//  }
 
//  // Test case
//  const obj = {
//      'first_key': 1,
//      'second-key': {
//          'third_key': 2
//      }
//  };
//  console.log(toCamelCase(obj)); 
//  // Output: { firstKey: 1, secondKey: { thirdKey: 2 } }



// 100. Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.

// function transformStrings(obj, transformFunc) {
//     let arr = [{value: obj, step: 1}]
//         let result = {}
//         for (let i = 0; i < arr.length; i++) {
//             const {value,step} = arr[i]
//             for(let key in value) {
//                 if (typeof value[key] === "object") {
//                     arr.push({value: value[key], step: step + 1})
//                 }else if(typeof value[key] === "string") {
//                     result[key] = value[key].toUpperCase()
//                 }
//             }
//         }
//         return result
//  }
 
//  // Test case
//  const obj = {
//      a: "hello",
//      b: {
//          c: "world",
//          d: {
//              e: "test"
//          }
//      }
//  };
//  console.log(transformStrings(obj, str => str.toUpperCase())); 
//  // Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }



// 101. Berilgan ob'ekt ichidagi barcha kalitlarni sorted tartibda qaytaring. 

// function sortKeys(obj) {
//     let keys = Object.keys(obj)
//     keys.sort()

//     let sorted = {}
//     for(let key of keys) {
//         sorted[key] = obj[key]
//     }
//     return sorted
// }

// // Test case
// const obj = {
//     b: 2,
//     a: 1,
//     c: 3
// };
// console.log(sortKeys(obj)); 
// // Output: { a: 1, b: 2, c: 3 }



// 102. Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.

// function uniqueConcat(arr) {
//     let newArr = []
//     arr.forEach(element => {
//        if (!newArr.includes(element)) {
//             newArr.push(element)
//        } 
//     });
//     console.log(newArr.join(""));
// }

// // Test case
// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd'])); 
// // Output: "abcd"

// 103. Berilgan massiv ichidagi o'xshash elementlarni toping.

// function findDuplicates(arr) {
//     let dublicatess = arr.filter((val, ind) => arr.indexOf(val) !== ind)
//     return dublicatess 
// }
 
//  // Test case
//  console.log(findDuplicates([1, 2, 3, 1, 2, 4])); 
//  // Output: [1, 2]