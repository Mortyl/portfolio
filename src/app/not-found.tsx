import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Footer from "@/components/ui/Footer";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-20">
      <PageHeader />

      <div className="text-center py-24">
        <p className="font-mono text-[10px] tracking-widest text-accent dark:text-accent-muted uppercase mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-6 dark:text-[#f0ede6]">
          Page not found.
        </h1>
        <p className="text-base font-light text-muted dark:text-[#888] leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or never existed.
        </p>
        <Link
          href="/"
          className="bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-accent-dark transition-colors inline-block"
        >
          Back to home
        </Link>
      </div>

      <Footer topMargin="mt-16" />
    </main>
  );
}
