

const { Pool, Client } = require('pg')

const queryTestDb = (query) => {
    // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    const client = new Client({
      user: 'cypressAdmin',
      host: 'cypressdb.cwumyrdl48cq.eu-central-1.rds.amazonaws.com',
      database: 'postgres',
      password: 'KAAA$123',
      port: 5432,
    })
    client.connect()
    client.query(query, (err, res) => {
      if (err) reject(err)
      else {
        client.end()
        console.log(res)
        return resolve(true);
      }
    })
  });
}

exports.queryTestDb = queryTestDb;
