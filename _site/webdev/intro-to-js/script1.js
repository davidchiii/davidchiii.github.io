function checkequality() {
    var input1 = document.getElementById("string1").value;
    var input2 = document.getElementById("string2").value;
    if (input1 == input2) {
        document.getElementById("result").innerHTML = "true!";
        return false;
    }
    else{
        document.getElementById("result").innerHTML = "false!";
        return false;
    }
}