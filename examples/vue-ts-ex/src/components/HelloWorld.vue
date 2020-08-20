<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Rendering topicsIDs from the server.
    </p>
    <div v-for="({ topics_id }, idx) in list" :key="idx">
      <span>{{ topics_id }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Auth, TopicsService } from "kuroco";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  list: any[] = [];

  mounted() {
    getTopicsList()
      .then(res => this.list = res.body.list)
  }
}

async function getTopicsList() {
  await Auth.login({
    requestBody: { email: 'test', password: 'qwer1234' },
  })
  return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
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
