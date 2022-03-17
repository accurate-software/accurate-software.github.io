<template>
  <div class="container mt-2">
    <b-row>
      <b-col lg="12">
        <div class="float-right mb-3 mt-2">
          <b-button v-b-modal.search-modal variant="outline-primary"
            >Busca Avançada</b-button
          >
        </div>
      </b-col>
    </b-row>

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
          <b-button
            variant="outline-danger"
            class="mr-2"
            @click="showDeleteModal(found._id)"
            ><b-icon icon="bucket-fill"></b-icon
          ></b-button>
        </div>
      </b-card>
    </div>

    <div>
      <b-modal id="delete-modal" class="d-block text-center" hide-footer>
        <template #modal-title class="d-block text-center">Delete</template>
        <div class="d-block text-center">
          <b>Deseja realmente deletar esta publicação?</b>
        </div>
        <b-button
          variant="outline-danger"
          class="mt-3"
          block
          @click="deletePost"
          >Delete</b-button
        >
      </b-modal>
    </div>

    <div>
      <b-modal
        id="search-modal"
        size="xl"
        class="d-block text-center"
        hide-footer
      >
        <template #modal-title class="d-block text-center"
          >Busca Avançada</template
        >
        <SearchModal />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Founds from "../services/founds";
import axios from "axios";
import SearchModal from "../components/SearchModal.vue";

export default {
  name: "List",
  components: {
    SearchModal,
  },
  data() {
    return {
      founds: [],
      categories: [],
      _id_selected: "",
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

    showDeleteModal(_id) {
      this.$bvModal.show("delete-modal");
      this._id_selected = _id;
    },
    deletePost() {
      const _id = this._id_selected;

      axios.delete(`http://localhost:3333/founds/${_id}`).then((res) => {
        if (res.status == 200) {
          this.$bvModal.hide("delete-modal");
          Founds.list().then((res) => {
            this.founds = res.data;
          });
        } else {
          alert("Ops! Aconteu algum erro.");
        }
      });
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
