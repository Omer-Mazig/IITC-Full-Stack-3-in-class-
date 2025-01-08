import api from "@/lib/api";
import { wait } from "@/lib/utils";
import { Cat, CatWithoutId } from "@/types/cat.types";

export const getCats = async (): Promise<Cat[]> => {
  const { data } = await api.get("/cats");
  console.log("getting cats...");

  await wait(2500);

  // throw new Error("baba");

  console.log("cat are here...");
  return data;
};

export const getCat = async (id: string): Promise<Cat> => {
  const { data } = await api.get(`/cats/${id}`);
  await wait();
  return data;
};

export const createCat = async (cat: CatWithoutId): Promise<Cat> => {
  const { data } = await api.post("/cats", cat);
  await wait();
  return data;
};

export const updateCat = async (
  id: string,
  updates: Partial<Cat>
): Promise<Cat> => {
  const { data } = await api.patch(`/cats/${id}`, updates);
  await wait();
  return data;
};

export const deleteCat = async (id: string): Promise<void> => {
  await wait();
  // throw new Error("no!");
  await api.delete(`/cats/${id}`);
};
