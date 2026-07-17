import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "RC Setting Manager｜セッティングを、速さにつなげる。";
const description = "RCカーの車種別セッティング、走行ログ、統計、AIアドバイスをひとつに。ブラウザから使えるRC Setting Managerの公式紹介ページ。";

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const image = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title,
    description,
    applicationName: "RC Setting Manager",
    icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title,
      description,
      siteName: "RC Setting Manager",
      images: [{ url: image, width: 1536, height: 1024, alt: "RC Setting Manager — セッティングを、速さにつなげる。" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
