<script setup>
import SelectAccountForm from '../components/SelectAccountForm.vue';

const select = {
    "accounts2": {
        "acc_1234567890": "Foo Account",
        "acc_2345678901": "Bar Account",
    },
    "last_login": "acc_2345678901"
}

</script>

<template>

    <div class="mt-5"></div>

    <SelectAccountForm :values="select" @submit="(data)=>console.log(data)">
        <template #logo>
            <h1>Backstack</h1>
        </template>
    </SelectAccountForm>

</template>


<style scoped>

</style>