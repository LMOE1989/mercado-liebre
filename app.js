const express = require ("express")
const path = require ("path")

const app = express ();

app.use (express.static(path.resolve(__dirname, "public")));

app.listen (process.env.PORT || 3000, ()=> console.log ("servidor corriendo el puerto 3000"));

app.get('/', (req, res) => {
res.sendFile (path.resolve (__dirname, './views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/registro.html'))
});

app.post('/registro', (req, res) => {
    res.redirect ('/');
});

app.get('/login', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/login.html'))
});

app.post('/login', (req, res) => {
    res.redirect ('/');
});