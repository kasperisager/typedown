/// <reference path="./types/jsx.d.ts"/>

const { assign } = Object;
const { isArray } = Array;

export type Child = JSX.Element | string | number | boolean;

function flatten(array: Array<any>): Array<any> {
  const flattened = [];

  for (const item of array) {
    if (item === null || item === undefined) {
      continue;
    }

    if (isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

export function jsx(
  type: string,
  attributes: { [name: string]: string | number | boolean } | null,
  ...children: Array<Child | Array<Child>>
): JSX.Element {
  return assign({}, { type }, attributes, {
    children: flatten(children).map(child => {
      if (
        typeof child === "string" ||
        typeof child === "number" ||
        typeof child === "boolean"
      ) {
        return {
          type: "text",
          value: String(child)
        };
      }

      return child;
    })
  });
}
