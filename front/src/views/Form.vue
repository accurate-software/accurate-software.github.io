<template>
  <div class="container mt-2">
    <b-form class="mb-5">
      <b-row>
        <b-col lg="6" style="border-right: 1px solid">
          <b-row>
            <b-col lg="6">
              <b-form-group label="Autor(*)" label-for="my_name">
                <b-form-input
                  id="my_name"
                  v-model="founds.my_name"
                  type="text"
                  placeholder="Ex: Jhon Doe"
                  required
                  autocomplete="off"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col lg="6">
              <b-form-group label="Cel.(*)" label-for="cel">
                <b-form-input
                  id="cel"
                  v-model="founds.cel"
                  v-mask="'(##) #####-####'"
                  type="text"
                  placeholder="Ex: (11) 89879-8798"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col lg="6">
              <label for="street">Endereço(*)</label>
              <div class="form-group input-group">
                <input
                  id="street"
                  v-model="founds.street"
                  type="text"
                  class="form-control"
                  placeholder="Ex: Rua Maria Paula"
                  required
                  aria-describedby="button-street"
                />
                <div class="input-group-append" id="button-street">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    v-b-popover.hover.right="
                      'Auto preenche os campos de endereço'
                    "
                    title="Buscar endereço"
                    @click="getStreet"
                  >
                    <b-icon icon="search"></b-icon>
                  </button>
                </div>
              </div>
            </b-col>

            <b-col lg="6">
              <b-form-group label="Cidade(*)" label-for="city">
                <b-form-input
                  id="city"
                  v-model="founds.city"
                  type="text"
                  placeholder="Ex: São Paulo"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col lg="6">
              <label for="postalCode">CEP(*)</label>
              <div class="form-group input-group">
                <input
                  id="postalCode"
                  v-model="founds.postalCode"
                  v-mask="'#####-###'"
                  type="text"
                  class="form-control"
                  placeholder="Ex: 013190001"
                  required
                  aria-describedby="button-postalCode"
                />
              </div>
            </b-col>

            <b-col lg="6"></b-col>

            <b-col lg="6">
              <b-form-group label="Longitude" label-for="longitude">
                <b-form-input
                  id="latitude"
                  v-model="founds.location.coordinates[0]"
                  type="text"
                  placeholder="Ex: -42.6403861"
                  required
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col lg="6">
              <b-form-group label="Latitude" label-for="latitude">
                <b-form-input
                  id="latitude"
                  v-model="founds.location.coordinates[1]"
                  type="text"
                  placeholder="Ex: -21.5521808"
                  required
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>

        <b-col lg="6">
          <b-row>
            <b-col lg="12">
              <b-form-group label="Titulo(*)" label-for="subject">
                <b-form-input
                  id="item_name"
                  v-model="founds.item_name"
                  type="text"
                  placeholder="Ex: teste teste tese"
                  required
                  autocomplete="off"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col lg="12">
              <b-form-group label="Descrição(*)" label-for="description">
                <b-form-textarea
                  id="description"
                  v-model="founds.description"
                  type="text"
                  placeholder="Ex: TextArea"
                  required
                  autocomplete="off"
                ></b-form-textarea>
              </b-form-group>
            </b-col>

            <b-col>
              <div>
                <label class="typo__label">Categorias(*)</label>
                <multiselect
                  v-model="value"
                  tag-placeholder="Adicionar uma categoria"
                  placeholder="Procurar por categoria"
                  label="name"
                  track-by="code"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></multiselect>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <hr />

      <b-button class="mr-1" variant="outline-secondary" @click="linkList"
        >Voltar</b-button
      >
      <b-button variant="outline-primary" @click="saveTask">Salvar</b-button>
    </b-form>
  </div>
</template>
<style src="../assets/css/vue-multiselect.min.css"></style>

<script>
import Founds from "../services/founds";
import axios from "axios";
import api from "..//services/api";
import Multiselect from "vue-multiselect";

export default {
  name: "Form",
  components: {
    Multiselect,
  },
  data() {
    return {
      methodSave: "new",
      founds: {
        item_name: "",
        description: "",
        categories: "",
        street: "",
        city: "",
        postalCode: "",
        location: {
          coordinates: {
            0: "",
            1: "",
          },
        },
      },
      _id: "",
      value: [],
      options: [
        { name: "Casa", code: "1" },
        { name: "Objetos", code: "2" },
        { name: "Pets", code: "3" },
      ],
      categories: "",
    };
  },

  created() {
    //Verifica se tem id
    if (this.$route.params._id === 0 || this.$route.params._id !== undefined) {
      this.methodSave = "update";
      this._id = this.$route.params._id;

      //Se houver id, lista os dados e preenche os inputs
      Founds.listById(this._id).then((res) => {
        this.founds = res.data;

        //Prenche o select de categorias
        let arr_categories = [];
        res.data.categories.map((res, index) => {
          arr_categories.push({ name: res, code: index });
        });

        this.value = arr_categories;
      });
    }
  },

  watch: {
    value: function (val) {
      //Trata o campo value que é um objeto para inserir uma string no campo founds.categories
      let result = [];

      val.map((cat, index) => {
        result.push(cat.name);
      });

      result = JSON.stringify(result);

      result = result.replace("[", "");
      result = result.replace("]", "");

      this.founds.categories = result;
    },
  },

  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    saveTask() {
      let dataPost = {
        my_name: this.founds.my_name,
        item_name: this.founds.item_name,
        cel: this.founds.cel,
        description: this.founds.description,
        categories: this.founds.categories.replace(/[\\"]/g, ""),
        street: this.founds.street,
        city: this.founds.city,
        postalCode: this.founds.postalCode,
        latitude: this.founds.location.coordinates[1],
        longitude: this.founds.location.coordinates[0],
      };

      if (this.methodSave == "update") {
        dataPost._id = this.$route.params._id;

        const response = axios
          .put("http://localhost:3333/founds", dataPost)
          .then((res) => {
            if (res.status == 200) {
              this.$router.push({ name: "list" });
            } else {
              alert("Ops! Aconteu algum erro.");
            }
          });

        return;
      }

      const response = axios
        .post("http://localhost:3333/founds", dataPost)
        .then((res) => {
          if (res.status == 200) {
            this.$router.push({ name: "list" });
          } else {
            alert("Ops! Aconteu algum erro.");
          }
        });
    },

    getStreet() {
      const api_key = "AIzaSyCMlhHRVOUF9MU4kQv3H7axrCv_AZLGHpM";
      let address = this.founds.street;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${api_key}&address=${address}`;
      axios(url).then((res) => {
        //Atualiza a latitude
        this.founds.location.coordinates[1] =
          res.data.results[0].geometry.location.lat;
        //Atualiza a longitude
        this.founds.location.coordinates[0] =
          res.data.results[0].geometry.location.lng;
        //Atualiza a cidade
        this.founds.city = res.data.results[0].address_components[2].long_name;

        //Atualiza a CEP
        let arr_qtd = 0;
        res.data.results[0].address_components.map((res, index) => {
          arr_qtd++;
        });
        console.log(arr_qtd);

        if (arr_qtd > 5) {
          this.founds.postalCode =
            res.data.results[0].address_components[5].long_name;
          console.log(res.data.results[0].address_components[5].long_name);
        } else {
          this.founds.postalCode =
            res.data.results[0].address_components[4].long_name;
          console.log(res.data.results[0].address_components[4].long_name);
        }
      });
    },

    linkList() {
      this.$router.push({ name: "list" });
    },
  },
};
//AIzaSyBD69rWJ3nkIEpqBG2v_6vhlPD74_PucKk
</script>
