import http from "../../core/services/http-common";

class SheltersService{
    getByEmailAndPassword(email, password){
        return http.get(`/shelters?email=${ email }&password=${ password }`);

    }
}

export default new SheltersService