import axios from "axios";
import Task from "../interfaces/Task";

const axiosInstance = axios.create({baseURL: 'https://gototask-api.herokuapp.com'});

export default class TaskService {


    public static getHeader() {
        const jwtToken = localStorage.getItem("jwt");
        return {
            headers: {
                Authorization: "Bearer " + jwtToken,
            }
        }
    }

    public static async listTasks(): Promise<Task[]> {
        const response = await axiosInstance.get<Task[]>('todo?size=40&sort=finishedAt,desc&sort=createdAt,desc', this.getHeader());
        return response.data;
    }

    public static async deleteTask(id: number): Promise<any> {
        return axiosInstance.delete('todo' + id, this.getHeader());
    }

    public static async createTask(task: Task): Promise<Task> {
        const response = await axiosInstance.post('todo/create', task, this.getHeader());
        return response.data;
    }

    public static async editTask(task: Task): Promise<Task> {
        const response = await axiosInstance.patch('todo/edit', task, this.getHeader());

        return response.data;
    }

    public static async finishTask(id: number): Promise<Task> {
        const response = await axiosInstance.patch('todo/finish/' + id, this.getHeader());
        return response.data;
    }

    public static async undoFinishTask(id: number): Promise<Task> {
        const response = await axiosInstance.patch('todo/unfinish/' + id, this.getHeader());
        return response.data;
    }
}