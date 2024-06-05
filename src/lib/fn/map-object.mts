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
