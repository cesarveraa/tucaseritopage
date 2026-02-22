import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tu Caserito | Software Inteligente para Tiendas en Bolivia",
  description: "software para tiendas Bolivia, inventario tiendas de barrio, WhatsApp retail Bolivia, sistema de ventas para micromarkets",
  openGraph: {
    title: "Tu Caserito | Software Inteligente para Tiendas",
    description: "Sistema de ventas e inventario inteligente para micromarkets en Bolivia.",
    url: "https://tucaserito.com",
    siteName: "Tu Caserito",
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Caserito | Software Inteligente para Tiendas",
    description: "Sistema de ventas e inventario inteligente para micromarkets en Bolivia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Tu Caserito",
              operatingSystem: "Android, iOS, Web",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BOB"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tu Caserito",
              url: "https://tucaserito.com",
              logo: "https://tucaserito.com/logo.png"
            })
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
