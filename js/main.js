const cardsRow = document.querySelector("#main .row")

function generateCard(cards) {
  let cardsHTML = ``

  for (const card of cards) {
    cardsHTML += 
      `<div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="${card.url}" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">${card.date}</p>
            <h5 class="card-title">${card.title}</h5>
          </div>
        </div>
      </div>`
  }

  cardsRow.innerHTML = cardsHTML;
}

const apiUrl = `https://lanciweb.github.io/demo/api/pictures/`
axios.get(apiUrl).then((res) => {
  generateCard(res.data)
})
