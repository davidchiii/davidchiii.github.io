function rng(array) {
  return Math.floor(Math.random() * array.length);
}

function generate() {
  var input1 = document.getElementById("input").value;
  let common_words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "dog",
    "cat",
    "bird",
    "fish",
    "horse",
    "happy",
    "sad",
    "angry",
    "excited",
    "tired",
    input1,
  ];
  let out = "";
  for (let i = 0; i < 500; i++) {
    var ind = rng(common_words)
    out += common_words[ind];
    out += "\n";
  }

  var amnt = out.split(input1).length - 1;
  var str = "The amount of times your word shows up:" + amnt;

  document.getElementById("output").innerHTML = out;
  document.getElementById("count").innerHTML = str;
}

function restyle() {
  let weights = ["bold", "100","50","200","150"];
  let fonts = ["roobert","monospace"]
  let color = ["blueviolet", "chartreuse","black","crimson"];

  document.getElementById("output").style["font-weight"] = weights[rng(weights)];
  document.getElementById("output").style["font-family"] = fonts[rng(fonts)];
  document.getElementById("output").style["color"] = color[rng(color)];
}
