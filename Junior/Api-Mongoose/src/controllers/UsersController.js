import { error } from "console";
import User from "../models/User";
import { createPasswordHash } from "../services/auth";

class UsersController {
    async index(req, res) {
        try{
            const users = await User.find();
            return res.json(users);
        } 
        catch(err){
            console.error(err);
            return res.status(500).json({error: "Erro Interno No Servidor."})
        }
    }

    async show(req, res){
        try{
            const { id } = req.params;
            const user = await User.findById(id);
            if(!user) {
                return res.status(404).json();
            }
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json({ error: "Erro Interno No Servidor."});
        }
    }

    async create( req, res ) {
        try{
            const { usuario, password } = req.body;

            const user = await User.findOne({ usuario });
            if(user) {
                return res.status(422).json({ message: `User ${usuario} Usuário Já Existente.`});
            } 

            //criptografa o password

            const encryptedPassword =  await createPasswordHash(password) 

            const newUser = await User.create({ usuario, password:encryptedPassword });
            
            res.status(200).send(newUser)

        }catch(err){
            console.error(err);
            return res.status(500).json({error: "Erro Interno No Servidor."})
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const { usuario, password } = req.body;

            const user =  await User.findById(id);
            if(!user){
                return res.status(404).json();
            }

            const encryptedPassword = await createPasswordHash(password);

            await user.updateOne({ usuario, password: encryptedPassword})
            return res.status(200).json();
        } catch(err){
            console.error(err)
            return res.status(500).json({error: "Erro Interno No Servidor."});
        }
    }

    async destroy(req, res){
        try{
            const { id } = req.params;
            const user = await User.findById(id);

            if(!user) {
                return res.status(404).json();
            }
            
            await user.deleteOne();

            return res.status(200).json();
        }catch(err){
            console.error(err)
            return res.status(500).json({error: "Erro Interno No Servidor."});
        }
    }
}


export default new UsersController();