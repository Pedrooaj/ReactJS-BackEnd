import express from "express";
import userRoutes from "./routes.js"
import cors from "cors";
import { db } from "./db.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8000, () => {
    console.log("Api rodando na porta 8000")
    db.connect((err) => {
        if (err) {
          throw err;
        }
        console.log('Conectado ao banco de dados MySQL');
      });
});