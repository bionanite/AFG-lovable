import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./Button";

const STORAGE_KEY = "afg-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // storage unavailable — stay hidden
    }
  }, []);

  function decide(choice: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-surface-raised/98 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[80rem] flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
          We use essential cookies to make this site work. With your permission
          we would also use non-essential cookies to understand how the site is
          used. See our{" "}
          <Link to="/privacy" className="font-semibold text-signal hover:text-foreground">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button size="sm" variant="outline" onClick={() => decide("rejected")}>
            Reject non-essential
          </Button>
          <Button size="sm" onClick={() => decide("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
