

//----------------------------------------------------------------
// using DOM & XHR/Fetch Api
//-------------------------------------------------------------


const todosBtn = document.getElementById('todos-btn')
const todosEle = document.getElementById('todos')
todosBtn.addEventListener('click', e => {
    fetch("/todos?limit=20&cat=official", { method: "GET" })
        .then(response => response.json())
        .then(todos => {
            const todoRows = todos.map((todo, idx) => {
                return `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                        <td>
                            <button data-todoid=${todo.id} class="btn btn-sm btn-danger">delete</button>
                        </td>
                    </tr>
                `
            })
            todosEle.innerHTML = todoRows.join("")
        })
})
todosEle.addEventListener('click', e => {
    const todoId = e.target.getAttribute("data-todoid");
    fetch("/todos/" + todoId, {
        method: 'DELETE',
    })
        .then(respose => respose.json())
        .then(r => {
            console.log("todo deleted");
        })
})
const newTodoField = document.getElementById('new-todo-field')
newTodoField.addEventListener('keyup', e => {
    if (e.key !== 'Enter') return
    const title = e.target.value
    fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
        .then(response => response.json())
        .then(todo => {
            document.getElementById('message').innerHTML = `${JSON.stringify(todo)}`
        })

    e.target.value = ""
})