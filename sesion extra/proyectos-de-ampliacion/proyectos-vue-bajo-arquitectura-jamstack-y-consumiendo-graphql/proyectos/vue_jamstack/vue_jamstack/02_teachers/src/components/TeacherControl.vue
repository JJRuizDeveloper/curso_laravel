<template>
   <div class="control-container">
        <div class="teacher-form">
            <div class="teacher-header">Introducir profesor</div>
            <input type="text" class="input-teacher" v-model="teacher.name" placeholder="Introduce el nombre" />
            <input type="text" class="input-teacher" v-model="teacher.surname" placeholder="Introduce el apellido" />
            <input type="text" class="input-teacher" v-model="skill" placeholder="Introduce las skills" /> 
            <button @click="handleSkill" class="btn">Añadir</button>
            <ul class="skill-list">
                <li v-for="item in teacher.skills" :key="item">{{ item }}</li>
            </ul>
            <button class="btn btn-large" @click="handleTeacher">Registrar</button>
        </div>
        <TeacherList :teachers="teachers" />
   </div>
</template>

<script setup>
    import { ref } from 'vue'
import TeacherList from './TeacherList.vue';
    let skill = ref('')
    let teacher = ref({
        name: '',
        surname: '',
        skills: []
    })
    let teachers = ref([])

   const handleSkill = () => {
    teacher.value.skills.push(skill.value)
    skill.value = ''
   }

   const handleTeacher = () => {
    const t = {
        name : teacher.value.name,
        surname : teacher.value.surname,
        skills: teacher.value.skills
    }
    teachers.value.push(t)
    resetValues()
   }

   const resetValues = () => {
        teacher.value = {
            name: '',
            surname: '',
            skills: []
        }
    }
</script>


<style lang="scss">
    .control-container {
        width: 100vw;
        min-height: 100vh;
        background-color: $bgColor;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .teacher-form {
        padding: 0;
        border-radius: 10px;
        background-color: white;
        width: 30%;
    }

    .teacher-header {
        height: 40px;
        background-color: $primaryColor;
        color: white;
        padding: 5px;
        text-transform: uppercase;
        border-radius: 5px 5px 0 0;
    }

    .input-teacher {
        width: 98%;
        margin: 5px;
        height: 25px;
        border-radius: 5px;
        outline: 0;
        border: 1px solid $textColor;
        padding: 5px;
    }

    .btn {
        background-color: $primaryColor;
        color: white;
        padding: 10px 5px;
        border-radius: 5px;
        border: 1px solid $primaryColor;
        margin: 5px;
    }

    .btn:hover {
        background-color: white;
        color: $primaryColor;
    }

    .btn-large {
        width: 98%;
    }

    .skill-list {
        list-style-type: none;

        li {
            padding: 10px;
            color: white;
            border-radius: 10px;
            background-color: $primaryColor;
            width: auto;
            margin: 5px;
        }
    }
</style>
