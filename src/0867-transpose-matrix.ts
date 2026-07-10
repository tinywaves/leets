export function transpose(matrix: number[][]): number[][] {
  const result = Array.from(
    { length: matrix[0].length },
    () => Array.from(
      { length: matrix.length },
      () => 0,
    ),
  );
  for (const [rowIndex, row] of matrix.entries()) {
    for (const [colIndex, element] of row.entries()) {
      result[colIndex][rowIndex] = element;
    }
  }
  return result;
}
