<template>
  <div>
    <div v-if="loaded">
      <img :src="user.picture.large" alt="" />
      <h1>{{ user.name.first }}</h1>
    </div>
    <div v-else>
         <b-spinner variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      user: {},
      loaded: false,
    };
  },
  created() {
    this.getUser(this.$route.query.id);
  },
  methods: {
    getUser(id) {
      (async () => {
        this.user = await api.getUserData(id);
        this.loaded = true;
        // console.log(this.user);
      })();
    },
  },
};
</script>