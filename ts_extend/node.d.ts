interface ObjectConstructor {
  assign<T>(...obj: Partial<T>[]): T;
}
