import Axios from "axios";

export const fetchUsers = () => {
    return Axios.get("https://reqres.in/api/users");
};