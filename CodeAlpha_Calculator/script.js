let display = document.getElementById("display");
let historyList = document.getElementById("history");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value;

        let result = eval(expression);

        display.value = result;

        let item = document.createElement("li");

        item.textContent =
            expression + " = " + result;

        historyList.prepend(item);

        if(historyList.children.length > 10){
            historyList.removeChild(
                historyList.lastChild
            );
        }

    }

    catch{
        display.value = "Error";
    }
}

document.addEventListener(
    "keydown",
    function(event){

        let key = event.key;

        if(
            "0123456789+-*/."
            .includes(key)
        ){
            appendValue(key);
        }

        else if(key === "Enter"){
            calculate();
        }

        else if(key === "Backspace"){
            backspace();
        }

        else if(key === "Escape"){
            clearDisplay();
        }

    }
);