import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/data/site";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://tanmayvij.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tanmay Vij — Lead Software Engineer · Cloud & Architecture",
  description:
    "Tanmay Vij designs and builds resilient, cloud-native systems — architecture first, hands-on always. AWS Certified Solutions Architect. Fluent across AWS, Azure & GCP.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.meta.name,
    title: "Tanmay Vij — Lead Software Engineer",
    description:
      "I design and build resilient, cloud-native systems — architecture first, hands-on always.",
    // Social card comes from the `opengraph-image.png` file convention.
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Vij — Lead Software Engineer",
    description:
      "I design and build resilient, cloud-native systems — architecture first, hands-on always.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0b",
};

/** Server-rendered structured data for SEO (crawlers read this from the HTML). */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.meta.name,
  url: SITE_URL,
  jobTitle: "Lead Software Engineer",
  email: `mailto:${SITE.meta.email}`,
  description: SITE.meta.tagline,
  sameAs: SITE.socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "AWS Certified Solutions Architect – Associate",
    recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
  },
  knowsAbout: [
    "Software Architecture",
    "Cloud Computing",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Distributed Systems",
    "Serverless",
    "Applied AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={jetbrainsMono.variable}
      data-accent="green"
      data-font="mono"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
