<script setup>

</script>

<template>
  <form action="">
    <label for="name">Nome</label>
    <input v-model="name" type="text" id="name" name="name" placeholder="Digite seu nome">
    <label for="interest-area">Área de interesse</label>
    <select v-model="selected" name="interest-area" id="interest-area">
      <option :value="face_pass">Credenciamento seguro</option>
      <option :value="link_ai">Fazer conexões inteligentes</option>
      <option :value="fit_score">Recrutamente com IA para alinhamento cultural</option>
      <option :value="hub_x">Ecossistema digital para eventos</option>  
    </select>
    <label for="location">Estado</label>
    <select v-model="selected" name="location" id="location">
        <option :value="sp">São Paulo</option>
        <option :value="rj">Rio de Janeiro</option>
        <option :value="mg">Minas Gerais</option>
        <option :value="es">Espírito Santo</option>
        <option :value="ba">Bahia</option>
        <option :value="rs">Rio Grande do Sul</option>
        <option :value="pr">Paraná</option>
        <option :value="sc">Santa Catarina</option>
        <option :value="go">Goiás</option>
        <option :value="mt">Mato Grosso</option>
        <option :value="ms">Mato Grosso do Sul</option>
        <option :value="to">Tocantins</option>
        <option :value="pa">Pará</option>
        <option :value="am">Amazonas</option>
        <option :value="rr">Roraima</option>
        <option :value="ap">Amapá</option>
        <option :value="ac">Acre</option>
        <option :value="ro">Rondônia</option>
        <option :value="ma">Maranhão</option>
        <option :value="pi">Piauí</option>
        <option :value="ce">Ceará</option>
        <option :value="rn">Rio Grande do Norte</option>
        <option :value="pe">Pernambuco</option>
        <option :value="pb">Paraíba</option>
        <option :value="al">Alagoas</option>
        <option :value="se">Sergipe</option>
    </select>
    <input type="submit" value="Buscar Conexões">
  </form>
</template>

<style>

</style>