import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Data voor de 9 Ventures
const venturesData = [
  {
    id: "czones", name: "Czones",
    desc: "Volledig losmaakbare tegelsystemen voor een circulaire bouwsector.",
    result: "Circulair bouwen zónder actieverlies.",
    status: "Gepatenteerd", traction: "200+ Warme Leads", market: "Keramische tegelvloeren",
    marketSize: "€330M", cagr: "7.8%", Founder: "Bas Kiefmann", location: "Ulft",
    photoUrl: "/founders/bas_kiefmann_0.jpeg",
    founderQuote: "We konden simpelweg niet langer toezien hoe miljoenen vierkante meters hoogwaardig keramiek continu als onbereikbaar puin eindigden.",
    problem: [
      "De bouwsector slokt de helft van alle wereldwijde grondstoffen op.",
      "Traditioneel keramiek zit muurvast en eindigt louter als nutteloos bouwpuin.",
      "Strenge CO₂ wetgeving maakt dit lineaire proces op korte termijn onhoudbaar."
    ],
    solution: ["Behoud exact de hoge kwaliteit van nieuw keramiek.", "Installatieproces blijft naadloos identiek.", "Sluitende rendementsvalidatie via terugname-garantie."]
  },
  {
    id: "sustainers", name: "Sustainers",
    desc: "Software voor diep inzicht in complex organisatiegedrag ten behoeve van CO₂ reductie.",
    result: "Aantoonbare CO₂-reductie op de werkvloer.",
    status: "Live & Schalend", traction: "10+ Enterprise Klanten", market: "Duurzaamheid Software",
    marketSize: "110.000 Bedrijven (NL)", cagr: "15%", Founder: "Bob van der Putten", location: "Amsterdam",
    photoUrl: "/founders/bob_van_der_putten_0.jpeg",
    founderQuote: "Duurzaamheid is pas een feit als het dagelijks gedrag op de werkvloer structureel en meetbaar verandert, niet alleen in directiekamers.",
    problem: [
      "Duurzaamheidsdoelen blijven hangen in beleidsstukken en abstracte rapportages.",
      "Werknemers missen een concreet, stuurbaar en inzichtelijk handelingsperspectief.",
      "Zonder meetbaar gedrag op de werkvloer blijft wezenlijke CO₂-reductie uit."
    ],
    solution: ["Vertaalt dagelijks werk naar meetbare CO₂ impact.", "Praktische tools en dashboards voor medewerkers.", "Maakt duurzaamheid een stuurbare factor i.p.v. kostenpost."]
  },
  {
    id: "rondt", name: "Rondt",
    desc: "Laptops-as-a-Service model met refurbished devices ter voorkoming van e-waste.",
    result: "E-waste volledig geëlimineerd.",
    status: "Groeifase", traction: "15.000+ Laptops actief", market: "DaaS (Device as a Service)",
    marketSize: "€375M", cagr: "10.4%", Founder: "Martijn van Dijk", location: "Zwolle",
    photoUrl: "/founders/martijn_van_dijk_0.jpeg",
    founderQuote: "Het traditionele model waarbij hypermoderne IT al na exact 3 jaar structureel wordt afgedankt is ronduit absurd.",
    problem: [
      "Zakelijke IT-hardware wordt standaard na slechts 3 jaar al afgeschreven.",
      "Perfect werkende laptops belanden onnodig snel op de mondiale afvalberg.",
      "Dit lineaire proces drijft enorme e-waste en grondstofverspilling op."
    ],
    solution: ["Geef krachtige IT-hardware gegarandeerd een 2e of 3e leven.", "Volledig ontzorgd abonnementsmodel voor bedrijven.", "Maximaliseert levenscyclus en behoudt materiaalwaarde."]
  },
  {
    id: "donnie", name: "Donnie",
    desc: "Hét Goede doelenabonnement dat de nieuwe generatie inspireert en activeert.",
    result: "Structurele donaties van Gen-Z.",
    status: "Pilots", traction: "800k+ Organische Views", market: "Doneren",
    marketSize: "€1.1B (2040)", cagr: "8%", Founder: "Anouk de Vries & Mathijs Derksen", location: "Amsterdam",
    photoUrl: "/founders/anouk_de_vries_0.jpeg",
    founderQuote: "Ik merkte hoe de jongere generatie werd verlamd door keuzestress, terwijl de werkelijke drang om direct impact te maken enorm was.",
    problem: [
      "De donatiesector verliest in snel tempo de aansluiting met Millennials en Gen Z.",
      "Keuzestress en een sturend gebrek aan transparantie ontmoedigt actie.",
      "Jongeren zijn maatschappelijk betrokken, maar blijken structureel minder te doneren."
    ],
    solution: ["Eén simpel maandelijks abonnement voor wisselende doelen.", "Focus op concrete projecten met zéér meetbare impact.", "Activeert donateurs via unieke sociale events."]
  },
  {
    id: "goase", name: "GOase",
    desc: "Intelligente binnenstedelijke laadpleinen, lokaal verbonden aan schone energie.",
    result: "Altijd groene stroom, zonder congestie.",
    status: "Eerste locaties live", traction: "5 Laadpleinen in Opdracht", market: "Laadsector",
    marketSize: "$33B (EU 2030)", cagr: "22%", Founder: "Jesper Jacobs & Winie van Oorschot", location: "Eindhoven",
    photoUrl: "/founders/jesper_jacobs_0.jpeg",
    founderQuote: "Ondernemers wilden dolgraag groen groeien, maar konden dat simpelweg niet wegens drastisch gebrek aan lokaal stroomvermogen.",
    problem: [
      "Structurele netcongestie legt de elektrificatie in binnensteden steeds verder plat.",
      "Ondernemers kunnen hun grote wagenpark niet the verduurzamen door stroomgebrek.",
      "De benodigde ruime voor publieke laadinfrastructuur ontbreekt in het hart van de stad."
    ],
    solution: ["Slimme batterij-opslag direct bij de lader geplaatst.", "Onafhankelijk van het overbelaste publieke stroomnet.", "Supersnel laden op logische, snel bereikbare locaties."]
  },
  {
    id: "staqx", name: "Staqx",
    desc: "Slimme lokale energienetwerken (hubs) om netcongestie effectief te omzeilen.",
    result: "Bedrijventerreinen weer van stroom voorzien.",
    status: "Ontwikkeling", traction: "5 Hubs in voorbereiding", market: "Netcongestie & Smart Grids",
    marketSize: "€800M", cagr: "18%", Founder: "Ben Verstraten", location: "Eindhoven",
    photoUrl: "/founders/ben_verstraten_0.jpeg",
    founderQuote: "We verbruiken absurd veel energie terwijl de omliggende buren zonne-overschot hebben. Wij geven de regie direct terug.",
    problem: [
      "Bedrijven kunnen niet meer uitbreiden omdat het nationale stroomnet simpelweg aan zijn taks zit.",
      "Wachten op netverzwaring via de nationale en lokale netbeheerders duurt minstens 5 tot 10 jaar.",
      "Duurzaamheidsambities van de BV Nederland stagneren keihard."
    ],
    solution: ["Lokale energie-uitwisseling direct tussen buurbedrijven.", "Slimme software-algoritmes die piekmomenten afvlakken.", "Volledige eigen regie over schone stroomopwekking."]
  },
  {
    id: "happytimes", name: "Happy Times Media",
    desc: "Constructieve journalistieke content over maatschappelijke vooruitgang en duurzaamheid.",
    result: "Positief nieuws centraal stellen.",
    status: "Schaalbaar platform", traction: "100k+ Maandelijks Bereik", market: "Duurzaamheid Communicatie",
    marketSize: "€5 Miljard", cagr: "15%", Founder: "Maartje Bregman & Tessel Zandstra", location: "Eindhoven",
    photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQF7BjJ7QKxQWA/profile-displayphoto-scale_200_200/B4EZyJrWsoKcAY-/0/1771836372093?e=2147483647&v=beta&t=cMdB32MYKTRatUUKd2NjTR5dlMyk5zQyhcK1MUSw0Qs",
    founderQuote: "Er stond verbijsterend genoeg nergens een robuust en professioneel podium voor eerlijke en werkbare oplossingen in het klimaatdebat.",
    problem: [
      "Het medialandschap wordt keihard gedomineerd door negatieve polarisatie.",
      "Oprechte en constructieve pijlers voor vooruitgang verdwijnen ver in de ruis.",
      "Het vertrouwen van het publiek in instituties en de mainstream nieuwsvoorziening kalft af."
    ],
    solution: ["Biedt een stevig alternatief voor traditionele nieuwslogica.", "Storytelling-format voor eerlijke impactgedreven organisaties.", "Verschuift de blik focus van het incident naar de structurele oplossing."]
  },
  {
    id: "goodloyalty", name: "Good Loyalty",
    desc: "Loyaliteitsprogramma’s die klantgedrag direct koppelen aan meetbare maatschappelijke impact.",
    result: "Waardegedreven klantloyaliteit.",
    status: "Verdiepingsfase", traction: "Pilot bij 3 Gemeenten", market: "Loyaliteit & Rewards",
    marketSize: "€ 1 mrd (2025)", cagr: "12.6%", Founder: "N.t.b.", location: "Eindhoven",
    founderQuote: "Massale marketing focuste louter op extreme kortingen zonder waarde toe te voegen voor mens en omgeving.",
    problem: [
      "Traditionele loyaliteitsprogramma's sturen koud op platte prijskortingen.",
      "Consumenten devalueren massaal de emotionele en duurzame visie van een merk.",
      "Merken lopen volledig vast in geloofwaardige implementatie van duurzame acties."
    ],
    solution: ["Koppelt directe bedrijfsaankopen aan specifieke duurzame donaties.", "Integreert uiterst soepel in bestaande grote klantsystemen.", "Maakt de verweven maatschappelijke impact tastbaar."]
  },
  {
    id: "venture9", name: "Venture IX (Stealth)",
    desc: "Binnenkort aangekondigd: onze 9e deep-tech toevoeging in de Huddles portfolio.",
    result: "Systeemversnelling binnen de energietransitie.",
    status: "Pre-seed", traction: "Proof of Concept behaald", market: "Deep Tech / Transitie",
    marketSize: "€450M", cagr: "20%+", Founder: "Wordt aangekondigd", location: "Nederland",
    founderQuote: "De massale verspilling in de ruwe industrie vereist directe, compromisloze technologische pre-seed deep-tech inbreng.",
    problem: [
      "Complexe grondstofscheiding faalt nog te vaak door foutgevoelige, antieke menselijke processen.",
      "Hoogwaardige recycling stagneert doordat aanzienlijke vervuiling in de loop overblijft.",
      "Deze specifieke technologische doorbraak kampt met een immens pre-seed financieringsgat."
    ],
    solution: ["Vernieuwende IP en patent-gedreven hardware innovatie.", "Directe focus op zware industriële transitie-behoeften.", "Lancering in Q3."]
  }
];

