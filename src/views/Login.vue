<template>
    <div class="login">
        <form @submit.prevent="handleLogin">
            <label>Username:</label>
            <input type="text"  id="username" v-model="username">
            <br>
            <label>Password:</label>
            <input type="password" id="password" v-model="password">
            <br>
            <button>Login</button>
        </form>
            <p> This is the login Page</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            handleLogin() {
                if(this.username !== '' && this.password !== '' ) {
                    this.$router.push('/')
                }
                else {
                    alert('Please enter username and password')
                }
                console.log('login')
            }
        }
    }

</script>

<style>


</style>