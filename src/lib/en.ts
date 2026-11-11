// English (UK / US / EU) version of the site, served under /en/.
import { clients } from './site';

export const en = {
  description:
    'SERPRise is an EU-based white-label link building and digital PR partner for agencies, marketing teams and in-house SEO teams. Link building, LLM visibility and outreach across 15,000+ sites in the UK, US, Germany and other EU markets.',
  cta: 'Get a free link gap audit',
};

export const enNav = [
  { href: '/en/link-building/', label: 'Link building & PR' },
  { href: '/en/white-label-link-building/', label: 'White label' },
  { href: '/en/llm-visibility/', label: 'LLM visibility' },
  { href: '/en/publishers/', label: 'Publishers' },
  { href: '/en/blog/', label: 'Blog' },
  { href: '/en/contact/', label: 'Contact' },
];

// Croatian page ↔ English page, used for hreflang and the language switch.
export const alternates: [hr: string, en: string][] = [
  ['/', '/en/'],
  ['/link-building-digitalni-pr/', '/en/link-building/'],
  ['/ai-vidljivost/', '/en/llm-visibility/'],
  ['/kontakt/', '/en/contact/'],
  ['/blog/', '/en/blog/'],
];

export const altFor = (path: string) => {
  const p = path.endsWith('/') ? path : `${path}/`;
  const pair = alternates.find(([hr, e]) => hr === p || e === p);
  return pair ? { hr: pair[0], en: pair[1] } : null;
};

// Markets and languages we cover, shown on several English pages.
export const markets = [
  { name: 'UK', cc: 'gb' }, { name: 'US', cc: 'us' }, { name: 'Germany', cc: 'de' }, { name: 'Austria', cc: 'at' },
  { name: 'Switzerland', cc: 'ch' }, { name: 'France', cc: 'fr' }, { name: 'Spain', cc: 'es' }, { name: 'Italy', cc: 'it' },
  { name: 'Poland', cc: 'pl' }, { name: 'Sweden', cc: 'se' }, { name: 'Norway', cc: 'no' }, { name: 'Denmark', cc: 'dk' },
  { name: 'Finland', cc: 'fi' }, { name: 'Czechia', cc: 'cz' }, { name: 'Romania', cc: 'ro' }, { name: 'Hungary', cc: 'hu' },
  { name: 'Estonia', cc: 'ee' }, { name: 'Croatia & Balkans', cc: 'hr' },
];
export const languages = ['English', 'German', 'French', 'Spanish', 'Italian', 'Dutch', 'Polish', 'Croatian', '+ other EU languages'];

// Client strip for international visitors: brands known outside Croatia first.
const enOrder = [
  'WhitePress', 'Bazoom', 'Collaborator', 'Favbet', 'UNIQA osiguranje', 'Garden Buildings Direct', 'Crafted Beds', 'LI.FI', 'ZBD', 'Jumper.xyz',
  'Juicefast', 'Colak Franchise Consulting Group', 'Polleo Sport', 'Condor Yachting', 'Cradle Tonic', 'Rocketwheel', 'Symbiosis', 'Acelerar',
];
export const enClients = [
  ...enOrder.map((n) => clients.find((c) => c.name === n)).filter((c): c is (typeof clients)[number] => Boolean(c)),
  ...clients.filter((c) => !enOrder.includes(c.name)),
];

export const enServiceLabels: Record<string, string> = {
  link_building_pr: 'Link building & digital PR',
  ai_vidljivost: 'LLM visibility (AI search)',
  oboje: 'Both',
  nisam_siguran: 'Not sure yet',
};

export const enBudgetLabels: Record<string, string> = {
  do_1000: 'Up to €1,000 / month',
  '1000_3000': '€1,000 – €3,000 / month',
  '3000_plus': '€3,000+ / month',
  ne_znam: 'Not sure yet',
};
