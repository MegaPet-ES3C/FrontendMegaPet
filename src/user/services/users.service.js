import http from "../../core/services/http-common";

class UsersService{
    getByEmailAndPassword(email, password){
        return http.get(`/users?email=${email}&password=${ password }`);

    }
}
export default new UsersService