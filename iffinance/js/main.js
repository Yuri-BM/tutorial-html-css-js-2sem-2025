function openModal(modalId){
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}

function closeModal(modalId){
    const modal = document.querySelector(modalId)
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
        <div class="card" id="${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <div class="secao-superior">
                <div class="ticker">
                     <p><b>${ticker}</b></p>
                </div>
                 <div class="bolsa">
                    <p>${bolsa}</p>
                 </div>
            </div>
            <div class="preco">
                <h3>US$ <span>${valor}</span></h3>   
            </div>
            <div class="secao-inferior">
                 <div class="no-ativos">
                    <p>Número de ativos: ${ativos}</p>
                 </div>
                 <div class="posicao">
                    <p>US$ ${total}</p>
                </div>
            </div>
            <div class="buttons">
                <button type="button" onclick="openEditCard(event)">Editar</button>
                <button type="button" onclick="deleteCard(event)">Excluir</button>
            </div>
         </div>
    `
    const cards = document.querySelector("#cards")

    cards.innerHTML += card

    closeModal()

    event.target.reset()
}

function editTicker(event){
    event.preventDefault()
    
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativos.value

    const total = valor * ativos

    const cardStockEdit = document.getElementById(ticker)



    closeModal()

    event.target.reset()
}

function showButtons(event){
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "flex"
}

function hideButtons(event){
    const cardStock = event.target
    const buttons = cardStock.querySelector(".buttons")
    buttons.style.display = "none"
}

function deleteCard(event){
    const buttonDelete = event.target
    const cardStock = buttonDelete.closest(".card")
    cardStock.remove()
}

function openEditCard(event){

    const buttonEdit = event.target
    const cardStock = buttonEdit.closest(".card")

    const ticker = cardStock.querySelector('.secao-superior .ticker').innerText
    const inputEditTicker = document.getElementById('editticker')
    inputEditTicker.value = ticker

    const valor = cardStock.querySelector('.secao-superior .ticker').innerText
    const inputEditValor = document.getElementById('editvalor')
    inputEditValor.value = valor

    openModal('#edit')
}