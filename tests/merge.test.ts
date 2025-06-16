// __tests__/merge.test.ts
import { merge } from '../src/merge';

describe('merge()', () => {
  it('merges three sorted arrays correctly', () => {
    expect(merge([1,3,5], [6,4,2], [7,8,9]))
      .toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it('handles empty arrays', () => {
    expect(merge([], [3,2,1], [])).toEqual([1,2,3]);
    expect(merge([], [], [])).toEqual([]);
  });

  it('handles varying lengths', () => {
    expect(merge([0], [5,4], [1,2,3]))
      .toEqual([0,1,2,3,4,5]);
  });
});
