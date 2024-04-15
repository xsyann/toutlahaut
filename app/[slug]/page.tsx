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
          src="https://toutlahaut.net/img/facebook.png"
          alt="Facebook"
          width={40}
          height={40}
          className="min-h-10 min-w-10"
        />
      </Link>
      <Link href="http://www.instagram.com/stephanekoeth/" target="_blank">
        <Image
          src="https://toutlahaut.net/img/instagram.png"
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
    rowHeight: 180,
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
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it2"
            data-tweet-text="lightGallery slide  2"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2398"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1126"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1063"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
          <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
          A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1144"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kalenemsley' >Kalen Emsley</a></h4><p>Location - <a href='https://unsplash.com/s/photos/yukon-territory%2C-canada'>Yukon Territory, Canada</a> No captions. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kace' >Kace Rodriguez</a></h4><p>Location - <a href='https://unsplash.com/s/photos/pfeiffer-beach%2C-united-states'>Pfeiffer Beach, United States</a> Pfeiffer Beach at Dusk. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@patwhelen' >Pat Whelen</a></h4><p>Location - <a href='https://unsplash.com/s/photos/portsea-vic%2C-australia'>Portsea VIC, Australia</a> No caption <a href='https://unsplash.com/photos/EKLXDQ-dDRg'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@derekthomson' >Derek Thomson</a></h4><p>Location - <a href='https://unsplash.com/s/photos/mcway-falls%2C-united-states'>McWay Falls, United States</a> No caption <a href='https://unsplash.com/photos/TWoL-QCZubY'>Link</a> </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@michaljaneck' >Michal Janek</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Coast  </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2400"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@papillon' >Iris Papillon</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Big Sur drive  </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1065"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@piyushh_dubeyy' >piyush dubey</a></h4><p>Published on August 2, 2020</p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-2134"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1060"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@danielleone' >Daniel Leone</a></h4><p>Location - <a href='https://unsplash.com/s/photos/poon-hill%2C-ghode-pani%2C-nepal'>Poon Hill, Ghode Pani, Nepal</a> Taken from the top of Poon Hill before sun rise </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1037"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@bboba' >Boba Jovanovic</a></h4><p>Location - <a href='https://unsplash.com/s/photos/bay-of-kotor'>Bay of Kotor</a> Boka kotorska bay </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-899"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@svsdesigns' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lachung%2C-sikkim%2C-india'>Lachung, Sikkim, India</a> Cloud covered mountain </p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1600-1067"
            data-pinterest-text="Pin it3"
            data-tweet-text="lightGallery slide  4"
            className="gallery__item"
            data-src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
          >
            <img
              className="img-responsive"
              src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
        </LightGallery>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
