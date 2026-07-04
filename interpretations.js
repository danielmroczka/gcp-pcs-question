window.questionInterpretations = {
  "1": {
    "about": "Pytanie dotyczy całkowitego zablokowania dostępu instancji Compute Engine (VM) do publicznego internetu oraz do wszelkich usług i API Google.",
    "interpret": "Kluczem jest wyłączenie przypisywania zewnętrznego IP (Public IP) oraz wyłączenie funkcji Private Google Access (PGA), która domyślnie pozwala maszynom z prywatnymi adresami IP na łączenie się z usługami Google (np. Cloud Storage, BigQuery)."
  },
  "2": {
    "about": "Pytanie sprawdza wiedzę na temat domyślnych, wbudowanych reguł zapory sieciowej (implied firewall rules) w sieciach VPC Google Cloud.",
    "interpret": "Zawsze istnieją dwie reguły implied (o najniższym priorytecie 65535): zezwalaj na cały ruch wychodzący (allow egress) i blokuj cały ruch przychodzący (deny ingress). Nie można ich usunąć, jedynie nadpisać."
  },
  "3": {
    "about": "Chodzi o bezpieczne przechowywanie kluczy i sekretów bez umieszczania ich w postaci jawnego tekstu w repozytorium kodu (SCM).",
    "interpret": "Wskazówka historyczna: Chociaż Secret Manager to nowoczesny standard, w starszych pytaniach najbezpieczniejszym wyborem jest szyfrowanie sekretów kluczami zarządzanymi przez klienta (CMEK) w Cloud KMS i przechowywanie ich w Cloud Storage."
  },
  "4": {
    "about": "Pytanie dotyczy centralnego zarządzania uprawnieniami GCP IAM z poziomu lokalnego Active Directory (AD) na podstawie przynależności do grup.",
    "interpret": "Rozwiązaniem jest użycie Google Cloud Directory Sync (GCDS) do synchronizacji grup AD do Google Workspace/Cloud Identity, a następnie przypisywanie ról IAM bezpośrednio do tych zsynchronizowanych grup."
  },
  "5": {
    "about": "Chodzi o najlepsze praktyki bezpieczeństwa podczas budowania i zabezpieczania obrazów kontenerów dla środowisk produkcyjnych.",
    "interpret": "Aby zminimalizować powierzchnię ataku, należy używać minimalnych obrazów bazowych (np. alpine lub distroless) pozbawionych niepotrzebnych pakietów/powłok oraz wdrożyć skanowanie podatności w potoku CI/CD."
  },
  "6": {
    "about": "Zaprojektowanie bezpiecznego i odizolowanego dostępu do 3-warstwowej aplikacji internetowej (frontend, backend, baza danych) w GCP.",
    "interpret": "Zabezpiecz warstwy wewnętrzne (backend i bazę danych) poprzez brak publicznych adresów IP oraz precyzyjną kontrolę komunikacji przy użyciu reguł firewall opartych na kontach serwisowych (Service Accounts)."
  },
  "7": {
    "about": "Pytanie dotyczy migracji obciążeń z fizycznego centrum danych do chmury GCP z zachowaniem poufności i integralności danych.",
    "interpret": "Kluczem jest zrozumienie modelu współdzielonej odpowiedzialności oraz wdrożenie szyfrowania na każdym etapie – zarówno dla danych w spoczynku (at rest), jak i w tranzycie."
  },
  "8": {
    "about": "Zabezpieczenie dostępu do systemu ERP hostowanego na Compute Engine przy użyciu Cloud IAP (Identity-Aware Proxy).",
    "interpret": "Cloud IAP pozwala na bezpieczny dostęp i uwierzytelnianie użytkowników bez konieczności korzystania z VPN. Działa na poziomie warstwy aplikacyjnej, weryfikując tożsamość i kontekst żądania."
  },
  "9": {
    "about": "Wykrywanie podatności i błędów konfiguracyjnych w systemach operacyjnych maszyn wirtualnych Compute Engine.",
    "interpret": "Do skanowania systemów pod kątem podatności (Vulnerability Assessment) i konfiguracji OS najlepiej wykorzystać Security Command Center (SCC) wraz z agentami skanującymi."
  },
  "10": {
    "about": "Uzyskanie spójnego i scentralizowanego widoku logów ze wszystkich projektów deweloperskich w zewnętrznym systemie SIEM.",
    "interpret": "Najlepszą praktyką jest skonfigurowanie sinka logów (Log Sink) na poziomie organizacji lub folderu, który przesyła logi zbiorczo do Cloud Pub/Sub, skąd system SIEM może je pobierać."
  },
  "11": {
    "about": "Zapobieganie porwaniom domen/IP oraz atakom typu hijacking poprzez przekierowywanie użytkowników na złośliwe strony.",
    "interpret": "Rozwiązaniem chroniącym przed zatruciem DNS i zapewniającym autentyczność odpowiedzi DNS jest wdrożenie DNSSEC (Domain Name System Security Extensions) w Cloud DNS."
  },
  "12": {
    "about": "Skanowanie wdrożonej aplikacji w App Engine pod kątem podatności bezpieczeństwa z listy OWASP Top 10.",
    "interpret": "Natywnym narzędziem w GCP dedykowanym do automatycznego skanowania aplikacji webowych (App Engine, GKE, Compute Engine) pod kątem luk bezpieczeństwa jest Web Security Scanner."
  },
  "13": {
    "about": "Umożliwienie analitykom danych pracy w środowisku GCP przy jednoczesnym zapobieganiu wyciekowi wrażliwych danych (Data Exfiltration).",
    "interpret": "Wymaga to zastosowania VPC Service Controls (VPC-SC), które tworzy perymetr bezpieczeństwa wokół usług takich jak Cloud Storage czy BigQuery, uniemożliwiając kopiowanie danych poza ten perymetr."
  },
  "14": {
    "about": "Zapewnienie zgodności z ładem korporacyjnym i bezpieczeństwem w nowo utworzonej organizacji GCP.",
    "interpret": "Wdrożenie struktur hierarchii zasobów (organizacja, foldery, projekty) oraz zdefiniowanie polityk organizacji (Organization Policies) w celu ograniczenia niepożądanych zachowań."
  },
  "15": {
    "about": "Zapewnienie bezpiecznego dostępu do zasobów Cloud Storage z poziomu aplikacji działającej na Compute Engine.",
    "interpret": "Unikaj kluczy Service Account zapisanych na dysku. Zamiast tego przypisz Service Account bezpośrednio do instancji VM i pozwól aplikacji korzystać z tożsamości metadanych instancji."
  },
  "16": {
    "about": "Zabezpieczenie i monitorowanie ruchu sieciowego w tranzycie między podsieciami oraz chmurą a środowiskiem lokalnym.",
    "interpret": "Użyj VPC Flow Logs do szczegółowego audytu połączeń sieciowych oraz wdróż Cloud IDS lub zapory sieciowe partnerów (Next-Gen Firewall) do głębokiej inspekcji pakietów (DPI)."
  },
  "17": {
    "about": "Analiza zmian w poufnych danych płacowych w czasie przy jednoczesnym zapobieganiu identyfikacji konkretnych pracowników.",
    "interpret": "Należy zastosować Cloud DLP API w celu deidentyfikacji lub maskowania danych wrażliwych (np. tokenizacja, k-anonimowość) przed udostępnieniem ich do analizy."
  },
  "18": {
    "about": "Wybór odpowiedniej strategii uwierzytelniania i autoryzacji dla użytkowników zewnętrznych w chmurze GCP.",
    "interpret": "Kluczowym rozróżnieniem jest Cloud Identity (dla pracowników i tożsamości wewnętrznych) kontra Firebase Authentication / Identity Platform (dla klientów i użytkowników końcowych aplikacji)."
  },
  "19": {
    "about": "Wdrożenie szyfrowania kopertowego (envelope encryption) do ochrony danych za pomocą własnych kluczy szyfrujących.",
    "interpret": "Dane szyfruje się lokalnym kluczem danych (DEK), a sam klucz DEK jest następnie szyfrowany kluczem głównym (KEK) zarządzanym centralnie w Cloud KMS."
  },
  "20": {
    "about": "Przesyłanie logów z GCP do lokalnego systemu SIEM w sposób niezawodny i odporny na awarie.",
    "interpret": "Prawidłowy potok przesyłania logów to: Cloud Logging -> Log Sink -> Cloud Pub/Sub -> Integrator SIEM (np. Splunk) pobierający dane z subskrypcji Pub/Sub."
  },
  "21": {
    "about": "Zapewnienie, że cały ruch wychodzący z maszyn wirtualnych do internetu przechodzi przez autoryzowane punkty kontrolne w celu spełnienia wymogów PCI DSS.",
    "interpret": "Należy usunąć domyślną trasę do internetu z sieci VPC i skierować ruch wychodzący (egress) przez dedykowane bramy proxy, zapory sieciowe lub NAT z włączonym logowaniem."
  },
  "22": {
    "about": "Zapewnienie bezpiecznego dostępu administracyjnego do aplikacji App Engine w środowisku programistycznym i produkcyjnym.",
    "interpret": "Zastosuj role IAM na poziomie projektu lub usługi App Engine oraz wdróż Identity-Aware Proxy (IAP) w celu precyzyjnej kontroli dostępu do konsoli administracyjnej."
  },
  "23": {
    "about": "Wykrywanie i automatyczne maskowanie wrażliwych danych, takich jak numery kart płatniczych, w czatach wsparcia klientów.",
    "interpret": "Użyj Cloud DLP API w czasie rzeczywistym do skanowania przesyłanego tekstu czatu i zastępowania wykrytych informacji wrażliwych (infoTypes) maskami (np. [CREDIT_CARD_NUMBER])."
  },
  "24": {
    "about": "Zapobieganie ryzyku związanemu z wyciekiem lub kompromitacją długożyjących kluczy kont serwisowych (Service Account Keys).",
    "interpret": "Najlepszą praktyką jest unikanie pobierania kluczy w formacie JSON. Zamiast tego należy korzystać z tożsamości powiązanych (np. Workload Identity w GKE) lub krótkotrwałych poświadczeń (short-lived credentials)."
  },
  "25": {
    "about": "Konfiguracja centralnego zbierania i analizowania audytowych logów dostępu w dużej organizacji z wieloma projektami GCP.",
    "interpret": "Stwórz dedykowany projekt bezpieczeństwa, w którym skonfigurujesz zagregowane logi (Aggregated Sinks) na poziomie organizacji, kierujące ruch do jednego bezpiecznego kubła Cloud Storage lub datasetu BigQuery."
  },
  "26": {
    "about": "Migracja tożsamości z lokalnego Active Directory do Google Workspace/Cloud Identity z obsługą jednokrotnego logowania (SSO).",
    "interpret": "Użyj GCDS do synchronizacji kont, a jako dostawcę tożsamości (IdP) dla logowania jednokrotnego skonfiguruj system wspierający standard SAML 2.0 (np. AD FS, Okta)."
  },
  "27": {
    "about": "Podział sieci i rozliczeń między różne jednostki biznesowe w ramach jednej organizacji w GCP.",
    "interpret": "Zastosuj strukturę folderów dla jednostek biznesowych, a zasoby sieciowe odizoluj przy użyciu Shared VPC lub osobnych sieci VPC połączonych za pomocą Peeringu."
  },
  "28": {
    "about": "Rozpraszanie i kierowanie ruchu pocztowego (SMTP) do zapasowych serwerów w różnych regionach GCP w celu zapewnienia wysokiej dostępności.",
    "interpret": "Skonfiguruj odpowiednie rekordy MX w Cloud DNS z przypisanymi priorytetami (niższa wartość to wyższy priorytet), wskazujące na adresy IP serwerów pocztowych w poszczególnych regionach."
  },
  "29": {
    "about": "Zarządzanie siecią w architekturze Shared VPC, gdzie projektem hosta jest co-vpc-prod, a projekty usługowe to projekty deweloperskie.",
    "interpret": "Użytkownicy w projektach usługowych (Service Projects) muszą mieć przypisaną rolę `Network User` na poziomie podsieci projektu hosta, aby móc podpinać swoje maszyny do tej sieci."
  },
  "30": {
    "about": "Bezpieczne połączenie lokalnego centrum danych z siecią VPC w GCP z zapewnieniem redundancji i niskich opóźnień.",
    "interpret": "Dla połączeń o krytycznym znaczeniu wybierz Dedicated Interconnect (lub Partner Interconnect) z dwoma łączami w osobnych lokalizacjach brzegowych (Edge Colocation) dla pełnej niezawodności."
  },
  "31": {
    "about": "Migracja zasobów do GCP z zachowaniem istniejących polityk bezpieczeństwa i standardów nazewnictwa maszyn.",
    "interpret": "Wykorzystaj polityki organizacji (Organization Policies) oraz mechanizmy Infrastructure as Code (IaC, np. Terraform) do wymuszenia ujednoliconej konfiguracji zasobów."
  },
  "32": {
    "about": "Autoryzacja aplikacji App Engine do wykonywania operacji w imieniu użytkownika na jego Dysku Google.",
    "interpret": "Należy zaimplementować przepływ OAuth 2.0 z delegowaniem uprawnień na poziomie domeny (domain-wide delegation) dla konta serwisowego (Service Account)."
  },
  "33": {
    "about": "Zapewnienie poufności i bezpieczeństwa danych przetwarzanych w pamięci RAM na maszynach Compute Engine.",
    "interpret": "Użyj funkcji Confidential VMs (dostępnej np. na procesorach AMD EPYC), która szyfruje dane w pamięci RAM za pomocą kluczy sprzętowych generowanych w procesorze (SEV)."
  },
  "34": {
    "about": "Zabezpieczenie klastra Cloud Dataproc (Hadoop/Spark) i kontrola dostępu do danych w nim przetwarzanych.",
    "interpret": "Włącz integrację z protokołem Kerberos w klastrze Dataproc w celu silnego uwierzytelniania wewnątrz klastra oraz zarządzaj dostępem do Cloud Storage za pomocą ról IAM."
  },
  "35": {
    "about": "Audyt i monitorowanie uprawnień administratorów w celu wykrycia nadmiarowego dostępu (Overprivileged Users).",
    "interpret": "Skorzystaj z narzędzia IAM Recommender, które analizuje rzeczywiste użycie uprawnień i sugeruje usunięcie ról, które nie były używane przez ostatnie 90 dni."
  },
  "36": {
    "about": "Ochrona aplikacji internetowej przed wstrzykiwaniem złośliwego kodu (XSS, SQL Injection) w przesyłanych formularzach.",
    "interpret": "Wdróż Cloud Armor z włączonymi regułami prekonfigurowanymi (WAF) chroniącymi przed atakami z listy OWASP Top 10 na zewnętrznym Load Balancerze HTTP(S)."
  },
  "37": {
    "about": "Ograniczenie pracownikom możliwości tworzenia własnych projektów i zasobów, które mogą generować wysokie koszty.",
    "interpret": "Usuń domyślną rolę `Project Creator` z grupy `Authenticated Users` na poziomie organizacji w panelu IAM."
  },
  "38": {
    "about": "Zarządzanie kluczami szyfrującymi przez własny zespół bezpieczeństwa z wymogiem przechowywania kluczy poza chmurą GCP.",
    "interpret": "Wykorzystaj Cloud External Key Manager (Cloud EKM), który integruje Cloud KMS z zewnętrznym systemem zarządzania kluczami (HSM) znajdującym się on-premises lub u innego dostawcy."
  },
  "39": {
    "about": "Zapewnienie bezpiecznego dostępu do zasobów GCP dla dużego zespołu inżynierów z minimalnym narzutem administracyjnym.",
    "interpret": "Zamiast zarządzać pojedynczymi kontami, stwórz grupy w Cloud Identity (np. wg zespołów) i przypisuj role IAM do grup, a nie do konkretnych użytkowników."
  },
  "40": {
    "about": "Audyt środowiska Google Cloud pod kątem zgodności ze standardem PCI DSS (Payment Card Industry Data Security Standard).",
    "interpret": "Skorzystaj z wbudowanych raportów zgodności (Compliance) w Security Command Center (SCC) oraz zapoznaj się z matrycą odpowiedzialności PCI DSS dostarczaną przez Google."
  },
  "41": {
    "about": "Zapewnienie automatycznej retencji i bezpowrotnego usuwania plików zawierających dane osobowe (PII) po określonym czasie.",
    "interpret": "Najbardziej opłacalnym i zautomatyzowanym rozwiązaniem jest przechowywanie danych w Cloud Storage i ustawienie reguły Object Lifecycle Management (np. kasowanie po 30 dniach)."
  },
  "42": {
    "about": "Zmniejszenie podatności i powierzchni ataku kontenerów wdrożonych w klastrze Google Kubernetes Engine (GKE).",
    "interpret": "Używaj minimalnych obrazów bazowych (np. distroless lub alpine) podczas budowania obrazu kontenera. Im mniej narzędzi systemowych w kontenerze, tym trudniejsza eskalacja uprawnień."
  },
  "43": {
    "about": "Uwierzytelnianie użytkowników w GCP na podstawie danych logowania z lokalnego serwera Active Directory z zachowaniem zasady jednego źródła prawdy.",
    "interpret": "Należy zsynchronizować konta za pomocą Google Cloud Directory Sync (GCDS) oraz wdrożyć federację tożsamości (SAML SSO), aby logowanie odbywało się przez lokalne AD."
  },
  "44": {
    "about": "Zabezpieczenie wewnętrznej aplikacji App Engine przed dostępem osób niepowołanych w przypadku wycieku hasła pracownika.",
    "interpret": "Wymuś wdrożenie dwuetapowej weryfikacji (2FA / 2SV) dla wszystkich kont użytkowników w Google Workspace/Cloud Identity."
  },
  "45": {
    "about": "Autoryzacja i kontrola dostępu do danych przechowywanych w klastrze Apache Spark/Hadoop w chmurze.",
    "interpret": "Wykorzystaj Cloud Dataproc z włączonym Cloud IAM i precyzyjnymi rolami dostępu do powiązanych kubłów Cloud Storage (gcsfs)."
  },
  "46": {
    "about": "Ograniczenie ruchu sieciowego wewnątrz sieci VPC wyłącznie do niezbędnych połączeń (zasada najmniejszych uprawnień).",
    "interpret": "Skonfiguruj reguły firewall oparte na kontach serwisowych (Service Accounts) jako źródłach i celach ruchu zamiast stosowania niepewnych tagów sieciowych."
  },
  "47": {
    "about": "Zabezpieczenie serwerów backendowych przed bezpośrednimi atakami DDoS oraz nieautoryzowanym ruchem bezpośrednio z internetu.",
    "interpret": "Umieść serwery za Cloud HTTP(S) Load Balancerem i włącz Cloud Armor, a na zaporze sieciowej (firewall) zezwól na ruch przychodzący wyłącznie z zakresów IP Load Balancera."
  },
  "48": {
    "about": "Bezpieczne zarządzanie i wstrzykiwanie haseł oraz kluczy API do aplikacji w czasie budowania lub uruchamiania.",
    "interpret": "Zastosuj Secret Manager jako centralny, szyfrowany magazyn sekretów i nadaj aplikacji (za pomocą jej konta serwisowego) uprawnienie do odczytu konkretnego sekretu."
  },
  "49": {
    "about": "Zapewnienie bezpiecznego dostępu administracyjnego do maszyn wirtualnych Compute Engine bez przypisywania im publicznych adresów IP.",
    "interpret": "Użyj usługi Identity-Aware Proxy (IAP) do przekierowania ruchu TCP (port 22 dla SSH, 3389 dla RDP) przez tunele IAP bez konieczności wystawiania maszyn na świat."
  },
  "50": {
    "about": "Wykrywanie i blokowanie prób włamań na poziomie sieciowym w chmurze Google Cloud.",
    "interpret": "Wdróż Cloud IDS (Intrusion Detection System) lub zintegruj wirtualne zapory sieciowe innych firm (NGFW) w celu inspekcji i analizy ruchu sieciowego."
  },
  "51": {
    "about": "Ograniczenie możliwości uruchamiania maszyn wirtualnych wyłącznie z autoryzowanych i bezpiecznych obrazów systemowych.",
    "interpret": "Użyj polityki organizacji (Organization Policy) o nazwie `constraints/compute.trustedImageProjects`, aby zdefiniować listę projektów, z których można pobierać obrazy dysków."
  },
  "52": {
    "about": "Scentralizowana kontrola nad tym, kto w firmie może zakładać nowe projekty w strukturze organizacji GCP.",
    "interpret": "Polityka ta jest zarządzana przez rolę IAM `Project Creator`. Usuń tę rolę ze standardowych grup użytkowników na najwyższym poziomie hierarchii organizacji."
  },
  "53": {
    "about": "Zapewnienie bezpiecznej komunikacji między wieloma mikrousługami wdrożonymi w chmurze bez ujawniania ich IP.",
    "interpret": "Wykorzystaj Service Directory do rejestracji i wyszukiwania usług oraz zintegruj je z wewnętrznym Load Balancerem w celu bezpiecznego kierowania ruchu."
  },
  "54": {
    "about": "Zabezpieczenie bazy danych Cloud SQL i ograniczenie dostępu do niej wyłącznie dla uprawnionej aplikacji frontendowej.",
    "interpret": "Skonfiguruj połączenie z bazą danych przy użyciu prywatnych adresów IP (Private IP) w sieci VPC i zablokuj dostęp przez publiczne IP."
  },
  "55": {
    "about": "Ochrona skrzynek pocztowych pracowników przed phishingiem i złośliwym oprogramowaniem.",
    "interpret": "Skonfiguruj zaawansowane ustawienia ochrony przed spamem i phishingiem w konsoli administracyjnej Google Workspace (w tym rekordy SPF, DKIM oraz DMARC w DNS)."
  },
  "56": {
    "about": "Monitorowanie i audytowanie działań podejmowanych przez inżynierów wsparcia Google na zasobach Twojej organizacji.",
    "interpret": "Włącz usługę Access Approval, która wymaga Twojej wyraźnej zgody (poprzez zatwierdzenie żądania), zanim wsparcie Google uzyska dostęp do Twoich danych lub maszyn."
  },
  "57": {
    "about": "Blokowanie maszynom produkcyjnym możliwości wysyłania ruchu bezpośrednio do internetu w celu zapobiegania wyciekowi danych.",
    "interpret": "Skonfiguruj politykę organizacji `constraints/compute.restrictPublicIp` lub usuń domyślną trasę internetową z tabeli routingu sieci VPC."
  },
  "58": {
    "about": "Charakterystyka bezpieczeństwa i ograniczenia połączeń sieciowych typu VPC Network Peering.",
    "interpret": "VPC Peering łączy dwie sieci w warstwie 3 bez narzutu wydajnościowego. Pamiętaj, że peering nie jest przechodni (non-transitive) – sieć A połączona z B i B z C nie daje połączenia A z C."
  },
  "59": {
    "about": "Aktualizacja podatnego oprogramowania w działających kontenerach bez przerywania ciągłości działania aplikacji.",
    "interpret": "Zbuduj nowy obraz kontenera z poprawioną wersją oprogramowania, przetestuj go, a następnie wykonaj aktualizację krokową (Rolling Update) w klastrze GKE."
  },
  "60": {
    "about": "Bezpieczna analiza zachowań klientów w sklepie internetowym bez narażania danych wrażliwych na ujawnienie.",
    "interpret": "Zastosuj anonimizację i deidentyfikację danych za pomocą Cloud DLP przed zapisaniem ich w hurtowni danych BigQuery do celów analitycznych."
  },
  "61": {
    "about": "Zapewnienie uwierzytelnionej separacji sieciowej (authenticated separation) pomiędzy warstwami aplikacji na Compute Engine.",
    "interpret": "Używanie kont serwisowych (Service Accounts) jako tożsamości do reguł firewall. Tagi sieciowe nie są tożsamościami i każdy admin maszyny może je zmienić, co czyni je mniej bezpiecznymi."
  },
  "62": {
    "about": "Retencja logów bezpieczeństwa przez 2 lata przy minimalizacji kosztów.",
    "interpret": "Przechowywanie logów w Cloud Storage (klasa Archive) jest najtańszą opcją retencji długoterminowej. BigQuery jest lepsze do analizy, ale znacznie droższe przy samym składowaniu danych."
  },
  "63": {
    "about": "Izolacja podów Kubernetes obsługujących transakcje PCI na dedykowanych i odizolowanych węzłach (Nodes).",
    "interpret": "Zastosuj mechanizm Taints (skazy) na węzłach oraz Tolerations (tolerancje) w konfiguracji Podów. Gwarantuje to, że żadne inne pody nie zostaną uruchomione na tych dedykowanych węzłach."
  },
  "64": {
    "about": "Dostosowanie aplikacji Compute Engine z dyskami SSD i ruchem UDP do standardu FIPS 140-2.",
    "interpret": "Standard FIPS wymaga certyfikowanych modułów kryptograficznych. W chmurze Google należy wykorzystać bibliotekę BoringCrypto do szyfrowania danych w locie i w spoczynku."
  },
  "65": {
    "about": "Zezwolenie maszynie wirtualnej z zablokowanym internetem na pobieranie aktualizacji z określonego repozytorium.",
    "interpret": "Stwórz regułę zezwalającą na ruch wychodzący do konkretnego zakresu IP (CIDR) repozytorium z priorytetem wyższym niż reguła blokująca (czyli o niższej wartości liczbowej priorytetu)."
  },
  "66": {
    "about": "Grupowe zarządzanie uprawnieniami IAM do kluczy szyfrujących w Cloud KMS.",
    "interpret": "Najlepszą praktyką jest grupowanie powiązanych kluczy w jednym pęku kluczy (KeyRing) i nadawanie uprawnień IAM na poziomie KeyRing, co upraszcza zarządzanie dostępem."
  },
  "67": {
    "about": "Bezpieczne filtrowanie i przenoszenie logów zawierających dane osobowe (PII) do odizolowanego kubła.",
    "interpret": "Użyj wyzwalacza Cloud Storage (GCS Trigger) połączonego z Cloud Functions i Cloud DLP API, aby skanować wgrywane pliki i przenosić te z PII do bezpiecznej lokalizacji."
  },
  "68": {
    "about": "Automatyczne odbieranie dostępu zwolnionemu pracownikowi w chmurze GCP.",
    "interpret": "Skonfiguruj Google Cloud Directory Sync (GCDS) z lokalnym Active Directory/LDAP, co zapewni automatyczne deprovisionowanie konta w Cloud Identity po wyłączeniu go w lokalnym AD."
  },
  "69": {
    "about": "Integracja istniejącego lokalnego katalogu tożsamości jako jedynego źródła prawdy w GCP.",
    "interpret": "GCDS (Google Cloud Directory Sync) to dedykowane narzędzie do synchronizacji tożsamości i grup z lokalnego katalogu (np. AD) do Cloud Identity."
  },
  "70": {
    "about": "Wybór międzynarodowego standardu dotyczącego bezpieczeństwa informacji w chmurze.",
    "interpret": "ISO/IEC 27017 to standard zawierający wytyczne dla kontroli bezpieczeństwa informacji stosowanych specyficznie w usługach chmurowych."
  },
  "71": {
    "about": "Tworzenie konta serwisowego (Service Account) z minimalnymi uprawnieniami do listowania instancji maszyn wirtualnych.",
    "interpret": "Zastosuj zasadę najmniejszych uprawnień. Zamiast roli edytora przypisz predefiniowaną rolę z uprawnieniami tylko do odczytu metadanych Compute Engine (np. `Compute Viewer`)."
  },
  "72": {
    "about": "Podział odpowiedzialności za bezpieczeństwo w modelu IaaS (Infrastructure as a Service).",
    "interpret": "W modelu IaaS Google odpowiada za bezpieczeństwo fizyczne i hiperwizor, natomiast klient odpowiada za system operacyjny, aplikacje, dane oraz konfigurację sieci (zapory)."
  },
  "73": {
    "about": "Zapewnienie odporności na awarie (Disaster Recovery) i retencji danych w chmurze GCP.",
    "interpret": "Skonfiguruj cykliczne migawki (snapshots) dysków maszyn wirtualnych oraz replikację danych w Cloud Storage do wielu regionów (Multi-Regional)."
  },
  "74": {
    "about": "Procedura wdrażania szyfrowania kopertowego (Envelope Encryption) dla wrażliwych danych.",
    "interpret": "Szyfrujemy dane lokalnie za pomocą wygenerowanego klucza DEK, następnie szyfrujemy klucz DEK w usłudze Cloud KMS za pomocą KEK, a na koniec przechowujemy zaszyfrowane dane wraz z zaszyfrowanym DEK."
  },
  "75": {
    "about": "Zapewnienie bezpiecznego dostępu pracowników do systemu CRM w GCP z dowolnego miejsca.",
    "interpret": "Użyj Cloud IAP (Identity-Aware Proxy) do uwierzytelniania użytkowników na podstawie tożsamości IAM i kontekstu urządzenia (Context-Aware Access) bez potrzeby posiadania VPN."
  },
  "76": {
    "about": "Ochrona wrażliwych danych w Cloud Storage przed przypadkowym udostępnieniem publicznym.",
    "interpret": "Włącz blokadę publicznego dostępu (Public Access Prevention) na poziomie kubła GCS lub zastosuj regułę polityki organizacji blokującą publiczne udostępnianie."
  },
  "77": {
    "about": "Monitorowanie i audytowanie zapytań SQL wykonywanych na wrażliwych danych w BigQuery.",
    "interpret": "Włącz zbieranie logów audytowych dostępu do danych (Data Access Audit Logs) w Cloud Logging, które rejestrują szczegóły każdego zapytania do BigQuery."
  },
  "78": {
    "about": "Ograniczenie ryzyka związanego z posiadaniem uprawnień superadministratora (Organization Administrator).",
    "interpret": "Zminimalizuj liczbę kont z rolą admina organizacji, oddziel konta codzienne od administracyjnych i włącz obowiązkowe uwierzytelnianie dwuskładnikowe (MFA)."
  },
  "79": {
    "about": "Zrozumienie granic odpowiedzialności za bezpieczeństwo sieciowe w Google Cloud.",
    "interpret": "Google zapewnia bezpieczeństwo fizycznej sieci i infrastruktury, natomiast klient odpowiada za konfigurację reguł zapory (firewall), tras (routes) oraz perymetrów bezpieczeństwa (VPC-SC)."
  },
  "80": {
    "about": "Zabezpieczenie publicznej aplikacji przed atakami OWASP Top 10 i blokowanie złośliwych adresów IP na brzegu sieci.",
    "interpret": "Rozwiązaniem jest użycie Cloud Armor zintegrowanego z zewnętrznym Load Balancerem HTTP(S) w celu wdrożenia reguł zapory aplikacyjnej (WAF)."
  },
  "81": {
    "about": "Umożliwienie maszynom wirtualnym bez publicznych adresów IP dostępu do usług Google (takich jak Cloud Storage) bez dostępu do internetu.",
    "interpret": "Włącz Private Google Access (PGA) na podsieci VPC. Pozwala to na routing ruchu do usług Google przez sieć wewnętrzną bez użycia bramy internetowej."
  },
  "82": {
    "about": "Zapisywanie plików wynikowych przetwarzania wsadowego z maszyn wirtualnych do Cloud Storage przy braku dostępu do internetu.",
    "interpret": "Prawidłowym mechanizmem jest włączenie Private Google Access na podsieci maszyn wirtualnych, co umożliwia im komunikację z API Cloud Storage bez publicznego IP."
  },
  "83": {
    "about": "Optymalizacja kosztów skanowania dużych ilości danych w poszukiwaniu danych wrażliwych przy użyciu Cloud DLP.",
    "interpret": "Zastosuj próbkowanie danych (sampling) za pomocą limitów wierszy (rowsLimit) w BigQuery lub bajtów na plik (bytesLimitPerFile) w GCS, zamiast skanować całe zbiory danych."
  },
  "84": {
    "about": "Bezpieczne uwierzytelnianie transferu danych z maszyny wirtualnej do innych usług GCP.",
    "interpret": "Przypisz do maszyny wirtualnej dedykowane konto serwisowe (Service Account) z precyzyjnie nadanymi rolami IAM, unikając stosowania domyślnego konta serwisowego Compute Engine."
  },
  "85": {
    "about": "Ograniczenie tworzenia i używania zewnętrznych, kluczowych poświadczeń (service account keys) w całej firmie.",
    "interpret": "Wdróż politykę organizacji (Organization Policy) blokującą tworzenie kluczy do kont serwisowych (`constraints/iam.disableServiceAccountKeyCreation`)."
  },
  "86": {
    "about": "Reakcja na incydent bezpieczeństwa związany z wyciekiem lub kompromitacją klucza konta serwisowego.",
    "interpret": "Natychmiast usuń lub dezaktywuj skompromitowany klucz w konsoli IAM, aby odciąć napastnikowi dostęp do zasobów, a następnie przeanalizuj logi audytowe."
  },
  "87": {
    "about": "Zapewnienie bezpieczeństwa komunikacji sieciowej między warstwami frontend i backend w VPC.",
    "interpret": "Użyj reguł firewall zezwalających na ruch przychodzący (ingress) do warstwy backendu wyłącznie wtedy, gdy źródłem jest konto serwisowe frontendowej grupy instancji."
  },
  "88": {
    "about": "Zabezpieczenie maszyn wirtualnych za load balancerem przed bezpośrednim dostępem z pominięciem load balancera.",
    "interpret": "Skonfiguruj reguły firewall zezwalające na ruch przychodzący wyłącznie z zakresów adresów IP należących do Google Cloud Load Balancer (np. 130.211.0.0/22 i 35.191.0.0/16)."
  },
  "89": {
    "about": "Zapewnienie zgodności z zasadą najmniejszych uprawnień dla programistów wdrażających aplikacje.",
    "interpret": "Przypisuj programistom role predefiniowane (np. `Kubernetes Engine Developer`) zamiast szerokich ról podstawowych (np. `Editor` lub `Owner`)."
  },
  "90": {
    "about": "Dostęp do zasobów GCP dla zewnętrznych partnerów biznesowych lub kontrahentów bez tworzenia kont w naszej domenie.",
    "interpret": "Skorzystaj z federacji tożsamości lub dodaj ich zewnętrzne konta Google (np. gmail lub konta ich organizacji) bezpośrednio do odpowiednich ról IAM w naszych projektach."
  }
};