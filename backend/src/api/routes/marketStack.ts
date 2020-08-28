import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/market-stack', route);

  route.get('/', (req: Request, res: Response) => {
    //return res.json({ user: req.currentUser }).status(200);
  });
};
