function Calculadora() {

    this.iniciar = () => {
        this.display = document.querySelector('.display p') 
    }

    document.addEventListener('click', (e) => {
        el = e.target;

        if (el.classList.contains('btnNum')) {
            this.DisplayInput(el.innerText, 'increment')
        }

        if (el.classList.contains('btnDel')) {
            this.DisplayInput(this.display.innerText.slice(0, -1))
        }

        if (el.classList.contains('btnEq')) {
            try {
                this.DisplayInput(eval(this.display.innerText))
            } catch (e) {
                console.log(e)
                this.display.classList.add('error')
                setTimeout(() => {
                    this.display.classList.remove('error')
                }, 500)
            }
        }

        if (el.classList.contains('btnClear')) {
            this.DisplayInput('')
        }
    })

    this.DisplayInput = (conteudo, bollean) => {
        if (bollean === 'increment'){
            this.display.innerText += conteudo
            console.log(this)
        } else {
            this.display.innerText = conteudo
        }
    }

}

const criarCalculadora = new Calculadora()
criarCalculadora.iniciar()