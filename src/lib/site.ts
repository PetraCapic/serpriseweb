// Središnji podaci o agenciji.
export const site = {
  name: 'SERPRise',
  legalName: 'SERP Rise d.o.o.',
  url: 'https://serprise.agency',
  email: 'jure@serprise.agency',
  phone: '+385 95 817 3172',
  address: 'Put Drage 25, 22000 Žaborić, Hrvatska',
  oib: '02384979518',
  linkedin: 'https://www.linkedin.com/company/72434172/',
  instagram: 'https://www.instagram.com/serprise.agency/',
  description:
    'SERPRise je hrvatska agencija za AI vidljivost (LLM optimizaciju) te link building i digitalni PR. Pomažemo brendovima da ih pronađu Google, ChatGPT, Gemini i Perplexity.',
};

export const adminUrl = 'https://admin.serprise.agency/';

export const nav = [
  { href: '/ai-vidljivost/', label: 'AI vidljivost' },
  { href: '/link-building-digitalni-pr/', label: 'Link building i PR' },
  { href: '/portali/', label: 'Portali' },
  { href: '/o-nama/', label: 'O nama' },
  { href: '/kontakt/', label: 'Kontakt' },
];

// Tim za stranicu O nama. photo je u public/tim/ (kvadrat, npr. 480x480).
export const team: { name: string; role: string; bio: string; linkedin?: string; photo?: string }[] = [
  {
    name: 'Jure Kljajić',
    role: 'Osnivač i SEO strateg',
    bio: 'Jure gradi poveznice za brendove kojima pozicije na Googleu moraju donositi prihod. Na LinkedInu ga prati više od 11.000 ljudi s kojima dijeli iskustva iz link buildinga i AI pretraživanja. Klijentima je prva osoba za kontakt i postavlja strategiju svake kampanje.',
    linkedin: 'https://www.linkedin.com/in/jurekljajic/',
  },
  {
    name: 'Petra Capić',
    role: 'Suosnivačica, odnosi s portalima',
    bio: 'Petra je s nama od prvog dana. Dogovara teme s urednicima portala, prati rokove objave i pazi da svaki članak izgleda jednako dobro kao što radi za klijenta.',
    linkedin: 'https://www.linkedin.com/in/petra-capi%C4%87-600b13196/',
  },
  {
    name: 'Nikola Kljajić',
    role: 'Link building i outreach',
    bio: 'Nikola svakodnevno istražuje portale i prilike za objave. Prati autoritet, promet i kvalitetu svakog portala s naše liste, pa klijentima predlažemo samo mjesta koja stvarno donose vrijednost.',
    linkedin: 'https://www.linkedin.com/in/nikola-kljaji%C4%87-b787271ba/',
  },
];

export const serviceLabels: Record<string, string> = {
  ai_vidljivost: 'AI vidljivost (LLM optimizacija)',
  link_building_pr: 'Link building i digitalni PR',
  oboje: 'Oboje',
  nisam_siguran: 'Nisam siguran/na',
};

export const budgetLabels: Record<string, string> = {
  do_1000: 'do 1.000 € / mj.',
  '1000_3000': '1.000 – 3.000 € / mj.',
  '3000_plus': '3.000 € + / mj.',
  ne_znam: 'Još ne znam',
};

