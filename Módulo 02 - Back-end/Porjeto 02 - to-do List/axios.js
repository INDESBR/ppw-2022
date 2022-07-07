
const content = document.querySelector('#content')

const tarefas = 'https://projeto-02---to-do-list-default-rtdb.firebaseio.com/tarefas.json'

function listarTarefas() {
    axios.get(tarefas)
        .then(res => {

            let data = res.data
            let dataKeys = Object.keys(res.data)
            let dataValues = Object.values(res.data)


            dataValues.forEach((e) => {
                const value = Object.values(e)

                content.insertAdjacentHTML("afterbegin", `  <li>
                <div class="tarefa flex justify-between ">
                    <h1>${value}</h1>
                    <div>
                       <button class="btn bg-orange">Editar</button>
                        <button class="btn bg-red">Remover</button>
                    </div>
                </div>
            </li>`)
            })


        })
        .catch(e => {
            console.log(e)
        })
}



listarTarefas()







