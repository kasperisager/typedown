# Function: transform

**transform**&lt;**T**, **U** extends **T**>(items: [**Transformable**](functions/generic.ts)&lt;**T**>, transformer: (item: **T**) => **U**): **Array**&lt;**U**>

> Defined in [functions/generic.ts:11](functions/generic.ts:L11)

Construct a list with the result of passing every item from the transformable
list through a transformer function.
