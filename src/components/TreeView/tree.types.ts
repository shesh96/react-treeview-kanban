export interface TreeNodeData {
id: string;
name: string;
children?: TreeNodeData[];
isExpanded?: boolean;
isLoading?: boolean;
}