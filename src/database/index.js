import * as SQLite from 'expo-sqlite'

function useDatabase() {
  const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("database.db"),
  }

  function initDb() {
    const sql = [
      `DROP TABLE IF EXISTS usuarios;`,
      `CREATE TABLE IF NOT EXISTS usuarios (
        id integer primary key autoincrement,
        usuario text,
        senha text
        );`,
    ]

    const db = DatabaseConnection.getConnection()

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i])
          tx.executeSql(sql[i])
        }
      }, (error) => {
        console.log(error)
      }, () => {
        console.log("transaction complete call back ")
      }
    )
  }
  function insert(usuario) {
    const db = DatabaseConnection.getConnection()
    db.exec(
      [
        { sql: 'insert into usuarios (usuario, senha) values (?,?);', args: usuario },
      ],
      false,
      () => console.log('Linhas inseridas')
    )
  }
  function findByUser(usuario) {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from usuarios where usuario=?`, [usuario], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }
  function findAll() {
    return new Promise(function (resolve, reject) {
      const db = DatabaseConnection.getConnection()
      db.transaction(tx => {
        tx.executeSql(`select * from usuarios;`, [], (_, { rows }) => {
          resolve(rows)
        }), (sqlError) => {
          reject(sqlError)
        }
      }, (txError) => {
        reject(txError)
      })
    })
  }

  return {
    initDb,
    insert,
    findByUser,
    findAll,
  }
}

export default useDatabase