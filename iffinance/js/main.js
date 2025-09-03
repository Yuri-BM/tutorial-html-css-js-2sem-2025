function openModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}

function addTicker(event){
    event.preventDefault()
    
    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value

    const total = valor * ativos

    const card = `
        <div class="card">
            <div class="secao-superior">
                <div class="ticker">
                     <p><b>${ticker}</b></p>
                </div>
                 <div class="bolsa">
                    <p>${bolsa}</p>
                 </div>
            </div>
            <div class="preco">
                <h3>US$ ${valor}</h3>   
            </div>
            <div class="secao-inferior">
                 <div class="no-ativos">
                    <p>Número de ativos: ${ativos}</p>
                 </div>
                 <div class="posicao">
                    <p>US$ ${total}</p>
                </div>
            </div>
         </div>
    `
    const cards = document.querySelector("#cards")

    cards.innerHTML += card

    closeModal()
}