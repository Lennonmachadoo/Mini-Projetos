const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('mousemove', (e) => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse dentro do ícone
    const y = e.clientY - rect.top;  // posição Y do mouse dentro do ícone

    icon.querySelector("::before"); // (só para lembrar que é pseudo-elemento)

    // Atualiza o gradiente como se fosse uma lanterna
    icon.style.setProperty("--x", `${x}px`);
    icon.style.setProperty("--y", `${y}px`);

    icon.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--color), #111 80%)`;
    icon.style.color = "#050801";
    icon.style.boxShadow = `
      0 0 10px var(--color),
      0 0 25px var(--color),
      0 0 50px var(--color),
      0 0 150px var(--color)
    `;
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.background = "#111";
    icon.style.color = "#222";
    icon.style.boxShadow = "none";
  });
});
