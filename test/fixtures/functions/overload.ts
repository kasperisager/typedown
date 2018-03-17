/**
 * Stringify a number.
 *
 * @example
 * stringify(42);
 * // => "42"
 *
 * @param input The number to stringify.
 * @return The stringified number.
 */
function stringify(input: number): string;

/**
 * Stringify a number using a custom radix.
 *
 * @example
 * stringify(42, 16);
 * // => "2a"
 *
 * @param input The number to stringify.
 * @param radix The radix of the number.
 * @return The stringified number.
 */
function stringify(input: number, radix: number): string;

/**
 * Stringify a boolean.
 *
 * @example
 * stringify(true);
 * // => "true"
 *
 * @param input The boolean to stringify.
 * @return The stringified boolean.
 */
function stringify(input: boolean): string;

function stringify(input: number | boolean, radix: number = 10): string {
  if (typeof input === "number") {
    return input.toString(radix);
  }

  if (typeof input === "boolean") {
    return input.toString();
  }

  return "";
}
