var n = prompt("Digite um número");
var x;

const botao = document.getElementById("roda")
botao.addEventListener("click", fnSoma)

function fnSoma(){
for(let j=0; j<11; j++){
	x = n*j;
	alert(n+"x"+j+"="+x)
  }
}



	
	
	

	