export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }

  if (classFunction === Object) {
    return true;
  }

  switch (classFunction) {
    case Number: {
      return typeof obj === 'number';
    }
    case String: {
      return typeof obj === 'string';
    }
    case Boolean: {
      return typeof obj === 'boolean';
    }
    case BigInt: {
      return typeof obj === 'bigint';
    }
    case Symbol: {
      return typeof obj === 'symbol';
    }
  }

  return obj instanceof classFunction;
}
