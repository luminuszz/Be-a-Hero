import { Request, Response } from 'express'
export interface SessionInterface{
   store (req: Request, res: Response): Promise<Response>
}
