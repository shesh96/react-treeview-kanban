import TreeView from './components/TreeView/TreeView';
import KanbanBoard from './components/Kanban/KanbanBoard';
import Footer from './components/Footer/footer-temp';

export default function App() {
return (
<div style={{ padding: 50 }}>
<h2>Tree View</h2>
<TreeView />


<hr />


<h2>Kanban Board</h2>
<KanbanBoard />

<Footer />
</div>
);
}