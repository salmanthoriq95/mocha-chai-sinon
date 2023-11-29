import { NextFunction, Request, Response } from 'express';

export interface ErrorResponse {
  name: string;
  message: string;
  stack?: string;
  data?: any;
}
export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<any> => {
  const errorResponse: ErrorResponse = {
    name: error.name,
    message: error.message,
    data: error.data,
  };

  if (req.query.debug === '1') errorResponse.stack = error.stack;

  if (error.name === 'HttpExpection') {
    return res.status(error.statusCode).json(errorResponse);
  }

  return res.status(500).json(
    req.query.debug === '1'
      ? errorResponse
      : {
          name: 'Internal Server Error',
          message: 'Please contact administrator',
        }
  );
};
