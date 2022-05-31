import http from "../../core/services/http-common";

export class AdoptersApiService {
    getAll() {
        return http.get("/adopters");
    }
    getById(id) {
        return http.get(`/adopters/${id}`);
    }
    create(data) {
        return http.post("/adopters", data);
    }
    update(id, data) {
        return http.put(`/adopters/${id}`, data);
    }
    delete(id) {
        return http.delete(`/adopters/${id}`);
    }
}