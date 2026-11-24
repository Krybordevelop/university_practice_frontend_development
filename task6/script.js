const COLOR_COUNT = 30;

const colorsContainer = document.querySelector("#colors");
const regenerateButton = document.querySelector("#regenerate");
const clearButton = document.querySelector("#clear");
const toast = document.querySelector("#toast");

let toastTimer;

function generateHexColor() {
  const value = Math.floor(Math.random() * 0x1000000);
  return `#${value.toString(16).padStart(6, "0").toUpperCase()}`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("toast--visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 1800);
}

async function copyColor(hex) {
  try {
    await navigator.clipboard.writeText(hex);
  } catch {
    const input = document.createElement("textarea");
    input.value = hex;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  showToast(`${hex} скопійовано`);
}

function createColorCard(hex) {
  const card = document.createElement("button");
  card.className = "color-card";
  card.type = "button";
  card.style.backgroundColor = hex;
  card.setAttribute("aria-label", `Скопіювати колір ${hex}`);

  const code = document.createElement("span");
  code.className = "color-card__code";
  code.textContent = hex;

  card.append(code);
  card.addEventListener("click", () => copyColor(hex));
  return card;
}

function generateColors() {
  const colors = Array.from({ length: COLOR_COUNT }, generateHexColor);
  colorsContainer.replaceChildren(...colors.map(createColorCard));
  showToast("Створено нову палітру");
}

function clearColors() {
  colorsContainer.replaceChildren();
  showToast("Кольори очищено");
}

regenerateButton.addEventListener("click", generateColors);
clearButton.addEventListener("click", clearColors);

generateColors();