<template>
     <div class="container" v-if="!store.isAuthenticated">
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
            <button type="submit" class="btn btn-primary" @click.prevent="store.login(email, password)">Login</button>
            <div class="alert alert-danger mt-2" v-if="store.error">{{ store.error }}</div>
        </form>
    </div>
    <div class="container" v-else>
        <h3>You are logged in</h3>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useAuthenticationStore } from '../store/authentication'

    let email = ref('')
    let password = ref('')
    const store = useAuthenticationStore()
    
</script>