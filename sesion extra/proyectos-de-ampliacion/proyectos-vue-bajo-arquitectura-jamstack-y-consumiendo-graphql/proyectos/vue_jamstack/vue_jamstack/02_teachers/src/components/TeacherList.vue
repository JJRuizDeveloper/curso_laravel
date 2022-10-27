<template>
    <h3 class="title">Listado de profesores</h3>
    <table>
        <tr class="table-header">
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Habilidades</th>
        </tr>
        <tr v-for="(teacher, index) in props.teachers" :key="index">
            <td>{{ teacher.name }}</td>
            <td>{{ teacher.surname }}</td>
            <td>
                <ul>
                    <li v-for="skill in teacher.skills" :key="skill">{{ skill }}</li>
                </ul>
            </td>
        </tr>
    </table>
</template>

<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        teachers: []
    })
</script>

<style lang="scss">
    .title {
        text-transform: uppercase;
        margin-top: 20px;
    }
    .table-header {
        background-color: $primaryColor;
        color: white;
        padding: 5px;
        text-transform: uppercase;
        width: 100%;
        border: 0;

        th {
            border: 0;
            padding: 10px;
        }
    }
</style>