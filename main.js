let secretSequence = "";
const secretCode = "fish";

document.addEventListener("keydown", (event) => {
  if (event.key.length !== 1 || event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }

  secretSequence = (secretSequence + event.key.toLowerCase()).slice(-secretCode.length);

  if (secretSequence === secretCode) {
    window.location.href = "/pages/login.html";
  }
});
