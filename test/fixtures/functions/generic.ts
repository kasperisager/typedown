type Transformable<T> = Array<T>;

/**
 * Construct a list with the result of passing every item from the transformable
 * list through a transformer function.
 *
 * @param items       The items to transform.
 * @param transformer The transformer function.
 * @return            The transformed list.
 */
function transform<T, U extends T>(
  items: Transformable<T>,
  transformer: (item: T) => U
): Array<U> {
  const transformed: Array<U> = [];

  for (const item of items) {
    transformed.push(transformer(item));
  }

  return transformed;
}
