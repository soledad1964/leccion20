//function promedio

function callbackPromedio (a,b,c,callback){

	var promedio= ((a+b+c)/3);

	return callback(promedio);
}
//function segundos
var segundos= 1;
function segundero (){
	document.getElementById("titulo").innerHTML = segundos;
segundos++;	

}
 setInterval(segundero,1000);