import "dotenv/config";
import cors from "cors";
import bodyParser from 'body-parser';
import express from "express";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000

app.use(cors());


let users = {
  1: {
    id: '1',
    name: 'Hola Mundo',
  }
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.me = users[1];
  next();
});


app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.post('/users', (req, res) => {
  const id = req.body.id;
  const user = {
    id,
    name: req.body.name,
  };

  users[id] = user;
  return res.send(user);
});

app.delete('/users/:userId', (req, res) => {
  const {
    [req.params.userId]: user,
    ...otherUsers
  } = users;

  users = otherUsers;

  return res.send(users);
});



app.listen(port, () =>
  console.log(
    `¡Aplicación escuchand ${process.env.PORT}!`
  )
);