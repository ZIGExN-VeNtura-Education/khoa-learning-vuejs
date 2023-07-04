import axios from 'axios'
axios.defaults.baseURL = 'http://103.3.247.87:3000/api/v1';

export const auth = {
    state: {
        auth_status: false,
        auth_token: null,
        auth_info: {
            id: null,
            email: null,
            created_at: null,
            updated_at: null
        }
    },
    getters: {
        GET_AUTH_STATUS(state) {
            return state.auth_status;
        },

        GET_AUTH_TOKEN(state) {
            return state.auth_token;
        },

        GET_AUTH_INFO(state) {
            return state.auth_info;
        }
    },
    mutations: {
        SET_AUTH_TOKEN(state, token) {
            state.auth_token = token;
            state.auth_status = true;
        },
        SET_AUTH_INFO(state, user) {
            state.auth_info.id = user.id;
            state.auth_info.email = user.email;
        }
    },
    actions: {
        LOGIN(context, LoginData) {
            return new Promise((resolve, reject) => {
                axios.post('/sign_in', LoginData)
                    .then((res) => {
                        context.commit('SET_AUTH_TOKEN', res.data.user.authentication_token)
                        context.commit('SET_AUTH_INFO', res.data.user)
                        resolve(res)
                    }).catch((error) => {
                        reject(error)
                    })
            })
        }
    },
}