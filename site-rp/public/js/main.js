let seq = "";

document.addEventListener("keydown", (e) => {
  seq += e.key.toLowerCase();

  if (seq.includes("fish")) {
    window.location.href = "hidden/login.html";
  }

  if (seq.length > 10) {
    seq = seq.slice(-10);
  }
});