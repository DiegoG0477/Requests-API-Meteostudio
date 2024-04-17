import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const secretKey:any = process.env.SECRET_JWT;

export const authenticateMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('validando token...')
    
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token de autenticación.' });
    }

    try {
        console.log("secretKey", secretKey);
        console.log("token", token);
        const decoded = jwt.verify(token, secretKey);

        console.log("decoded", decoded);

        (req as any).userId = decoded;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token de autenticación inválido.' });
    }
};