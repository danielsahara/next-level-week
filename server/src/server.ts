import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   console.log('Listagem de usuarios');

   response.json([
       'Diego',
       'Daniel',
       'teste344'
   ]);
});

app.listen(3333);