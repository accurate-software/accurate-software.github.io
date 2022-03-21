<template>
  <div class="container mt-2">
    <b-row class="m-0">
      <div class="mb-3 mt-2">
        <b-button
          class="btn-sm"
          v-b-modal.search-modal
          variant="outline-primary"
          >Busca Avançada</b-button
        >
      </div>

      <div class="ml-2 mb-3 mt-2">
        <b-button class="btn-sm" variant="outline-primary" @click="clearSearch"
          >Limpar Busca</b-button
        >
      </div>

      <div class="ml-2 mb-3 mt-2">
        <b-link href="/form"
          ><b-button class="btn-sm" variant="success"
            >Nova Publicação</b-button
          ></b-link
        >
      </div>
    </b-row>

    <div v-for="(found, index) in founds" :key="index">
      <b-card :title="found.subject" class="mb-3">
        <div class="d-flex flex-column-reverse">
          <b-card-title
            ><h4 class="d-flex flex-column">
              {{ found.item_name }}
            </h4></b-card-title
          >
          <div v-if="found.status == 0" class="d-flex justify-content-end">
            <b-badge variant="danger">Perdido</b-badge>
          </div>

          <div v-if="found.status == 1" class="d-flex justify-content-end">
            <b-badge variant="success">Encontrado</b-badge>
          </div>
        </div>
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

        <b-card-text><b>Cidade:</b> {{ found.city }}</b-card-text>
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
        ref="search-modal"
        size="xl"
        class="d-block text-center"
        hide-footer
      >
        <template #modal-title class="d-block text-center"
          >Busca Avançada</template
        >
        <SearchModal @search="search" />
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
    search(e) {
      //Recebe os dados de da busca avançada
      this.founds = e.founds;
      this.$refs["search-modal"].hide();
    },

    clearSearch() {
      Founds.list().then((res) => {
        this.founds = res.data;
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
