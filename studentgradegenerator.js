function studentgrade (score){
//To Calculate the grades when marks have been input 
let grade = ""
if(score >100 || score < 0){
    grade="Please enter a value between 0-100"
}
else if (score>=79 && score<=100){
    grade= "A"
}
else if(score>=60 && score <79){
   grade="B"
}
else if (score>=49 && score<59){
    grade="C"
}
else if(score>= 40 && score<49){
   grade="D"
}
else if(score>= 0 && score< 40){
    grade="E"
}
 return grade
}
console.log(studentgrade(90))