export const last = (arr: any[]) => (arr.length === 0 ? -1 : arr.at(-1));

/*
interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function() {
  return this.length === 0 ? -1 : this[this.length - 1]
};
*/
