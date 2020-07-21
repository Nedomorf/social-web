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
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "6183f663-1903-42f5-a144-b44d307cb69e"
                }
            })
                .then(res => {
                    return res.data
                })
        )
    },

    followUser(id) {
        return (
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "6183f663-1903-42f5-a144-b44d307cb69e"
                }
            })
                .then(res => {
                    return res.data
                })
        )
    }
}

export const userProfileAPI = {
    getUserProfile(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                return res.data
            })
    }
}
