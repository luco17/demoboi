function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded border-slate-600 max-w-xs border-2 mx-auto mt-4">
      <div className="flex flex-col items-center content-center">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="space-y-2">
      <Card>
        <h1>Photo</h1>
        <img
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Mr Lemma"
          className="rounded-full"
          height={70}
          width={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
