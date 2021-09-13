const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');

//****configuraciones****
mongoose.connect('mongodb+srv://root:toor@cluster0.vnmaf.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err)); //conexion a Mongoose
const port = 3000;

//***middlewares***
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//****rutas: req->request res->respuesta***
/*app.get('/', (req,res)=>{
    res.send('Hello World')
 });*/
app.use('/products/',indexRoutes);

//***inicializacion del server***
app.listen(port, ()=>{
    console.log('Server Started');
});