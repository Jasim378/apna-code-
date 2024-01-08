let arr=[10,3,4,5,7,8,9];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]%2!==0&&arr[j]%2!==0){
            let sum=arr[i]+arr[j];
            console.log("two number add is:",arr[i],"+",arr[j],"=",sum);
        }
    }
}