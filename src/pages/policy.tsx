import React from "react"
import Layout from "../layouts/layout"

const policy = () => {
  return (
    <Layout>
      <div className="mb-3 p-2 md:py-4 md:px-6">
        <h1 className="text-center">Polityka Cookies</h1>
        <p>
          Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania
          dostępu do danych na Urządzeniach Użytkowników korzystających z
          Serwisu do celów świadczenia usług drogą elektroniczną przez
          Administratora Serwisu.
        </p>

        <h2 className="text-center">§ 1 Definicje</h2>
        <ul>
          <li className="my-2">
            <p>
              <strong>Serwis</strong> - serwis internetowy działający pod
              adresem{" "}
              <span id="serwis">
                <span className="text-primary">www.magfi.pl/</span>
              </span>
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Serwis zewnętrzny</strong> - serwis internetowe partnerów,
              usługodawców lub usługobiorców Administratora
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Administrator</strong> - firma{" "}
              <span id="firma">
                <span className="text-primary">Magfi Magdalena Pol</span>,
                prowadząca działalność pod adresem:{" "}
                <span className="text-primary">
                  Waleriana Łukasińskiego 12-14/m. 4, 50-436 Wrocław
                </span>
                , o nadanym numerze identyfikacji podatkowej (NIP):{" "}
                <span className="text-primary">9151737051</span>, o nadanym
                numerze REGON: <span className="text-primary">380206135</span>
              </span>
              , świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu
              oraz przechowująca i uzyskująca dostęp do informacji w
              urządzeniach Użytkownika
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Użytkownik</strong> - osba fizyczna, dla której
              Administrator świadczy usługi drogą elektroniczna za pośrednictwem
              Serwisu.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Urządzenie</strong> - elektroniczne urządzenie wraz z
              oprogramowaniem, za pośrednictwem, którego Użytkownik uzyskuje
              dostęp do Serwisu
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookies (ciasteczka)</strong> - dane tekstowe gromadzone w
              formie plików zamieszczanych na Urządzeniu Użytkownika
            </p>
          </li>
        </ul>
        <h2 className="text-center">§ 2 Rodzaje Cookies</h2>
        <ul>
          <li className="my-2">
            <p>
              <strong>Cookies wewnętrzne</strong> - pliki zamieszczane i
              odczytywane z Urządzenia Użytkownika przes system
              teleinformatyczny Serwisu
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookies zewnętrzne</strong> - pliki zamieszczane i
              odczytywane z Urządzenia Użytkownika przez systemy
              teleinformatyczne Serwisów zewnętrznych
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookies sesyjne</strong> - pliki zamieszczane i
              odczytywane z Urządzenia Użytkownika przez Serwis{" "}
              <span id="sz1">lub Serwisy zewnętrzne</span> podczas jednej sesji
              danego Urządzenia. Po zakończeniu sesji pliki są usuwane z
              Urządzenia Użytkownika.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookies trwałe</strong> - pliki zamieszczane i odczytywane
              z Urządzenia Użytkownika przez Serwis{" "}
              <span id="sz2">lub Serwisy zewnętrzne</span> do momentu ich
              ręcznego usunięcia. Pliki nie są usuwane automatycznie po
              zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia
              Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
              zakończeniu sesji Urządzenia.
            </p>
          </li>
        </ul>

        <h2 className="text-center">§ 3 Bezpieczeństwo</h2>
        <ul>
          <li className="my-2">
            <p>
              <strong>Mechanizmy składowania i odczytu</strong> - Mechanizmy
              składowania i odczytu Cookies nie pozwalają na pobierania
              jakichkolwiek danych osobowych ani żadnych informacji poufnych z
              Urządzenia Użytkownika. Przeniesienie na Urządzenie Użytkownika
              wirusów, koni trojańskich oraz innych robaków jest praktynie
              niemożliwe.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookie wewnętrzne</strong> - zastosowane przez
              Administratora Cookie wewnętrzne są bezpieczne dla Urządzeń
              Użytkowników
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>Cookie zewnętrzne</strong> - za bezpieczeństwo plików
              Cookie pochodzących od partnerów Serwisu Administrator nie ponosi
              odpowiedzialności. Lista partnerów zamieszczona jest w dalszej
              części Polityki Cookie.
            </p>
          </li>
        </ul>

        <h2 className="text-center">
          § 4 Cele do których wykorzystywane są pliki Cookie
        </h2>
        <ul id="cele">
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">
                  Usprawnienie i ułatwienie dostępu do Serwisu
                </span>
              </strong>{" "}
              - Administrator może przechowywać w plikach Cookie informacje o
              prefernecjach i ustawieniach użytkownika dotyczących Serwisu aby
              usprawnić, polepszyć i przyśpieszyć świadczenie usług w ramach
              Serwisu.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">Dane statystyczne</span>
              </strong>{" "}
              - Administrator <span id="sz4">oraz Serwisy zewnętrzne</span>{" "}
              wykorzystuje pliki Cookie do zbirania i przetwarzania danych
              statystycznych takich jak np. statystyki odwiedzin, statystyki
              Urządzeń Użytkowników czy statystyki zachowań użytkowników. Dane
              te zbierane są w celu analizy i ulepszania Serwisu.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">
                  Serwowanie usług multimedialnych
                </span>
              </strong>{" "}
              - Administrator <span id="sz5">oraz Serwisy zewnętrzne</span>{" "}
              wykorzystuje pliki Cookie do serwowania Użytkownikom usług
              multimedialnych.
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">Usługi społecznościowe</span>
              </strong>{" "}
              - Administrator <span id="sz7">oraz Serwisy zewnętrzne</span>{" "}
              wykorzystują pliki Cookie do wsparcia usług społecznościowych
            </p>
          </li>
        </ul>
        <h2 className="text-center">§ 5 Serwisy zewnętrzne</h2>
        <p id="zewinfo">
          <span className="text-primary">
            Administrator współpracuje z następującymi serwisami zewnętrznymi,
            które mogą zamieszczać pliki Cookie na Urządzeniach Użytkownika:
          </span>
        </p>
        <ul id="zewnetrzne">
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">Google Analytics</span>
              </strong>
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">Facebook</span>
              </strong>
            </p>
          </li>
          <li className="my-2">
            <p>
              <strong>
                <span className="text-primary">Youtube</span>
              </strong>
            </p>
          </li>
        </ul>
        <h2 className="text-center">
          § 6 Możliwości określania warunków przechowywania i uzyskiwania
          dostępu na Urządzeniach Użytkownika przez Serwis
          <span id="sz6"> i Serwisy zewnętrzne</span>
        </h2>
        <ul>
          <li className="my-2">
            <p>
              Użytkownik może w dowolnym momencie, samodzielnie zmienić
              ustawienia dotyczące zapisywania, usuwania oraz dostępu do danych
              zapisanych plików Cookies
            </p>
          </li>
          <li className="my-2">
            <p>
              Informacje o sposobie wyłączenia plików Cookie w
              najpopularniejszych przeglądarkach komputerowych i urządzeń
              mobilnych dostępna są na stronie:{" "}
              <a href="http://jakwylaczyccookie.pl">jak wyłączyć cookie</a>.
            </p>
          </li>
          <li className="my-2">
            <p>
              Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do
              tej pory pliki Cookie korzystając z narzędzi Urządzenia
              Użytkownika za pośrednictwem którego Użytkowanik korzysta z usług
              Serwisu.
            </p>
          </li>
        </ul>

        <h2 className="text-center">§ 7 Wyłączenie odpowiedzialności</h2>
        <ul>
          <li className="my-2">
            Administrator stosuje wszelkie możliwe środki w celu zapewnienia
            bezpieczeństwa danych umieszczanych w plikach Cookie. Należy jednak
            zwrócić uwagę, że zapewnienie bezpieczeństwa tych danych zależy od
            obu stron, w tym działalności Użytkownika oraz satnu zabezpieczeń
            urządzenia z którego korzysta.
          </li>
          <li className="my-2">
            Administrator nie bierze odpowiedzialności za przechwycenie danych
            zawartych w plikach Cookie, podszycie się pod sesję Użytkownika lub
            ich usunięcie, na skutek świadomej lub nieświadomej działalność
            Użytkownika, wirusów, koni trojańskich i innego oprogramowania
            szpiegującego, którymi może być zainfekowane Urządzenie Użytkownika.
          </li>
          <li className="my-2">
            Użytkownicy w celu zabezpieczenia się przed wskazanymi w punkcie
            poprzednim zagrożeniami powinni stosować się do{" "}
            <span id="cyber_random">
              wytycznych związanych z{" "}
              <a href="https://nety.pl/cyberbezpieczenstwo/">
                cyberbezpieczeństwem
              </a>
            </span>
            .
          </li>
          <li className="my-2">
            Usługi świadczone przez podmioty trzecie są poza kontrolą
            Administratora. Podmioty te mogą w każdej chwili zmienić swoje
            warunki świadczenia usług, cel oraz wykorzystanie plików cookie.
            Administrator nie odpowiada na tyle na ile pozwala na to prawo za
            działanie plików cookies używanych przez serwisy partnerskie.
            Użytkownicy w każdej chwili mogą samodzielnie zarządzać zezwoleniami
            i ustawieniami plików cookie dla każedej dowolnej witryny.
          </li>
        </ul>

        <h2 className="text-center">§ 8 Wymagania Serwisu</h2>
        <ul>
          <li className="my-2">
            <p>
              Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu
              Użytkownika może spowodować nieprawidłowe działanie niektórych
              funkcji Serwisu.
            </p>
          </li>
          <li className="my-2">
            <p>
              Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo
              działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w
              jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.
            </p>
          </li>
        </ul>
        <h2 className="text-center">§ 9 Zmiany w Polityce Cookie</h2>
        <ul>
          <li className="my-2">
            <p>
              Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej
              Polityki Cookie bez konieczności informowania o tym użytkowników.
            </p>
          </li>
          <li className="my-2">
            <p>
              Wprowadzone zmiany w Polityce Cookie zawsze będą publikowane na
              tej stronie.
            </p>
          </li>
          <li className="my-2">
            <p>
              Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki
              Cookie.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default policy
