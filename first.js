let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum=sum+mark;
    console.log(`avg marks of student ${mark/marks.length}`);
    console.log(`marks of index is ${[mark]}`);
}
let avg=sum/marks.length;
console.log("average marks is "+avg);

for(let i=0;i<marks.length;i++){
    console.log(`marks of index is = ${i}`);
}