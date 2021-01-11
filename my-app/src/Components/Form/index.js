import React from "react";
import "./style.css";

const Form = ({
}) => {
  return (
    <form>
        <p>Selecione as Categorias: </p>       
        <label for="catSelect1">Todas</label>
        <input type="radio" name="catSelect" value="Any" id="catSelect1"></input>
        <label for="catSelect2">Customizado</label>
        <input type="radio" name="catSelect" value="Any" id="catSelect2"></input>
        <span id="catSelectMulti">
            <input type="checkbox" id="cat-cb1" disabled=""><label for="cat-cb1">Programming</label></input>
            <input type="checkbox" id="cat-cb2" disabled=""><label for="cat-cb2">Misc</label></input>
            <input type="checkbox" id="cat-cb3" disabled=""><label for="cat-cb3">Dark</label></input>
            <input type="checkbox" id="cat-cb4" disabled=""><label for="cat-cb4">Pun</label></input>
            <input type="checkbox" id="cat-cb5" disabled=""><label for="cat-cb5">Spooky</label></input>
            <input type="checkbox" id="cat-cb6" disabled=""><label for="cat-cb6">Christmas</label></input>
        </span>
        <p>Selecione os termos banidos                                                                                                        : </p>       
        <div class="multiselect noselect">
            (optional)&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id="blf-cb1"><label for="blf-cb1">nsfw</label></input>
            <input type="checkbox" id="blf-cb2"><label for="blf-cb2">religious</label></input>
            <input type="checkbox" id="blf-cb3"><label for="blf-cb3">political</label></input>
            <input type="checkbox" id="blf-cb4"><label for="blf-cb4">racist</label></input>
            <input type="checkbox" id="blf-cb5"><label for="blf-cb5">sexist</label></input>
            <input type="checkbox" id="blf-cb6"><label for="blf-cb6">explicit</label></input>
        </div>
        
        <label>Busca</label>
        <input type="text" id="searchStringInput" placeholder="(optional)"></input>
   
        <label>Quantidade:</label>
        <input type="number" id="jokesAmountInput" value="1" min="1" step="1" oninput="reRender()" max="10"></input>

        <input type="submit">Enviar</input>

    </form>
  );
};

export default Form;