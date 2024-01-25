type SnakeToCamelCase<S> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type ToCamelCase<InputType> = {
  [K in keyof InputType as SnakeToCamelCase<K>]: InputType[K];
};
