export function mapObject<
  Key extends string,
  InputItem,
  Input extends Record<Key, InputItem>,
  OutputItem,
  Output extends Record<Key, OutputItem>,
>(input: Input, mapFn: (key: Key, input: InputItem) => OutputItem): Output {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key,
      mapFn(key as Key, value as InputItem),
    ]),
  ) as Output;
}

export function filterObject<
  Key extends string,
  InputItem,
  Input extends Record<Key, InputItem>,
>(input: Input, filterFn: (key: Key, input: InputItem) => boolean): Input {
  return Object.fromEntries(
    Object.entries(input).filter(([key, value]) =>
      filterFn(key as Key, value as InputItem),
    ),
  ) as Input;
}
