import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.Users.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users;
})

export const getCount = (state) => {
    return state.Users.count;
}

export const getTotalCount = (state) => {
    return state.Users.totalCount;
}

export const getPage = (state) => {
    return state.Users.page;
}

export const getShortPages = (state) => {
    return state.Users.shortPages;
}

export const getIsFetching = (state) => {
    return state.Users.isFetching;
}

export const getFollowingInProcess = (state) => {
    return state.Users.followingInProcess;
}