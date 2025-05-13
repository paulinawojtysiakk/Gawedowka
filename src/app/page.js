export const metadata = {
  title: "Apartamenty w Gawędówce | Noclegi Pieniny",
  description:
    "Zarezerwuj nocleg w Gawędówce – komfortowe apartamenty, domek góralski, grill i plac zabaw. Idealne miejsce w sercu Pienin.",
  keywords: [
    "noclegi Pieniny",
    "apartamenty Grywałd",
    "Gawędówka",
    "noclegi Trzy Korony",
    "domek do wynajęcia Pieniny",
    "pokoje gościnne Krościenko",
  ],
  openGraph: {
    title: "Apartamenty w Gawędówce | Noclegi Pieniny",
    description:
      "Zarezerwuj nocleg w Gawędówce – komfortowe apartamenty, domek góralski, grill i plac zabaw.",
    url: "https://www.gawedowkapieniny.pl",
    siteName: "Gawędówka",
    images: [
      {
        url: "https://www.gawedowkapieniny.pl/images/Gawedowka-dom.jpg",
        width: 1200,
        height: 630,
        alt: "Gawędówka – noclegi w Pieninach",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamenty w Gawędówce",
    description:
      "Komfortowe noclegi w sercu Pienin. Domek, apartamenty, grill, parking.",
    images: ["https://www.gawedowkapieniny.pl/images/Gawedowka-dom.jpg"],
  },
  metadataBase: new URL("https://www.gawedowkapieniny.pl"),
};

import dynamic from "next/dynamic";

// Dynamically import your client component (no SSR)
const HomeClient = dynamic(() => import("./HomeClient"), { ssr: false });
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Gawędówka",
              image: "https://www.gawedowkapieniny.pl/images/Gawedowka-dom.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ul. Palenicka 22",
                addressLocality: "Grywałd",
                postalCode: "34-450",
                addressCountry: "PL",
              },
              url: "https://www.gawedowkapieniny.pl",
              telephone: "780433244",
              priceRange: "$$",
              description:
                "Komfortowe apartamenty i domek góralski w sercu Pienin z widokiem na Trzy Korony.",
            }),
          }}
        />
      </Head>
      <HomeClient />
    </>
  );
}