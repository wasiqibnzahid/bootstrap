<template>
  <div>
    <ul v-if="!showback" class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" aria-current="page" to="/bills"
          >Bills</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/vendors">Vendors</router-link>
      </li>
    </ul>
    <div v-else @click="backToBills()" class="nav-item">Back to Bills</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showback: false,
    };
  },
  watch: {
    $route: {
      handler: function () {
        this.showback = false;
        if (this.$route.path == "/create-bill") {
          this.showback = true;
        }
      },
    },
  },
  methods: {
    backToBills() {
      this.showback = false;
      this.$router.push("bills");
    },
  },
};
</script>

<style></style>
