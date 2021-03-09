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

      <div className="">
        <div className="p-2 md:p-6 pt-6 bg-primary text-white">
          <div className="flex text-center items-center">
            <div className="h-28 w-28 p-3">
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
            <h2 className="text-lg my-2">1% podatku są przeznaczane na:</h2>
          </p>
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
        <div className="flex text-center p-2  items-center md:p-6 md:w-1/3 my-3 md:my-9">
          <div className="h-28 w-28 p-3 flex-shrink-0 sm:h-32 sm:w-32 sm:p-6 md:h-40 md:w-40">
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
        <div>
          <p>
            Dolnośląskie Koło Przyjaciół Dzieci z Fenyloketonurią istnieje już
            ponad 30 lat.
          </p>
          <p>
            Członkami koła są osoby chore na Fenyloketonurię(PKU) oraz ich
            opiekunowie.
          </p>
          <p>
            Od 2009 roku nieprzerwanie mamy status Organizacji Pożytku
            publicznego. Jesteśmy organizacją non profit nie prowadzimy
            działalności gospodarczej.
          </p>
          <div>
            <p>Głównym zadaniem naszego stowarzyszenia jest:</p>
            <ul>
              <li className="my-2">
                <span className="font-bold mr-1"> 1.</span> Organizowanie
                szkoleń na temat Fenyloketonurii (PKU) ora\z warszatatów
                kulinarno-dietetycznych zarówno dla rodziców (opiekunów) i dla
                osób z PKU.
              </li>
              <li className="my-2">
                <span className="font-bold mr-1"> 2.</span> Reprezentowanie
                interesów dzieci, młodzieży i osób dorosłych chorych na
                Fenyloketonurię.
              </li>
              <li className="my-2">
                <span className="font-bold mr-1"> 2.</span> Umożliwienie
                wszystkim chorym na Fenyloketonurię optymalnego dostępu do
                preparatów medycznych oraz żywności niskobiałkowej.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full p-4 my-5 flex-shrink-0 sm:order-2 sm:w-1/2">
              <Image
                className="w-full"
                fluid={data.percentOfTax.childImageSharp.fluid}
              />
            </div>
            <div className="sm:py-10 sm:order-1  text-justify">
              <p>
                Współpracujemy ściśle z Poradnią Chorób Metabolicznych we
                Wrocławiu, ponieważ wsparcie merytoryczne jest dla nas
                najważniejsze.
              </p>
              <p>
                Propagujemy stosowanie Wymiennikó Fenyloalaninowych w diecie
                osób chorych na Fenyloketonurię. Własnoręcznie tworzymy klocki
                PKU, które są ułatwieniem w planowaniu i przelicznaiu posiłków.
                Wspomagamy możliwość równego dostępu do wiedzy.
              </p>
              <p>
                Jako Stowarzyszenie 1% wykorzystujemy na organizację warsztatów
                "Mamusie PKU", konferencje dla osób z PKU i ich rodzin z Dolnego
                Śląska oraz Opolszczyzny. Jesteśmy współorganizatorami Spotkań
                PKU Wrocław oraz Warsztatów kulinarnych, psychologicznych
                organizowanych dla osób z PKU oraz zakup żywności
                niskobiałkowej.
              </p>
              <p>
                W tym roku razem z lek. med. Renatą Mozrzymas oraz Wydziałem
                Dietetyki Uniwersytetu Medycznego tworzymy "album kanapek PKU",
                które mają być wskazówką i urozmaiceniem diety
                niskofenyloalaninowej.
              </p>
              <p>Bardzo liczymy na Państwa wsparcie.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default charity
