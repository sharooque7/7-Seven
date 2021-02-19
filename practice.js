//1--Parsing an JSON object’s Values:
var object = 
            {
              name: "RajiniKanth", 
              age: 33, 
              hasPets : false
            };
 //i-method
 console.log(Object.values(object));
 //ii-method
for(var i in object)
{
    console.log(object[i]);
}

//2--Parsing an JSON object’s Keys:
 //i-method
console.log(Object.keys(object));
 //ii-method
for( i in object)
{
    console.log(i);
}


//3--Parsing an JSON object and convert it to a list:
var obj = {name: "ISRO", age: 35, role: "Scientist"};

function convertObjectToList(list)
{
var arr=[];
for( i in list)
{
    var a = new Array(i,list[i]);
    arr.push(a);
}
console.log(arr);
}
convertObjectToList(obj);

//4--Parsing a list and transform the first and last elements of it:
var array = ['GUVI', 'I', 'am', 'Geek'];

var sampleObject={};

function transformFirstAndLast(arr)
{
sampleObject[arr[0]]=arr[arr.length-1]
return sampleObject;
}

console.log(transformFirstAndLast(array));

//5--Parsing a list of lists and convert into a JSON object:
var samplearray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var ListSample={};
 function fromListToObject(arr)
 {
    for(i=0;i<arr.length;i++)
    {
       ListSample[arr[i][0]] = arr[i][1]
    }
    return ListSample;
 }
 console.log(fromListToObject(samplearray));

 //6--Parsing a list of lists and convert into a JSON object:
 var arraysample = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
 var ListArray={};
//  console.log(arraysample.length);
//  console.log(arraysample[0].length)
//  console.log(arraysample[0])
//  console.log(arraysample[1])
//  console.log(arraysample[0][0])
//  console.log(arraysample[0][0][0])
//  console.log(arraysample[0][0][1])
 function transformGeekData(DataArr)
 {
    var arr=[];
   for(i=0;i<DataArr.length;i++)
  {
      for(var j=0;j<DataArr[i].length;j++)
      {
            // for(var k=j;k<DataArr[i][j].length;k++)
            // {
            //     ListArray[DataArr[i][j][0]]=DataArr[i][j][1];
            //     console.log(DataArr[i][j][0])
            //     console.log(DataArr[i][j][1])
            // }
            ListArray[DataArr[i][j][0]]=DataArr[i][j][1];
            console.log(DataArr[i][j][0])
            console.log(arraysample[i][j][1])
           // DataArr[i]=DataArr[i][j][0].DataArr[i][j][1];
        }
        arr.push(ListArray);
       
   }
   return arr;
 }
 
 console.log(transformGeekData(arraysample));