const faqData = {
  investors: [
    {
      q: "Wat is het risicoprofiel van een Venture Studio model?",
      a: "Door zelf operationeel met 'skin in the game' mee te bouwen, verkleinen we het risico op executiefalen aanzienlijk vergeleken met passieve investeringen. Iedere venture wordt gevalideerd op markt, tractie én schaalbaarheid voordat we opschalen."
    },
    {
      q: "Hoe word ik onderdeel van de community?",
      a: "Na een positief intakegesprek waarin we wederzijdse waarde valideren, krijg je toegang tot onze besloten deals en het netwerk van 35+ topondernemers die actief bijdragen aan de portfolio."
    },
    {
      q: "Zijn er management fees of andere verborgen kosten?",
      a: "Onze structuur is uiterst transparant en volledig gericht op lange-termijn impact ROI. We trekken samen met investeerders op in specifieke fondsen of ventures zonder onnodige overhead."
    },
    {
      q: "Hoe wordt de portfolio gediversifieerd over sectoren?",
      a: "Onze 9 ventures bestrijken bewust meerdere pijlers van de fysieke transitie: van circulair bouwen en de energietransitie tot duurzame zorg en verantwoord doneren. Die spreiding verlaagt sectorrisico en maximaliseert systeemimpact."
    },
    {
      q: "Hoe ziet de betrokkenheid van investeerders eruit na toetreding?",
      a: "Investeerders worden actief verbonden aan ventures waar hun branche-expertise het meest waardevol is. Je ontvangt kwartaalupdates, krijgt toegang tot exclusieve venture updates en wordt uitgenodigd voor besloten Huddles-sessies."
    },
    {
      q: "Welke resultaten boeken de portfolio ventures op dit moment?",
      a: "Onze ventures realiseren concrete, meetbare impact: van operationele laadpleinen en duizenden circulaire devices in gebruik tot significante CO₂-reducties in de zorgsector. Elke venture heeft een duidelijk pad naar schaalbaarheid."
    }
  ],
  entrepreneurs: [
    {
      q: "Wat houdt de Huddles-investering precies in?",
      a: "Je ontvangt direct werkkapitaal gecombineerd met een intensief coachingstraject door een Kickstartprofessional: een ervaren ondernemer die wekelijks meebouwt en je helpt sneller tastbare tractie te realiseren."
    },
    {
      q: "Moet ik mijn bedrijf opgeven in het Venture Studio model?",
      a: "Zeker niet. We bouwen *met* je mee, niet *voor* je. We nemen een minderheidsbelang dat past bij onze operationele inzet, maar jij blijft de kapitein op het schip."
    },
    {
      q: "Welke partners zitten er in 'Huddles Select'?",
      a: "Dit is een exclusieve selectie van partners op gebied van bookkeeping, legal en marketing die volledig zijn ingewerkt in onze werkwijze en je ontzorgen tegen scherpe ondernemers-condities."
    },
    {
      q: "Hoe helpt Huddles bij het ophalen van vervolgfinanciering?",
      a: "Via ons netwerk van 35+ actieve investeerders en onze eigen fundingstrategie-expertise begeleiden we je bij het structureren en ophalen van groeikapitaal — van pre-seed tot scale-up fase."
    },
    {
      q: "In welke fase moet mijn bedrijf zich bevinden om in aanmerking te komen?",
      a: "We zoeken ondernemers met een gevalideerd concept in de fysieke transitie — denk aan stealth-, pre-seed- of vroege groeifase. De kern: je lost een fundamenteel systeemprobleem op en bent klaar om te schalen."
    }
  ],
  portfolio: [
    {
      q: "Hoe draagt de portfolio bij aan de energietransitie?",
      a: "Meerdere ventures in de portfolio pakken netcongestie en de elektrificatie van binnensteden aan. Van slimme lokale energiehubs die bedrijventerreinen weer van stroom voorzien tot intelligente laadpleinen die onafhankelijk opereren van het overbelaste net — altijd met groene stroom."
    },
    {
      q: "Wat betekent circulaire economie binnen de Huddles portfolio?",
      a: "Circulariteit loopt als rode draad door onze ventures. We investeren in bedrijven die hoogwaardig keramiek volledig herbruikbaar maken in de bouw, die duizenden laptops een tweede en derde leven geven als service-model, en die restwaarde van materialen structureel behouden."
    },
    {
      q: "Hoe maakt de portfolio duurzaamheid meetbaar in de zorgsector?",
      a: "Eén van onze ventures levert software die zorginstellingen helpt hun dagelijks gedrag te vertalen naar aantoonbare CO₂-reductie. Per instelling worden jaarlijks honderden tonnen CO₂ en tonnen afval bespaard, terwijl ook de operationele kosten substantieel dalen."
    },
    {
      q: "Hoe activeert de portfolio de volgende generatie donateurs?",
      a: "Via een innovatief donatieplatform koppelen we maatschappelijke betrokkenheid aan concrete projecten met meetbare impact. De focus ligt op het bereiken van een jongere doelgroep via sociale evenementen en organisch social media bereik — waardoor structureel doneren toegankelijk wordt."
    },
    {
      q: "Welke rol speelt constructieve communicatie in de portfolio?",
      a: "Eén van onze mediaventures biedt een professioneel podium voor oplossingsgerichte journalistiek en duurzaamheidscommunicatie. Dit helpt impactgedreven organisaties hun verhaal te vertellen op een manier die activeert in plaats van polariseert."
    },
    {
      q: "Hoe worden klantloyaliteit en impact gecombineerd?",
      a: "Binnen de portfolio wordt gewerkt aan een loyaliteitsmodel dat klantgedrag direct koppelt aan meetbare maatschappelijke impact — bijvoorbeeld via CO₂-certificering als strategische businesskans voor retailers en merken."
    }
  ],
  general: [
    {
      q: "Waarom de focus op hardware en de fysieke transitie?",
      a: "Hier ligt de grootste uitdaging voor de planeet én de grootste economische kans van deze eeuw. Juist in de fysieke wereld is operationele support en netwerk cruciaal om barrières te doorbreken."
    },
    {
      q: "Wat onderscheidt een Venture Studio van een traditioneel investeringsfonds?",
      a: "Waar een traditioneel fonds kapitaal verstrekt en op afstand blijft, bouwen wij mee. We zijn operationeel partner: we denken mee over strategie, helpen met team-opbouw en ontsluiten ons volledig netwerk. Dat verlaagt het faalrisico en versnelt de groei drastisch."
    },
    {
      q: "Hoe groot is de huidige Huddles portfolio?",
      a: "Ons Impact Ventures Fund omvat 9 ventures die elk een fundamenteel systeemprobleem aanpakken: van circulair bouwen en de energietransitie tot duurzame zorg, structureel doneren en constructieve media. Samen bestrijken ze de volledige breedte van de fysieke transitie."
    },
    {
      q: "Hoe wordt de impact van de ventures gemeten?",
      a: "Iedere venture rapporteert op meetbare impactindicatoren: tonnen CO₂-reductie, kilogrammen materiaal in circulatie, kilowatturen groene stroom geleverd, en euros aan maatschappelijke waarde gegenereerd. We sturen actief op deze KPI's naast financieel rendement."
    }
  ]
};

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between items-center py-4 px-6 lg:px-12 bg-white/90 backdrop-blur-xl z-50 border-b border-brand-dark/5 shadow-sm">
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://huddles.com/wp-content/uploads/2020/04/logo-FC.svg" alt="Huddles Venture Studios" className="h-6" />
        </Link>
        <div className="hidden lg:flex gap-8 text-xs font-bold tracking-widest uppercase text-brand-dark/80">
          <Link to="/investors" className="hover:text-brand-accent transition-colors">Voor Investeerders</Link>
          <Link to="/ondernemers" className="hover:text-brand-accent transition-colors">Voor Ondernemers</Link>
          <Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link>
          <Link to="/over-ons" className="hover:text-brand-accent transition-colors">Over Ons</Link>
          <Link to="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex relative items-center">
          <svg className="w-4 h-4 absolute left-3 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" placeholder="Zoeken..." className="pl-10 pr-4 py-2 bg-brand-dark/5 border border-transparent rounded-full text-sm font-medium focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all w-40" />
        </div>
        <Link to="/investors" className="bg-brand-dark text-brand-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-accent hover:text-brand-dark transition-colors shadow-sm whitespace-nowrap">
          Join Community
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark py-12 px-6 lg:px-12 text-brand-white/70 border-t border-brand-white/10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="https://huddles.com/wp-content/uploads/2021/08/Logo-Diap.svg" alt="Huddles Diapositive" className="h-6 opacity-90 hover:opacity-100 transition-opacity" />
          <p className="text-sm font-medium">Huddles Venture Studios &copy; 2026. Van oude naar nieuwe economie.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest uppercase">
          <Link to="/investors" className="hover:text-brand-accent transition-colors">Investeerders</Link>
          <Link to="/ondernemers" className="hover:text-brand-accent transition-colors">Ondernemers</Link>
          <Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link>
          <Link to="/over-ons" className="hover:text-brand-accent transition-colors">Over Ons</Link>
          <Link to="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="bg-brand-accent text-brand-dark rounded-full p-1 mt-0.5 shadow-sm shrink-0 flex items-center justify-center">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <span className="text-base text-brand-dark/80 leading-relaxed font-medium">{children}</span>
  </li>
);

const CrossItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5 shadow-sm shrink-0 flex items-center justify-center">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    <span className="text-base text-brand-dark/80 leading-relaxed font-medium">{children}</span>
  </li>
);

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="space-y-4 w-full">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-sm border border-brand-dark/5 overflow-hidden shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-brand-cream/30 transition-colors"
          >
            <span className="font-bold text-brand-dark text-base">{item.q}</span>
            <svg className={`w-5 h-5 text-brand-accent transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6 text-brand-dark/70 font-medium leading-relaxed animate-fadeIn">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQSection = ({ category, max = 3, title = "Veelgestelde Vragen" }) => {
  const items = category ? faqData[category] : [...faqData.general, ...faqData.portfolio, ...faqData.investors, ...faqData.entrepreneurs];
  return (
    <section className="py-24 px-6 bg-brand-cream/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-brand-dark text-center">{title}</h2>
        <FAQAccordion items={items.slice(0, max)} />
        <div className="mt-12 text-center">
          <Link to="/faq" className="text-sm font-bold text-brand-dark/40 hover:text-brand-accent uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
            Bekijk alle {items.length} vragen <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const StarRating = () => (
  <div className="flex gap-0.5 text-brand-accent">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// 1. TEMPT (Dual Purpose Hero)
function TemptSection() {
  return (
    <section id="tempt" className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 bg-brand-dark text-brand-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-bg.png" alt="Confident entrepreneur" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full text-center md:text-left">
        <div className="inline-block bg-brand-accent/20 text-brand-accent font-bold px-4 py-1.5 text-xs rounded-sm border border-brand-accent/30 tracking-widest uppercase mb-8">
          Systeemverschuiving in actie
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight drop-shadow-xl max-w-4xl mx-auto md:mx-0">
          Zet jouw netwerk en geld<br />
          <span className="text-brand-accent leading-[1.2]">aan het werk om de nieuwe economie te bouwen.</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-light mb-12 max-w-2xl leading-relaxed opacity-90 mx-auto md:mx-0">
          De lineaire markt loopt structureel vast. Wij faciliteren een exclusieve verbinding tussen daadkrachtige investeerders en impactvolle pioniers om de transitie tastbaar te versnellen.
        </p>

        {/* Dual Focus Target Audiences */}
        <div className="inline-flex flex-col sm:flex-row gap-4 p-2 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 w-full sm:w-auto">
          <Link to="/investors" className="bg-brand-accent text-brand-dark px-10 py-4 font-bold text-base rounded-lg hover:-translate-y-1 transition-transform shadow-[0_5px_20px_rgba(91,238,155,0.3)] text-center w-full sm:w-auto">
            Ik ben impactinvesteerder
          </Link>
          <Link to="/ondernemers" className="bg-brand-dark/80 text-white px-10 py-4 font-bold text-base rounded-lg hover:bg-white hover:text-brand-dark transition-colors border border-white/10 text-center w-full sm:w-auto">
            Ik ben impactondernemer
          </Link>
        </div>
        
        <div className="mt-8 flex gap-8 justify-center md:justify-start items-center">
           <Link to="/faq" className="text-xs font-bold text-brand-light/60 hover:text-brand-accent uppercase tracking-widest transition-colors">Hoe het werkt →</Link>
           <a href="#persuade" className="text-xs font-bold text-brand-light/60 hover:text-brand-accent uppercase tracking-widest transition-colors">Onze Portfolio</a>
        </div>

        {/* Micro-copy met Star Rating */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 text-brand-light/90 text-sm font-medium mx-auto md:mx-0 justify-center md:justify-start">
          <StarRating />
          <span>Voeg je bij onze actieve groep van <strong className="text-white">35+ investeerders</strong>.</span>
        </div>
      </div>
    </section>
  );
}

// 2. INFLUENCE 
function InfluenceSection() {
  return (
    <section id="influence" className="py-32 px-6 lg:px-12 bg-brand-cream">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-5/12 relative">
          <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/5] border border-brand-dark/10">
            <img src="/collab.png" alt="Collaborating on hardware" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay"></div>
          </div>

          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-white p-6 rounded-sm shadow-2xl z-10 max-w-[280px] border-t-4 border-brand-accent">
            <svg className="w-6 h-6 text-brand-accent/50 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>
            <p className="text-sm font-medium italic text-brand-dark mb-4 leading-relaxed">
              "Dankzij het Huddles-ecosysteem lanceerden wij 12 maanden sneller. Je stapt direct in een rijdende trein qua executie."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-cream rounded-full border border-brand-dark/10 flex items-center justify-center font-bold text-brand-dark text-xs">
                MD
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm">Martijn van Dijk</p>
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest text-brand-dark">Pionier bij Rondt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 pt-16 lg:pt-0 lg:pl-10">
          <div className="inline-block bg-brand-dark/5 text-brand-dark font-bold px-3 py-1 text-[10px] rounded-sm border border-brand-dark/10 tracking-widest uppercase mb-6">
            Voor impactondernemers
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-dark leading-tight tracking-tight">
            Plug als founder in op een bewezen fundament.
          </h2>
          <p className="text-base text-brand-dark/80 leading-relaxed mb-8 border-l-2 border-brand-accent pl-5 bg-brand-accent/5 p-4 rounded-sm font-medium">
            Ondernemen in de transitie – vaak met hardware en strenge regelgeving – is zwaar. Wij faciliteren schaalbare groei voor topfounders.
          </p>
          <p className="text-base text-brand-dark/80 leading-relaxed font-medium mb-10">
            Krijg vanaf dag één toegang tot operationele kapitaal, strategen en de back-office die je iteratiesnelheid met maanden verkort.
          </p>

          <ul className="space-y-4 mb-10">
            <CheckItem>Overwin razendsnel hindernissen rondom hardware en strenge regelgeving.</CheckItem>
            <CheckItem>Bouw direct op een extreem ervaren netwerk van co-founders.</CheckItem>
            <CheckItem>Vergroot onmiddellik je financieringswaarde in de markt.</CheckItem>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link to="/ondernemers" className="bg-brand-dark text-white px-8 py-3.5 font-bold text-sm rounded-sm hover:bg-brand-accent hover:text-brand-dark transition-all w-full sm:w-auto text-center">
              Word Pioneer
            </Link>
            <Link to="/faq" className="text-xs font-black uppercase tracking-widest text-brand-dark/40 hover:text-brand-accent transition-colors">
              Bekijk Selectie Criteria
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. PERSUADE
function PersuadeSection() {
  return (
    <section id="persuade" className="py-32 px-6 lg:px-12 bg-brand-cream relative z-0">
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-brand-dark -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 pt-10 text-brand-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">Onze 9 Impact Ventures.</h2>
          <p className="text-base text-brand-light leading-relaxed opacity-90 font-medium">
            Stuk voor stuk systeembrekers. Profiteer direct van het gevalideerde trackrecord van ondernemers die de transitie vandaag domineren in de top van de markt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venturesData.map(v => (
            <Link to={`/venture/${v.id}`} key={v.id} className="bg-white p-8 rounded-sm shadow-xl border border-brand-dark/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-extrabold text-brand-dark group-hover:text-[#386b4a] transition-colors">{v.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#386b4a] bg-[#E5F7ED] px-2 py-1 rounded-sm border border-brand-accent/30">{v.market}</span>
              </div>
              <p className="text-sm font-medium text-brand-dark/70 mb-8 flex-1 leading-relaxed">{v.desc}</p>

              <div className="bg-brand-cream p-4 rounded-sm border-l-2 border-brand-accent flex justify-between items-center">
                <div>
                  <span className="block text-brand-dark/50 text-[10px] font-bold uppercase tracking-widest mb-1">Status</span>
                  <span className="text-xs font-extrabold text-brand-dark">{v.status}</span>
                </div>
                <span className="text-xs font-bold text-brand-accent/80 group-hover:text-brand-dark transition-colors">Details →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-12 bg-brand-dark rounded-sm border border-brand-accent/20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
           <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">Klaar om de transitie te versnellen?</h3>
           <p className="text-brand-light/80 mb-10 max-w-xl mx-auto text-base font-medium leading-relaxed relative z-10">
             Of je nu wilt investeren in systeembrekers of als founder een fundamenteel bedrijf bouwt: we horen graag van je.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
             <Link to="/investors" className="bg-brand-accent text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-transform w-full sm:w-auto shadow-lg shadow-brand-accent/20">
               Join Community
             </Link>
             <Link to="/ondernemers" className="bg-white/10 text-white border border-white/20 px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-brand-dark transition-all w-full sm:w-auto">
               Pitch Venture
             </Link>
           </div>
           <p className="mt-10 text-[10px] font-bold text-brand-light/30 tracking-[0.2em] uppercase italic relative z-10">Huddles — the human venture studio</p>
        </div>
      </div>
    </section>
  );
}

// NEW ENTREPRENEURS PAGE
function EntrepreneursPage() {
  const offerings = [
    { title: "€100k Cash Investering", desc: "100k EUR directe investering in cash als stevig werkkapitaal om de groei radicaal te versnellen.", icon: "💸" },
    { title: "€50k in Coaching", desc: "Een Kickstartprofessional: investering van 50k EUR in actieve coaching door een ex-ondernemer met enorme ervaring die leidt naar harde tractie.", icon: "🧠" },
    { title: "Netwerk van Investeerders", desc: "Het netwerk van 35+ extreem relevante Huddles investeerders binnen specifiek jóuw eigen branche ontsluit zich direct.", icon: "🌐" },
    { title: "Venture Studio", desc: "Strikt hands-on: we investeren niet passief van een afstand, maar we bouwen écht dagelijks operationeel mee aan jouw bedrijf.", icon: "🏗️" },
    { title: "Huddles Select", desc: "Een curatie van partners die het bedrijf volledig ontzorgen op gespecialiseerde gebieden zoals accountancy, boekhouding, legal, en marketing.", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      <section className="bg-brand-dark text-white py-32 px-6 lg:px-12 relative overflow-hidden text-center md:text-left">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block bg-brand-accent/20 text-brand-accent font-bold px-4 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-6">
              Impactondernemers
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">Plug in. <span className="text-brand-accent">Schaal op.</span></h1>
            <p className="text-lg md:text-xl max-w-2xl text-brand-light leading-relaxed font-medium mb-8">
              Ondernemen in de fysieke transitie is buitengewoon zwaar door complexe ketens en trage financiering. Huddles biedt een operationeel ecosysteem dat fundamentele Hardware en Deep-Tech bedrijven in maanden laat bereiken wat anders jaren duurt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 w-full flex-grow">
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-dark">Wat je direct krijgt aan tafel.</h2>
          <p className="text-base text-brand-dark/70 font-medium leading-[1.8]">
            Onze investering is altijd meer-dimensionaal. Zodra we samen het fundament voor de nieuwe economie storten mag je het maximale van ons verwachten ter acceleratie van de groei:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {offerings.map((offer, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 rounded-sm shadow-xl border border-brand-dark/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{offer.icon}</div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{offer.title}</h3>
              <p className="text-brand-dark/80 font-medium leading-[1.8] flex-1">{offer.desc}</p>
              <div className="w-8 h-1 bg-brand-accent mt-8"></div>
            </div>
          ))}
        </div>

        <div className="bg-brand-dark text-white p-12 lg:p-16 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 border-t-8 border-brand-accent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[50px] pointer-events-none"></div>
          <div className="relative z-10 md:w-2/3">
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">Gereed voor exclusieve co-funders?</h3>
            <p className="text-base text-brand-light font-medium leading-[1.8]">Plan direct een intake in. Let op: we selecteren enkel gedreven ondernemers met harde impact doelstellingen via stealth en (pre-)seed fase.</p>
          </div>
          <div className="relative z-10 md:w-1/3 w-full">
            <button className="bg-brand-accent text-brand-dark w-full px-8 py-5 text-base font-bold uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-transform shadow-[0_5px_20px_rgba(91,238,155,0.3)]">
              Start Je Pitch
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-brand-light/90 text-xs font-medium">
              <StarRating />
              <span>Directe toegang tot <strong className="text-white">35+ co-funders</strong>.</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// NEW INVESTORS PAGE
function InvestorsPage() {
  const team = [
    { name: "Akke Pennin", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/akke-pennin-1ab5136a/" },
    { name: "Winie van Oorschot", role: "Co-founder", linkedin: "https://www.linkedin.com/in/winie-van-oorschot-8a854915/" },
    { name: "Frank Ponsioen", role: "Co-founder", linkedin: "https://www.linkedin.com/in/frankponsioen/" },
    { name: "Olivier Ponsioen", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/olivierponsioen/" },
    { name: "Sebo Havinga", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/sebohavinga/" }
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      {/* Hero for Investors */}
      <section className="bg-brand-dark text-white py-32 px-6 lg:px-12 relative overflow-hidden text-center md:text-left">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block bg-brand-accent/20 text-brand-accent font-bold px-4 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-6">
              Besloten Investeringsnetwerk
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">De <span className="text-brand-accent">Community.</span></h1>
            <p className="text-lg md:text-xl max-w-2xl text-brand-light leading-relaxed font-medium">
              Wij bundelen het kapitaal en de exceptionele operationele denkkracht van meer dan 35 actieve investeerders om de portfolio extreem efficiënt te valideren en versnellen.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white/5 p-8 rounded-sm backdrop-blur-md border border-white/10 text-center">
            <h3 className="font-extrabold text-xl mb-4">Mede de transitie dragen?</h3>
            <p className="text-sm font-medium opacity-80 mb-6">Ontdek of je toevoegde waarde kwijt kunt binnen het netwerk via een oriënterend gesprek.</p>
            <button className="bg-brand-accent text-brand-dark w-full py-4 text-sm font-bold uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-transform shadow-[0_5px_20px_rgba(91,238,155,0.3)]">
              Plan Investor Intake
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-brand-light/90 text-xs font-medium">
              <StarRating />
              <span>Sluit je direct aan bij <strong className="text-white">35+ investeerders</strong>.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mutual Expectations */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white p-10 lg:p-12 rounded-sm shadow-xl border-l-4 border-brand-accent relative overflow-hidden h-full flex flex-col">
            <div className="inline-block bg-[#E5F7ED] text-[#2d523b] font-bold px-3 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-6 self-start">Huddles Propositie</div>
            <h2 className="text-3xl font-extrabold mb-8 text-brand-dark leading-tight">Wat je van ons mag verwachten.</h2>
            <ul className="space-y-6 flex-1">
              <CheckItem>Extreme risicoreductie door ons eigen hands-on Venture Studio model in elke case.</CheckItem>
              <CheckItem>Zeer streng geselecteerde deep-tech en fysieke investeringsproposities, vaak in stealth-fase.</CheckItem>
              <CheckItem>Directe validatie door en exclusieve toegang tot 35+ gelijkgestemde topondernemers in het netwerk.</CheckItem>
              <CheckItem>Transparante structurering en pro-actieve sturing op de lange-termijn impact ROI.</CheckItem>
            </ul>
          </div>

          <div className="bg-brand-dark text-white p-10 lg:p-12 rounded-sm shadow-2xl border-t-8 border-brand-accent relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="inline-block bg-white/10 text-brand-accent font-bold px-3 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-6 border border-white/20 self-start relative z-10">Investeerders Profiel</div>
            <h2 className="text-3xl font-extrabold mb-8 text-white leading-tight relative z-10">Wat wij van jou verwachten.</h2>
            <ul className="space-y-6 flex-1 relative z-10">
              <li className="flex items-start gap-3">
                <div className="bg-brand-accent text-brand-dark rounded-full p-1.5 mt-0.5 shadow-sm shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <span className="text-base text-brand-light font-medium leading-[1.8]">Actieve inbreng van jouw specifieke operationele branche-kennis of hardware expertise.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-accent text-brand-dark rounded-full p-1.5 mt-0.5 shadow-sm shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span className="text-base text-brand-light font-medium leading-[1.8]">Het strategisch en warm openstellen van jouw C-level zakelijke en logistieke netwerk.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-accent text-brand-dark rounded-full p-1.5 mt-0.5 shadow-sm shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <span className="text-base text-brand-light font-medium leading-[1.8]">Gezamenlijke kapitaalinbreng om de fysieke impact transitie krachtig te ontgrendelen.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24 max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-brand-dark">Ons Founding Team.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <a href={member.linkedin} target="_blank" rel="noreferrer" key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-brand-dark/5 hover:-translate-y-1 hover:shadow-lg transition-transform text-center flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-brand-dark/5 rounded-full mb-5 border border-brand-dark/10 flex items-center justify-center font-bold text-2xl text-brand-dark">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-extrabold text-sm mb-2 text-brand-dark">{member.name}</h3>
              <p className="text-[10px] uppercase font-bold text-brand-accent/80 mb-6 flex-1 leading-relaxed">{member.role}</p>
              <span className="text-xs font-bold text-[#0077b5] border border-[#0077b5]/20 bg-[#0077b5]/5 px-3 py-1 rounded-sm w-full">Bekijk LinkedIn →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Investors Grid */}
      <section className="pb-32 max-w-6xl mx-auto px-6 w-full">
        <div className="border-t border-brand-dark/10 pt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-dark">Onze Investeerders (&gt;35).</h2>
          <p className="text-base text-brand-dark/70 mb-12 max-w-2xl font-medium leading-relaxed">Een actieve greep uit het netwerk van koplopers die niet alleen met kapitaal, maar vooral ook met hun operationele kennis en C-level connecties bijdragen aan de groei.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Roy Spierenburg", role: "Impactinvesteerder", initial: "R", link: "https://www.linkedin.com/in/royspierenburg/" },
              { name: "Christiaan Slierendrecht", role: "Impactinvesteerder", initial: "C", link: "https://www.linkedin.com/in/christiaanslierendrecht/" },
              { name: "Evelyn Martinez", role: "Impactinvesteerder", initial: "E", link: "#" },
              { name: "Sander van Vliet", role: "Impactinvesteerder", initial: "S", link: "#" },
              { name: "Lisa de Bruin", role: "Impactinvesteerder", initial: "L", link: "#" },
              { name: "Jeroen Huisman", role: "Impactinvesteerder", initial: "J", link: "#" }
            ].map((inv, i) => (
              <a key={i} href={inv.link} target={inv.link !== "#" ? "_blank" : "_self"} rel="noreferrer" className="bg-white p-6 rounded-sm border border-brand-dark/5 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-transform h-full">
                <div className="w-16 h-16 bg-brand-dark/5 text-brand-dark font-extrabold text-xl rounded-full mb-4 border border-brand-dark/10 flex items-center justify-center">
                  {inv.initial}
                </div>
                <h3 className="font-extrabold text-sm mb-2 text-brand-dark">{inv.name}</h3>
                <p className="text-[10px] uppercase font-bold text-brand-dark/40 mb-6 flex-1 tracking-widest">{inv.role}</p>
                <span className="text-xs font-bold text-[#0077b5] border border-[#0077b5]/20 bg-[#0077b5]/5 px-3 py-1 rounded-sm w-full">LinkedIn →</span>
              </a>
            ))}

            <div className="bg-brand-dark/5 p-6 rounded-sm border border-brand-dark/10 flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-4 mt-2">
              <span className="font-bold text-sm text-brand-dark/60 uppercase tracking-widest text-center">+ Ontmoet Minstens 23 Andere Actieve Impactinvesteerders Behind Closed Doors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ for Investors */}
      <FAQSection category="investors" max={3} title="Veelgestelde Vragen voor Investeerders" />

      <Footer />
    </div>
  );
}

// VENTURE DETAIL
function VentureDetail() {
  const { pathname } = useLocation();
  const idMatch = pathname.split('/').pop();
  const v = venturesData.find(ven => ven.id === idMatch) || venturesData[0];

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      <section className="relative pt-40 pb-48 px-6 lg:px-12 bg-brand-dark text-brand-white overflow-hidden z-0">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen">
          <img src="/venture-ph.png" alt="Venture Concept Focus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Link to="/" className="inline-block text-brand-accent/80 hover:text-brand-accent text-xs font-bold uppercase tracking-widest mb-10 transition-colors">
            ← Terug naar actueel portfolio
          </Link>
          <div className="flex justify-center mb-6">
            <span className="bg-white/10 text-white font-bold px-3 py-1 text-[10px] rounded-sm border border-white/20 tracking-widest uppercase mb-4">
              Founder: {v.Founder}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight drop-shadow-lg">
            {v.result}
          </h1>
          <p className="text-xl md:text-2xl text-brand-light mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Met <strong className="text-white">{v.name}</strong> garanderen wij structurele verandering in de <span className="text-brand-accent font-bold">{v.market}</span>. {v.desc}
          </p>
        </div>
      </section>

      {/* Info Cards Overlapping Hero */}
      <section className="px-6 lg:px-12 relative z-10 -mt-20 mb-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
          <div className="flex-1 bg-white p-6 rounded-sm shadow-xl border border-brand-dark/5 flex flex-col items-center text-center">
            <span className="text-brand-accent/80 text-[10px] font-black uppercase tracking-widest mb-1.5">Actuele Status</span>
            <span className="text-lg font-extrabold text-brand-dark">{v.status}</span>
          </div>
          <div className="flex-1 bg-white p-6 rounded-sm shadow-xl border border-brand-dark/5 flex flex-col items-center text-center">
            <span className="text-brand-accent/80 text-[10px] font-black uppercase tracking-widest mb-1.5">Tractie & Groei</span>
            <span className="text-lg font-extrabold text-brand-dark">{v.traction}</span>
          </div>
          <div className="flex-1 bg-white p-6 rounded-sm shadow-xl border border-brand-dark/5 flex flex-col items-center text-center">
            <span className="text-brand-accent/80 text-[10px] font-black uppercase tracking-widest mb-1.5">{v.market} Omvang</span>
            <span className="text-lg font-extrabold text-brand-dark">{v.marketSize} (CAGR: {v.cagr})</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-brand-cream max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* De Harde Uitdaging Card */}
          <div className="bg-white p-10 lg:p-12 rounded-sm shadow-xl relative overflow-hidden flex flex-col border border-brand-dark/5 h-full">
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-red-500/5 rounded-full blur-[30px] pointer-events-none"></div>
            <div className="mb-6 relative z-10">
              <span className="inline-block bg-red-50 text-red-600 font-bold px-3 py-1.5 text-[10px] rounded-sm tracking-widest uppercase">De Harde Uitdaging</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-6 text-brand-dark leading-tight relative z-10">Waarom dit nu kraakt.</h2>
            <ul className="space-y-6 relative z-10">
              {v.problem.map((prob, i) => (
                <CrossItem key={i}>{prob}</CrossItem>
              ))}
            </ul>
          </div>

          {/* De Oplossing Card */}
          <div className="bg-white p-10 lg:p-12 rounded-sm shadow-xl relative overflow-hidden flex flex-col border border-brand-dark/5 h-full">
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-accent/15 rounded-full blur-[30px] pointer-events-none"></div>
            <div className="mb-6 relative z-10">
              <span className="inline-block bg-[#E5F7ED] text-[#2d523b] font-bold px-3 py-1.5 text-[10px] rounded-sm tracking-widest uppercase">De Oplossing</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-8 text-brand-dark leading-tight relative z-10">{v.name} verhelpt dit fundamenteel.</h2>
            <ul className="space-y-6 relative z-10">
              {v.solution.map((sol, i) => (
                <CheckItem key={i}>{sol}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 lg:px-12 bg-white relative z-10 w-full overflow-hidden shadow-2xl rounded-t-[3rem] border-t border-brand-dark/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">

          {/* Founder Circle Image Frame */}
          <div className="w-full md:w-1/3 relative z-10 flex justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-brand-cream border-4 border-white rounded-full shadow-2xl relative overflow-hidden flex items-center justify-center p-2 group">
              <div className="w-full h-full rounded-full overflow-hidden bg-brand-dark flex items-center justify-center relative">
                <img src={v.photoUrl || "/hero-bg.png"} alt={v.Founder} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${v.photoUrl ? 'opacity-100 mix-blend-normal' : 'opacity-60 mix-blend-luminosity'}`} />

                {!v.photoUrl && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent pointer-events-none"></div>
                    <span className="absolute text-5xl lg:text-[6rem] font-serif font-black text-brand-light mix-blend-overlay opacity-80 pointer-events-none drop-shadow-2xl">{(v.Founder || " ").charAt(0)}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Founder Quote */}
          <div className="w-full md:w-2/3 relative z-10">
            <span className="relative z-10 inline-block bg-brand-dark/5 text-brand-dark font-bold px-4 py-2 text-[10px] rounded-sm tracking-widest uppercase mb-6 shadow-sm border border-brand-dark/10">
              De drijvende kracht achter {v.name}
            </span>
            <div className="relative z-10">
              <svg className="w-16 h-16 text-brand-accent/30 absolute -top-8 -left-8 -z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-10 leading-[1.3] relative z-10 italic">
                "{v.founderQuote}"
              </h2>
            </div>
            <div className="relative z-10 flex flex-col justify-start">
              <p className="text-xl text-brand-dark font-extrabold uppercase tracking-widest mb-1">{v.Founder}</p>
              <p className="text-sm font-semibold text-[#386b4a]">Oprichter</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-brand-dark/5 text-center">
            <h3 className="text-2xl font-extrabold text-brand-dark mb-6">Interesse in {v.name}?</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/investors" className="bg-brand-dark text-white px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-brand-accent hover:text-brand-dark transition-all shadow-lg w-full sm:w-auto">Investor Deck Aanvragen</Link>
                <Link to="/faq" className="text-xs font-black uppercase tracking-widest text-brand-dark/40 hover:text-brand-accent transition-colors">Bekijk FAQ →</Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// FAQ PAGE
