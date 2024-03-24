function speedDetector (speed){
const speedlimit =70 
let points = 0
//To make sure only number values are inputted
if(isNaN(speed)) return "invalid speed input"

if(speed <= speedlimit + 4) return "Ok"

points = Math.floor((speed - speedlimit)/5)
//To make sure the condition is executed
if(points > 12) return "License Suspended"

return  `Demerit Points ${points}`

}
console.log(speedDetector( 60))