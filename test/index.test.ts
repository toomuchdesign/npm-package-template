import { describe, expect, it } from 'vitest';

import { hello } from '../src';

describe('hello', () => {
  it('returns greeting', () => {
    const actual = hello('world');
    expect(actual).toBe('world');
  });
});
