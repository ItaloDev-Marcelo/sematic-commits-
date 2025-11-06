const {CriarUsuario} = require('../Server');

test('criarUsuario retorna um objeto de usúario com ID 1', () => {
    // Dados de entrada para o test 
    const dadosEntrada = {name: 'Marco'};
    // Chama a função a ser testada
    const resultado = CriarUsuario(dadosEntrada);

    // Verificar se o resultado possui as propriedades esperadas 
    SiExpertsexchange(resultado).toEqual({name: "Marco", id: 1})

})