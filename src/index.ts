import * as bodyParser from 'body-parser';
import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from './controllers/UserController';
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from './controllers/PostController';

const app = express();

app.use(bodyParser.json());

// Users
app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// Posts
app.get('/posts', getPosts);
app.get('/posts/:id', getPost);
app.post('/posts', createPost);
app.post('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

app.listen(3000, () => {
  console.log('🚀 Server ready at: http://localhost:3000');
});
