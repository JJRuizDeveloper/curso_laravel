<template>
    <div class="teacher-container">
        <div class="teacher-card">
            <h3>Añadir Profesor</h3>
            <div class="teacher-input-container"><label>Nombre: </label> <input type="text" class="teacher-input"/></div>
            <div class="teacher-input-container"><label>Apellidos: </label> <input type="text" class="teacher-input" /></div>
            <div class="teacher-input-container"><label>DNI / NIF: </label> <input type="text" class="teacher-input" /></div>
            <div class="teacher-input-container"><label>Materias: </label> <input type="text" class="teacher-input" /> <button>Agregar</button></div>
            <input type="checkbox" /> Documentación Entregada
            <button>Agregar</button>
        </div>
        <div class="teacher-card">
            <h1>TODO: TABLA PROFESORES</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeacherForm',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.teacher-container {
    display: flex;
    justify-content: space-around;
}

.teacher-card {
    background-color: $lightColor;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    width: 45%;
}

.teacher-input-container {
    margin: 10px;
}

.teacher-input {
    border-radius: 5px;
    height: 25px;
    width: 80%;
    outline: none;
    border: none;
    background-color: $bgColor;
    padding: 6px;
}
button {
    background-color: $primaryColor;
    padding: 10px 10px;
    color: $lightColor;
    border: 0;
    outline: 0;
    border-radius: 5px;
}

button:hover {
    background-color: darken($primaryColor, 10%);
    cursor: pointer;
}

h3 {
    color: $navbarColor;
    text-transform: uppercase;
}
</style>
