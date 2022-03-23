// Exercice 1:

var Mumber1 = {
    Fullname: "SAMIR NASRi",
    Age: 19}
    ,  Mumber2 = {
    Fullname: "SAMIR NASRi",
    Age: 19} ,
      Mumber3 = {
    Fullname: "NASRi SAMIR",
    Number: 19};

function Compare(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(Compare(Mumber1, Mumber2)); //true
console.log(Compare(Mumber1, Mumber3)); //false

console.log("----------");

//Exercice 2:

var arr1 = [1, 2, 3];
var arr2 = [100, 2, 1, 10];

function Commonelements(arr1, arr2) {
    var common = [];               
    for(var i=0 ; i<arr1.length ;i++) {
      for(var j=0 ; j<arr2.length ;j++) {
        if(arr1[i] == arr2[j]) {      
          common.push(arr1[i]);        
        }
      }
    }
    return common;                    
  }

console.log(Commonelements(arr1,arr2)); //[1, 2]