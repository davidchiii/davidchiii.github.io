function generate() {
    var input1 = document.getElementById("input").value;
    common_words = [
        "apple", "banana", "orange", "grape", "kiwi",
        "dog", "cat", "bird", "fish", "horse",
        "happy", "sad", "angry", "excited", "tired",
        input1
    ]
    let out = ""
    for(let i = 0; i < 500; i++){
        var ind = Math.floor(Math.random() * common_words.length);
        out += common_words[ind]
        out += '\n'
    }

    var amnt = out.split(input1).length-1

    var str = "The amount of times your word shows up:" + amnt

    document.getElementById("output").innerHTML = out;
    document.getElementById("count").innerHTML = str;
}

