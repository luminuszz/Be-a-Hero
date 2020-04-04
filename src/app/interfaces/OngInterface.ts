/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable camelcase */

export interface OngInterface {
  id: string;
  name: string;
  password:string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
  created_at:string
}

export interface IUserController {
  index(req: Request, res: Response): Promise<Response>;
  store(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
