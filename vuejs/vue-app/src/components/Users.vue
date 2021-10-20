<template>
  <div class="row">
    <div class="col-3 mb-4" v-for="user in users" :key="user.login.uuid">
      <div class="card shadow">  
        <a :href="'/user/'+user.login.uuid"><img :src="user.picture.medium" alt="" class="card-img-top" /></a>
        <div class="card-body">
          <h4 class="card-title">{{ user.name.first + " " + user.name.last | upper }}</h4>
          <h5>{{user.phone | phone}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  // data(){

  // }
};
</script>