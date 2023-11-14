import mysql from "mysql";

// ligação do banco de dados com a api 
export const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "741852",
    database: "crud"
});

