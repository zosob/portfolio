import BentoGrid from '@/components/BentoGrid';

export default function HomePage() {
  return (
    <>
      {/* Subtle radial background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(ellipse, #065f46 0%, transparent 70%)',
          }}
        />
      </div>

      <BentoGrid />
    </>
  );
}