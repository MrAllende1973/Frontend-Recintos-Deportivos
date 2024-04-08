export const useUtils = () => {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const careers = [
    'Contador Auditor-Contador Público (Régimen Vespertino)',
    'Ingeniería Comercial',
    'Trabajo Social',
    'Ingeniería en Información y Control de Gestión',
    'Psicología',
    'Derecho',
    'Antropología Conducente',
    'Pedagogía en Matemática',
    'Pedagogía en Física y Matemática',
    'Enfermería',
    'Ingeniería Química Ambiental',
    'Obstetricia y Puericultura',
    'Químico Laboratorista',
    'Pedagogía en Biología y Ciencias Naturales',
    'Pedagogía en Educación Básica',
    'Medicina',
    'Kinesiología y Rehabilitación',
    'Nutrición y Dietética',
    'Tecnología Médica en Imagenología y Física Médica',
    'Tecnología Médica en Laboratorio Clínico y Medicina Transfusional',
    'Tecnología Médica en Oftalmología y Optometría',
    'Pedagogía en Historia y Geografía',
    'Educación Parvularia',
    'Licenciatura en Inglés',
    'Profesor de Educación Física',
    'Diseño Multimedia',
    'Agronomía, Conducente a: Ingeniero Agrónomo',
    'Ingeniería Civil Eléctrica',
    'Ingeniería Civil Electrónica',
    'Ingeniería Civil en Computación e Informática',
    'Ingeniería Civil Mecánica',
    'Ingeniería Civil Industrial',
    'Ingeniería Mecatrónica',
    'Ingeniería de Ejecución Eléctrica',
    'Ingeniería de Ejecución Electrónica',
    'Ingeniería de Ejecución Mecánica',
    'Pedagogía en Inglés',
    'Pedagogía en Castellano y Comunicación',
    'Psicología',
  ];

  return { capitalizeFirstLetter, careers };
};
