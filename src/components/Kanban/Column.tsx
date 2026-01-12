import Card from './Card';
import type { Column as ColType } from './kanban.types';

interface Props {
  column: ColType;
  columns: ColType[];
  setColumns: React.Dispatch<React.SetStateAction<ColType[]>>;
}

export default function Column({ column, columns, setColumns }: Props) {

  const addCard = () => {
    const title = prompt('Card title');
    if (!title) return;

    setColumns(columns.map(col =>
      col.id === column.id
        ? { ...col, cards: [...col.cards, { id: Math.random().toString(), title }] }
        : col
    ));
  };

  const deleteCard = (id: string) => {
    setColumns(columns.map(col =>
      col.id === column.id
        ? { ...col, cards: col.cards.filter(c => c.id !== id) }
        : col
    ));
  };

  return (
    <div className={`column ${column.id}`}>
      <div className="column-header">
        <h3>{column.title}</h3>
        <span className="count">{column.cards.length}</span>
      </div>

      <button className="add-btn" onClick={addCard}>+ Add Card</button>

      {column.cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          onDelete={() => deleteCard(card.id)}
        />
      ))}
    </div>
  );
}
