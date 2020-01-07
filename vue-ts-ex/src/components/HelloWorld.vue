<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Rendering topicsIDs from dummyAPI.
      <br />Please run
      <code>kuroco servedummy</code> before serve this App.
    </p>
    <div v-for="({ topics_id }, idx) in list" :key="idx">
      <span>{{ topics_id }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TopicsApi } from "kuroco";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  list: any[] = [];

  mounted() {
    this.getTopicsList();
  }

  async getTopicsList() {
    const topicsApi = new TopicsApi();
    const responseRaw = await topicsApi.rcmsApiFeedsGet({});
    const responseFeed = await responseRaw.value();
    this.list.push(...responseFeed.list);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
