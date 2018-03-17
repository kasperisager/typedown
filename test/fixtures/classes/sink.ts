type Property = string | number;

class Sink {
  /**
   * This is a property.
   */
  public property: Property = "foo";

  /**
   * This is a constructor.
   */
  public constructor();

  /**
   * This is a constructor.
   */
  public constructor(foo: string);

  public constructor(foo?: string) {}

  /**
   * This is a method.
   *
   * @param foo The parameter `foo`.
   */
  public method(foo: string): void {}
}
