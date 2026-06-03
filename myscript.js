
const display = document.getElementById("display")

let firstValue = null;
let secondValue = null;
let aktuellerOperator = null;
let ergebnis=null;

const zero=document.getElementById('zero').addEventListener("click", function() { 
     if (ergebnis !== null) {
        display.value = "";
        display.value += 0;
        ergebnis = null;
        }else {
            display.value += 0;
        }
});
const one=document.getElementById('one').addEventListener("click", function() {
     if (ergebnis !== null) {
        display.value = "";
        display.value += 1;
        ergebnis = null;
        }else {
            display.value += 1;
        }
});
const two=document.getElementById('two').addEventListener("click", function() {
     if (ergebnis !== null) {
        display.value = "";
        display.value += 2;
        ergebnis = null;
        }else {
            display.value += 2;
        }
});
const three=document.getElementById('three').addEventListener("click", function() {
     if (ergebnis !== null) {
        display.value = "";
        display.value += 3;
        ergebnis = null;
        }else {
            display.value += 3;
        }
});
const four=document.getElementById('four').addEventListener("click", function() { 
     if (ergebnis !== null) {
        display.value = "";
        display.value += 4;
        ergebnis = null;
        }else {
            display.value += 4;
        }
});
const five=document.getElementById('five').addEventListener("click", function() { 
     if (ergebnis !== null) {
        display.value = "";
        display.value += 5;
        ergebnis = null;
        }else {
            display.value += 5;
        }
});
const six=document.getElementById('six').addEventListener("click", function() { 
     if (ergebnis !== null) {
        display.value = "";
        display.value += 6;
        ergebnis = null;
        }else {
            display.value += 6;
        }
});
const seven=document.getElementById('seven').addEventListener("click", function() { 
     if (ergebnis !== null) {
        display.value = "";
        display.value += 7;
        ergebnis = null;
        }else {
            display.value += 7;
        }
});
const eight=document.getElementById('eight').addEventListener("click", function() { 
    if (ergebnis !== null) {
        display.value = "";
        display.value += 8;
        ergebnis = null;
        }else {
            display.value += 8;
        }
});
const nine=document.getElementById('nine').addEventListener("click", function() { 
    
    if (ergebnis !== null) {
        display.value = "";
        display.value += 9;
        ergebnis = null;
        }else {
            display.value += 9
        }
});
const clear =document.getElementById('clear').addEventListener("click", function() { display.value = " "; 
    firstValue = null;
    secondValue = null;
    aktuellerOperator = null;
    
});
const dot=document.getElementById('dot').addEventListener("click", function() {
    if (display.value.includes(".")) {
    } else {
    display.value +=".";
    }
    
});
const plus=document.getElementById('plus').addEventListener("click", function() {
       if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "+";
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first+second
        display.value = Math.round(ergebnis*1000000)/1000000;
        firstValue = display.value 
        aktuellerOperator = "+";
        
} else{
aktuellerOperator = "+";

}});
const minus=document.getElementById('minus').addEventListener("click", function() {
     if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "-";
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first-second
        display.value = Math.round(ergebnis*1000000)/1000000;
        firstValue = display.value 
        aktuellerOperator = "-";
        
} else{
aktuellerOperator = "-";

}});
const multi=document.getElementById('multi').addEventListener("click", function() {  
     if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "x";
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first*second
        display.value = Math.round(ergebnis*1000000)/1000000;
        firstValue = display.value 
        aktuellerOperator = "x";
        
    } else{
aktuellerOperator = "x";

}});
const divide=document.getElementById('divide').addEventListener("click", function() {  
    if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "/";
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first/second
        display.value = Math.round(ergebnis*1000000)/1000000;
        firstValue = display.value 
        aktuellerOperator = "/";
        
} else{
aktuellerOperator = "/";

}});

const sum = document.getElementById('sum').addEventListener("click", function() {secondValue=display.value; 
    const first= Number(firstValue);
    const second = Number(secondValue);
    
 if (aktuellerOperator === "+") {
     
     const total = first+second
     display.value = Math.round(total*10000)/10000;
     firstValue=display.value
 }  
 if (aktuellerOperator === "-") {
     
     const total = first-second
     display.value = Math.round(total*10000)/10000;
     firstValue=display.value
 }  
 if (aktuellerOperator === "x") {
     
     const total = first*second
     display.value = Math.round(total*10000)/10000;
     firstValue=display.value
 }  
 if (aktuellerOperator === "/") {
     
     const total = first/second
     display.value = Math.round(total*10000)/10000;
     firstValue=display.value
 }  
 
});















