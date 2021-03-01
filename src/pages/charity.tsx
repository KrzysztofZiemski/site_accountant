import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "dzialalnosc_charytatywna" }) {
      namePage
      title
      description
    }
    file(name: { regex: "/charityLogo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const charity = ({ data }) => {
  const { title, description } = data.datoCmsMetaDataPage

  return (
    <Layout>
      <SEO title={title || "Charytatywność"} description={description || ""} />
      <div
        className="flex flex-col bg-primary text-white mb-2"
        style={{
          // clipPath: " polygon(1% 0, 0 42%, 100% 0)",
          // backgroundColor: "red",
          flexGrow: 1,
        }}
      >
        <div className="flex flex-col p-4 md:p-9">
          <div className="flex items-center justify-center mb-6 md:justify-between">
            <h1 className="text-lg md:flex-grow text-center sm:text-xl md:text-2xl">
              Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią
            </h1>
            <div className="h-20 w-20 p-3 flex-shrink-0 sm:h-32 sm:w-32 sm:p-6 md:h-40 md:w-40">
              <Image
                className="h-full w-full"
                fluid={data.file.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="flex-grow">
            <p className="mb-2 md:mb-4">
              Osobiście angażuję się w działalność i gorąco zachęcam każdego do
              pomocy.
            </p>
            <p className="my-2">
              <Link to="http://pkuwroc.pl/" className="underline">
                Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią
              </Link>{" "}
              istnieje od lat 80-tych, członkami Koła są osoby chore na
              Fenyloketonurię (PKU) oraz ich opiekunowie. Od 2009 roku
              nieprzerwanie posiadamy status Organizacji Pożytku Publicznego.
              Jesteśmy organizacją non profit i nie prowadzimy działalności
              gospodarczej.
            </p>
            <p className="my-2">
              {" "}
              Działania Dolnośląskiego Koła Przyjaciół Dzieci z Fenyloketonurią
              nastawione są na edukację, ponieważ dieta niskobiałkowa jest
              trudna i restrykcyjna, osoby, które stykają się z nią po raz
              pierwszy wymagają pomocy.{" "}
            </p>
            <p className="my-2">
              Fenyloketonurię diagnozuje się w 3 dobie życia, dzięki aktualnie
              obowiązkowym badaniom przesiewowym wśród noworodków, Dla rodziców
              jest to szok bo z pozoru zdrowe dziecko okazuje się być bardzo
              chore i wymaga specjalistycznej diety medycznej oraz preparatów
              bezfenyloalaninowyh, aby mogło prawidłowo się rozwijać.{" "}
            </p>
            <p className="my-2">
              Dodatkowo każde dziecko jest pod ciągłą kontrolą Poradni
              Metabolicznej. Wszyscy pacjenci z PKU muszą sprawdzać poziom
              fenyloalaniny, poprzez badania kontrolne z krwi, które realizuje
              Pracownia Badań Przesiewowych we Wrocławiu. Dieta chorego jest
              ustalana indywidualnie i jest ściśle określona przez lekarza
              Poradni Metabolicznej. Dieta jest bardzo restrykcyjna, obliguje do
              dyscypliny i ciągłego poszerzania wiedzy. Wymaga bardzo dużego
              zaangażowania rodziców (opiekunów), chorych na PKU, aby prawidłowo
              realizować zalecenia diety.{" "}
            </p>
            <p className="my-2">
              Zapraszamy na naszą stronę:{" "}
              <Link to="http://pkuwroc.pl/" className="underline">
                pkuwroc.pl
              </Link>
            </p>{" "}
            <p className="my-2">Facebook: @PKUDolnySlask</p>
            <h2 className="mt-4 text-lg font-bold	">1% wykorzystujemy na:</h2>
            <ul>
              <li className="my-2 md:my-4">
                1. Konferencje, które mają na celu poszerzenie zakresu wiedzy na
                temat Fenyloketonurii, zapoznanie się z najnowszymi metodami
                leczenia PKU na świecie oraz propagowanie stosowania
                "Wymienników Fenyloalaninowych" oraz "Dietetycznych Klocków PKU"
                w diecie.
              </li>
              <li className="my-2 md:my-4">
                2. Warsztaty kulinarno-dietetyczne dla osób chorych na
                Fenyloketonurię oraz ich rodziców (opiekunów), które odbywają
                sie minimum 2 razy w roku.
              </li>
              <li className="my-2 md:my-4">
                3. Spotkania edukacyjne dla "Mamuś PKU" dla młodych matek z
                dziećmi chorymi na Fenyloketonurię
              </li>
              <li className="my-2 md:my-4">
                4. Wycieczki integracyjno-edukacyjne
              </li>
              <li className="my-2 md:my-4">
                5. Materiały edukacyjne dotyczące PKU, gry edukacyjne
                zachęcające do stosowania "Dietetycznych Kloców PKU", broszury
                dotyczące PKU
              </li>
              <li className="my-2 md:my-4">
                6. Prowadzenie strony Internetowej
              </li>
              <li className="my-2 md:my-4">
                7. Prowadzenie działań, które mają na celu propagowanie wiedzy o
                PKU
              </li>
              <li className="my-2 md:my-4">
                8. Pomoc merytoryczna dla członków Koła. Przekaz treści na
                naszych spotkaniach ma na celu udzielenie pomocy dla osób z PKU
                w stosowaniu rygorystycznej diety oraz integrację tych osób.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default charity
