var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {
for(var i in securityQuestions)
{
    // console.log(securityQuestions[i].question)
    // console.log(securityQuestions[i].expectedAnswer)
    //  console.log(question +""+answer)
var str =JSON.stringify(securityQuestions[i].question);
    // console.log(str)
    question=JSON.stringify(question);
    answer=JSON.stringify(answer);
if(str===question)
{
    var answ = JSON.stringify(securityQuestions[i].expectedAnswer)
    // console.log(answ)

        if(answ===answer)
        {
            return true;
        }
        
            return false
}
}
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
 ques = "What was your first pet’s name?";
 ans  =  "DufferNutter";
 status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase
