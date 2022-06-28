/**
 * TODO: duplicate, need fix it before v3
 * TODO: move another package for reuse between addon-editor and addon-doc
 * @deprecated: use {@link tuiRgbToHex} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function rgbToHex(r: number, g: number, b: number): string {
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

export const tuiRgbToHex = rgbToHex;

/**
 * @deprecated: use {@link tuiHexToRgb} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function hexToRgb(hex: string): [number, number, number] {
    const matches = hex
        .replace('#', '')
        .split('')
        .map((char, _, array) => (array.length === 3 ? char + char : char))
        .join('')
        .match(/.{2}/g);

    return matches
        ? (matches.map(x => Number.parseInt(x, 16)) as [number, number, number])
        : [0, 0, 0];
}

export const tuiHexToRgb = hexToRgb;
