import Joi from 'joi';
import HttpExpection from '../../errors/HttpException';

class UsersValidator {
  get(payload: any) {
    const schema = Joi.object({
      userId: Joi.number().optional(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
  post(payload: any) {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
  put(payload: any) {
    const schema = Joi.object({
      userId: Joi.number().required(),
      name: Joi.string().required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
  del(payload: any) {
    const schema = Joi.object({
      userId: Joi.number().required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      throw new HttpExpection(400, {
        message: error.message,
      });
    }
    return payload;
  }
}

export default new UsersValidator();
