import { useState } from 'react';
import type { TreeNodeData } from './tree.types';
import './tree.css';

interface Props {
  node: TreeNodeData;
  onToggle: (node: TreeNodeData) => void;
  onAdd: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}

export default function TreeNode({
  node,
  onToggle,
  onAdd,
  onDelete,
  onEdit
}: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(node.name);

  return (
    <div className="tree-item">
      {/* vertical connector */}
      <div className="tree-line" />

      <div className="tree-node-card">
        <button className="toggle" onClick={() => onToggle(node)}>
          {node.children && node.children.length > 0
            ? node.isExpanded ? '▼' : '▶'
            : ''}
        </button>

        <div className="node-avatar">
          {node.name.charAt(0).toUpperCase()}
        </div>

        {editing ? (
          <input
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              onEdit(node.id, value);
              setEditing(false);
            }}
          />
        ) : (
          <span
            className="node-label"
            onDoubleClick={() => setEditing(true)}
          >
            {node.name}
          </span>
        )}

        <span className="level-text">Level A</span>

        <button className="icon-btn" onClick={() => onAdd(node.id)}>＋</button>
        <button
          className="icon-btn"
          onClick={() => window.confirm('Delete node?') && onDelete(node.id)}
        >
          🗑
        </button>
      </div>

      {node.isExpanded && node.children && (
        <div className="tree-children">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              onToggle={onToggle}
              onAdd={onAdd}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
