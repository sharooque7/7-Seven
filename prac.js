var arraysample = 
  [
    [
      ["firstName", "Vasanth"],
      ["lastName", "Raja"], 
      ["age", 24], 
      ["role", "JSWizard"]
    ],
    [
      ["firstName", "Sri"], 
      ["lastName", "Devi"], 
      ["age", 28], 
      ["role", "Coder"]
    ]
  ];
//   console.log(arraysample)
// console.log(arraysample[0])
// console.log(arraysample[1])
// console.log(arraysample[0][0])
// console.log(arraysample[0][0][0])
// console.log(arraysample.length)
// console.log(arraysample[0].length)
// console.log(arraysample[0][0].length)
// console.log(arraysample[0][0][0].length)
//var srr=[];

//1---
var result = arraysample.map(Object.fromEntries);
console.log(result);
//2--
let finalArray = [];
let newArr = [];
for(var i=0;i<arraysample.length;i++)
{
for(var j=0;j<arraysample[i].length;j++)
{
 newArr[arraysample[i][j][0]] = arraysample[i][j][1];
}
finalArray.push(newArr);
}
console.log(finalArray);

//3--
var res=[];

for(i=0;i<arraysample.length;i++)
{
  res[i]={};
  for(j=0;j<arraysample[i].length;j++)
  {
    res[i][arraysample[i][j][0]] = arraysample[i][j][1];
  }
}
console.log(res);