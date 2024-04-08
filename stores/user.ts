import { defineStore } from 'pinia';
import type { User, AuthenticatedResponse, Environment } from '~/types';

export const useUserStore = defineStore('user', () => {
  const { apiBase } = useRuntimeConfig().public;
  const user = ref<User | null>(null);

  const register = async (credentials: User) => {
    return await $fetch('/api/auth/registerUser', {
      baseURL: apiBase,
      method: 'POST',
      body: {
        Rut: credentials.rut,
        Nombres: credentials.names,
        Apellidos: credentials.surnames,
        Correo: credentials.email,
        Contrasenna: credentials.password,
        Genero: credentials.genre,
        Fecha_nac: credentials.date_of_birth,
        Carrera: credentials.career,
        ID_rol: 1,
      },
    });
  };
  const login = async (credentials: User, environments: Environment) => {
    if (environments.student) {
      return await $fetch('/api/auth/loginUser', {
        baseURL: apiBase,
        method: 'POST',
        body: {
          Correo: credentials.email,
          Contrasenna: credentials.password,
        },
      });
    }
  };

  const saveUser = (data: AuthenticatedResponse) => {
    const token = useCookie('token');
    token.value = data.token;

    user.value = {
      id: data.user.ID_usuario,
      rut: data.user.Rut,
      names: data.user.Nombres,
      surnames: data.user.Apellidos,
      email: data.user.Correo,
      date_of_birth: data.user.Fecha_nac,
      genre: data.user.Genero,
      rol_id: data.user.ID_rol,
      date_register: data.user.Fecha_registro,
      date_modificated_password: data.user.Fecha_mod_contra,
      phone: data.user.Celular,
      photo: data.user.Foto,
      recovery_password: data.user.Recuperacion_contr,
      verification: data.user.Verificacion,
      career: data.user.Carrera,
    };
  };

  const currentUser = async () => {
    if (user.value) return user.value;

    const token = useCookie('token');

    if (!token.value) return null;

    const response: any = await $fetch('/api/auth/currentUser', {
      baseURL: apiBase,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    user.value = {
      id: response.user.ID_usuario,
      rut: response.user.Rut,
      names: response.user.Nombres,
      surnames: response.user.Apellidos,
      email: response.user.Correo,
      date_of_birth: response.user.Fecha_nac,
      career: response.user.Carrera,
      genre: response.user.Genero,
      rol_id: response.user.ID_rol,
      date_register: response.user.Fecha_registro,
      date_modificated_password: response.user.Fecha_mod_contra,
      phone: response.user.Celular,
      photo: response.user.Foto,
      recovery_password: response.user.Recuperacion_contr,
      verification: response.user.Verificacion,
    };

    return user.value;
  };

  const verifyAccount = async (data: any, email: string) => {
    return await $fetch('/api/auth/validateCode', {
      baseURL: apiBase,
      method: 'POST',
      body: {
        Correo: email,
        Codigo_verificacion: data.code,
      },
    });
  };

  const logout = () => {
    const token = useCookie('token');
    token.value = null;
    user.value = null;
  };

  return {
    register,
    login,
    saveUser,
    user,
    currentUser,
    logout,
    verifyAccount,
  };
});
