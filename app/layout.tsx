import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "RC Setting Manager｜セッティングを、速さにつなげる。";
const description = "RCカーの車種別セッティング、走行ログ、統計、AIアドバイスをひとつに。ブラウザから使えるRC Setting Managerの公式紹介ページ。";
const siteUrl = "https://akiii2024.github.io/rsm_page/";
const ogImageUrl = new URL("og.png", siteUrl).toString();
const appIconUrl = new URL("app-icon.png", siteUrl).toString();

export const viewport: Viewport = {
  themeColor: "#07111F",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "RC Setting Manager",
  alternates: { canonical: siteUrl },
  icons: { icon: appIconUrl, apple: appIconUrl },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    title,
    description,
    siteName: "RC Setting Manager",
    images: [{ url: ogImageUrl, width: 1536, height: 1024, alt: "RC Setting Manager — セッティングを、速さにつなげる。" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImageUrl] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
