export interface User {
  id: number;
  rut: string;
  names: string;
  surnames: string;
  career: string;
  date_of_birth: string;
  genre: string;
  email: string;
  password?: string;
  phone: string;
  date_modificated_password: string;
  photo: string;
  date_register: string;
  rol_id: number;
  recovery_password: string;
  verification: string;
}

export interface APIUser {
  Apellidos: string;
  Celular: string;
  Correo: string;
  Fecha_mod_contra: string;
  Fecha_nac: string;
  Fecha_registro: string;
  Foto: string;
  Genero: string;
  ID_rol: number;
  ID_usuario: number;
  Nombres: string;
  Recuperacion_contr: string;
  Rut: string;
  Verificacion: string;
  Carrera: string;
}

export interface Block {
  block_id: number;
  day_name: string;
  date: number;
  time: string;
  month: string;
  year: number;
}

export interface AuthenticatedResponse {
  token: string;
  user: APIUser;
}

export interface Environment {
  student: boolean;
  admin: boolean;
}

export interface Reservation {
  user_id: number;
  week_id: number;
  enclosure_id: number;
  block_id: number;
  activity: string;
  month: string;
  year: number;
  career: string;
  startDate: string;
  endDate: string;
  numberMen: number;
  numberWomen: number;
}

export interface APIReservation {
  Bloque_horario_id_bloque: number;
  Fecha_registro_reserva: string;
  Recinto_id_recinto: number;
  Usuarios_ID_usuario: number;
  actividad: string;
  annio: number;
  cantidad_asistentes_hombres: number;
  cantidad_asistentes_mujeres: number;
  cantidad_asistentes_otros: number | null;
  fecha_fin_semana: string;
  fecha_inicio_semana: string;
  id_reserva: number;
  mes: string;
  numero_semana: number;
}

export interface APIResponseReservations {
  data: APIReservation[];
  message: string;
  status: string;
}
