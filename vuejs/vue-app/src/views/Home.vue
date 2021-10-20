<template>
    <div class="container">
        <UsersTable :users="users"></UsersTable>
        <users v-bind:users="users"></users>
    </div>
</template>

<script>
import api from '@/api';
import Users from '@/components/Users.vue';
import UsersTable from '@/components/UsersTable';
export default {
    name: 'Home',
    components:{
        Users,
        UsersTable
    },
    data(){
        return {
            users:[]
        }
    },
    created(){
        // api.getUsersPromise().then(data=>console.log(data));
        (async () =>{
            this.users = await api.getUsersAsync();
            console.log(this.users);
            })();
    }
}
</script>