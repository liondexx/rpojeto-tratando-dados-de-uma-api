var mostraCep = fetch('https://viacep.com.br/ws/01001250/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse cep não existe!');
    }console.log(r)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('processamento concluido'));



