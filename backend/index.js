const { MongoClient } = require("mongodb");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;


const url = "mongodb+srv://mrpensa:Marfl-97@cluster0.o5bnq7t.mongodb.net/test";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})


// Obtener todas las canchas"
app.get("/", async (request, response) => {
  try {
    const collection = client.db().collection("canchas");
    const canchas = await collection.find({}).toArray();
    response.status(200).json(canchas);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

app.get("/floor:id", async (request, response) => {
  try {
    const collection = client.db().collection("todos");
    const todo = await collection.findOne({ id: request.params.id });
    if (todo) {
      response.status(200).json(todo);
    } else {
      response.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal server error" });
  }
});


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

app.post('/', (req, res) => {
  const { email, password } = req.body;

  // Aquí puedes realizar la lógica de autenticación
  // Verificar las credenciales del usuario en la base de datos

  // Ejemplo básico: simplemente devolver un mensaje de éxito si el email y password son válidos
  if (email === 'usuario@example.com' && password === 'contraseña') {
    res.json({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
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