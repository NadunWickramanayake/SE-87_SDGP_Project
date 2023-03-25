const score = calculateScore();

if (score < 5) {
  document.getElementById("assessment").textContent = "not experiencing significant depression.";
} else if (score < 10) {
  document.getElementById("assessment").textContent = "experiencing mild to moderate depression.";
} else if (score < 15) {
  document.getElementById("assessment").textContent = "experiencing moderate to severe depression.";
} else {
  document.getElementById("assessment").textContent ="experiencing severe depression and should seek professional help immediately.";
}
