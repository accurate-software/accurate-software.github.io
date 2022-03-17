<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Achados&Perdidos</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Listagem</b-nav-item>
          <b-nav-item to="/form">Formulário</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
import Founds from "./services/founds";
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      founds: [],
      categories: [],
      _id_selected: "",
    };
  },

  methods: {
    showDeleteModal(_id) {
      this.$bvModal.show("delete-model");
      this._id_selected = _id;
    },
    deletePost() {
      const _id = this._id_selected;

      axios.delete(`http://localhost:3333/founds/${_id}`).then((res) => {
        if (res.status == 200) {
          this.$bvModal.hide("delete-model");
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
