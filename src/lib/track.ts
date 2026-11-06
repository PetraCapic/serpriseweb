// Događaj za GTM (GA4 generate_lead i Meta Lead). Ako slijedi prelazak na drugu stranicu,
// pričeka da GTM obradi događaj (najviše 800 ms), da se pogodak ne izgubi.
export function trackLead(source: string, extra: Record<string, unknown> = {}, then?: () => void) {
  const w = window as unknown as { dataLayer?: unknown[]; google_tag_manager?: unknown };
  w.dataLayer = w.dataLayer || [];
  if (!then) {
    w.dataLayer.push({ event: 'generate_lead', lead_source: source, ...extra });
    return;
  }
  let done = false;
  const go = () => {
    if (done) return;
    done = true;
    then();
  };
  w.dataLayer.push({ event: 'generate_lead', lead_source: source, ...extra, eventCallback: go, eventTimeout: 800 });
  // Bez učitanog GTM-a (blokator) eventCallback se nikad ne pozove.
  setTimeout(go, w.google_tag_manager ? 900 : 0);
}
