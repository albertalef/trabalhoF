import axios from "axios";
import Task from "../interfaces/Task";

export default class TaskService{

    static async listTasks(): Promise<Task[]>{
            const jwtToken = localStorage.getItem("jwt");
            const response = await axios.get<Task[]>('https://gototask-api.herokuapp.com/todo?size=40', {
                headers: {
                    Authorization: "Bearer " + jwtToken,
                }
            })
            return response.data;
    }

    static async deleteTask(id: number): Promise<number>{
        const token = localStorage.getItem('jwt');
        const options = {
            headers: {
                Authorization: "Bearer " + token,
            }
        }
        return (await axios.delete('https://gototask-api.herokuapp.com/todo/' + id, options)).status; 
    }
}