import { BASE_URL } from "./api";

// fetch is asynchronous function -
export async function getAllProduct() {
  const data = await fetch(`${BASE_URL}products`).then((response) =>
    response.json()
  );
  return data;
}
