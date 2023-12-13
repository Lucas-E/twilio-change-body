module.exports = function substituirQuebrasDeLinha(texto) {
    const novaString = texto.replace(/\n|\r\n?/g, '\\n');
    return novaString;
  }