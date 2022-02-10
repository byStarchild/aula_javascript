function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Surprise!</b>"
    //alert("Surprise!")
}

function redirecionar(){
    window.open("https://www.mg.gov.br"); //window.location.href = "https://www.mg.gov.br";
}

function trocar(elemento){
    //alert("trocar texto")
    //document.getElementById("mousemove").innerHTML = "<b>Not here$</b>"
    elemento.innerHTML = "<b>Not here$</b>"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Knock knock!</b>"
    elemento.innerHTML = "<b>Knock knock!</b>"
}

function load(){
    alert("Welcome!")
}

function change(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2 
}

alert(soma(5, 10))*/

/*function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar 
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade))*/

/*var n1 = 18
var n2 = 20
var frase = "O rato roeu a roupa do rei de roma"

alert("Bem vindo " + nome)

console.log("Bem vindo" + nome)
console.log(n1 + n2)
console.log(frase.replace("rato","KL"))*/

/*var lista = ["Alanna", "Leo", "Kaito", "KL"]
lista.push("Mambo")
lista.pop()
console.log(lista.length);
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "))*/

/*var amigos = [{nome:"Alanna", qualidade:"inteligente, bonita"}, {nome:"Leo", qualidade:"inexistente"}, {nome:"Kaito", qualidade:"cautela"}]
console.log(amigos)*/

/*var idade = prompt("Qual a sua idade?")
var idade2 = 18
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/

/*var count = 0
while (count <= 5){
    console.log(count)
    count++
}*/

/*var count;
for(count=0; count <=5; count++){
    console.log(count)
}*/

/*var d = new Date()
alert(d.getDay()); console.log(d.getDay())
alert(d.getMonth()); console.log(d.getMonth())*/
