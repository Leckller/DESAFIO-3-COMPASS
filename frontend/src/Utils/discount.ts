export function discount(n: number, dc: number) {
  // deve receber dc no formato inteiro
  return n * ((100 - dc) / 100);
}
