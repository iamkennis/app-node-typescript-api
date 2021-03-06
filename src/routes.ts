import { Express,Request,Response } from 'express';
import { createUserHandler ,createUserSessionHandler} from './controller/userController';
import validateRequest from './middleware/validateRequest';
import {createUserSchema, createUserSessionSchema} from './schema/userSchema'

export default function (app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

// Register User
    app.post("/api/users", validateRequest(createUserSchema), createUserHandler)

// Login User
    app.post(
			'/api/sessions',
			validateRequest(createUserSessionSchema),
			createUserSessionHandler
		);
}