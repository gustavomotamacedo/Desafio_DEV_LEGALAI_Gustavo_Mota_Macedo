<script setup>

</script>

<template>
    <form action="">
        <div class="mb-3">
            <label class="form-label" for="name">Digite seu nome:</label>
            <input class="form-control" v-model="name" type="text" id="name" name="name" placeholder="Digite seu nome">
        </div>
        <div class="mb-3">
            <label class="form-label" for="interest-area">Selecione uma área de interesse</label>
            <select class="form-select" v-model="interest_area" name="interest-area" id="interest-area">
                <optgroup>
                    <option :value="0">--SELECIONE UMA ÁREA DE INTERESSE--</option>
                </optgroup>
                <optgroup>
                    <option :value="1">Credenciamento seguro</option>
                    <option :value="2">Fazer conexões inteligentes</option>
                    <option :value="3">Recrutamente com IA para alinhamento cultural</option>
                    <option :value="4">Ecossistema digital para eventos</option>
                </optgroup>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="location">Selecione um estado</label>
            <select class="form-select" v-model="location" name="location" id="location">
                <optgroup>
                    <option :value="0">--SELECIONE UM ESTADO--</option>
                </optgroup>
                <optgroup>
                    <option :value="01">São Paulo</option>
                    <option :value="02">Rio de Janeiro</option>
                    <option :value="03">Minas Gerais</option>
                    <option :value="04">Espírito Santo</option>
                    <option :value="05">Bahia</option>
                    <option :value="06">Rio Grande do Sul</option>
                    <option :value="07">Paraná</option>
                    <option :value="08">Santa Catarina</option>
                    <option :value="09">Goiás</option>
                    <option :value="10">Mato Grosso</option>
                    <option :value="11">Mato Grosso do Sul</option>
                    <option :value="12">Tocantins</option>
                    <option :value="13">Pará</option>
                    <option :value="14">Amazonas</option>
                    <option :value="15">Roraima</option>
                    <option :value="16">Amapá</option>
                    <option :value="17">Acre</option>
                    <option :value="18">Rondônia</option>
                    <option :value="19">Maranhão</option>
                    <option :value="20">Piauí</option>
                    <option :value="21">Ceará</option>
                    <option :value="22">Rio Grande do Norte</option>
                    <option :value="23">Pernambuco</option>
                    <option :value="24">Paraíba</option>
                    <option :value="25">Alagoas</option>
                    <option :value="26">Sergipe</option>
                </optgroup>
            </select>
        </div>
        <input class="btn btn-primary mb-3" type="submit" value="Buscar Conexões">
    </form>
</template>

<style>
    
</style>