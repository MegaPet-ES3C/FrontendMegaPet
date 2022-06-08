import http from "../../core/services/http-common";

export class SheltersApiService {
  getAll() {
    return http.get("/shelters");
  }
  getByEmailAndPassword(email, password) {
    return http.get(`/shelters?email=${email}$password=${ password }`);
  }
  getById(id) {
    return http.get(`/shelters/${id}`);
  }
  create(data) {
    return http.post("/shelters", data);
  }
  update(id, data) {
    return http.put(`/shelters/${id}`, data);
  }
  delete(id) {
    return http.delete(`/shelters/${id}`);
  }
}
