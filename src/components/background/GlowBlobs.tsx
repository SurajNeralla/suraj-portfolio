const GlowBlobs = () => {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Animated gradient blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blue blob top-left */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
            animation: 'blob 12s ease-in-out infinite',
            animationDelay: '0s',
            filter: 'blur(40px)',
          }}
        />
        {/* Purple blob right */}
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
            animation: 'blob 15s ease-in-out infinite',
            animationDelay: '-5s',
            filter: 'blur(40px)',
          }}
        />
        {/* Cyan blob bottom */}
        <div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)',
            animation: 'blob 10s ease-in-out infinite',
            animationDelay: '-10s',
            filter: 'blur(50px)',
          }}
        />
        {/* Extra blue blob center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)',
            animation: 'blob 20s ease-in-out infinite',
            animationDelay: '-3s',
            filter: 'blur(60px)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    </>
  );
};

export default GlowBlobs;
