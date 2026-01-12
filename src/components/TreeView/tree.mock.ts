import type { TreeNodeData } from './tree.types';


export const mockTree: TreeNodeData[] = [
{ id: '1', name: 'A', children: [], isExpanded: false },
{ id: '2', name: 'B', children: [], isExpanded: false }
];


export const loadChildren = (): Promise<TreeNodeData[]> => {
return new Promise((resolve) => {
setTimeout(() => {
resolve([
{ id: Math.random().toString(), name: 'C', children: [] },
{ id: Math.random().toString(), name: 'D', children: [] }
]);
}, 1000);
});
};