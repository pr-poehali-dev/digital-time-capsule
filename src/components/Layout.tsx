import { useState } from "react";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "create", label: "Создать капсулу" },
  { id: "cabinet", label: "Кабинет" },
  { id: "history", label: "История" },
  { id: "gallery", label: "Галерея" },
  { id: "about", label: "О проекте" },
  { id: "support", label: "Поддержка" },
];

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="font-display text-xl font-light tracking-wide hover:opacity-70 transition-opacity"
          >
            Капсула
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-body text-sm font-light tracking-wide transition-all duration-200 ${
                  currentPage === item.id
                    ? "text-foreground border-b border-foreground pb-0.5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`w-full text-left px-6 py-3 font-body text-sm font-light ${
                  currentPage === item.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="border-t border-border mt-24 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-light">Капсула</span>
          <p className="font-body text-sm text-muted-foreground font-light">
            Письма, которые переживут время
          </p>
          <div className="flex gap-6">
            {["home", "about", "support"].map((id) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {navItems.find(n => n.id === id)?.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
