// Your code here
function saturdayFun(val = "roller-skate"){
  return `This Saturday, I want to ${val}!`
}

function mondayWork(val = "go to the office"){
  return `This Monday, I will ${val}.`
}

function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair }${adj}${flair}!`;
  }
}
