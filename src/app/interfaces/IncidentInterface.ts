/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable camelcase */
import { Request, Response } from 'express'
export interface IncidentInterface {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: string;
  created_at: string;
}

export interface IncidentControllerInterface {
  index(req: Request, res: Response): Promise<Response>;
  store(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
