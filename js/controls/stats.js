export default function stats(gameState) {
  return `    <div class="stats">
      <ul class="stats">
        ${gameState.games.map((g) => `<li class="stats__result stats__result--${g.result}"></li>`)}
      </ul>
    </div>`;
}
