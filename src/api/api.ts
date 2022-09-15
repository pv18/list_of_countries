import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES = BASE_URL + 'all'

export const searchByCountry = (name:string) => BASE_URL + 'name/' + name

export const filterByCode = (codes: string[]) => BASE_URL + 'alpha?codes=' + codes.join(',')





// const instance = axios.create({
//     baseURL: 'https://restcountries.com/v2/',
//     // withCredentials: true,
// })

export const todolistsAPI = {
    // getTodolists() {
    //     return instance.get<TodolistType[]>('todo-lists');
    // },
    // createTodolist(title: string) {
    //     return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TodolistType }>>>('todo-lists', {title});
    // },
    // deleteTodolist(id: string) {
    //     return instance.delete<ResponseType>(`todo-lists/${id}`);
    // },
    // updateTodolist(id: string, title: string) {
    //     return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`todo-lists/${id}`, {title});
    // },
    // getTasks(todolistId: string) {
    //     return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
    // },
    // deleteTask(todolistId: string, taskId: string) {
    //     return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
    // },
    // createTask(todolistId: string, title: string) {
    //     return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks`, {title});
    // },
    // updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    //     return instance.put<UpdateTaskModelType, AxiosResponse<ResponseType<{ item: TaskType }>>>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    // }

}

// login types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type MeType = {
    email: string
    password: string
    rememberMe: boolean
}

// types
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
