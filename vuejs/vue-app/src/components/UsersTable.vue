<template>
    <div>
        <b-table striped hover :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fields:['name.first',{key:'gender',sortable:true},'email','phone','cell']
        }
    },
    props:{
        users:{
            type: Array,
            default: () => []
        }
    }
}
</script>