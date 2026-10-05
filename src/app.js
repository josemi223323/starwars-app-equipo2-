import { SwapiService } from './services/swapiService.js';
import { CharacterCard } from './components/CharacterCard.js';

const btnLoad = document.getElementById('btn-load');
const container = document.getElementById('character-list');
const statusMsg = document.getElementById('status-message');

async function handleLoadCharacters() {
  statusMsg.textContent = 'Cargando datos desde SWAPI...';
  container.innerHTML = '';

  try {
    const characters = await SwapiService.getPeople();
    statusMsg.textContent = `Se han cargado ${characters.length} personajes con éxito.`;

    characters.forEach(char => {
      const cardElement = CharacterCard.render(char);
      container.appendChild(cardElement);
    });
  } catch (error) {
    statusMsg.textContent = 'Ocurrió un error al cargar la información.';
  }
}

btnLoad.addEventListener('click', handleLoadCharacters);
