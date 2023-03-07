var cep = document.getElementById("cep")
var endereco = document.getElementById("endereco")
var cidade = document.getElementById("cidade")
var bairro = document.getElementById("bairro")
var erro = document.getElementById("erro")
var estado = document.getElementById("estado")

async function buscarCEP(CEP){
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    var consultaCEPReformulado = await consultaCEP.json()
    await console.log(consultaCEPReformulado)
    erro.innerHTML = await "" 
    endereco.value = await consultaCEPReformulado.logradouro
    cidade.value = await consultaCEPReformulado.localidade
    bairro.value = await consultaCEPReformulado.bairro
    estado.value = await consultaCEPReformulado.uf
    }
    catch(erro) {
        cepErrado()
    }
}

function cepErrado(){
    erro.innerHTML = "<p>CEP inválido!</p>"
}

cep.addEventListener("focusout", () => buscarCEP(cep.value))
