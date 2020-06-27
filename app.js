function deleteLast(){
    var getnumber = document.getElementById("result");
    var str = result.value;
    var num = str.length;
    var str1 = str.slice(0, num - 1);
    result.value = str1;

}

function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

// clear result
function clearResult() {
    var result = document.getElementById("result");
    result.value = '';
} 


function getResult() {
    var result = document.getElementById("result");
    
    result.value =  eval(result.value);
}



function ScreenOnOf() {
    var result = document.getElementById("result").style.backgroundColor = "black";
    var result1 = document.querySelector("h2").style.color = "white" ;
}



