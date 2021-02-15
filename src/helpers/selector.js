import get from 'lodash/get'

export const selectUsers = (state) => get(state, 'user.users', [])

export const selectAuth = (state) => get(state, 'auth', false)