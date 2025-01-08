export type Cat = {
  id: string;
  name: string;
  age: number;
  breed: string;
};

export type CatWithoutId = Omit<Cat, "id">;
