// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Barra de progreso on scroll
window.addEventListener("scroll", () => {
  const st = document.documentElement.scrollTop || document.body.scrollTop;
  const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = Math.max(0, Math.min(100, (st / sh) * 100));
  document.getElementById("progress-bar").style.width = pct + "%";
});
