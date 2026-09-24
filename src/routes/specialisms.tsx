import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/specialisms")({
  beforeLoad: () => {
    throw redirect({ to: "/sectors" });
  },
});
