<template>
  <div class="container mt-2">
    <div v-for="(found, index) in founds" :key="index">
      <b-card :title="found.subject" class="mb-3">
        <b-card-title
          ><h4>{{ found.item_name }}</h4></b-card-title
        >
        <hr />

        <b-card-text>
          <div>
            <b>Categorias: </b>
            <b-badge
              v-for="(cat, i) in found.categories"
              :key="i"
              variant="primary"
              class="mr-1"
              >{{ cat }}</b-badge
            >
          </div>
        </b-card-text>

        <b-card-text>{{ found.description }}</b-card-text>

        <hr />
        <b-card-text class="float-left author"
          ><i>Por: {{ found.my_name }}</i></b-card-text
        >

        <div class="float-right">
          <b-button
            variant="outline-secondary"
            class="mr-2"
            @click="edit(found._id)"
            ><b-icon icon="brush-fill"></b-icon
          ></b-button>
          <b-button variant="outline-danger" class="mr-2"
            ><b-icon icon="bucket-fill"></b-icon
          ></b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Founds from "../services/founds";
export default {
  name: "List",
  data() {
    return {
      founds: [],
      categories: [],
    };
  },

  mounted() {
    Founds.list().then((res) => {
      this.founds = res.data;
    });
  },

  methods: {
    edit(_id) {
      this.$router.push({ name: "formEdit", params: { _id } });
    },
  },
};
</script>

<style>
.author {
  position: relative;
  bottom: -25px;
}
</style>
