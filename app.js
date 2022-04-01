const adviceId = document.getElementById('advice-number');
const quote = document.getElementById('quote');
const diceIcon = document.getElementById('dice-icon');

const adviceUrl = "https://api.adviceslip.com/advice";

const  randomAdvice = async ()=>{

  try {
    const res = await fetch(adviceUrl);
    const data = await res.json();
    adviceId.textContent = 'ADVICE #' + data.slip.id;
    quote.textContent = `${data.slip.advice}`;

  } catch (err) {
    quote.textContent = "Something went wrong... Please try again!"
    console.log(err);
  }
}
randomAdvice();

diceIcon.addEventListener("click", error => {
  error.preventDefault();
  randomAdvice();
});
