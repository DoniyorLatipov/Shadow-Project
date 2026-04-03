import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.projectshadow.ru"),

  title: {
    default:
      "Натяжные потолки в Санкт-Петербурге — ремонт и сложные случаи | Project Shadow",
    template: "%s | Project Shadow",
  },

  description:
    "Ремонт и обслуживание натяжных потолков в Санкт-Петербурге и Ленинградской области. Демонтаж EuroKRAAB, слив воды после затопления, устранение порезов, установка скрытых гардин.",

  keywords: [
    "натяжные потолки спб",
    "ремонт натяжных потолков",
    "еврокраб потолок",
    "EuroKRAAB демонтаж",
    "слив воды потолок",
    "порез натяжного потолка ремонт",
    "скрытая гардина потолок",
    "натяжные потолки ленинградская область",
  ],

  openGraph: {
    title:
      "Натяжные потолки — ремонт, EuroKRAAB и сложные случаи | Project Shadow",
    description:
      "Работаем с готовыми потолками: демонтаж с сохранением полотна, слив воды, устранение повреждений, монтаж скрытых гардин.",
    url: "https://www.projectshadow.ru",
    siteName: "Project Shadow",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ремонт и обслуживание натяжных потолков Project Shadow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Shadow — натяжные потолки СПб",
    description:
      "Ремонт и обслуживание натяжных потолков: EuroKRAAB, слив воды, устранение повреждений.",
    images: ["/assets/hero-bg.jpg"],
  },

  alternates: {
    canonical: "https://www.projectshadow.ru",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
