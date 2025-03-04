export default async function Home() {
  try {
    const response = await fetch('http://ip-api.com/json');
    const data = await response.json();

    if (data.status === 'success') {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Информация о сервере</h1>
          <p>IP-адрес: {data.query}</p>
          <p>Страна: {data.country}</p>
          <p>Город: {data.city}</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Ошибка</h1>
          <p>Не удалось получить информацию о сервере.</p>
        </div>
      );
    }
  } catch {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Ошибка</h1>
        <p>Не удалось загрузить данные о сервере.</p>
      </div>
    );
  }
}