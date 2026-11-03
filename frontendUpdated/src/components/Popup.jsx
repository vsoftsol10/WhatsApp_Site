import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  X,
} from "lucide-react";

// ============================================================
// POPUP STORE
// A tiny global store so showPopup() can be called from
// anywhere - components, async handlers, even Razorpay
// callbacks - without needing hooks or context.
// ============================================================

let current = null; // { id, type, title, message }
let nextId = 1;
const listeners = new Set();

const emit = () => listeners.forEach((l) => l());
const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};
const getSnapshot = () => current;

const DEFAULT_TITLES = {
  success: "Success",
  error: "Something went wrong",
  warning: "Please check",
  info: "Heads up",
};

/**
 * Drop-in replacement for window.alert().
 *
 *   showPopup("Please fill in all fields.", "warning");
 *   showPopup("Trial started!", "success", { title: "You're all set" });
 *
 * type: "success" | "error" | "warning" | "info"
 */
export function showPopup(message, type = "info", options = {}) {
  current = {
    id: nextId++,
    type,
    message: String(message ?? ""),
    title: options.title || DEFAULT_TITLES[type] || DEFAULT_TITLES.info,
  };
  emit();
}

export function closePopup() {
  current = null;
  emit();
}

// ============================================================
// STYLES PER TYPE (uses the project's brand palette)
// ============================================================

const THEMES = {
  success: {
    Icon: CheckCircle2,
    ring: "bg-brand-green-light",
    icon: "text-brand-green",
    button: "bg-brand-green hover:bg-brand-green-dark text-white",
  },
  error: {
    Icon: XCircle,
    ring: "bg-red-50",
    icon: "text-red-500",
    button: "bg-red-500 hover:bg-red-600 text-white",
  },
  warning: {
    Icon: AlertTriangle,
    ring: "bg-brand-yellow-light",
    icon: "text-brand-yellow-dark",
    button: "bg-brand-yellow hover:bg-brand-yellow-dark text-brand-ink",
  },
  info: {
    Icon: Info,
    ring: "bg-brand-green-light",
    icon: "text-brand-green",
    button: "bg-brand-green hover:bg-brand-green-dark text-white",
  },
};

// ============================================================
// POPUP HOST - mount once (in App.jsx)
// ============================================================

export default function PopupHost() {
  const popup = useSyncExternalStore(subscribe, getSnapshot);
  const buttonRef = useRef(null);

  // ESC to close + lock page scroll while open + focus the button
  useEffect(() => {
    if (!popup) return;

    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Enter") closePopup();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    buttonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [popup]);

  if (!popup) return null;

  const theme = THEMES[popup.type] || THEMES.info;
  const { Icon } = theme;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      aria-describedby="popup-message"
    >
      {/* Backdrop */}
      <div
        className="popup-backdrop absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Card */}
      <div
        key={popup.id}
        className="popup-card relative w-full max-w-[400px] rounded-3xl bg-white p-7 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${theme.ring}`}
        >
          <Icon size={32} className={theme.icon} strokeWidth={2.2} />
        </div>

        <h3
          id="popup-title"
          className="mb-2 text-xl font-semibold text-brand-ink"
        >
          {popup.title}
        </h3>

        <p
          id="popup-message"
          className="mb-6 text-[15px] leading-relaxed text-gray-600"
        >
          {popup.message}
        </p>

        <button
          ref={buttonRef}
          type="button"
          onClick={closePopup}
          className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-[0.98] ${theme.button}`}
        >
          Got it
        </button>
      </div>
    </div>
  );
}