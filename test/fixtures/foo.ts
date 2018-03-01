type Return = { value: string };

/**
 * This is a description of `foo()`.
 *
 * It can be longer than a single sentence.
 * @example
 * foo(42);
 * // => "42"
 * @param bar The parameter `bar`.
 * @return The return value.
 */
function foo<T, U extends Return>(bar: T): U {
  return { value: bar.toString() } as U;
}
