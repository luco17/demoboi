interface AlertKids {
  children: string[] | string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

function Button({ onClick, children }: AlertKids) {
  return (
    <button
      className="rounded bg-slate-300 shadow p-3 font-semibold hover:shadow-lg hover:bg-slate-400 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface Props {
  movieName: string;
}

function PlayButton(props: Props) {
  const { movieName } = props;

  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("uploading")}>Upload gimpage</Button>;
}

export default function Toolbar() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="space-x-8">
        <PlayButton movieName="Rocco" />
        <UploadButton />
      </div>
    </div>
  );
}
