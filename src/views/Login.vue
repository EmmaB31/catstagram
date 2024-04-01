<template>
    <div class="login">
        <h1>Catstagram</h1>
        <form @submit.prevent="handleLogin">
            <label>Username:</label>
            <input type="text"  id="username" v-model="username">
            <br>
            <label>Password:</label>
            <input type="password" id="password" v-model="password">
            <br>
            <button>Login</button>
        </form>
            
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
    
    form {
        max-width: 400px;
        margin: 20px auto;
        background:rgb(185, 239, 227);
        padding: 10px;
        border-radius: 10px;
    }
    label {
        color: rgb(70, 70, 70);
        display: inline-block;
        margin: 20px 15px 15px;
        font-weight: bold
    }
    input {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        border: none;
    }
    button {
        background: rgb(14, 66, 157);
        border: 1px;
        padding:5px 10px;
        border-radius: 20px;
        color: white;
    }

</style>