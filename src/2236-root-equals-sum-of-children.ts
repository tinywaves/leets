import type { TreeNode } from './utils/tree-node';

export function checkTree(root: TreeNode | null): boolean {
  return (root?.val || 0) === (root?.left?.val || 0) + (root?.right?.val || 0);
}
