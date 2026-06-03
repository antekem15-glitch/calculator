
const display = document.getElementById("display");
const show = document.getElementById("show");


let firstValue = null;
let secondValue = null;
let aktuellerOperator = null;
let ergebnis=null;

/* Buttons with numbers */

 function numButton(id , zahl) {
                    document.getElementById(id).addEventListener("click", function() { 
             if (ergebnis !== null) {
                display.value = "";
                ergebnis = null;
                }display.value += zahl;
            });}
 numButton("zero",0);           
 numButton("one",1);           
 numButton("two",2);           
 numButton("three",3);           
 numButton("four",4);           
 numButton("five",5);           
 numButton("six",6);           
 numButton("seven",7);           
 numButton("eight",8);           
 numButton("nine",9);                   
/* functional buttons*/

const clear = document.getElementById('clear').addEventListener("click", function() { 
    display.value = ""; 
    firstValue = null;
    secondValue = null;
    aktuellerOperator = null;
    ergebnis=null;
    show.value = ""
    
});
const del = document.getElementById('delete').addEventListener("click", function() {
display.value = display.value.slice(0, -1);


if (ergebnis !== null) {
    ergebnis = display.value;
    firstValue = display.value;
}
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
        show.value = firstValue + aktuellerOperator;
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first+second
        firstValue = Math.round(ergebnis*1000000)/1000000;
        aktuellerOperator = "+";
        display.value=""
        show.value = ergebnis + aktuellerOperator;
        
        
    } else{
        aktuellerOperator = "+";
        show.value = ergebnis + aktuellerOperator;
        

}});
const minus=document.getElementById('minus').addEventListener("click", function() {
     if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "-";
        show.value = firstValue + aktuellerOperator;
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first-second
        firstValue = Math.round(ergebnis*1000000)/1000000; 
        aktuellerOperator = "-";
        display.value=""
        show.value = ergebnis + aktuellerOperator;
        
    } else{
        aktuellerOperator = "-";
        show.value = ergebnis + aktuellerOperator;

}});
const multi=document.getElementById('multi').addEventListener("click", function() {  
     if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "x";
        show.value = firstValue + aktuellerOperator;
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first*second
        firstValue = Math.round(ergebnis*1000000)/1000000;
        aktuellerOperator = "x";
        display.value=""
        show.value = ergebnis + aktuellerOperator;
        
    } else{
        aktuellerOperator = "x";
        show.value = ergebnis + aktuellerOperator;

}});
const divide=document.getElementById('divide').addEventListener("click", function() {  
    if(firstValue === null) {
        firstValue=display.value;
        display.value="";
        aktuellerOperator = "/";
        show.value = firstValue + aktuellerOperator;
    }else if (ergebnis === null) { 
        const first= Number(firstValue);
        secondValue=display.value;
        const second = Number(secondValue);
        ergebnis= first/second
        firstValue = Math.round(ergebnis*1000000)/1000000;
        aktuellerOperator = "/";
        display.value=""
        show.value = ergebnis + aktuellerOperator;
        
    } else{
        aktuellerOperator = "/";
        show.value = ergebnis + aktuellerOperator;

}});
const sum = document.getElementById('sum').addEventListener("click", function() { 
    
 console.log("firstValue:", firstValue);
    console.log("display.value:", display.value);
    console.log("aktuellerOperator:", aktuellerOperator);
 
if( ergebnis === null) {
    secondValue = display.value;
}
    
    const first= Number(firstValue);
    const second = Number(secondValue);
    
 if (aktuellerOperator === "+") {
    show.value = `${first} ${aktuellerOperator} ${second} =`;  
    const total = first+second
     display.value = Math.round(total*10000)/10000;
     firstValue = display.value;
    ergebnis = firstValue;
    aktuellerOperator ="+";
    
 }  
 if (aktuellerOperator === "-") {
     show.value = `${first} ${aktuellerOperator} ${second} =`;
     
     const total = first-second
     display.value = Math.round(total*10000)/10000;
     firstValue = display.value;
ergebnis = firstValue;
     aktuellerOperator ="-";
        
 }  
 if (aktuellerOperator === "x") {
     show.value = `${first} ${aktuellerOperator} ${second} =`;
     const total = first*second
     display.value = Math.round(total*10000)/10000;
     firstValue = display.value;
ergebnis = firstValue;
     aktuellerOperator ="x";
     
        
 }  
 if (aktuellerOperator === "/") {
     show.value = `${first} ${aktuellerOperator} ${second} =`;
     const total = first/second
     display.value = Math.round(total*10000)/10000;
     firstValue = display.value;
        ergebnis = firstValue;
     aktuellerOperator ="/";
     
        
 }});







               
        
                
  










