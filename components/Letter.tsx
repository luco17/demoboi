export interface Letter {
  id: number;
  subject: string;
  isStarred: boolean;
}

interface Props {
  letter: Letter;
  onToggle: (id: number) => void;
  isSelected: boolean;
}

export default function Letter(props: Props) {
  const { letter, onToggle, isSelected } = props;

  return (
    <li className={isSelected ? "bg-blue-300 rounded" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
          className="mr-2"
        />
        {letter.subject}
      </label>
    </li>
  );
}
