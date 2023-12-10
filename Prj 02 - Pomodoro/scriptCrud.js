// encontrar botão adicionar tarefa

const btAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAddTarefa = document.querySelector('.app__form-add-task');
const txtArea = document.querySelector('.app__form_textarea');

const tarefas = {};
btAdicionarTarefa.addEventListener('click', () =>
{
    formAddTarefa.classList.toggle('hidden');
})

formAddTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();//quando salvar o evento nao deixa a pg recarregar


    const tarefa =
        {
            descricao: txtArea.value
        }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
})
