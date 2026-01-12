interface Props {
  title: string;
  onDelete: () => void;
}

export default function Card({ title, onDelete }: Props) {
  return (
    <div className="card">
      <span className="card-strip" />
      <span className="card-title">{title}</span>
      <button className="delete-btn" onClick={onDelete}>🗑</button>
    </div>
  );
}
