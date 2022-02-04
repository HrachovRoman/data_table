import ApiClient from "@/utils/api-client";

const baseUrl = process.env.VUE_APP_USERS_API;
export default {
    usersList(amountUsers = 1000) {
        return ApiClient.get(`${ baseUrl }/users?perPage=${amountUsers}` );
    },
    userId(id) {
        return ApiClient.get(`${ baseUrl }/users/${id}` );
    },
};