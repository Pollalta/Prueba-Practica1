
function iniciar(){
	var i=1;
	var SumaTodo=parseInt(0);
	class jugador{
		//Se toma los parametros
	constructor(nombre,tiro){
		//al hacer click empieza el evento
		Jugar.addEventListener('click', e=>{
		e.preventDefault();
		this.nombre=document.getElementById('Nombre').value;
		//condicion de valor del input(nombre)
		if(this.nombre.length==0){
			alert('Error Nombre no ingresado');

		}else if(!isNaN(this.nombre)){
			alert('Error. Datos incorrectos')
		}
		//numero aleatorio del dado
		this.tiro=parseInt(Math.floor((Math.random() * 6) + 1));
		})
		
	}
	//metodo para mostrar Variable
	Mostrar(){
		Jugar.addEventListener('click', e=>{
		e.preventDefault();
		if (i<4){
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var Fecha=time;
		var Registro=new Array();
		var Jugador=new Array();
		Jugador[i]=this.nombre;
		Registro[i]=this.tiro;
	
		SumaTodo+=parseInt(Registro[i]);
		// condicion si suma final es 18
		if(SumaTodo==18){
			SumaTodo+=parseInt(10);
		}
		let cuerpo=document.getElementById('Generar');
		let contenido="<tr>"
		contenido+="<th>Nombre</th>";
		contenido+="<th> Tiro" + " "+i+"</th>";
		contenido+="<th> Puntaje </th>";
		contenido+="<th> Hora</th>";
		contenido+="</tr>";
		contenido+="<tr>"
		contenido+="<td>"+ this.nombre +"</td>"; 
		contenido+="<td>"+Registro[i]+"</td>";
		contenido+="<td>"+SumaTodo+"</td>";
		contenido+="<td>"+Fecha+"<td>";
		contenido+="</tr>";
		cuerpo.innerHTML=contenido;
		i++;	
		}
		else{
			alert("Intentos agotados");
			
		}
		
		})
	}
	//Reinicia el contador de intentos
	Reintentar(){
		BtnRe.addEventListener('click',e=>{
			e.preventDefault()
			i=0
			document.getElementById("Nombre").value="";
			SumaTodo=0;
		})
	}
}
const Intento=new jugador();
Intento.Mostrar();
}
window.onload=iniciar;
