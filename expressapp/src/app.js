const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const indexRoutes = require('./routes/index');

//****configuraciones****
app.set('port',process.env.PORT || 3000);
mongoose.connect('mongodb+srv://root:toor@cluster0.vnmaf.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err)); //conexion a Mongoose


//***middlewares***
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//****rutas: ***
app.use('/products/',indexRoutes);
/*app.get('/', (req,res)=>{
    res.send('Hello World')
 });*/


//***inicializacion del server***
app.listen(app.get('port'), ()=>{
    console.log('Server Started');
});