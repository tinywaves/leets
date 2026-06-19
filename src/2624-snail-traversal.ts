export function snailTool(data: number[], rowsCount: number, colsCount: number): number[][] {
  if (data.length !== rowsCount * colsCount) {
    return [];
  }

  const cols = [];
  for (let i = 0; i < colsCount; i++) {
    cols.push(data.slice(rowsCount * i, rowsCount * i + rowsCount));
  }
  const reversedCols = [];
  for (const [index, item] of cols.entries()) {
    if (index % 2 === 1) {
      reversedCols.push(item.toReversed());
    } else {
      reversedCols.push(item);
    }
  }
  const result = [];
  for (let i = 0; i < rowsCount; i++) {
    const row = [];
    for (const col of reversedCols) {
      row.push(col[i]);
    }
    result.push(row);
  }
  return result;
}

/*
export function snail(rowsCount: number, colsCount: number): number[][] {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  const cols = [];
  for (let i = 0; i < colsCount; i++) {
    cols.push(this.slice(rowsCount * i, rowsCount * i + rowsCount));
  }
  const reversedCols = [];
  for (const [index, item] of cols.entries()) {
    if (index % 2 === 1) {
      reversedCols.push(item.toReversed());
    } else {
      reversedCols.push(item);
    }
  }
  const result = [];
  for (let i = 0; i < rowsCount; i++) {
    const row = [];
    for (const col of reversedCols) {
      row.push(col[i]);
    }
    result.push(row);
  }
  return result;
}
*/
