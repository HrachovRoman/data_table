import ApiClient from "@/utils/api-client";

const baseUrl = process.env.VUE_APP_USERS_API;
export default {
    usersList() {
        return ApiClient.get(`${ baseUrl }/users` );
    }
};