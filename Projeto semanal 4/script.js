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
        function func(e){
                if(cpf.value.length == 3){
                    cpf.value += "."
                }
                if(cpf.value.length == 7){
                    cpf.value += "."
                }
                if(cpf.value.length == 11){
                    cpf.value += "-"
                }
            }

 document.getElementById("rg").addEventListener("input", func2)
            function func2(e){
                if(rg.value.length == 2){
                    rg.value += "."
                }
                if(rg.value.length == 6){
                    rg.value += "."
                }
                if(rg.value.length == 9){
                    rg.value += "-"
                }
            }

document.getElementById("cep").addEventListener("input", func3)
            function func3(e){
                if(cep.value.length == 5){
                    cep.value += "-"
                }
            }
        

        
         



function validacao(){
    var nome = document.getElementById("nome")
    var cpf = document.getElementById("cpf")
    var rg = document.getElementById("rg")
    var datanascimento = document.getElementById("datanascimento")
    var tipocnh = document.getElementById("tipocnh")
    var estadocivil = document.getElementById("estadocivil")
    var cep= document.getElementById("cep")
    var rua= document.getElementById("rua")
    var bairro= document.getElementById("bairro")
    var cidade= document.getElementById("cidade")
    var estado= document.getElementById("estado")
    var numero= document.getElementById("numero")
    var complemento= document.getElementById("complemento")
    
    
    if ( isNaN(rua.value)  ) {  
        alert("Digite apenas números no campo Rua");    
        return false;  
    }


    if(nome.value==""){
        alert("preencha o campo Nome")
        return false
    }

    if(cpf.value=="" || cpf.value.length < 14){
        alert("Verifique as informações do campo CPF")
        return false
    }

    if(rg.value=="" || rg.value.length < 11 ){
        alert("Verifique as informações do campo RG")
        return false
    }

    if(datanascimento.value==""){
        alert("preencha o campo Data de nascimento")
        return false
    }

    if(tipocnh.value==""){
        alert("preencha o campo Tipo de CNH")
        return false
    }

    if(estadocivil.value==""){
        alert("preencha o campo de Estado civil")
        return false
    }

    if(cep.value=="" || cep.value.length < 9){
        alert("preencha o campo CEP")
        return false
    }

    if(rua.value==""){
        alert("preencha o campo Rua")
        return false
    }

    if(bairro.value==""){
        alert("preencha o campo Bairro")
        return false
    }

    if(cidade.value==""){
        alert("preencha o campo Cidade")
        return false
    }

    if(estado.value==""){
        alert("preencha o campo Estado")
        return false
    }

    if(numero.value==""){
        alert("preencha o campo Numero")
        return false
    }

    if(complemento.value==""){
        alert("preencha o campo de Complemento")
        return false
    }

}