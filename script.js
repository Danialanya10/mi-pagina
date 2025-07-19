document.getElementById("cambiarColor").addEventListener("click", () => {
  const colors = ["#ffeeba", "#d4edda", "#cce5ff", "#f8d7da"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
