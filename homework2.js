
// Remove a specific Element from an array
function remove(arr,x){
  for(var i=0;i<=arr.length;i++){
    if(arr[i] == x){
      for(var j=i ; j<=arr.length-1 ; j++){
        arr[j] = arr[j+1];
      }
      arr.length=arr.length-1;
    }   
  }
 return arr;
}
array=[1,2,3,4,5,6,7,8]; 
console.log("Remove a specific element")
console.log(remove(array,2)); //Remove the nember 2 

//Remove Duplicates from sorted array
function Sort(arr){
for(i=0;i<arr.length; i++ ){
   min=i;
  for(j= i+1 ;j<arr.length;j++){
    if(arr[j]<arr[min]){
       min=j;
     }
  }
  k=arr[i];
  arr[i]=arr[min];
  arr[min]=k;
} 
return arr;   
}
function remove_duplicate(arr){
for(var i=0;i<=arr.length-1;i++){
  for(var j=i+1;j<=arr.length;j++){
    if(arr[i]==arr[j]){
      for(var k=j ; k<=arr.length-1 ; k++){
        arr[k] = arr[k+1];
      }
      arr.length=arr.length-1;
    }
  }
}
return(arr);
}
var y=[1,6,-9,6,7,3,1,6,0,8,7];
console.log("Remove Duplicates from sorted array");
console.log(Sort(remove_duplicate(y)));