// Klijenti za "Vjeruju nam" traku. Dodaj `logo: '/klijenti/ime.svg'` kad logo bude spreman.
// Logotipi su u public/klijenti/. width i height ujednačuju vizualnu veličinu (široki logotipi su niži).
export const clients: { name: string; logo?: string; width?: number; height?: number }[] = [
  { name: 'UNIQA osiguranje', logo: '/klijenti/uniqa.png', width: 66, height: 51 },
  { name: 'WhitePress', logo: '/klijenti/whitepress.png', width: 132, height: 25 },
  { name: 'Favbet', logo: '/klijenti/favbet.png', width: 153, height: 22 },
  { name: 'Bazoom', logo: '/klijenti/bazoom.png', width: 134, height: 25 },
  { name: 'PSK', logo: '/klijenti/psk.png', width: 100, height: 34 },
  { name: 'Collaborator', logo: '/klijenti/collaborator.png', width: 147, height: 23 },
  { name: 'Namještaj Mima', logo: '/klijenti/namjestaj-mima.png', width: 84, height: 40 },
  { name: 'Lequal', logo: '/klijenti/lequal.png', width: 104, height: 32 },
  { name: 'Solin građa', logo: '/klijenti/solin-gradja.png', width: 144, height: 24 },
  { name: 'Zagreb montaža', logo: '/klijenti/zagreb-montaza.png', width: 152, height: 22 },
  { name: 'Croatia Property Sales', logo: '/klijenti/croatia-property-sales.png', width: 107, height: 32 },
  { name: 'Villsy', logo: '/klijenti/villsy.png', width: 104, height: 33 },
  { name: 'MyLuxoria' },
  { name: 'Yachts Croatia', logo: '/klijenti/yachts-croatia.png', width: 101, height: 34 },
  { name: 'Croatia Yachts Charter', logo: '/klijenti/croatia-yachts-charter.png', width: 47, height: 52 },
  { name: 'Kruna mode', logo: '/klijenti/kruna-mode.png', width: 52, height: 52 },
  { name: 'Polleo Sport', logo: '/klijenti/polleo-sport.png', width: 65, height: 51 },
  { name: 'SomMar Adria', logo: '/klijenti/sommar-adria.png', width: 110, height: 30 },
  { name: 'Hedera', logo: '/klijenti/hedera.png', width: 137, height: 25 },
  { name: 'Apipet', logo: '/klijenti/apipet.png', width: 102, height: 33 },
  { name: 'Juicefast', logo: '/klijenti/juicefast.png', width: 104, height: 33 },
  { name: 'Total Croatia News', logo: '/klijenti/total-croatia-news.png', width: 87, height: 39 },
  { name: 'Croatia Revealed', logo: '/klijenti/croatia-revealed.png', width: 64, height: 52 },
  { name: 'Terra Dalmatica', logo: '/klijenti/terra-dalmatica.png', width: 170, height: 19 },
  { name: 'Collabiomè', logo: '/klijenti/collabiome.png', width: 82, height: 40 },
  { name: 'Kati Care', logo: '/klijenti/kati-care.png', width: 123, height: 27 },
  { name: 'Factory', logo: '/klijenti/factory.png', width: 177, height: 19 },
  { name: 'ZBD', logo: '/klijenti/zbd.png', width: 89, height: 37 },
  { name: 'LI.FI', logo: '/klijenti/lifi.png', width: 94, height: 35 },
  { name: 'Acelerar', logo: '/klijenti/acelerar.png', width: 153, height: 22 },
  { name: 'Bobbin', logo: '/klijenti/bobbin.png', width: 120, height: 28 },
  { name: 'Korto', logo: '/klijenti/korto.png', width: 100, height: 33 },
  { name: 'Garden Buildings Direct', logo: '/klijenti/garden-buildings-direct.png', width: 143, height: 23 },
  { name: 'Crafted Beds', logo: '/klijenti/crafted-beds.png', width: 96, height: 34 },
  { name: 'Cradle Tonic', logo: '/klijenti/cradle-tonic.png', width: 170, height: 19 },
  { name: 'Condor Yachting', logo: '/klijenti/condor-yachting.png', width: 104, height: 32 },
  { name: 'Ortho Dental', logo: '/klijenti/ortho-dental.png', width: 70, height: 47 },
  { name: 'Symbiosis', logo: '/klijenti/symbiosis.png', width: 108, height: 31 },
  { name: 'Rocketwheel', logo: '/klijenti/rocketwheel.png', width: 157, height: 21 },
  { name: 'Colak Franchise Consulting Group', logo: '/klijenti/cfcg.png', width: 175, height: 19 },
];
