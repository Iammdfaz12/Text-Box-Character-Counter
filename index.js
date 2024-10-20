const textBox = document.getElementById("textArea");
const charCount = document.getElementById("charCount");
const limitReached = document.getElementById("limitReached");
const maxLimit = 300;

textBox.addEventListener("input", function () {
  const length = textBox.value.length;
  charCount.textContent = `${length}/300 characters`;
  if (textBox.value.length == maxLimit) {
    limitReached.textContent = "Your limit is reached";
  } else {
    limitReached.textContent = "";
  }
});
