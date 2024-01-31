const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const azulInverno = {
    name: 'Azul-inverno',
    folder: 'imagens-azul-inverno'
};

const estelar = {
    name: 'Estelar',
    folder: 'imagens-estelar'
};

const meiaNoite = {
    name: 'Meia-noite',
    folder: 'imagens-meia-noite'
};

const rosaClaro = {
    name: 'Rosa-claro',
    folder: 'imagens-rosa-claro'
};

const verdeCipreste = {
    name: 'Verde-cipreste',
    folder: 'imagens-verde-cipreste'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    if (tamanhoSelecionado === '0') {
        imagemVisualizacao.classList.remove('caixa-grande');
        imagemVisualizacao.classList.add('caixa-pequena');
        miniaturaImagem0.classList.remove('caixa-grande');
        miniaturaImagem0.classList.add('caixa-pequena');
        miniaturaImagem1.classList.remove('caixa-grande');
        miniaturaImagem1.classList.add('caixa-pequena');
        miniaturaImagem2.classList.remove('caixa-grande');
        miniaturaImagem2.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
        imagemVisualizacao.classList.add('caixa-grande');
        miniaturaImagem0.classList.remove('caixa-pequena');
        miniaturaImagem0.classList.add('caixa-grande');
        miniaturaImagem1.classList.remove('caixa-pequena');
        miniaturaImagem1.classList.add('caixa-grande');
        miniaturaImagem2.classList.remove('caixa-pequena');
        miniaturaImagem2.classList.add('caixa-grande');
    }
}

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    nomeCorSelecionada.innerText = 'Cor - ' + opcoesCores[corSelecionada].name;
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-" + imagemSelecionada + ".jpeg";
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-2.jpeg";
    document.title = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name + ' ' + opcoesTamanho[tamanhoSelecionado];
}
