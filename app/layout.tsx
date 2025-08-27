export const metadata = {
  title: "VICLARI — Your vision, made clear",
  description:
    "A production-ready Next.js starter deployed on Vercel with Tailwind CSS and TypeScript.",
  metadataBase: new URL("https://viclari.com"),
  openGraph: {
    title: "VICLARI",
    description:
      "A production-ready Next.js starter deployed on Vercel with Tailwind CSS and TypeScript.",
    url: "https://viclari.com",
    siteName: "VICLARI",
    images: [
      {
        url: "/og.png", // add later (optional)
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}