async function buscaCep(cep) {
   try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertido = await consultaCep.json();
        if(consultaCepConvertido.erro) {
            throw Error ('esse cep não exite')
        }
        console.log(consultaCepConvertido)
        return consultaCepConvertido;
   }catch (erro) {
        console.log(erro);

   }
}

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaCep(valores));
Promise.all(conjuntoCeps).then(respsta => console.log(respsta));

