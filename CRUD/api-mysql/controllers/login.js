import { db } from "../db.js";

export const getUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const q = "SELECT * FROM usuarios WHERE user = ? AND password = ?"; 
    
    };

