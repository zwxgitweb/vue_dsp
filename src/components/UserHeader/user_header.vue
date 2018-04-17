<template>
  <div id="user_header">
      {{user}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {

    },
    mounted() {
        this.user = this.$store.state.userInfo.username;
    }
}
</script>

<style>

</style>
