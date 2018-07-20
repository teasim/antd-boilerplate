import request from "helpers/request";

export async function query(code) {
  return request(`/api/${code}`);
}
