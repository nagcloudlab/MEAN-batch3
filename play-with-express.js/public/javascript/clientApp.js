

//----------------------------------------------------------------
// using DOM & XHR/Fetch Api
//-------------------------------------------------------------


const todosBtn = document.getElementById('todos-btn')
todosBtn.addEventListener('click', e => {
    fetch("/todos", { method: "GET" })
        .then(response => response.json())
        .then(todos => {
            const todoRows = todos.map((todo, idx) => {
                return `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `
            })
            document.getElementById('todos').innerHTML = todoRows.join("")
        })
})