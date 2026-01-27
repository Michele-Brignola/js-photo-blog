const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`
const cardsRow = document.querySelector("#main .row")
const overlay = document.querySelector("#overlay")
const overlayButton = document.querySelector("#overlay .btn")

overlayButton.addEventListener("click", function () {
  overlay.style.display = "none";
})

axios.get(apiUrl).then((res) => {
  generateCard(res.data)
  
  const cards = document.querySelectorAll(".card")
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      overlay.style.display = "inline-block";
      generateOverlayImg(res.data[index])
    })
  })
})