function FAQPage() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />
      <section className="bg-brand-dark text-white py-32 px-6 lg:px-12 text-center pt-40">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Veelgestelde <span className="text-brand-accent">Vragen.</span></h1>
        <p className="text-lg text-brand-light/70 max-w-2xl mx-auto font-medium">Alles wat je moet weten over de Human Venture Studio, onze portfolio, financiering en hoe we samen impact maken in de fysieke transitie.</p>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto w-full flex-grow">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-8 flex items-center gap-4">
               <span className="w-10 h-1 bg-brand-accent"></span> Voor Investeerders
            </h2>
            <FAQAccordion items={faqData.investors} />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-8 flex items-center gap-4">
               <span className="w-10 h-1 bg-brand-accent"></span> Voor Ondernemers
            </h2>
            <FAQAccordion items={faqData.entrepreneurs} />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-8 flex items-center gap-4">
               <span className="w-10 h-1 bg-brand-accent"></span> Over Onze Portfolio
            </h2>
            <FAQAccordion items={faqData.portfolio} />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-8 flex items-center gap-4">
               <span className="w-10 h-1 bg-brand-accent"></span> Algemene Vragen
            </h2>
            <FAQAccordion items={faqData.general} />
          </div>
        </div>

        <div className="mt-24 p-12 bg-white rounded-sm border border-brand-dark/5 text-center">
           <h3 className="text-2xl font-extrabold text-brand-dark mb-4">Vraag nog niet beantwoord?</h3>
           <p className="text-brand-dark/60 mb-8">Stuur ons direct een bericht of plan een korte kennismaking in.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-dark text-white px-10 py-4 font-bold rounded-sm hover:bg-brand-accent hover:text-brand-dark transition-all shadow-lg">Plan Intake</button>
              <button className="bg-brand-cream text-brand-dark border border-brand-dark/10 px-10 py-4 font-bold rounded-sm hover:bg-white transition-all">Direct Mailen</button>
           </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ABOUT PAGE
