/**
 * Export helpers to format numeric values
 */

export const formatMoney = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
