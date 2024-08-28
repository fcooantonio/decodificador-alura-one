function codificar(texto) {
    const substituicoes = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };

    texto = texto.toLowerCase();

    let textoCodificado = '';
    for (let i = 0; i < texto.length; i++) {
      const caractere = texto[i];
      const substituicao = substituicoes[caractere];
      textoCodificado += substituicao ? substituicao : caractere;
    }
  
    return textoCodificado;
}

function decodificar(texto) {
    const substituicoesInversas = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };

    for (const chave in substituicoesInversas) {
      const valor = substituicoesInversas[chave];
      texto = texto.replaceAll(chave, valor);
    }
  
    return texto;
}

function criptografar() {
    let textoBase = document.querySelector('textarea').value;
    let textoCriptografado = codificar(textoBase);
    document.getElementById('texto-encriptado').textContent = textoCriptografado;
}

function descriptografar() {
    const textoBase = document.querySelector('textarea').value;
    const textoDescriptografado = decodificar(textoBase);
    document.getElementById('texto-encriptado').textContent = textoDescriptografado;
}