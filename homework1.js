var arr=[-3,8,7,6,5,-4,3,2,1];
console.log("sort an array")
function Sort(arr){
    for(i=0;i<arr.length; i++ ){
        min=i;
        for(j= i+1 ;j<arr.length;j++){
        if(arr[j]<arr[min])
           {
               min=j;
           }
    }
        k=arr[i];
        arr[i]=arr[min];
        arr[min]=k;
  } 
  return arr;   
};
console.log(Sort(arr))