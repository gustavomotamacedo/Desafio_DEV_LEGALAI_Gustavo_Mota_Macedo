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
                    <option :value="face_pass">Credenciamento seguro</option>
                    <option :value="link_ai">Fazer conexões inteligentes</option>
                    <option :value="fit_score">Recrutamente com IA para alinhamento cultural</option>
                    <option :value="hub_x">Ecossistema digital para eventos</option>
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
                </optgroup>
            </select>
        </div>
        <input class="btn btn-primary mb-3" type="submit" value="Buscar Conexões">
    </form>
</template>

<style>
    
</style>