
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;
app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})

const listaUsuarios = [];

app.post("/login", (req, res) => {
  // simulo traer un usuario de la base de datos
  // este prototipo es monousuario para este ejemplo
  console.log(req);
  const listaUsuarios = [
    { name: "Marcelo", mail: "m@m.com", pass: "123" },
    { name: "María", mail: "maria@m.com", pass: "123" },
  ];
  let index = listaUsuarios.findIndex(
    (registro) => registro.mail == req.body.mail
  );
  if (req.body && index != -1 && req.body.pass == listaUsuarios[index].pass) {
    console.log("Envia respuesta con nombre");
    res.status(200).json({ nombre: listaUsuarios[index].name });
  } else {
    console.log("Envía error");
    res.sendStatus(400);
  }
});

const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },
  {
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];

app.get("/todos", (request, response) => {
  response.status(200).json(todos);
});

app.get("/todos/:id", (request, response) => {
  response
    .status(200)
    .json({ data: todos.find((todo) => todo.id === request.params.id) });
});

app.post("/todos", (request, response) => {
  todos.push(request.body);
  response.status(201).json({ msg: "Todo created successfully" });
});

app.put("/todos/:id", (request, response) => {
  const todo = todos.find((todo) => todo.id === request.params.id);
  if (todo) {
    const { title, desc, completed } = request.body;
    todo.title = title;
    todo.desc = desc;
    todo.completed = completed;
    response.status(200).json({ msg: "Todo updated successfully" });
    return;
  }
  response.status(404).json({ msg: "Todo not found" });
});

app.delete("/todos/:id", (request, response) => {
  const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
  if (todoIndex) {
    todos.splice(todoIndex, 1);
    response.status(200).json({ msg: "Todo deleted successfully" });
  }
  response.status(404).json({ msg: "Todo not found" });
});