"use client";
import { slugify } from "@/utils/slug";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { series } from "../series";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <header className="justify-between font-thin mb-14 grid gap-6">
    <h1 className="text-6xl row-start-2 md:row-start-1">{title}</h1>
    <Link href="/" className="row-start-1 md:row-start-1">
      <p className="text-[2rem]">
        <strong className="font-black">Tout là-haut</strong>.net
      </p>
      <p className="uppercase text-[1.7rem]">Stéphane Koëth</p>
    </Link>
  </header>
);

const Footer = (): JSX.Element => (
  <footer className="flex mt-24 gap-4 flex-col items-center md:flex-row">
    <div className="flex gap-4">
      <Link href="http://www.facebook.com/toutlahaut.net/" target="_blank">
        <Image
          src="https://files.toutlahaut.net/img/facebook.png"
          alt="Facebook"
          width={40}
          height={40}
          className="min-h-10 min-w-10"
        />
      </Link>
      <Link href="http://www.instagram.com/stephanekoeth/" target="_blank">
        <Image
          src="https://files.toutlahaut.net/img/instagram.png"
          alt="Instagram"
          width={40}
          height={40}
          className="min-h-10 min-w-10"
        />
      </Link>
    </div>
    <p className="text-xs font-thin">
      Toutes les photos, sauf indication contraire, sont sujettes aux lois de la
      protection intellectuelle et sont la propriété de © Stéphane Koëth. Aucune
      photographie ne peut être reproduite, téléchargée, copiée, stockée,
      dérivée ou utilisée en partie ou en intégralité, sans permission écrite du
      propriétaire. Tous droits réservés. La reproduction, même temporaire,
      d’une œuvre protégée publiés en France ou à l’étranger est un acte de
      contrefaçon sanctionné par le code de la propriété intellectuelle.
    </p>
  </footer>
);

const applyLayout = async () => {
  const fjGallery = (await import("flickr-justified-gallery")).default;
  fjGallery(document.querySelectorAll(".gallery"), {
    itemSelector: ".gallery__item",
    rowHeight: 320,
    lastRow: "start",
    gutter: 2,
    rowHeightTolerance: 0.1,
    calculateItemsHeight: false,
  });
};

const Page = ({ params }: { params: { slug: string } }): JSX.Element => {
  const serie = series.find(({ name }) => slugify(name) === params.slug);

  useEffect(() => {
    applyLayout();
  }, []);

  if (!serie) notFound();

  return (
    <div className="p-8 flex flex-col">
      <Header title={serie.name} />
      <main>
        <LightGallery
          plugins={[lgZoom, lgVideo]}
          mode="lg-fade"
          pager={false}
          thumbnail={true}
          galleryId={"nature"}
          autoplayFirstVideo={false}
          elementClassNames={"gallery"}
          mobileSettings={{
            controls: false,
            showCloseIcon: true,
            download: false,
            rotate: false,
          }}
        >
          {serie.photos.map((photo, i) => (
            <a
              key={i}
              className="gallery__item"
              data-src={`https://files.toutlahaut.net/files_img/${slugify(
                serie.name,
                "_"
              )}/highRes/${photo.name}`}
              data-sub-html={`<h4>© Stéphane Koëth</h4>`}
            >
              <img
                className="img-responsive"
                src={`https://files.toutlahaut.net/files_img/${slugify(
                  serie.name,
                  "_"
                )}/lowRes/${photo.name}`}
              />
            </a>
          ))}
        </LightGallery>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
