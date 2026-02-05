

let n = 10;

//console.log(n);

//console.log(n++)
//console.log(n);

//console.log(++n);

let num1 = 10;

res = (!(num1%2) ? 'Par' : 'Impar');

///console.log(res)


// TYpeoff



//var n1 = 1;
//var n2 = "2";

//typeof(n2);



//SPREAD [...]


let n1 = [10,20,30];
let n2 = [11,22,33,44,55];
let n3 = [n1,n2];

const jogador1 = {nome:"Sophia", energia: 100, vidas:3};
const jogador2 = {nome:"Bruce", energia: 100, vidas:5};
const jogador3 = {...jogador1, ...jogador2};

//console.log(jogador3);


const soma = (v1, v2, v3)=>{
    return v1+v2+v3
}

let valores =[2,3,4];
//console.log(soma(...valores ));


const objs1 = document.getElementsByTagName('div');
const objs2 = [...document.getElementsByTagName('div')];
//console.log(objs1);
//console.log(objs2);


//IF E IF ELSE

let num = 5;

if(num <10){
    console.log('Menor que 10')
}else{
    console.log('Maior que 10')
};


let idade ;

if(idade <18){
    console.log(`Sua idade é ${idade} e vc não pode votar`)
}else if(idade >=18 && idade <=56){
    console.log(`Sua idade é ${idade} e vc pode votar`)
}else{
    console.log(`Sua idade é ${idade} e escolhe se quer votar`)
}

//SWITCH CASE
let colocacao = 20;

switch(colocacao){
    case 1:
        console.log('Primeiro Lugar');
        break
    case 2 :
      console.log('Segundo Lugar');
      break
    case 3:
      console.log('Terceiro Lugar');
      break
      default:
      console.log('Nao Subiu');
      break



}


//FOR

//for(let i=0; i<100; i++){
    //if(i%2 == 0){
      //  console.log(i + ' Par')
   // }else{
    //    console.log(i + ' Impar')
 //   }
//}

//let numero = [10,10,30,40,50];

//for(n in numero){
    ///console.log(numero[n])
//}



//const objetos = document.getElementsByTagName('div');

//for (o of objetos){
    //console.log(o)
//}

//for (o in objetos){
  //  console.log(o) 
//}


//WHILE
let m = 0;
while(m<10){
    console.log(m)
    m++
}



let p = 5;
let fatorial = 1;

while(p >= 1){
    fatorial*=p
    n--
}


//FUNCTION
f