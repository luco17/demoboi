interface ButtonKids {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

function Button({ children, onClick }: ButtonKids) {
  return (
    <button
      className="rounded bg-emerald-300 shadow p-3 font-semibold hover:shadow-lg text-neutral-50 hover:bg-emerald-400 transform transition-all hover:scale-105"
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="grid place-items-center h-screen">
      <div
        className="rounded bg-gray-600 w-1/2 flex p-3 cursor-pointer"
        onClick={() => {
          alert("You clicked on the toolbar");
        }}
      >
        <div className="space-x-8">
          <Button onClick={() => alert("Playing")}>Play Movie</Button>
          <Button onClick={() => alert("Uploading")}>Upload film</Button>
        </div>
      </div>
    </div>
  );
}
