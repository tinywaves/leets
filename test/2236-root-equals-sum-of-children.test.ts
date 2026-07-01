import { describe, expect, it } from 'vitest';
import { TreeNode } from '../src/utils/tree-node';
import { checkTree } from '../src/2236-root-equals-sum-of-children';

describe('2236. Root Equals Sum of Children', () => {
  it('root = [10,4,6]', () => {
    expect(
      checkTree(
        new TreeNode(
          10,
          new TreeNode(4),
          new TreeNode(6),
        ),
      ),
    ).toBe(true);
  });

  it('root = [5,3,1]', () => {
    expect(
      checkTree(
        new TreeNode(
          5,
          new TreeNode(3),
          new TreeNode(1),
        ),
      ),
    ).toBe(false);
  });
});
