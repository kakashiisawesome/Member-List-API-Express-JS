const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');


const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Handlebars Template
app.get('/', (req, res) => {
    res.render('index', {title: 'Member App', members});
})

// Get members
app.use('/api/members', require('./routes/api/members'))

// Create member

// Init middleware
// app.use(logger);


// Static
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
