const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector('#caixa2');
const cursos = [...document.querySelectorAll('.curso')];
const button = document.querySelector('#btn-transferir');

cursos.map((curso)=>{
    curso.addEventListener('click', (evt)=>{
        const curso = evt.target;
        curso.classList.toggle('selecionado');
    })
})

button.addEventListener('click',()=>{
    const selecionados = [...document.querySelectorAll('.selecionado')];
    const naoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];

    selecionados.map((el)=>{
        caixa2.appendChild(el)
    });
    naoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    });
});

const array = ['JavaScript', 'HTML', 'CSS'];

array.map((curso)=>{
    const novoElemento = document.createElement('div');// novo elemento que sera criado
    novoElemento.setAttribute('class', 'curso c1');// dando o atributo class e suas classes
    novoElemento.setAttribute('id', 'c1');//dando o id para o elemento
    novoElemento.innerHTML= curso;// passando os dados do array com os 
    // nomes dos cursos

 //criando um icone de lixeira via JS
    const btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute('src', './icone');//aqui esta dando o atributo src
    btn_lixeira.setAttribute('class', 'btn-lixeira')
        //EVENTO DE CLICK QUE QUANDO CLICA REMOVE O ELEMENTO DE ACORDO COM O CHILD
    btn_lixeira.addEventListener('click', (evt)=>{
        caixa1.removeChild(evt.target.parentNode);//esta removedno o elemento pai, o target esta pegando o elemnto pai
    });
    novoElemento.appendChild(btn_lixeira);





    caixa1.appendChild(novoElemento); // atribuindo a o elelemnto pai
});
const novoElemento = document.createElement('div');

