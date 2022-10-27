import { ITask } from "@/interfaces/ITask";
import { defineStore } from "pinia";
import {generateID, sleep} from "@/helpers";

interface ITodoState {
    tasks: ITask[],
    loading: boolean,
}

export const useTodoStore = defineStore('todo', {
    state: (): ITodoState => ({
        tasks: [],
        loading: false,
    }),
    actions: {
        async addTask(name: string): Promise<void> {
            this.loading = true;
            this.tasks.push({name: name, done: false, id: generateID()});
            await sleep(1000);
            this.loading = false;
        },
        async deleteTask(id: string): Promise<void> {
            this.loading = true;
            this.tasks = this.tasks.filter(task => task.id !== id);
            await sleep(1000);
            this.loading = false;
        },
        async updateTask(id:string): Promise<void> {
            this.loading = true;
            const task = this.tasks.find((task) => task.id === id)
            if (task) {
                task.done = !task.done;
            }
            await sleep(1000);
            this.loading = false;
        }
    }
})