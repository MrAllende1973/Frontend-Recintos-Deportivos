const dayjs = useDayjs();

export const useHoraryConfig = () => {
  const times = [
    '8:00 - 9:30',
    '9:40 - 11:10',
    '11:20 - 12:50',
    '13:00 - 14:30',
    '14:45 - 16:10',
    '16:20 - 17:50',
    '17:55 - 19:25',
    '19:30 - 21:00',
    '21:10 - 22:40',
  ];
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const currentDate = dayjs();

  const getDateInfo = {
    actualDay: currentDate.date(),
    actualMonth: months[currentDate.month()],
    actualWeek: currentDate.isoWeek(),
    actualYear: currentDate.isoWeekYear(),
    tomorrow: currentDate.add(1, 'day').date(),
    dayAfterTomorrow: currentDate.add(2, 'day').date(),
    startOfWeek: currentDate.startOf('week').format('YYYY-MM-DD'),
    endOfWeek: currentDate.endOf('week').format('YYYY-MM-DD'),
  };

  const getNumberDayOfWeek = (index: number) =>
    currentDate.weekday(1).day(index).date();
  const getDayOfWeek = (index: number) =>
    days[currentDate.day(index % 7).day()];
  const getTimeOfBlock = (index: number) =>
    times[Math.min(Math.floor((index - 1) / 7), times.length - 1)];

  return {
    days,
    times,
    ...getDateInfo,
    getNumberDayOfWeek,
    getDayOfWeek,
    getTimeOfBlock,
  };
};
