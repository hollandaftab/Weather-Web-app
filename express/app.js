let express = require('express');
let app = express();
let port = 80;

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the correct path for serving static files
app.use('/static', express.static('views/static'));

app.get('/', (req, res) => {
  res.render('static/index'); // Render the view relative to the view directory
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
