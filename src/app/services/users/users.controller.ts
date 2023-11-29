import { NextFunction, Request, Response } from 'express';
import userValidator from './users.validator';
import userService from './users.service';

class UsersController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = userValidator.get(req.body);
      const serviceResult = userService.get(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = userValidator.post(req.body);
      const serviceResult = userService.post(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
  async put(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = userValidator.put(req.body);
      const serviceResult = userService.put(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
  async del(req: Request, res: Response, next: NextFunction) {
    try {
      const validReq = userValidator.del(req.body);
      const serviceResult = userService.del(validReq);
      return res.send({
        success: true,
        data: serviceResult,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UsersController();
