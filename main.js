var inputs = [];
function getParagraph1() {
    for (var i = 1; i <= 6; i++) {
        var sentences = document.getElementById("para1_input_box_" + i).value;
        console.log(sentences);
        inputs.push(sentences);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
    console.log(inputs);
}
function getParagraph2() {
    for (var j = 1; j <= 6; j++) {
        var sentences = document.getElementById("para2_input_box_" + j).value;
        console.log(sentences);
        inputs.push(sentences);
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
    console.log(inputs);
}