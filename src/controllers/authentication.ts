import * as express from 'express';
import { getUserByEmail, createUser } from '../db/user';
import { random, authentication } from '../helpers';

export const register = async (req: express.Request, res: express.Response) => {
//get the variables in the try/catch from the userSchema

    try{

        const { email, password, username } = req.body;

        if (!email || !password || !username){

            return res.sendStatus(400);
        }
        const existingUser = await getUserByEmail(email);

        if (existingUser){
                return res.sendStatus(400);

        }

        const salt = random();
        const user = await createUser({

            email, 
            username, 
            authentication: {
                salt, 
                password: authentication(salt, password)
            },
        });

        return res.status(200).json(user).end();
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}