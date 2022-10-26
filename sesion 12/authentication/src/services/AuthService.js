import {ref} from 'vue'

class AuthService {
    
    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt() {
        this.jwt
    }

    getError() {
        this.error
    }

    async login(email, password) {
        try {
            const url = 'https://hfp69ilv.directus.app/auth/login'
            const response = await fetch(url, {
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
                this.error.value = "Login failed"
                return false
            }

            this.jwt.value = json.data.access_token
            return true
            
        } catch(error) {
            this.error.value = "Login failed"
            return false
        }
    }
}

export default AuthService