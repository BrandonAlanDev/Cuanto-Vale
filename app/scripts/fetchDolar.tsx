const getDolar = async () => {
  try {
    const res = await fetch('https://dolarapi.com/v1/dolares');
    if (!res.ok) throw new Error('Error al obtener los datos del dólar');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error en getDolar:', error);
    return null;
  }
};
export default getDolar;