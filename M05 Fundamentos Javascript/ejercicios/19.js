function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  var indicador = Math.sign(num)
  if (indicador == 1)
  return "Es positivo"
  else if (indicador == -1)
  return "Es negativo"
  else (indicador = 0)
  return false

}

module.exports = esPositivo;