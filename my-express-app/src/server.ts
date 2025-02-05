import { NextFunction, Request, Response } from 'express';
const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is working!!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
