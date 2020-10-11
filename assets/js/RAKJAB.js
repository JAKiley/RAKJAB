let coinAnswer = 0;
var messageDisplay = document.querySelector("#message");

$("input[type = 'text']").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    let userAnswer = $("#question").val();
    countCoins(coinAnswer);

    if (userAnswer == coinAnswer) {
      messageDisplay.textContent = "You are correct!";
    } else {
      var silverDollar = coinAnswer + 1;
      console.log(userAnswer);
      console.log(silverDollar);
      if (userAnswer == silverDollar) {
        messageDisplay.textContent =
          "Almost!  Hint: How many combinations? A single Coin is not a combination.";
      } else {
        messageDisplay.textContent = "Nope.  Try again.";
      }
    }
  }
});

function countCoins() {
  coinAnswer = 0;
  for (let H = 0; H <= 2; H++) {
    for (let Q = 0; Q <= 4; Q++) {
      for (let D = 0; D <= 10; D++) {
        for (let N = 0; N <= 20; N++) {
          for (let P = 0; P <= 100; P++) {
            let coinCount = H * 50 + Q * 25 + D * 10 + N * 5 + P * 1;
            if (coinCount === 100) {
              coinAnswer += 1;
            }
          }
        }
      }
    }
  }
  return coinAnswer;
}
