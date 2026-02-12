const caixaCursos = document.querySelector('#caixaCursos');
const btn_c=[...document.querySelectorAll('.curso')];
const c1_2=document.querySelector('#c1_2');
const cursos = ['HTML', 'CSS', 'JavaScript','PHP', 'React', 'MySQL', 'ReactNative'];
const btnCursoSelecionado= document.querySelector('#btnCursoSelecionado');
const btnRemove = document.querySelector('#btnRemoverCurso');


cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'c'+chave);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML= el;

    const comandos = document.createElement('div');
    comandos.setAttribute('class', 'comandos');

    const rb=document.createElement('input');
    rb.setAttribute('type', 'radio');
    rb.setAttribute('name', 'rb_curso');

    comandos.appendChild(rb);
    novoElemento.appendChild(comandos);
    caixaCursos.appendChild(novoElemento)

});

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((e,i,array)=>{
        return e.checked
    })
    return radioSelecionado[0]
}

//quando coloco parentNode pela primeira vez acesso 
// a div comandos que dentro dela esta o radio;

//no segundo parentNode acesso a div que engloba a div comando e 
// com textContent acesso o texto do elemento

btnCursoSelecionado.addEventListener("click", (e)=>{
    const rs =radioSelecionado();
    if(rs !== undefined){
        const cursoSelecionado = rs.parentNode.parentNode.textContent;
        alert(`Curso Selecionado ${cursoSelecionado}`);
    }else{
        alert(` Selecionade um curso`);
    }

});


btnRemove.addEventListener('click', ()=>{
    const rs =radioSelecionado();
    if(rs !== undefined){
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove()
    }else{
        alert(`Selecionade um curso`);
    }
    
})
