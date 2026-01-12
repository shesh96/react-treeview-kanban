import './footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-tip">
        💡 Tip: You can add, edit, delete, and expand nodes to build a custom hierarchy.
        Use the Kanban board to organize tasks efficiently.
      </div>

      <div className="footer-author">
        Built by <strong>Shesh</strong> · React + TypeScript
      </div>
    </footer>
  );
}
