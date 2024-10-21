export default function compareDates(dateToCheck: string, limit = 45): boolean {
  const currentDate = new Date();
  const givenDate = new Date(dateToCheck);

  // Calcula a diferença em milissegundos
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // Converte a diferença para dias
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Verifica se a diferença é maior que o limit (padrão 45)
  return differenceInDays > limit;
}
