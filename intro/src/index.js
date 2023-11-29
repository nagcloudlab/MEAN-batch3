//-----------------------------
// Working with DOM Api
//-----------------------------

const cardBodyEle = document.querySelector(".card-body");
const greetBtn = document.querySelector(".btn-primary");

greetBtn.addEventListener("click", (e) => {
  cardBodyEle.innerText = "Welcome to Web-UI learning";
});

//---------------------------------
// Working with DOM Api + Timer Api
//---------------------------------

setInterval(() => {
  const timeNowEle = document.querySelector("#time-now");
  timeNowEle.innerText = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
  });
}, 1000);

//-------------------------------------------------
// Working with DOM Api + XHR(XMLHttpRequest)/ Fetch Api
//-------------------------------------------------

// Asynchronous Javascript And XML/JSON ( AJAX )

const top5TodosBtn = document.querySelector("#top5-todos-btn");
const todosTableBody = document.querySelector("#todos");
const loadingStatusEle = document.querySelector("#loading-status");
top5TodosBtn.addEventListener("click", (e) => {
  //..
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  //   const xhr = new XMLHttpRequest();
  //   xhr.open("GET", url, true);
  //   xhr.send();
  //   loadingStatusEle.innerText = "loading todos";
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       loadingStatusEle.innerText = "";
  //       const jsonText = xhr.responseText;
  //       const todos = JSON.parse(jsonText);
  //       const todoRows = todos.map((todo) => {
  //         return `
  //               <tr>
  //                   <td>${todo.id}</td>
  //                   <td>${todo.title}</td>
  //                   <td>${todo.completed}</td>
  //               </tr>
  //           `;
  //       });
  //       todosTableBody.innerHTML = todoRows.join("");
  //     }
  //   };

  const promise = fetch(url, { method: "GET" });
  loadingStatusEle.innerText = "loading todos";
  promise
    .then((response) => response.json())
    .then((todos) => {
      loadingStatusEle.innerText = "";
      const todoRows = todos.map((todo) => {
        return `
                      <tr>
                          <td>${todo.id}</td>
                          <td>${todo.title}</td>
                          <td>${todo.completed}</td>
                      </tr>
                  `;
      });
      todosTableBody.innerHTML = todoRows.join("");
    });
});
