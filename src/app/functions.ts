/**
 *
 * @returns a six digit character id
 */
export function makeId() {
  let text = '';
  const possible =		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(
      Math.floor(Math.random() * possible.length),
    );
  }
  return text;
}

/**
 * Function to look for the percentage Change between two values
 * @param x
 * @param y
 * @returns floor value of percent change!
 */
export const percentChange = (x: number, y: number): number => Math.floor(((y - x) / x) * 100);

/**
 *
 * @param number
 * @returns The number arranged with commas in terms of [Thousands, hundreds, tens & Unit]
 */
export const numberWithCommas = (number: number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
