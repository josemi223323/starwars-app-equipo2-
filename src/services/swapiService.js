import { API_CONFIG } from '../config/apiConfig.js';

export class SwapiService {
  static async getPeople() {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PEOPLE}`);
      
      if (!response.ok) {
        throw new Error(`Error en la petición HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Falló la consulta a SWAPI:', error);
      throw error;
    }
  }
}
