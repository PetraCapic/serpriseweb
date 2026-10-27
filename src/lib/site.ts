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

export const nav = [
  { href: '/ai-vidljivost/', label: 'AI vidljivost' },
  { href: '/link-building-digitalni-pr/', label: 'Link building i PR' },
  { href: '/o-nama/', label: 'O nama' },
  { href: '/kontakt/', label: 'Kontakt' },
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
export const clients: { name: string; logo?: string }[] = [
  { name: 'UNIQA osiguranje' },
  { name: 'Favbet' },
  { name: 'Namještaj Mima' },
  { name: 'Solin građa' },
  { name: 'Zagreb montaža' },
  { name: 'Croatia Property Sales' },
  { name: 'Villsy' },
  { name: 'MyLuxoria' },
  { name: 'Yachts Croatia' },
  { name: 'Croatia Yachts Charter' },
  { name: 'Kruna mode' },
  { name: 'Collagen Boost' },
  { name: 'Hedera' },
  { name: 'Apipet' },
];