function AboutPage() {
  const managementTeam = [
    { name: "Akke Pennin", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/akke-pennin-1ab5136a/" },
    { name: "Winie van Oorschot", role: "Co-founder", linkedin: "https://www.linkedin.com/in/winie-van-oorschot-8a854915/" },
    { name: "Frank Ponsioen", role: "Co-founder", linkedin: "https://www.linkedin.com/in/frankponsioen/" },
    { name: "Olivier Ponsioen", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/olivierponsioen/" },
    { name: "Sebo Havinga", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/sebohavinga/" }
  ];

  const investors = [
    { name: "Roy Spierenburg", linkedin: "https://www.linkedin.com/in/royspierenburg/" },
    { name: "Christiaan Slierendrecht", linkedin: "https://www.linkedin.com/in/christiaanslierendrecht/" },
    { name: "Evelyn Martinez", linkedin: "#" },
    { name: "Sander van Vliet", linkedin: "#" },
    { name: "Lisa de Bruin", linkedin: "#" },
    { name: "Jeroen Huisman", linkedin: "#" }
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 px-6 lg:px-12 relative overflow-hidden text-center pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-brand-accent/20 text-brand-accent font-bold px-4 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-8">
            De mensen achter Huddles
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Over <span className="text-brand-accent">Ons.</span></h1>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Achter elke succesvolle venture staat een team dat de transitie niet alleen financiert, maar actief meebouwt. Ontmoet de mensen die de fysieke economie versnellen.
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-1 bg-brand-accent"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Leiderschap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Management Team.</h2>
          <p className="text-base text-brand-dark/70 max-w-2xl font-medium leading-relaxed">
            Het kernteam dat dagelijks operationeel meebouwt aan onze ventures en de strategische koers van Huddles Venture Studios bepaalt.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {managementTeam.map((member, idx) => (
            <a href={member.linkedin} target="_blank" rel="noreferrer" key={idx} className="bg-white p-8 rounded-sm shadow-lg border border-brand-dark/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center h-full group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-24 h-24 bg-brand-dark/5 rounded-full mb-6 border-2 border-brand-dark/10 flex items-center justify-center font-bold text-3xl text-brand-dark group-hover:border-brand-accent/40 transition-colors">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-extrabold text-base mb-2 text-brand-dark">{member.name}</h3>
              <p className="text-[10px] uppercase font-bold text-brand-accent/80 mb-6 flex-1 leading-relaxed tracking-widest">{member.role}</p>
              <span className="text-xs font-bold text-[#0077b5] border border-[#0077b5]/20 bg-[#0077b5]/5 px-4 py-1.5 rounded-sm w-full hover:bg-[#0077b5]/10 transition-colors">LinkedIn →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Impactinvesteerders */}
      <section className="pb-32 px-6 lg:px-12 max-w-6xl mx-auto w-full">
        <div className="border-t border-brand-dark/10 pt-20">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-1 bg-brand-accent"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-dark">Onze Impactinvesteerders.</h2>
            <p className="text-base text-brand-dark/70 mb-0 max-w-2xl font-medium leading-relaxed">
              Een actieve groep koplopers die niet alleen met kapitaal, maar vooral met hun operationele kennis en strategisch netwerk bijdragen aan de groei van de portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {investors.map((inv, i) => (
              <a key={i} href={inv.linkedin} target={inv.linkedin !== "#" ? "_blank" : "_self"} rel="noreferrer" className="bg-white p-6 rounded-sm border border-brand-dark/5 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-transform h-full group">
                <div className="w-16 h-16 bg-brand-dark/5 text-brand-dark font-extrabold text-xl rounded-full mb-4 border border-brand-dark/10 flex items-center justify-center group-hover:border-brand-accent/40 transition-colors">
                  {inv.name.charAt(0)}
                </div>
                <h3 className="font-extrabold text-sm mb-2 text-brand-dark">{inv.name}</h3>
                <p className="text-[10px] uppercase font-bold text-brand-dark/40 mb-6 flex-1 tracking-widest">Impactinvesteerder</p>
                <span className="text-xs font-bold text-[#0077b5] border border-[#0077b5]/20 bg-[#0077b5]/5 px-3 py-1 rounded-sm w-full">LinkedIn →</span>
              </a>
            ))}

            <div className="bg-brand-dark/5 p-6 rounded-sm border border-brand-dark/10 flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-4 mt-2">
              <span className="font-bold text-sm text-brand-dark/60 uppercase tracking-widest text-center">+ Ontmoet Minstens 23 Andere Actieve Impactinvesteerders Behind Closed Doors</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-4xl mx-auto p-12 bg-brand-dark rounded-sm border border-brand-accent/20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">Deel uitmaken van het team?</h3>
          <p className="text-brand-light/80 mb-10 max-w-xl mx-auto text-base font-medium leading-relaxed relative z-10">
            Of je nu wilt investeren als impactinvesteerder of als founder een venture wilt lanceren — we horen graag van je.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link to="/investors" className="bg-brand-accent text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-transform w-full sm:w-auto shadow-lg shadow-brand-accent/20">
              Join Community
            </Link>
            <Link to="/ondernemers" className="bg-white/10 text-white border border-white/20 px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-brand-dark transition-all w-full sm:w-auto">
              Pitch Venture
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// PORTFOLIO PAGE
function PortfolioPage() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 px-6 lg:px-12 relative overflow-hidden text-center pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-brand-accent/20 text-brand-accent font-bold px-4 py-1.5 text-[10px] rounded-sm tracking-widest uppercase mb-8">
            Impact Ventures Fund I
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Onze <span className="text-brand-accent">Portfolio.</span></h1>
          <p className="text-lg text-brand-light/80 max-w-2xl mx-auto font-medium leading-relaxed">
            9 ventures die elk een fundamenteel systeemprobleem aanpakken in de fysieke transitie. Van circulair bouwen tot de energietransitie.
          </p>
        </div>
      </section>

      {/* Portfolio Overzichtstabel */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-1 bg-brand-accent"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Venture Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Portfolio Overzicht.</h2>
          <p className="text-base text-brand-dark/70 max-w-2xl font-medium leading-relaxed">
            Een compleet overzicht van al onze deelnemingen, hun marktpositie en actuele tractie.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm shadow-xl border border-brand-dark/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Venture</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest hidden md:table-cell">Locatie</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Markt</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest hidden lg:table-cell">Marktomvang</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest hidden md:table-cell">Founder(s)</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Status</th>
                <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest hidden lg:table-cell">Tractie</th>
              </tr>
            </thead>
            <tbody>
              {venturesData.map((v, i) => (
                <tr key={v.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/50'} hover:bg-brand-accent/5 transition-colors`}>
                  <td className="px-6 py-4">
                    <Link to={`/venture/${v.id}`} className="font-extrabold text-brand-dark hover:text-brand-accent transition-colors">
                      {v.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-brand-dark/60 font-medium">{v.location}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#386b4a] bg-[#E5F7ED] px-2 py-1 rounded-sm">{v.market}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm font-bold text-brand-dark">{v.marketSize}</span>
                    <span className="text-[10px] text-brand-dark/40 ml-1">CAGR {v.cagr}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-brand-dark/70 font-medium">{v.Founder}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-brand-dark">{v.status}</span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-xs font-medium text-brand-dark/60">{v.traction}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Venture Cards Grid */}
      <section className="pb-32 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="border-t border-brand-dark/10 pt-20">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-1 bg-brand-accent"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Deep Dive</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Ontdek Elke Venture.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venturesData.map(v => (
              <Link to={`/venture/${v.id}`} key={v.id} className="bg-white p-8 rounded-sm shadow-xl border border-brand-dark/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-extrabold text-brand-dark group-hover:text-[#386b4a] transition-colors">{v.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#386b4a] bg-[#E5F7ED] px-2 py-1 rounded-sm border border-brand-accent/30 shrink-0">{v.market}</span>
                </div>
                <p className="text-xs text-brand-dark/40 font-bold mb-4">{v.location} • {v.Founder}</p>
                <p className="text-sm font-medium text-brand-dark/70 mb-8 flex-1 leading-relaxed">{v.desc}</p>

                <div className="bg-brand-cream p-4 rounded-sm border-l-2 border-brand-accent flex justify-between items-center">
                  <div>
                    <span className="block text-brand-dark/50 text-[10px] font-bold uppercase tracking-widest mb-1">Status</span>
                    <span className="text-xs font-extrabold text-brand-dark">{v.status}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-brand-dark/50 text-[10px] font-bold uppercase tracking-widest mb-1">Tractie</span>
                    <span className="text-xs font-extrabold text-brand-dark">{v.traction}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-4xl mx-auto p-12 bg-brand-dark rounded-sm border border-brand-accent/20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">Investeren in de fysieke transitie?</h3>
          <p className="text-brand-light/80 mb-10 max-w-xl mx-auto text-base font-medium leading-relaxed relative z-10">
            Word onderdeel van ons netwerk van 35+ impactinvesteerders en krijg directe toegang tot deze ventures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link to="/investors" className="bg-brand-accent text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-transform w-full sm:w-auto shadow-lg shadow-brand-accent/20">
              Join Community
            </Link>
            <Link to="/ondernemers" className="bg-white/10 text-white border border-white/20 px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:text-brand-dark transition-all w-full sm:w-auto">
              Pitch Venture
            </Link>
          </div>
        </div>
      </section>

      <FAQSection category="portfolio" max={3} title="Veelgestelde Vragen over de Portfolio" />

      <Footer />
    </div>
  );
}

// HOME
function Home() {
  return (
    <>
      <Navbar />
      <TemptSection />
      <InfluenceSection />
      <PersuadeSection />
      <FAQSection max={3} title="Meer Weten over Huddles?" />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-cream text-brand-dark scroll-smooth selection:bg-brand-accent selection:text-brand-dark font-sans flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venture/:id" element={<VentureDetail />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/ondernemers" element={<EntrepreneursPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
