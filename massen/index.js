//CALICUTOR

const display= document.getElementById('display');

function AppendToDisplay(input){
  display.value += input;
}

function ClearDisplay(){
  display.value ="";
}

function caliculate(){
    try{
        display.value =eval(display.value);
}catch(error){
    display.value = "Error";
}
}
