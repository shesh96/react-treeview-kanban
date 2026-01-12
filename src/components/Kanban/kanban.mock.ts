import type { Column } from './kanban.types';


export const initialColumns: Column[] = [
{ id: 'todo', title: 'Todo', cards: [] },
{ id: 'progress', title: 'In Progress', cards: [] },
{ id: 'done', title: 'Done', cards: [] }
];