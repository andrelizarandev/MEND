// Modules
import Express from 'express';
import mongoose from 'mongoose';
import { response, request } from 'express';

const app = Express();

await mongoose.connect('mongodb+srv://andrelizaran:LimonYSal_2000@cluster0.ns6qmkd.mongodb.net/test');

console.log("DB connection online");

app.get('/', (_ = request, res = response) => {
  res.json({ message:'Hello world' });
});

app.listen(4000, () => console.log("Server working"));

