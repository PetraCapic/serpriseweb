---
title: "Kako spojiti Claude Code s Google Tag Managerom, korak po korak"
description: "Claude mijenja kod koji šalje događaje i oznake u Tag Manageru u istom zadatku. Ovlasti, koraci i kako smo objavili 9 verzija spremnika s opisom svake."
date: 2026-11-01
image: /blog/claude-code-google-tag-manager/naslovna.png
imageAlt: "Vodič: kako spojiti Claude Code s Google Tag Managerom"
---

Najčešći problem s praćenjem konverzija je raskorak između koda i Tag Managera. Programer promijeni formu, a oznaka u Tag Manageru i dalje čeka stari događaj. Kad Claude Code ima pristup i kodu i Tag Manageru, oboje mijenja u istom zadatku.

Ovo je treći od četiri vodiča uz naš [case study o Claude Codeu na portalu za osmrtnice](/blog/claude-code-case-study-osmrtnice/). Servisni račun iz [vodiča za Search Console](/blog/claude-code-google-search-console/) koristite i ovdje.

## Korak 1: uključite Tag Manager API

U Google Cloud projektu servisnog računa, u "APIs & Services", uključite **Tag Manager API**.

## Korak 2: dodajte servisni račun u Tag Manager

1. U Tag Manageru otvorite "Admin", pa "User Management" na razini računa.
2. Dodajte e-mail servisnog računa.
3. Za spremnik odaberite ovlast:
   - **Read** ako Claude samo čita postavke,
   - **Edit** ako priprema promjene u radnom prostoru,
   - **Publish** ako smije i objaviti verziju.

Mi koristimo Publish, ali uz pravilo da Claude svaku verziju objavljuje s imenom i opisom, i samo nakon što je promjena u kodu spojena.

## Korak 3: dogovorite kako se šalju događaji

Kod gura događaje u dataLayer, Tag Manager ih čita i šalje dalje u GA4, Metu i Google Ads. Na portalu za osmrtnice to izgleda ovako:

```js
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'begin_checkout',
  ecommerce: { currency: 'EUR', value: 39, items: [{ item_id: 'digitalni-memorijal' }] }
});
```

U Tag Manageru za svaki takav događaj postoji okidač "Custom Event" i oznaka koja ga šalje dalje. Za grupe događaja koristimo jedan okidač s regexom, pa novi događaj iz iste grupe ne traži novu oznaku.

![Tok događaja od dataLayer.push u kodu preko okidača u Tag Manageru do oznaka za GA4 i Google Ads, stvarni nazivi iz spremnika](/blog/claude-code-google-tag-manager/gtm-tok.png)

## Korak 4: kako Claude mijenja spremnik

Preko API-ja Claude radi isto što biste vi radili u sučelju:

1. napravi radni prostor (workspace),
2. doda ili promijeni oznake, okidače i varijable,
3. napravi verziju s imenom i opisom,
4. objavi je.

Od 16. listopada na portalu je tako objavljeno 9 verzija:

![Povijest verzija Tag Manager spremnika od v7 do v15 s datumima i opisima](/blog/claude-code-google-tag-manager/gtm-verzije.png)

Opisi su važni. Kad za mjesec dana netko pita zašto se konverzije razlikuju, u povijesti verzija piše što je promijenjeno i zašto.

## Na što paziti

- **Dupli događaji.** Ako isti događaj šalje i kod i oznaka u Tag Manageru, brojat će se dvaput. Kod nas se to dogodilo s Meta StartMemorial: oznaku smo pauzirali, vratili jer je kampanja optimizirala na nju, pa opet pauzirali kad je kod počeo slati ispravan događaj.
- **Pregled prije objave.** Za veće promjene tražite od Claudea da napravi verziju bez objave, pa je pogledajte u Preview načinu.
- **Pristanak na kolačiće.** Oznake moraju poštovati pristanak. Kod nas kod ne gura događaje bez pristanka, pa Tag Manager ni nema što poslati.

## Sljedeći korak

Meta događaji idu i iz preglednika i sa servera. Kako to spojiti bez duplih konverzija, opisano je u [vodiču za Meta Pixel, Conversions API i Meta Ads](/blog/claude-code-meta-pixel-capi/).
