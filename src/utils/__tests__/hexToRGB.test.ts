import { expect, it, describe } from 'vitest';

import hexToRGB from '../hexToRGB.ts';

describe('`hexToRGB`', () => {
  it('should return `null` in corner cases', () => {
    expect(hexToRGB('')).toEqual(null);
    expect(hexToRGB('1')).toEqual(null);
    expect(hexToRGB('000000')).toEqual(null);
    expect(hexToRGB('##000000')).toEqual(null);
    expect(hexToRGB('#00000001')).toEqual(null);
    expect(hexToRGB('#0000000f')).toEqual(null);
    expect(hexToRGB('#ffffff ')).toEqual(null);
    expect(hexToRGB('#fff', 0.3)).toEqual(null);
    expect(hexToRGB('#ffffff', -1)).toEqual(null);
    expect(hexToRGB('#ffffff', 2)).toEqual(null);
  });

  it('should return predictable values in other cases', () => {
    expect(hexToRGB('#ffffff')).toEqual('rgb(255, 255, 255)');
    expect(hexToRGB('#FFFFFF')).toEqual('rgb(255, 255, 255)');
    expect(hexToRGB('#FFaa00')).toEqual('rgb(255, 170, 0)');
    expect(hexToRGB('#000000')).toEqual('rgb(0, 0, 0)');
    expect(hexToRGB('#000000', 0)).toEqual('rgba(0, 0, 0, 0)');
    expect(hexToRGB('#000000', 0.5)).toEqual('rgba(0, 0, 0, 0.5)');
    expect(hexToRGB('#000000', 1)).toEqual('rgba(0, 0, 0, 1)');
  });
});
