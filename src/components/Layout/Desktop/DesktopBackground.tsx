// src/components/Desktop/DesktopBackground.tsx

export default function DesktopBackground() {
  return (
    <>
      {/* Wallpaper */}
      <div className="fixed inset-0 -z-100 bg-[url('/desktop-bg.jpg')] bg-cover bg-center" />

      {/* Overlay escura */}
      <div className="fixed inset-0 -z-50 bg-black opacity-20" />
    </>
  );
}
