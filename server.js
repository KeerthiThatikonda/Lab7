const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const personName = req.body.personName;
  const pluralNoun1 = req.body.pluralNoun1;
  const adjective = req.body.adjective;
  const pluralNoun2 = req.body.pluralNoun2;

  const madLibStory = `${personName}'s slumber party was more fun than a barrel of ${pluralNoun1}! All of my ${adjective} friends were there. My favorite part was when we made up a dance to a song by my favorite band, The ${pluralNoun2}, and performed it in front of ${personName}'s stuffed ${pluralNoun1}. It was so much fun!`;

  // Add a back to form button and some styling
  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Lib Result</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
          }

          #madLibResult {
            margin-top: 20px;
            font-size: 1.2em;
            line-height: 1.6;
            color: #333;
          }

          .back-to-form {
            display: block;
            text-align: center;
            margin-top: 20px;
            text-decoration: none;
            padding: 10px 20px;
            background-color: #3498db;
            color: #fff;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .back-to-form:hover {
            background-color: #2980b9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Mad Lib Result</h1>
          <div id="madLibResult">${madLibStory}</div>
          <a href="/" class="back-to-form">Back to Form</a>
        </div>
      </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
