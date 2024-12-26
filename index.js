let result=0;
function process(value){
    if (result==0 && value!=='DEL') {
        result=value;
    }else{
        if (value!=='DEL') {
            result=result+""+value;
        }
    }
    if (value=='AC') {
        result=0;
    }
    if (value=='DEL') { 
        result = result.slice(0, -1);
        if (result.length==0) {
            result=0;
        }
    }
    document.getElementById('resultDisplay').textContent = result;
}



function total(){
    result = result.replace(/X/g, '*');
    try {
        const answer = Function(`'use strict'; return (${result})`)();
        console.log("Result of the expression:", answer);
        result=answer;
    } catch (error) {
        console.error("Invalid mathematical expression:", error);
    }

     document.getElementById('resultDisplay').textContent = result;
}

