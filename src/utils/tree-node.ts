export class TreeNode<T = number> {
  val: T;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: T, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val) as T;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
