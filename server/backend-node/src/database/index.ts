import { createConnection } from 'typeorm';

createConnection()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL!');
  })
  .catch((error) => console.log(error));
