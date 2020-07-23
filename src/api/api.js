import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6183f663-1903-42f5-a144-b44d307cb69e"
    }

})

export const usersAPI = {

    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(res => {
                return res.data
            })
    },

    unFollowUser(id) {
        return (
            instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
                .then(res => {
                    return res.data
                })
        )
    },

    followUser(id) {
        return (
            instance.post(`follow/${id}`)
                .then(res => {
                    return res.data
                })
        )
    }
}

export const userProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => {
                return res.data
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(res => {
                return res.data
            })
    }
}
