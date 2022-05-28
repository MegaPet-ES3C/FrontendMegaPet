import http from "../../core/services/http-common";

export class PetsApiService {
    getAll() {
        return http.get("/pets");
    }
    getById(id) {
        return http.get(`/pets/${id}`);
    }
    create(data) {
        return http.post("/pets", data);
    }
    update(id, data) {
        return http.put(`/pets/${id}`, data);
    }
    delete(id) {
        return http.delete(`/pets/${id}`);
    }
    findByTitle(title) {
        return http.get(`/pets?title=${title}`);
    }
}
