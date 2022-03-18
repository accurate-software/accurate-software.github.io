<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="justify-content: center; !important"
    >
      <b-navbar-brand>
        <b-link href="/" style="text-decoration: none; color: #fff"
          >Achados&Perdido</b-link
        ></b-navbar-brand
      >
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
