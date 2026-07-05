const path = require('node:path');
const express = require('express');
const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(express.urlencoded({extended:true}));

//router
const indexRouter = require('./routes/indexRouter');
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter')

//router routes
app.use('/categories', categoryRouter);
app.use('/items', itemRouter);

// Generic root path goes LAST
app.use('/', indexRouter);



const PORT = process.env.PORT || 3000;
app.listen (PORT, (error) => {
    if(error) 
    {
        throw error;
    }
    console.log('server is running on port ' + PORT); 
})