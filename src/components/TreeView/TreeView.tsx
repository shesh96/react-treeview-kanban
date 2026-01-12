import { useState } from 'react';
import TreeNode from './TreeNode';
import type { TreeNodeData } from './tree.types';
import { mockTree, loadChildren } from './tree.mock';


export default function TreeView() {
const [tree, setTree] = useState<TreeNodeData[]>(mockTree);


const toggleNode = async (node: TreeNodeData) => {
if (!node.isExpanded && node.children?.length === 0) {
node.isLoading = true;
setTree([...tree]);
node.children = await loadChildren();
node.isLoading = false;
}
node.isExpanded = !node.isExpanded;
setTree([...tree]);
};


const addNode = (parentId: string) => {
  const name = prompt('Enter node name');
  if (!name) return;

  const addRecursively = (nodes: TreeNodeData[]): boolean => {
    for (let node of nodes) {
      if (node.id === parentId) {
        // ✅ ensure children exists
        if (!node.children) {
          node.children = [];
        }

        node.children.push({
          id: Math.random().toString(),
          name,
          children: [],
          isExpanded: false
        });

        // ✅ auto expand parent
        node.isExpanded = true;

        return true; // 🛑 STOP recursion
      }

      if (node.children && addRecursively(node.children)) {
        return true; // 🛑 STOP bubbling up
      }
    }
    return false;
  };

  addRecursively(tree);
  setTree([...tree]);
};



const deleteNode = (id: string) => {
const remove = (nodes: TreeNodeData[]): TreeNodeData[] =>
nodes.filter((n) => n.id !== id).map((n) => ({ ...n, children: n.children && remove(n.children) }));
setTree(remove(tree));
};


const editNode = (id: string, name: string) => {
const edit = (nodes: TreeNodeData[]) => {
nodes.forEach((n) => {
if (n.id === id) n.name = name;
else n.children && edit(n.children);
});
};
edit(tree);
setTree([...tree]);
};


return (
<div>
{tree.map((node) => (
<TreeNode
key={node.id}
node={node}
onToggle={toggleNode}
onAdd={addNode}
onDelete={deleteNode}
onEdit={editNode}
/>
))}
</div>
);
}