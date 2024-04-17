function SUM() {
    var a=parseFloat(document.getElementById('InputA').value);
    var b=parseFloat(document.getElementById('InputB').value);
    if (isNaN(a)||isNaN(b)) {
        Document.getElementById('result').innerHTML='vui long nhap lai!';
        return;
    }
    document.getElementById('result').innerHTML="ket qua="+(a+b);


}
function SUBTRCT() {
    var a=parseFloat(document.getElementById('InputA').value);
    var b=parseFloat(document.getElementById('InputB').value);
    if (isNaN(a)||isNaN(b)) {
        Document.getElementById('result').innerHTML='vui long nhap lai!';
        return;
    }
    document.getElementById('result').innerHTML="ket qua="+(a-b);
}



function MULTIPLY() {
    var a=parseFloat(document.getElementById('InputA').value);
    var b=parseFloat(document.getElementById('InputB').value);
    if (isNaN(a)||isNaN(b)) {
        Document.getElementById('result').innerHTML='vui long nhap lai!';
        return;
    }
    document.getElementById('result').innerHTML="ket qua="+(a*b);
}
function DIVIDE() {
    var a=parseFloat(document.getElementById('InputA').value);
    var b=parseFloat(document.getElementById('InputB').value);
    if (isNaN(a)||isNaN(b)) {
        Document.getElementById('result').innerHTML='vui long nhap lai!';
        return;
    }
    document.getElementById('result').innerHTML="ket qua="+(a/b);

}
function RESET(){
    document.getElementById('result').innerHTML="";
    document.getElementById('InputA').value="";
    document.getElementById('InputB').value="";


}



    
