import axios from 'axios';

export default defineNuxtPlugin(() => {
  const { apiBase } = useRuntimeConfig().public;

  const _axios = axios.create({
    baseURL: apiBase,
  });

  return {
    provide: {
      _axios,
    },
  };
});
