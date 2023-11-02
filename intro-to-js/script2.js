function checknum(){
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;
    if(input1 == input2){
        document.getElementById("result2").innerHTML = "Numbers are equal!";
    }
    else if (input1 < input2){
        document.getElementById("result2").innerHTML = input2 + " is greater " + input1;
    }
    else{
        document.getElementById("result2").innerHTML = input1 + " is greater " + input2;
    }
}