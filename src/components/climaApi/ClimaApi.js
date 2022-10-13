

const SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?';

export const getClima = async (latitude, longitude) => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`);
    return response.json();
  } catch {
    throw new Error('could not fetch api clima');
  }
};

