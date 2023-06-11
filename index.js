function Geration(){
    let amountNumber = Number(document.querySelector('#amountNumber').value)
    let startNumber = Number(document.querySelector('#startNumber').value)
    let endNumber = Number(document.querySelector('#endNumber').value)
    let resul = document.querySelector('#results')

    let resulInner = ''

    for(let i = 0; i < amountNumber; i++){

        let numberRandom = Math.floor(Math.random() * ((endNumber+1) - startNumber) ) + startNumber;

        resulInner += `
        <section>
            <p>NUMERO SORTEADO:</p>
            <span id="resul">${numberRandom}</span>
        </section>
        <br>
        `
    }

    resul.innerHTML = resulInner
}