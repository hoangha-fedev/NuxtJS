<template>
  <div>
    <v-container>
      <v-flex xs12 pb-5>
        <h2>News</h2>
      </v-flex>

      <v-layout class="news">
        <v-flex class="col-3" v-for="(article, index) in articles" :key="index">
          <!-- News -->
          <v-card class="mx-auto">
            <img :src="article.urlToImage" width="100%" height="200px" />

            <v-card-title>
              {{ article.title }}
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-text>
              {{ article.content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="article.url" target="_blank">Open</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-14&sortBy=publishedAt&apiKey=9b96c965994f43a6adc455e8ab0ff883"
    );
    return { articles };
  }
};
</script>

<style lang="scss">
.news {
  display: flex;
  flex-wrap: wrap;
}
</style>
