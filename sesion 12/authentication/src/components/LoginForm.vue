<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import AuthService from '../services/AuthService'

    let email = ref('')
    let password = ref('')
    
    const login = async () => {
       const auth = new AuthService()
       const success = await auth.login(email.value, password.value)
       if(success) {
        alert('Success!')
       } else {
        alert('Login failed!')
       }
    }
</script>