//Javascript for Calculator page
// First created: May 13, 2016
// Last edited:
// By: Sabrina Bolognese

function postResult(type, place, possible, percent){
  //if not dividing by zero, print the result in the corresponding section of the table
  //otherwise, print N/A
  //if we have a type1 change (a recalculation of a given grade percentage), we change the colour of a previously calculated mean or average to alert the user that it is an expired number
  if (possible != 0) {
    if (type == 1){
      document.getElementById(place).innerHTML = percent +"%";
      document.getElementById("totalPercent").style.color = "rgb(80%,8%,8%)";
    }
    else{
      document.getElementById(place).innerHTML = percent + "/100";
      document.getElementById("totalPercent").style.color = "rgb(80,80,80)";
    }
  }
  else{
    document.getElementById(place).innerHTML = "N/A";
  }
}

function calcAverage(){
  //calculate the average of all given grades, where the formula is
  //(a1+a2+a3 +.../(p1+p2+p3+ ...))
  //only include the achieved grade if it is out of greater than 0
 var grades = document.getElementsByClassName("grade");
 var possibles = document.getElementsByClassName("possible");
 var grade = 0;
 var possible =0;
 for(i = 0; i<grades.length; i++){
   if (possibles[i].value != 0){
     grade = grade + parseFloat(grades[i].value);
     possible = possible + parseFloat(possibles[i].value);
   }
 }
 var percent = parseFloat((grade/possible)*100).toFixed(2);
 postResult(2, "totalPercent", possible, percent);
}

function calcMean(){
  //calculate the mean of all given grades, where the formula is
  //(a1/p1 + a2/p2 + a3/p3 +...)
  //only include the achieved grade if it is out of greater than 0
 var grades = document.getElementsByClassName("grade");
 var possibles = document.getElementsByClassName("possible");
 var percent = 0;
 var possible = 0;
 for(i=0;i<grades.length;i++){
   if (possibles[i].value != 0){
      possible++;
      percent = percent+  ((parseFloat(grades[i].value)/parseFloat(possibles[i].value))*100);
    }
   }
   percent = parseFloat(percent/possible).toFixed(2);
 postResult(2,"totalPercent", possible, percent);
}

function calcPercent(g,p,t){
  var grade = document.getElementById(g).value;
  var possible = document.getElementById(p).value;
  var percent = parseFloat((grade/possible)*100).toFixed(2);
  postResult(1, t, possible, percent);
}
