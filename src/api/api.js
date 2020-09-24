import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "75a2366b-2f8c-4059-8cc9-298369a0c793"
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
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => {
                return res.data
            })
    },

    updateUserStatus(status) {
        return instance.put('profile/status', {status})
            .then(res => {
                return res
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(res => {
                return res.data
            })
    },
    login(formData) {
        return instance.post('auth/login', formData)
            .then(res => {
                return res.data
            })
    },
    logout() {
        return instance.delete('auth/login')
            .then(res => {
                return res.data
            })
    }
}
