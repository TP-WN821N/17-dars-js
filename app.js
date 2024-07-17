// Berilgan ikki massivning umumiy elementlarini toping.
function commonElements(arr1 = [], arr2 = []) {
  let new_arr = []
  arr1.forEach(item => {
    if (arr2.includes(item)) {
      new_arr.push(item)
    }
  })
  return new_arr
}
// console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]


// Berilgan ikki qatorning umumiy belgilarini qaytaring.
function commonCharacters(str1 = "", str2 = "") {
  let new_arr = []
  str1.split("").forEach(item => {
    if (str2.split("").includes(item) && !new_arr.includes(item)) {
      new_arr.push(item)
    }
  })
  return new_arr.join("")
}
// console.log(commonCharacters("hello", "world")); // "lo"


// Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar).
function symmetricDifference(arr1 = [], arr2 = []) {
  let new_arr = []
  arr1.forEach(item => {
    if (arr2.includes(item) && !new_arr.includes(item)) {
      new_arr.push(item)
    }
  })
  let result = []
  for (let g = 0; g < new_arr.length; g++) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != new_arr[g]) {
        result.push(arr1[i])
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] != new_arr[g]) {
        result.push(arr2[i])
      }
    }
  }
  return result
}
// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]


// Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.
function calculatePercentages(arr = []) {
  let musbatArr = arr.filter(item => item > 0)
  let manfiyArr = arr.filter(item => item < 0)
  let nol = arr.filter(item => item == 0)
  let positive = musbatArr.length * 100 / (arr.length)
  let negative = manfiyArr.length * 100 / (arr.length)
  let zero = nol.length * 100 / (arr.length)
  return { positive, negative, zero }
}

// console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0])); 


// Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.
function uniqueCharacters(str = '') {
  let arr = str.split("")
  let new_arr = []
  arr.map(item => {
    if (!new_arr.includes(item)) {
      new_arr.push(item)
    }
  })
  return new_arr.join("")
}
// console.log(uniqueCharacters("hello world")); // "helo wrd"


// Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.
function findPairs(arr, target) {
  let new_arr = []
  for(let i=0; i<arr.length; i++){
    for(let g=i; g<arr.length; g++){
      if (arr[i] + arr[g] == target && i != g){
        new_arr.push([arr[i], arr[g]])
      }
    }
  }
  return new_arr
}
// console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]


// Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.
function squareNumbers(arr) {
  let new_arr = arr.map(item => Math.pow(item, 2))
  return new_arr
}
// console.log(squareNumbers([1, 2, 3, 4, 5])); 


// Berilgan oraliqda nechta palindrom son borligini toping.
function countPalindromNumbers(start=1, end=1) {
  let new_arr = []
  for(let i = start; i <= end; i++) {
    let item = +i.toString().split("").reverse().join("")
    if (item == i) {
      new_arr.push(i)
    }
  }
  return new_arr
}
// console.log(countPalindromNumbers(1, 100));


// Berilgan sonlar qatorini vergul bilan ajratilgan qator ko'rinishida qaytaring.
function joinWithCommas(arr) {
  let new_str = arr.join(", ")
  
  return new_str
}

// console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"