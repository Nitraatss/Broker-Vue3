import { ref } from 'vue';

export function useTableData() {
  const TableData = ref<ITableData[]>(
    [
      {
        name: 'Элизабет Олсен',
        email: 'mail@mail.ru',
        status: 'Активный',
        statusColor: 'green',
        inn: '123123',
        country: 'Резидентсво РФ',
      },
      {
        name: 'Натали Дормер',
        email: 'notmail@notmail.ru',
        status: 'Отключен',
        statusColor: 'red',
        inn: '3232344',
        country: 'Резидентсво РФ',
      },
      {
        name: 'Кара Делевинь',
        email: 'notmailph@notmail.ru',
        status: 'Подача заявки',
        statusColor: 'yellow',
        inn: '442545',
        country: 'Резидентсво РФ',
      }
    ]
  );

  return { TableData };
}