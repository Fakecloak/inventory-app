const path = require('node:path');
const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

const indexRouter = require('./routes/indexRouter');
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter')

app.use('/', indexRouter);
app.use('/categories', categoryRouter);
app.use('items', itemRouter);



const PORT = process.env.PORT || 3000;
app.listen (PORT, (error) => {
    if(error) 
    {
        throw error;
    }
    console.log('server is running on port ' + PORT); 
})