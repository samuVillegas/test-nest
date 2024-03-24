import * as Joi from 'joi';

export default Joi.object({
  // App config
  PORT: Joi.required(),

  // DB config
  DB_HOST: Joi.required(),
  DB_USER: Joi.required(),
  DB_PASSWORD: Joi.required(),
  DB_NAME: Joi.required(),
  DB_PORT: Joi.required(),
});
