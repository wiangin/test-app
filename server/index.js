const cors = require('cors');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const express = require('express');

require('dotenv').config();
require('dotenv').config({ 
    path: `.env.${process.env.NODE_ENV}`,
});

const app = express();
const port = 3001;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 // endpoint för anvädnare med behöriget
 app.post('/pusher/user-auth', async (req, res) => {
    const result = await pusher.get({
        path: "/channels/presence-globalroom/users",
    });
    // console.log("LOG HERE : ", result)
 });

// console.log("LOG HERE : ", )

// endpoint för att skicka meddelande
app.post('/message', (req, res) => {
    const regBody = req.body;
    pusher.trigger("presence-globalroom", "message", regBody);
    res.send(regBody)
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});