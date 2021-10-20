<template>
    <div class="container">
        <div class="row">
           <div class="col-3">    
                <form action="">
                    <label class="form-label" for="email">Email:</label>
                    <input type="text" class="form-control" v-model="form.email" id="email">
                    <label class="form-label" for="pass">password:</label>
                    <input type="password" class="form-control" v-model="form.password" id="pass">
                    <input type="button" class="btn btn-success mt-2" @click="login" value="Ingresar">
                </form>
            </div>    
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods:{
        login(){
            let formData = new URLSearchParams()
            formData.append('email',this.form.email)
            formData.append('password',this.form.password)
            axios.post('https://yimy-mintic-88.herokuapp.com/login',formData,{
            // axios.post('http://localhost:3000/login',formData,{
                headers:{
                    "Access-Control-Allow_Methods":"POST"
                    // "x-auth-token":
                }
            })
            .then((response)=>{
                // console.log(response.data);
                localStorage.setItem('token', response.data.token);
                this.$router.push('/home')
            })
            // if (this.user) {
            //     localStorage.setItem('user',this.user);
            //     this.$router.push('/home')
            // }
        }
    }
}
</script>