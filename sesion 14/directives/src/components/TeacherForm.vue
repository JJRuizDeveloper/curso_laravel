<template>
    <div>
        <h3>Introducir Profersor</h3>
        <input type="text" placeholder="Introduce el nombre" v-model="teacher.name" /><br />
        <input type="text" placeholder="Introduce apellidos" v-model="teacher.surname" /><br />
        <input type="text" placeholder="Introduce skills" v-model="skill" /><br />
        <button @click="handleSkill">Añadir Skill</button>
        <ul>
            <li v-for="item in teacher.skills" :key="item">{{  item }}</li>
        </ul>
        <button @click="handleTeacher">Añadir profesor</button>
    </div>

    <div>
        <h3>Listado de profesores actuales</h3>
        <ul>
            <li v-for="(item, index) in teachers" :key="index">{{ item.name }} {{ item.surname }}
            <ul>
                <li v-for="sk in item.skills" :key="sk">{{ sk }}</li>
            </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
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
      /*  const t = {
            name: teacher.value.name,
            surname: teacher.value.surname,
            skills: teacher.value.skills
        } */
        teachers.value.push(teacher.value)
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

<style>
</style>