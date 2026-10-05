export class CharacterCard {
  static render(character) {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <h2>${character.name}</h2>
      <ul>
        <li><strong>Año de nacimiento:</strong> ${character.birth_year}</li>
        <li><strong>Género:</strong> ${character.gender}</li>
        <li><strong>Altura:</strong> ${character.height} cm</li>
        <li><strong>Color de ojos:</strong> ${character.eye_color}</li>
      </ul>
    `;

    return card;
  }
}
