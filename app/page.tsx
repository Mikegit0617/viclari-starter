export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to VICLARI 🚀</h1>
      <p>This is your new Next.js app running on port 3001.</p>
      <p>
        Test API route:{" "}
        <a href="/api/capture" style={{ textDecoration: "underline" }}>
          /api/capture
        </a>
      </p>
    </main>
  );
}