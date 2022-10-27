<template>
    <div class="login-form-container">
        <form class="login-form" @submit.prevent="login">
            <input type="text" placeholder="Username / Email" v-model="user" data-test-id="email" class="login-form-input"/>
            <input type="password" placeholder="Password" v-model="pass" data-test-id="password" class="login-form-input" />
            <input type="submit" value="Login" class="login-form-btn" />
            <p v-if="loginError" class="hasError">{{ feedback }}</p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default defineComponent({
  name: 'LoginView',
  setup() {
    let user = ref("")
    let pass = ref("")
    let feedback = ref("")
    let loginError = ref(false)

    function login () {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.value, pass.value).then( () => {
                //const user = userCredential.user;
                console.log("success!")
                loginError.value = false;
        })
        .catch( (error) => {
            loginError.value = true;
            feedback.value = error.message;
        })
    }

    return { user, pass, feedback, loginError, login }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login-form-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.login-form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 50px;
    width: 30%;
}

.login-form-input {
    margin: 10px;
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
}

.login-form-btn {
    background-color: #42b983;
    color: white;
    padding: 10px;
    margin: 10px;
    outline: none;
    border: 1px solid #42b983;
    cursor: pointer;
}

.hasError {
    color: lightcoral;
}

.success {
    color: #42b983;
}
</style>
