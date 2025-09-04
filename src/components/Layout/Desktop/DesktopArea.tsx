// src/components/Desktop/DesktopArea.tsx
type Props = {
  openWindow: (title: string) => void;
};

export default function DesktopArea({ openWindow }: Props) {
  return (
    <div className="flex-1 p-4">
      <button
        onClick={() => openWindow("Janela de Teste")}
        className="rounded bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700"
      >
        Abrir Janela
      </button>
    </div>
  );
}
