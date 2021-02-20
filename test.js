var expected = {foo: 5, bar: 67};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName){
    // your code here
    var a = JSON.stringify(actual);
    var b = JSON.stringify(expected);
    if(a===b)
    {
        return true;
    }
      return false;
    
   }
   console.log(assertObjectsEqual(expected,actual,'mytest'))