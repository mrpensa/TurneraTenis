require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; // Cambia el puerto si es necesario

app.use(express.json());

// Configuración de la conexión a MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB', error);
  });

// Definir las rutas

// Ruta POST para el inicio de sesión
app.post('/login', (req, res) => {
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

// Ruta POST para el registro de usuarios
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Aquí puedes realizar la lógica de registro de usuarios
  // Crear un nuevo documento de usuario en la base de datos

  // Ejemplo básico: simplemente devolver un mensaje de éxito si se pudo crear el usuario
  const newUser = new User({ email, password });
  newUser.save()
    .then(() => {
      res.json({ message: 'Registro exitoso' });
    })
    .catch((error) => {
      console.error('Error al registrar usuario', error);
      res.status(500).json({ message: 'Error al registrar usuario' });
    });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
