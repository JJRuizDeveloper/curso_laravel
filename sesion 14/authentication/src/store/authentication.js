import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', {
    state: () => {
        return {
            jwt: '',
            error: '',
            isAuthenticated: false,
            url: 'https://hfp69ilv.directus.app/auth/login'
        }
    },
    actions: {
        async login(email, password) {
            try {
                const response = await fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })

                const json = await response.json()

                if('errors' in json) {
                    this.error = 'Login failed'
                }

                this.jwt = json.data.access_token
                this.isAuthenticated = true
            } catch(error) {
                this.error = "Login failed"
            }
        }
    }
})