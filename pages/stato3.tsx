import { useState } from "react";

interface PanelProps {
  title: string;
  isActive: boolean;
  onShow: () => void;
  children: React.ReactNode;
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="p-12">
      <h2 className="text-xl font-bold">Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Weasel happy make me go roar
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        I come from Alabama sweetie and such is my power.
      </Panel>
    </div>
  );
}

function Panel(props: PanelProps) {
  const { title, children, isActive, onShow } = props;

  return (
    <section className="border-2 border-slate-500 rounded-sm max-w-md p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onShow}
        >
          Show
        </button>
      )}
    </section>
  );
}
