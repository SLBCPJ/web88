const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')
const indexRoutes = require('./routes/index');
const purchaseRoutes = require('./routes/purchases-routes')

//****configuraciones****
//conexion a Mongoose (Mongodb Atlas)
app.set('port',process.env.PORT || 3000);
mongoose.connect('mongodb+srv://root:toor@cluster0.vnmaf.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err => console.log(err)); 

//archivos estaticos
app.use('/public', express.static(path.join(__dirname, '../uploads/img/')));


//***middlewares***
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors())

//****rutas: ***
app.use('/',indexRoutes);
app.use('/purchases',purchaseRoutes)
/*app.get('/', (req,res)=>{
    res.send('Hello World')
 });*/


//***inicializacion del server***
app.listen(app.get('port'), ()=>{
    console.log('Server Started');
});