// function addponto(){
//     var cpf = document.getElementById("cpf")
//     if(cpf.value.length == 3){
//         cpf.value += "."
//     }
//     if(serie.value.length == 7){
//         cpf.value += "."
//     }
//     if(serie.value.length == 11){
//         cpf.value += "-"
//     }
// }

// // function addponto2(){
// //     var rg = document.getElementById("rg")
// //     if(serie.value.length == 2){
// //         rg.value += "."
// //     }
// //     if(rg.value.length == 6){
// //         rg.value += "."
// //     }
// //     if(rg.value.length == 10){
// //         rg.value += "-"
// //     }
// // }   


// document.getElementById("nome").addEventListener("input", func)
//         function func(e){
//             if (e.target.value.includes("@")){
//                 e.target.value = e.target.value.replace('@','')
//             }
//         } 

document.getElementById("cpf").addEventListener("input", func)

function func(e) {
    if (cpf.value.length == 3) {
        cpf.value += "."
    }
    if (cpf.value.length == 7) {
        cpf.value += "."
    }
    if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

document.getElementById("rg").addEventListener("input", func2)

function func2(e) {
    if (rg.value.length == 2) {
        rg.value += "."
    }
    if (rg.value.length == 6) {
        rg.value += "."
    }
    if (rg.value.length == 9) {
        rg.value += "-"
    }
}




function validacao() {
    var nome = document.getElementById("nome")
    var cpf = document.getElementById("cpf")
    var rg = document.getElementById("rg")
    var datanascimento = document.getElementById("datanascimento")
    var tipocnh = document.getElementById("tipocnh")
    var estadocivil = document.getElementById("estadocivil")
    var cep = document.getElementById("cep")
    var rua = document.getElementById("rua")
    var bairro = document.getElementById("bairro")
    var cidade = document.getElementById("cidade")
    var estado = document.getElementById("estado")
    var numero = document.getElementById("numero")
    var complemento = document.getElementById("complemento")


    // if ( isNaN(rua.value)  ) {  
    //     alert("Digite apenas números no campo Rua");    
    //     return false;  
    // }


    if (nome.value == "") {
        alert("preencha o campo Nome")
        return false
    }

    if (cpf.value == "" || cpf.value.length < 8) {
        alert("Verifique as informações do campo CPF")
        return false
    }

    if (rg.value == "" || rg.value.length < 11) {
        alert("Verifique as informações do campo RG")
        return false
    }

    if (datanascimento.value == "") {
        alert("preencha o campo Data de nascimento")
        return false
    }

    if (tipocnh.value == "") {
        alert("preencha o campo Tipo de CNH")
        return false
    }

    if (estadocivil.value == "") {
        alert("preencha o campo de Estado civil")
        return false
    }

    if (cep.value == "" || cep.value.length < 8) {
        alert("preencha o campo CEP")
        return false
    }

    if (rua.value == "") {
        alert("preencha o campo Rua")
        return false
    }

    if (bairro.value == "") {
        alert("preencha o campo Bairro")
        return false
    }

    if (cidade.value == "") {
        alert("preencha o campo Cidade")
        return false
    }

    if (estado.value == "") {
        alert("preencha o campo Estado")
        return false
    }

    if (numero.value == "") {
        alert("preencha o campo Numero")
        return false
    }

    if (complemento.value == "") {
        alert("preencha o campo de Complemento")
        return false
    }

}

function dadosendereco(cep) {
    let xhr = new XMLHttpRequest

    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    // let url = "https://viacep.com.br/ws/13232445/json/"

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {

                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf

            }
        }
    }
    xhr.send()
}

function salvar() {

    const nome = document.getElementById("nome")
    const cpf = document.getElementById("cpf")
    const rg = document.getElementById("rg")
    const datanascimento = document.getElementById("datanascimento")
    const tipocnh = document.getElementById("tipocnh")
    const estadocivil = document.getElementById("estadocivil")
    const cep = document.getElementById("cep")
    const rua = document.getElementById("rua")
    const bairro = document.getElementById("bairro")
    const cidade = document.getElementById("cidade")
    const estado = document.getElementById("estado")
    const numero = document.getElementById("numero")
    const complemento = document.getElementById("complemento")

    const obj = {
        nome: nome.value,
        CPF: cpf.value,
        RG: rg.value,
        data_nasc: datanascimento.value,
        tipo_cnh: tipocnh.value,
        estado_civil: estadocivil.value,
        CEP: cep.value,
        rua: rua.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        numero: numero.value,
        complemento: complemento.value

    }

    const obj_json = JSON.stringify(obj)

    const xhr = new XMLHttpRequest()

    xhr.open("POST", "https://beginner-api.herokuapp.com/save")

    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {

            var status = JSON.parse(xhr.responseText)

            if (status.Sucesso = "Todos os campos foram preenchidos.") {
                alert("Cadastro realizado com sucesso")
            } else alert("erro de envio")

            console.log(obj_json);
            console.log(obj)
            console.log(status)

        }
        
    }

    xhr.send(obj_json)

}

function chamatudo() {

    validacao()
    salvar()
}