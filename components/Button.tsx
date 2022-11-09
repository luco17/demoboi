interface Props {
  buttonText: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  const { buttonText, onClick } = props;

  return (
    <>
      <button
        onClick={onClick}
        className="bg-gray-300 text-xs font-semibold px-1 rounded-sm border border-gray-500"
      >
        {buttonText}
      </button>
    </>
  );
}
