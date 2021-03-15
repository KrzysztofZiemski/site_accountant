import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
//@ts-ignore

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "dzialalnosc_charytatywna" }) {
      namePage
      title
      description
    }
    charityLogo: file(name: { regex: "/charityLogo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    percentOfTax: file(name: { regex: "/1percentOfTax/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    percentLetter: file(name: { regex: "/percentLetter/" }) {
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
      <SEO
        title={
          title ||
          "Przekaż 1% Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią"
        }
        description={description || ""}
      />

      <div className="flex flex-col p-6 sm:p-9 md:flex-row md:justify-around">
        <div className="mb-5 sm:mb-9 md:mb-0 md:w-1/2">
          <div className="flex text-center items-center">
            <div className="h-28 w-28 p-3 flex-shrink-0">
              <Image
                className="h-full w-full"
                fluid={data.charityLogo.childImageSharp.fluid}
              />
            </div>
            <div>
              <h1 className="font-bold">
                Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią{" "}
                <span className="block">KRS 0000062454</span>
              </h1>
              <p>
                <Link to="http://pkuwroc.pl/" className="text-primary">
                  pkuwroc.pl
                </Link>{" "}
              </p>
            </div>
          </div>
          <p className="my-1">
            {" "}
            Od wielu lat polscy podatnicy mają możliwość przekazania 1% swojego
            podatku na rzecz wybranej Organizacji Pożytku Publicznego. Ten
            bezinteresowny gest może pomóc w realizacji wielu ważnych celów -
            propagowaniu zdrowego stylu życia, udzielaniu wsparcia osobom
            potrzebującym, czy sfinansowaniu leczenia.
          </p>
          <p className="my-1">
            <strong>
              Firma MagFi współpracuje z Dolnośląskim Kołem Przyjaciół Dzieci z
              Fenyloketonurią
            </strong>
            , które od 2009 roku nieprzerwanie posiada status Organizacji
            Pożytku Publicznego. Współpraca ma charakter długoterminowy ipolega
            głównie na prowadzeniu ksiąg rachunkowych oraz rozwiązywaniu
            bieżących problemów finansowych.
          </p>
          <p className="my-1">
            Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią istnieje od
            lat 80-tych. Członkami Kołasą osoby chore na Fenyloketonurię (PKU)
            oraz ich opiekunowie. Stowarzyszenie jest organizacją non profit,
            nieprowadzącą działalności gospodarczej.
          </p>
          <p className="my-1">
            Działania Dolnośląskiego Koła Przyjaciół Dzieci z Fenyloketonurią
            nastawione są na edukację. Dieta niskobiałkowa jest trudna i
            restrykcyjna, a osoby, które stykają się z nią po raz pierwszy,
            wymagają pomocy. Dzięki aktualnie obowiązkowym badaniom przesiewowym
            wśród noworodków, fenyloketonurię diagnozuje się w 3 dobie życia.
            Dla rodziców jest to szok, bo z pozoru zdrowe dziecko okazuje się
            być bardzo chore i wymaga specjalistycznej diety medycznej oraz
            preparatów bezfenyloalaninowyh, aby mogło prawidłowo się rozwijać.
          </p>
          <p className="my-1">
            Dodatkowo każde dziecko jest pod ciągłą kontrolą Poradni
            Metabolicznej. Wszyscy pacjenci z PKU muszą sprawdzać poziom
            fenyloalaniny, poprzez badania kontrolne z krwi, które realizuje
            Pracownia Badań Przesiewowych we Wrocławiu.
          </p>
          <p className="my-1">
            Dieta chorego jest ustalana indywidualnie przez lekarza Poradni
            Metabolicznej; obliguje do dyscypliny, ciągłego poszerzania wiedzy i
            restrykcyjnego stosowania się do zaleceń. Wymaga bardzo dużego
            zaangażowania rodziców (opiekunów) i chorych na PKU.
          </p>
          <p className="my-1">
            Więcej informacji o Dolnośląskim Kole Przyjaciół Dzieci z
            Fenyloketonurią mozna znaleźć{" "}
            <Link to="http://pkuwroc.pl/" className="text-primary">
              pkuwroc.pl
            </Link>{" "}
          </p>
          <h2 className="text-lg my-2">1% podatku są przeznaczane na:</h2>
          <ul>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2">1.</span> konferencje, które mają
              na celu poszerzenie zakresu wiedzy na temat Fenyloketonurii,
              zapoznanie się z najnowszymi metodami leczenia PKU na świecie oraz
              propagowanie stosowania "Wymienników Fenyloalaninowych" oraz
              "Dietetycznych Klocków PKU" w diecie
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 2.</span> warsztaty
              kulinarno-dietetyczne dla osób chorych na fenyloketonurię oraz ich
              rodziców (opiekunów), które odbywają się minimum 2 razy w roku
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 3. </span>spotkania edukacyjne
              dla "Mamuś PKU" skierowanych do młodych matek z dziećmi chorymi na
              fenyloketonurię
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 4.</span> wycieczki
              integracyjno-edukacyjne
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 5.</span> materiały edukacyjne
              dotyczące PKU, gry edukacyjne, zachęcające do stosowania
              "Dietetycznych Kloców PKU", broszury dotyczące PKU
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 6.</span> prowadzenie strony
              Internetowej
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 7. </span>prowadzenie działań,
              które mają na celu propagowanie wiedzy o PKU
            </li>
            <li className="p-1 m-l-3 mb-2">
              <span className="font-bold mr-2"> 8.</span> pomoc merytoryczną dla
              członków Koła. Przekaz treści na spotkaniach Koła ma na celu
              udzielenie pomocy osobom z PKU w stosowaniu rygorystycznej diety
              oraz integrację tych osób.
            </li>
          </ul>
        </div>
        <div className="w-full flex-shrink-0 md:ml-6 md:w-96 lg:w-5/12 ">
          <Image
            className="mb-3 border h-auto w-auto "
            fluid={data.percentLetter.childImageSharp.fluid}
          />
        </div>
      </div>
    </Layout>
  )
}

export default charity
//md:fixed md:right-2 lg:right-32 z-0
