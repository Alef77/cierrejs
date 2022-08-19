/* 1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO

function ________(x,z){

	return
}
1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO

function ________(x,z){

	return
}*/
let x= parseFloat(prompt("Ingrese un numero"));
let z= parseFloat(prompt("Ingree otro numero"));

function calc(){
  if(x<z){
    operacion=z/x;
  }else{
    operacion=x*z;
  }
  return operacion;
}
calc(x,z)
console.log(calc());
/*2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function ________(a){

	return
}
*/
let valor= prompt("Ingrese cualquier dato");
function tipoDato(val){
  return tipeOf.val;
}
console.log(`El dato ingresado es de tipo ${tipoDato(valor)}`)
/*3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN

function ________(a,b,c,d,e,f){

	return
}*/ 
function calcular(a,b,c,d,e,f){
  let suma= a+b;
  let resta=suma -c;
  let multidiv= ((resta*d)/e);
  let potencia= Math.pow(multidiv,f);
  return potencia;
}
console.log(calcular(2,3,4,2,4,2));
/*4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function ________([]){

	return
}*/
function rray2(arr){
  let newArray=[...arr];
  do{
    newArray.shift();
  }while(newArray.length>3)
  return newArray;
};
console.log(rray2([75,3,5,3,45,543,345,55,6633,1,244556]));
/*5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ________([]){

	return
}*/
function ordenar(a){
  return a.sort();
};
console.log(ordenar[4,2,32,8,53.1]);
/*6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO

function ________(a,b){

	return
}*/
function remover(arr,b){
  let arrayN=arr;
  const arrayNu= arrayN.filter((item)=>item!==b);
  return arrayNu;
}
console.log(remover(["ale","franco",],"ale"));
/*7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function ________([]){

	return
}*/
const arr=[21,35,7,4,84,8,1,5,9,2,78,2,5];
function sum(arreglo){
  suma=0;
  for(i=0; i<arreglo.length; i++){
    suma+=arreglo[i];
  }
  return suma;
}
function prome(arreglo,suma){
  promedio=suma/arreglo.length;
  return promedio; 
};
console,log(`La suma total es igual a ${sum(arr)}`);
console.log(`El promedio es igual ${prome(arr,sum(arr,sum))}`);
/*8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO

function ________({}, str){

	return
} */
let objeto={nombre: "Ale",apellido:"Franco",tel:"243244"};
let propiedad="apellido";
function oper(objet,str){
  for(key in objet){
    if(key==str){
      return(key);
    };
  };
};
console.log(oper(objeto,propiedad));
/*9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES.

function ________({}){

	return
}*/
const goles={
  messi:451,
  cristiano:442,
  neymar:433
}
function calcular(obje){
  let sum=0;
  for (gol in obje){
    sum+=(obje[gol]);
  }
  return sum;
};
console.log(calcular(goles));