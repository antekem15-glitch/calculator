
const display = document.getElementById("display")

let firstValue = null;
let secondValue = null;
let aktuellerOperator = null;

const zero=document.getElementById('zero').addEventListener("click", function() { display.value += 0;
});
const one=document.getElementById('one').addEventListener("click", function() {  display.value += 1;
});
const two=document.getElementById('two').addEventListener("click", function() { display.value += 2;
});
const three=document.getElementById('three').addEventListener("click", function() { display.value += 3;
});
const four=document.getElementById('four').addEventListener("click", function() { display.value += 4;
});
const five=document.getElementById('five').addEventListener("click", function() { display.value += 5;
});
const six=document.getElementById('six').addEventListener("click", function() { display.value += 6;
});
const seven=document.getElementById('seven').addEventListener("click", function() { display.value += 7;
});
const eight=document.getElementById('eight').addEventListener("click", function() { display.value += 8;
});
const nine=document.getElementById('nine').addEventListener("click", function() { display.value += 9;
});
const plus=document.getElementById('plus').addEventListener("click", function() { firstValue=display.value;
display.value=""
aktuellerOperator = "+"

});
const minus=document.getElementById('minus').addEventListener("click", function() { firstValue=display.value;
    display.value=""
aktuellerOperator = "-"
});
const del =document.getElementById('delete').addEventListener("click", function() { display.value = " "; 
});
const dot=document.getElementById('dot').addEventListener("click", function() {
if (display.value.includes(".")) {

} else {
    display.value +=".";
}

});
const multi=document.getElementById('multi').addEventListener("click", function() { firstValue=display.value;
    display.value=""
aktuellerOperator = "x"
});
const divide=document.getElementById('divide').addEventListener("click", function() { firstValue=display.value;
    display.value=""
aktuellerOperator = "/"
});

const sum = document.getElementById('sum').addEventListener("click", function() {secondValue=display.value; 
    const first= Number(firstValue);
    const second = Number(secondValue);
    
 if (aktuellerOperator === "+") {
     
     const total = first+second
     display.value = total
 }  
 if (aktuellerOperator === "-") {
     
     const total = first-second
     display.value = total
 }  
 if (aktuellerOperator === "x") {
     
     const total = first*second
     display.value = total
 }  
 if (aktuellerOperator === "/") {
     
     const total = first/second
     display.value = total
 }  



    
});















