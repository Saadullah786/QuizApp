// Start button function
function start() {
    var start = document.getElementById("start");
    start.setAttribute("class","hide")
    q1.removeAttribute("class","hide")
}
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
// Correct Answer Function
function correctanswer1(e) {
    e.style.backgroundColor = "green";
    a = 10;
    console.log(a)
}
function correctanswer2(e) {
    e.style.backgroundColor = "green";
    b = 10;
    console.log(b)
}
function correctanswer3(e) {
    e.style.backgroundColor = "green";
    c = 10;
    console.log(c)
}
function correctanswer4(e) {
    e.style.backgroundColor = "green";
    d = 10;
    console.log(d)
}
function correctanswer5(e) {
    e.style.backgroundColor = "green";
    f = 10;
    console.log(f)
}
// **************************************************************
// Function for wrong Answer

function wa(e) {
    e.style.backgroundColor = "red";
}
// ***************************************************************
// Next 1
function nxt1() {
    q1.setAttribute("class","hide")
    q2.removeAttribute("class","hide")
}

// Next 2
function nxt2() {
    q2.setAttribute("class","hide")
    q3.removeAttribute("class","hide")
}

// Next 3
function nxt3() {
    q3.setAttribute("class","hide")
    q4.removeAttribute("class","hide")
}

// Next 4
function nxt4() {
    q4.setAttribute("class","hide")
    q5.removeAttribute("class","hide")
}

// Next 5
// function nxt1(e) {
//     e.setAttribute("class","hide")
//     q2.removeAttribute("class","hide")
// }

function result() {
    q5.setAttribute("class","hide")
    report.removeAttribute("class","hide")
    var result = a+b+c+d+f;
    s1.innerText = a ;
    s2.innerText = b ;
    s3.innerText = c ;
    s4.innerText = d ;
    s5.innerText = f ;
    ts.innerText = result ;
    console.log(result);
}
