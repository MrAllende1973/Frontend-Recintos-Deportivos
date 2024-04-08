import Joi from 'joi';

export const useJoiSchemas = () => {
  const registerSchema = Joi.object({
    rut: Joi.string()
      .regex(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]$/)
      .required()
      .messages({
        'string.empty': 'Debes ingresar un rut.',
        'string.pattern.base':
          'El rut ingresado no tiene el formato correcto. (XX.XXX.XXX-X)',
        'any.required': 'El rut es obligatorio.',
      }),
    names: Joi.string().required().messages({
      'string.empty': 'Debes ingresar los nombres.',
      'any.required': 'Los nombres son obligatorios.',
    }),
    surnames: Joi.string().required().messages({
      'string.empty': 'Debes ingresar los apellidos.',
      'any.required': 'Los apellidos son obligatorios.',
    }),
    date_of_birth: Joi.string().required().messages({
      'string.empty': 'Debes ingresar una fecha de nacimiento.',
      'any.required': 'La fecha de nacimiento es obligatoria.',
    }),
    genre: Joi.string().required().messages({
      'string.empty': 'Debes ingresar un género.',
      'any.required': 'El género es obligatorio.',
    }),
    career: Joi.string().required().messages({
      'string.empty': 'Debes seleccionar una carrera.',
      'any.required': 'La carrera es obligatoria.',
    }),
    email: Joi.string()
      .email({
        tlds: {
          allow: false,
        },
      })
      .regex(/^[a-zA-Z0-9._%+-]+@alumnos\.uta\.cl$/)
      .required()
      .messages({
        'string.empty': 'Debes ingresar un correo electrónico.',
        'string.pattern.base':
          'El correo electrónico ingresado debe ser del formato ejemplo@alumnos.uta.cl',
        'any.required': 'El correo electrónico es obligatorio.',
      }),
    password: Joi.string().min(8).required().messages({
      'string.min': 'La contraseña debe contener al menos {#limit} caracteres.',
      'string.empty': 'Debes ingresar una contraseña.',
      'any.required': 'La contraseña es obligatoria.',
    }),
  });

  const loginSchema = Joi.object({
    email: Joi.string()
      .email({
        tlds: {
          allow: false,
        },
      })
      .regex(/^[a-zA-Z0-9._%+-]+@alumnos\.uta\.cl$/)
      .required()
      .messages({
        'string.empty': 'Debes ingresar un correo electrónico.',
        'string.pattern.base':
          'El correo electrónico ingresado debe ser del formato ejemplo@alumnos.uta.cl',
        'any.required': 'El correo electrónico es obligatorio.',
      }),
    password: Joi.string().min(8).required().messages({
      'string.min': 'La contraseña debe contener al menos {#limit} caracteres.',
      'string.empty': 'Debes ingresar una contraseña.',
      'any.required': 'La contraseña es obligatoria.',
    }),
  });

  const verifyCodeSchema = Joi.object({
    code: Joi.string().min(6).required().messages({
      'string.min': 'El código debe contener al menos {#limit} caracteres.',
      'string.empty': 'Debes ingresar el código de verificación.',
      'any.required': 'Debes ingresar el código de verificación.',
    }),
  });

  const createReservationSchema = Joi.object({
    activity: Joi.string().required().messages({
      'string.empty': 'Debes seleccionar una actividad.',
      'any.required': 'Debes seleccionar una actividad.',
    }),
    numberMen: Joi.number().integer().min(1).required().messages({
      'number.base': 'Ingrese un número válido para el N° Hombres.',
      'number.integer': 'El N° Hombres debe ser un número entero.',
      'number.min': 'El N° Hombres debe ser mayor que 0.',
      'any.required': 'Ingrese el N° Hombres.',
    }),
    numberWomen: Joi.number().integer().min(1).required().messages({
      'number.base': 'Ingrese un número válido para el N° Mujeres.',
      'number.integer': 'El N° Mujeres debe ser un número entero.',
      'number.min': 'El N° Mujeres debe ser mayor que 0.',
      'any.required': 'Ingrese el N° Mujeres.',
    }),
  });

  return {
    registerSchema,
    loginSchema,
    verifyCodeSchema,
    createReservationSchema,
  };
};
