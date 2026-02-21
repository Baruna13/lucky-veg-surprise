import carrotImg from "@/assets/carrot-happy.png";
import broccoliImg from "@/assets/broccoli-happy.png";
import tomatoImg from "@/assets/tomato-happy.png";

const Confetti = () => {
  const colors = ["bg-primary", "bg-secondary", "bg-primary/70", "bg-secondary/70"];
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-3 h-3 rounded-full ${colors[i % colors.length]} animate-confetti`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-6 h-6 text-secondary animate-sparkle ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Confetti />

      {/* Sparkles */}
      <Sparkle className="absolute top-[10%] left-[15%] delay-300" />
      <Sparkle className="absolute top-[20%] right-[20%] delay-700" />
      <Sparkle className="absolute bottom-[30%] left-[10%] delay-500" />
      <Sparkle className="absolute top-[15%] right-[10%] delay-1000" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Floating veggies */}
        <div className="flex items-end justify-center gap-4 md:gap-8 mb-8">
          <img
            src={carrotImg}
            alt="Wortel ceria"
            className="w-24 h-24 md:w-36 md:h-36 animate-float object-contain animate-bounce-in"
            style={{ animationDelay: "0.2s" }}
          />
          <img
            src={broccoliImg}
            alt="Brokoli antusias"
            className="w-28 h-28 md:w-44 md:h-44 animate-float-reverse object-contain animate-bounce-in"
            style={{ animationDelay: "0.4s" }}
          />
          <img
            src={tomatoImg}
            alt="Tomat gembira"
            className="w-24 h-24 md:w-36 md:h-36 animate-float object-contain animate-bounce-in"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        {/* Main title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-primary tracking-tight animate-slide-up text-center"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
        >
          ANDA BERUNTUNG!
        </h1>

        {/* Subtitle */}
        <div
          className="mt-4 mb-2 inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-lg md:text-xl font-bold animate-slide-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          🎉 Selamat! 🎉
        </div>

        {/* Description */}
        <p
          className="mt-6 max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          Kamu mendapatkan kesempatan spesial dari produk sayuran segar kami.
          Silakan tunggu informasi selanjutnya atau hubungi tim kami untuk klaim hadiah!
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up"
          style={{ animationDelay: "0.9s", opacity: 0, animationFillMode: "forwards" }}
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full animate-pulse-glow hover:scale-105 transition-transform shadow-lg">
            🎁 Klaim Hadiah
          </button>
          <button className="px-8 py-4 bg-card text-foreground font-semibold text-lg rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all">
            ← Kembali ke Halaman Utama
          </button>
        </div>

        {/* Footer note */}
        <p
          className="mt-16 text-sm text-muted-foreground animate-slide-up"
          style={{ animationDelay: "1.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          © 2026 Sayuran Segar — Keberuntunganmu dimulai dari sini 🌿
        </p>
      </div>
    </div>
  );
};

export default Index;
