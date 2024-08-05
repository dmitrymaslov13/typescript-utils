export type NonNullableProperties<
  T extends Record<string, any>,
  K extends keyof T = keyof T,
> = Readonly<
  {
    [k in K]-?: NonNullable<T[k]>;
  } & {
    [k in Exclude<keyof T, K>]: T[k];
  }
>;
