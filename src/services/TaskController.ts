import { useMutation, useQueryClient } from "react-query";
import Task from "../interfaces/Task";
import TaskService from "./TaskService";


export default function useTaskController(){
    const queryClient = useQueryClient();

    const { mutate: fetchEdit } = useMutation(TaskService.editTask,
        {
            onMutate: newTask => {
                const tasks = queryClient.getQueryData<Task[]>('tasks');
                const finalTasks = tasks?.map(task => { if (task.id === newTask.id) return newTask; else return task });
                queryClient.setQueryData('tasks', finalTasks);
            }
        });
    
    const { mutate: fetchDelete } = useMutation(TaskService.deleteTask,
        {
            onMutate: id => {
                const tasks = queryClient.getQueryData<Task[]>('tasks');
                const finalTasks = tasks?.filter((task) => task.id !== id);
                queryClient.setQueryData('tasks', finalTasks);
            }
        });
    
    const { mutate: fetchFinish } = useMutation(TaskService.finishTask,
        {
            onMutate: id => {
                const tasks = queryClient.getQueryData<Task[]>('tasks');
                const finalTasks = tasks?.map((task) => { if (task.id === id) return {...task, finishedAt: "12/06/2004"}; else return task });
                queryClient.setQueryData('tasks', finalTasks);
            }
        });
    
    const { mutate: fetchUndoFinish } = useMutation(TaskService.undoFinishTask,
        {
            onMutate: id => {
                const tasks = queryClient.getQueryData<Task[]>('tasks');
                const finalTasks = tasks?.map((task) => { if (task.id === id) return {...task, finishedAt: null}; else return task });
                queryClient.setQueryData('tasks', finalTasks);
            }
        });
    
    const {mutate: fetchCreate} = useMutation(TaskService.createTask,
        {
            onSuccess: task => {
                const tasks = queryClient.getQueryData<Task[]>('tasks');
                tasks?.unshift(task);
                queryClient.setQueryData('tasks', tasks);
            }
        })
    
    return { fetchDelete, fetchEdit, fetchFinish, fetchUndoFinish, fetchCreate }
}
