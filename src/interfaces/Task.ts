export default interface Task {
	id: number,
	resume?: string,
	description?: string,
	createdAt?: string,
	finishedAt?: string | null,
}