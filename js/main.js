const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`
const cardsRow = document.querySelector("#main .row")
const overlay = document.querySelector("#overlay")
const overlayButton = document.querySelector("#overlay .btn")
const overlayImg = document.querySelector('#overlay img')

overlayButton.addEventListener("click", function () {
  overlay.style.display = "none";
})

axios.get(apiUrl).then((res) => {
  generateCard(res.data)
  
  const cards = document.querySelectorAll(".card")
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      overlay.style.display = "inline-block";
      overlayImg.src = document.querySelector('.card .card-img-top').src
    })
  })
})