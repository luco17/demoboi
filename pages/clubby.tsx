interface AlertKids {
  message: string;
  children: string;
}

function AlertButton({ message, children }: AlertKids) {
  return (
    <button
      className="rounded bg-slate-300 shadow p-3 font-semibold hover:shadow-lg hover:bg-slate-400 hover:text-white"
      onClick={() => alert(message)}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="space-x-8">
        <AlertButton message="Playing!">Play Movie</AlertButton>
        <AlertButton message="Uploading!">Upload Image</AlertButton>
      </div>
    </div>
  );
}
