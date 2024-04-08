import { defineStore } from 'pinia';
import type { APIResponseReservations, Reservation } from '~/types';

export const useResevationStore = defineStore('reservation', () => {
  const { apiBase } = useRuntimeConfig().public;

  const getAllReservationsByEnclosure = (
    enclosureId: number,
    weekId: number,
    year: number
  ): Promise<APIResponseReservations> => {
    return $fetch(
      `/api/reservas/getAllReservationsByRecinto/${weekId}/${year}/${enclosureId}`,
      {
        baseURL: apiBase,
      }
    );
  };

  const addReservation = async (reservation: Reservation) => {
    const token = useCookie('token');

    return await $fetch('/api/reservas/addReservation', {
      method: 'POST',
      baseURL: apiBase,
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
      body: {
        Usuarios_ID_usuario: reservation.user_id,
        Recinto_id_recinto: reservation.enclosure_id,
        Bloque_horario_id_bloque: reservation.block_id,
        actividad: reservation.activity,
        numero_semana: reservation.week_id,
        fecha_inicio_semana: reservation.startDate,
        fecha_fin_semana: reservation.endDate,
        mes: reservation.month,
        annio: reservation.year,
        cantidad_asistentes_hombres: reservation.numberMen,
        cantidad_asistentes_mujeres: reservation.numberWomen,
      },
    });
  };

  return { getAllReservationsByEnclosure, addReservation };
});
