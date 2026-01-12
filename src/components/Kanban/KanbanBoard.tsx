import { useState } from 'react';
import { initialColumns } from './kanban.mock';
import Column from './Column';
import './kanban.css';



export default function KanbanBoard() {
const [columns, setColumns] = useState(initialColumns);


return (
<div className="board">
{columns.map((col) => (
<Column key={col.id} column={col} columns={columns} setColumns={setColumns} />
))}
</div>
);
}