import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Jumps to the top the moment the route changes (no visible scrolling).
// If the URL has a #hash (e.g. /#features) the browser/anchor handles it.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    // "instant" overrides the global `scroll-behavior: smooth` in index.css
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;