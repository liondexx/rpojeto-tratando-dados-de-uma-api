async function buscaCep(cep) {
     var mensagemErro = document.getElementById('erro');//importantante deixar declarado antes do try,pois como vai ser puxado no catch, o escopo dele seria só dentro do try;
     mensagemErro.innerHTML = "";//importante para na hora que colocar um cep valido a msg de erro desaparecer;
   try {//buscar
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertido = await consultaCep.json();
        
        if(consultaCepConvertido.erro) {
            throw Error ('esse cep não exite');
        }
        //console.log(consultaCepConvertido)


        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertido.localidade;
        logradouro.value = consultaCepConvertido.logradouro;
        bairro.value = consultaCepConvertido.bairro;
        estado.value = consultaCepConvertido.uf;

        return consultaCepConvertido;
   }catch (erro) {//retrono de erro
          mensagemErro.innerHTML = `<p>Cep invalido!</p>`;
          console.log(erro);

   }
}

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaCep(valores));
// Promise.all(conjuntoCeps).then(respsta => console.log(respsta)); //usando o promisse.all apenas  para buscar os valores do cep, e covertentendo pra json

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaCep(cep.value));
