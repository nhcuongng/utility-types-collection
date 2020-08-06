/**
 * Get key của Base trong đó có property là Condition
 * ```
 * interface Demo {
 *  id: string;
 *  title: string;
 *  x: number;
 *  y: number;
 * }
 * PickKeyWithType<Demo, string>
 * -> return "id" | "title"
 * ```
 * https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
 */
export type PickKeyWithType<Base, Condition> = FilterFlagsKey<Base, Condition>[keyof Base];
type FilterFlagsKey<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
};

/**
 * Lấy cả Key và type cua Key dựa theo dieu kiện
 * ```
 * interface Demo {
 *  id: string;
 *  title: string;
 *  x: number;
 *  y: number;
 * }
 * PickWithType<Demo, string>
 * -> return { id: string, title: string }
 * ```
 * https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
 */
export type PickWithType<Base, Condition> = Pick<Base, PickKeyWithType<Base, Condition>>;

/**
 * Type để định nghĩa object property
 */
export type TObjectProperty<U> = {
  [k: string]: U
};

/**
 * Ghi de type trong type khac
 *
 *```ts
  type Line = {
    start: Point;
    end: Point;
    color: string;
  }
  type HexColorLine = OverWrite<Line, { color: number }>
 ```

 @src https://stackoverflow.com/questions/43080547/how-to-override-type-properties-in-typescript
*/
export type OverWrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
