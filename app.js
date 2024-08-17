const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!')
});
app.get('/movies', (req, res) => {
    res.send('GET: obtener listado de peliculas!')
});
app.get('/movies/:id', (req, res) => {
    res.send('GET: una peli:'+req.params.id+'!');
});
app.post('/movies', (req, res) => {
    res.send('POST: crear pelicula!');
});
app.put('/movies/:id', (req, res) => {
    res.send('POST: actualizar pelicula!');
});
app.patch('/movies/:id', (req, res) => {
    res.send('POST: actualizar pelicula parcialmente!');
});
app.delete('/movies/:id', (req, res) => {
    res.send('DELETE: eliminar pelicula!');
});

app.listen(port, () => {
    console.log(`El servidor se ejecuto en el puerto: ${port}`)
})