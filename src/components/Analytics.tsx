"use client";

export default function Analytics() {
  // Plausible analytics — configured in next.config.ts
  return (
    <>
      <script
        defer
        data-domain="joinscaleflow.in"
        src="https://plausible.io/js/script.js"
      />
    </>
  );
}
