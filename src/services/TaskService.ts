import axios from "axios";
import Task from "../interfaces/Task";

const axiosInstance = axios.create({baseURL: 'https://gototask-api.herokuapp.com'});

function getHeader() {
    const jwtToken = localStorage.getItem("jwt");
    return {
        headers: {
            Authorization: "Bearer " + jwtToken,
            Accept: "application/json"
        }
    }
}
export default class TaskService {

    public static async listTasks(): Promise<Task[]> {
        const response = await axiosInstance.get<Task[]>('todo?size=40&sort=finishedAt,desc&sort=id,desc', getHeader());
        return response.data;
    }

    public static async deleteTask(id: number): Promise<any> {
        return axiosInstance.delete('todo/' + id, getHeader());
    }

    public static async createTask(task: Task): Promise<Task> {
        const response = await axiosInstance.post('todo/create', task, getHeader());
        return response.data;
    }

    public static async editTask(task: Task): Promise<Task> {
        const response = await axiosInstance.patch('todo/edit', task, getHeader());

        return response.data;
    }

    public static async finishTask(id: number): Promise<Task> {
        const response = await axiosInstance.patch('todo/finish/' + id, null, getHeader());
        return response.data;
    }

    public static async undoFinishTask(id: number): Promise<Task> {
        const response = await axiosInstance.patch('todo/unfinish/' + id, null, getHeader());
        return response.data;
    }
}