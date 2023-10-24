class Calculadoradom {
  suma(a:number, b:number):number | null{
    let resultado = a + b;
    return resultado;
  }

  resta(a:number, b:number):number | null{
    let resultado = a - b;
    return resultado;
  }

  mult(a:number, b:number):number | null{
    let resultado = a * b;
    return resultado;
  }

  divi(a:number, b:number):number | null{
    if (b ===0){
      console.error('No se puede dividir entre 0')
      return null
    }
    let resultado = a / b;
    return resultado;
  }
}

window.onload = () => {
  const calculadora_dom = new Calculadoradom();


  const parrafito = document.getElementById('resultado');

  const btnSuma = document.getElementById('suma')
  btnSuma?.addEventListener('click', () => {

    const num1 = Number ((<HTMLInputElement>document.getElementById('n1')).value);
    const num2 = Number ((<HTMLInputElement>document.getElementById('n2')).value);
    let resultado = calculadora_dom.suma(num1, num2);

    if(parrafito){
      parrafito.innerText = `Resultado: ${resultado}`
    }
  })

  const btnResta = document.getElementById('resta')
  btnResta?.addEventListener('click', () => {

    const num1 = Number ((<HTMLInputElement>document.getElementById('n1')).value);
    const num2 = Number ((<HTMLInputElement>document.getElementById('n2')).value);
    let resultado = calculadora_dom.resta(num1, num2);

    if(parrafito){
      parrafito.innerText = `Resultado: ${resultado}`
    }
  })

  const btnMult = document.getElementById('multiplicacion')
  btnMult?.addEventListener('click', () => {

    const num1 = Number ((<HTMLInputElement>document.getElementById('n1')).value);
    const num2 = Number ((<HTMLInputElement>document.getElementById('n2')).value);
    let resultado = calculadora_dom.mult(num1, num2);

    if(parrafito){
      parrafito.innerText = `Resultado: ${resultado}`
    }
  })

  const btnDiv = document.getElementById('division')
  btnDiv?.addEventListener('click', () => {

    const num1 = Number ((<HTMLInputElement>document.getElementById('n1')).value);
    const num2 = Number ((<HTMLInputElement>document.getElementById('n2')).value);
    let resultado = calculadora_dom.divi(num1, num2);

    if(parrafito){
      parrafito.innerText = `Resultado: ${resultado}`
    }
  })
}