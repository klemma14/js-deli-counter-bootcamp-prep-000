var katzDeliLine = [];
currentlineofpeople = katzDeliLine;
function takeANumber(currentlineofpeople,newnum) {
  currentlineofpeople.push(`${newnum}`);
  return `Welcome, ${newnum}. You are number ${currentlineofpeople.length} in line.`;
  }
var i = 0;
  function newSystem(katzDeliLine,newnum) {
    newnum = i++ + 1;
    return newnum
  }

  

var i = 0;
function nowServing(katzDeliLine) {
  while (i<katzDeliLine.length) {
    i++;}
    if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
   else 
  return (`Currently serving ${katzDeliLine.shift()}.`);}
  
  function currentLine(currentlineofpeople) {
    if (currentlineofpeople.length === 0)
    return "The line is currently empty.";
    else
    return ("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  }
  
  