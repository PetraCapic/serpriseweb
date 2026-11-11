---
title: "Metoda: kako vidjeti što ChatGPT pretražuje i napisati stranicu koju će citirati"
description: "Kako u Chromeu vidjeti pretrage koje ChatGPT pokrene u pozadini, što iz njih pročitati i kako od njih napraviti stranicu koju AI citira. Korak po korak."
date: 2026-11-01
translation: chatgpt-searches
image: /blog/chatgpt-pretrage/naslovna.png
imageAlt: "Kupac pita jedno, ChatGPT pretražuje nešto drugo"
---

Kad kupac upiše u ChatGPT "Preporuči mi SEO agenciju u Zagrebu", ChatGPT ne pretražuje tu rečenicu. Rastavi je na nekoliko kraćih pretraga, pošalje ih tražilici i iz rezultata složi odgovor. Te pretrage su ključne riječi za koje vaša stranica mora postojati. Ako ih znate, znate što napisati. Vidjeti ih možete za 2 minute, besplatno, u Chromeu.

U našem [testu 35 hrvatskih pitanja](/blog/chatgpt-citati-hrvatska/) baš su te pretrage objasnile većinu rezultata. Opća pitanja ChatGPT je pretraživao na engleskom, a čim je pitanje imalo grad, "Hrvatska" ili "cijena", pretraživao je na hrvatskom i citirao hrvatske stranice.

![Jedno pitanje kupca ChatGPT rastavi na više kraćih pretraga](/blog/chatgpt-pretrage/fanout.png)

## Prije nego počnete

- **Uključite Temporary chat** (gornji desni kut) ili koristite ChatGPT bez prijave. Tako memorija i raniji razgovori ne mijenjaju pretrage. Velika većina ljudi koristi besplatnu verziju, pa je to i najbliže onome što vidi vaš kupac.
- **Provjerite da je pretraga stvarno pokrenuta.** Odgovor mora imati izvore (linkove ili gumb "Izvori"). Ako ih nema, ChatGPT je odgovorio iz pamćenja i nema pretraga koje biste mogli pročitati. Na kraj pitanja dodajte "pretraži web".
- **Pitajte kao kupac, s gradom ili zemljom.** Pitanje bez lokalnog dijela ChatGPT često prevede i pretraži na engleskom. Tada se vaša hrvatska stranica natječe s cijelim engleskim internetom.
- **Modeli koji "razmišljaju" pretražuju više puta.** Ako želite vidjeti sve kutove teme, isto pitanje postavite i u modelu s produženim razmišljanjem. Za sliku onoga što vidi većina kupaca dovoljan je zadani model.

## Kako vidjeti pretrage u Chromeu

![Gdje u Chromeu, u kartici Network, vidite pretrage koje je ChatGPT pokrenuo](/blog/chatgpt-pretrage/devtools.png)

1) Postavite pitanje i pričekajte da odgovor završi.
2) U adresnoj traci kopirajte sve iza `/c/`. To je ID razgovora, npr. `6720abcd-1234-...`.
3) Desni klik bilo gdje na stranici, pa **Inspect**. Otvorite karticu **Network**.
4) U polje **Filter** zalijepite ID razgovora.
5) Osvježite stranicu (F5). Na popisu se pojavi zahtjev čije je ime ID razgovora, s ikonom vitičastih zagrada `{ }`. Kliknite ga.
6) Otvorite karticu **Response**, pritisnite Ctrl+F (na Macu Cmd+F) i potražite `search_queries`. Ako ga nema, potražite samo `queries`.
7) Ispod toga su pretrage koje je ChatGPT poslao tražilici. Kopirajte ih.

Dok ste u istom prozoru, pritisnite Ctrl+F još jednom i upišite svoju domenu. Ako je nađete u odgovoru, a u ChatGPT-ovom odgovoru vas nema među izvorima, znači da je ChatGPT vašu stranicu otvorio i pročitao, ali je nije citirao. Problem tada nije u tome da vas ne može naći, nego u tome što na stranici piše.

NAPOMENA: ChatGPT povremeno mijenja sučelje, pa se naziv polja može promijeniti. Postupak s karticom Network ostaje isti. Postoje i besplatni dodaci za Chrome koji pretrage prikazuju automatski, ali ručni način radi uvijek i ne traži pristup vašem računu.

## Što pročitati iz pretraga

Pretraga vam ne kaže samo ključnu riječ. Riječi koje ChatGPT doda govore vam kakvu stranicu traži.

| U pretrazi piše | Što to znači | Što provjeriti na svom webu |
| --- | --- | --- |
| godina, npr. "2026" | Traži svježe informacije | Je li datum ažuriranja vidljiv na stranici i je li sadržaj stvarno ažuran |
| "cijena", "price", "koliko košta" | Traži konkretne iznose | Imate li cijene u eurima na webu. Ako ih nemate, citirat će tuđi cjenik |
| "official", "službena stranica" | Traži izvor iz prve ruke | Piše li na vašoj naslovnici jasno tko ste i što radite, u prvoj rečenici |
| "recenzije", "reviews", "iskustva" | Ne vjeruje stranici firme, traži treće | Imate li recenzije na Googleu i direktorijima koji se pojavljuju u izvorima |
| `site:vasadomena.hr` | Ide ravno na vaš web | Postoji li stranica koja odgovara baš na to pitanje |
| `site:` neke druge domene | Toj domeni vjeruje za tu temu | Jeste li na toj stranici (direktorij, portal, lista) |
| imena firmi koje niste spomenuli | Imao je uži izbor prije pretrage | Jeste li u tim imenima. Ako niste, ne natječete se samo stranicom nego time koliko vas drugi spominju |
| pretraga na engleskom | Pitanje nije imalo lokalni dio | Isplati li se uopće ciljati tu temu ili je bolje ciljati pitanja s gradom i cijenom |

Jedna stvar iz tablice zaslužuje posebnu provjeru. Kad ChatGPT u pretrazi koristi `site:` s vašim imenom, pogledajte je li domena točna. Manje poznatim brendovima zna pogoditi krivu domenu, npr. .com umjesto .hr. Ako vam se to događa, u naslov i opis naslovnice stavite puni naziv firme i djelatnost, a isti naziv koristite na svim profilima.

## Iste pretrage vidite i u Search Consoleu

Pretrage koje AI alati šalju Googleu ostaju zabilježene u vašem Search Consoleu, i to se može filtrirati.

1) Search Console, **Performance**, **Search results**.
2) **+ Add filter**, **Query**, **Custom (regex)**.
3) Upišite `site:` i potvrdite.

Upiti koji počinju sa `site:vasadomena.hr` i imaju puno prikaza, a gotovo nijedan klik, uglavnom nisu ljudi. To su AI alati i drugi botovi koji pretražuju vaš web. Riječi iza `site:` pokazuju što su tražili kod vas. Ako se ista tema ponavlja, a nemate stranicu za nju, to je prva stranica koju trebate napisati.

## Od 1 pitanja do popisa pretraga

Jedno pitanje daje nekoliko pretraga i to je premalo da vidite uzorak.

1) Napišite 10 pitanja koja postavljaju vaši kupci. Gotov popis po vrstama (preporuka, cijena, usporedba, problem) je u članku [Provjera u 20 pitanja](/blog/provjera-ai-vidljivosti/).
2) Svako pitanje postavite u novom privremenom razgovoru i izvucite pretrage.
3) U Google Sheet upišite: stupac A pitanje, stupac B pretraga, stupac C citira li vas ChatGPT (da/ne).
4) Sortirajte stupac B. Pretraga koja se pojavljuje kod više različitih pitanja je prioritet.

## Imate li već stranicu za tu pretragu?

Prije nego napišete novu stranicu, provjerite da je već nemate. Druga stranica na istu temu ne pomaže, nego se natječe s prvom.

1) Search Console, **Performance**, **+ Add filter**, **Query**, **Exact query**. Zalijepite pretragu iz ChatGPT-a.
2) Uključite **Average position** i otvorite karticu **Pages**.

![Što napraviti ovisno o tome gdje se stranica nalazi za tu pretragu](/blog/chatgpt-pretrage/odluka.png)

## Kako napisati stranicu koju AI može citirati

**1) Struktura s Googlea.** Pretragu iz ChatGPT-a upišite u Google. Otvorite prva 3 organska rezultata. Besplatnim dodatkom za Chrome Detailed SEO Extension (kartica Headings) kopirajte naslove sa svake stranice u jedan dokument. Tako vidite koje podteme Google i ChatGPT za tu pretragu očekuju.

**2) Bolji raspored.** U ChatGPT zalijepite naslove i napišite:

> Moja ključna riječ je [pretraga iz ChatGPT-a]. Ovo su naslovi s prva 3 rezultata na Googleu: [naslovi]. Napravi raspored članka koji uzima najbolje od sva tri i pokriva ono što im nedostaje. Piši na hrvatskom.

Raspored zatim dopunite ručno, jer ovo ChatGPT ne može znati:

- svaka pretraga iz vaše tablice koja pripada istoj temi dobiva svoj H2
- jedna sekcija s nečim što imate samo vi: vaša cijena, vaš primjer, screenshot, brojka iz projekta

**3) Tekst.** Dok pišete ili uređujete, držite se ovoga:

- **Ukratko na vrhu.** 2 do 3 rečenice koje odmah daju odgovor. Taj dio AI najlakše izvuče.
- **Odgovor u prvoj rečenici ispod svakog naslova**, istim riječima kao naslov. Naslov "Koliko košta SEO u Hrvatskoj" počinje s "SEO u Hrvatskoj košta od...".
- **Svaka sekcija mora biti razumljiva sama za sebe.** AI često uzme samo jedan odlomak. Ako odlomak počinje s "To je zato što...", bez prethodnog odlomka nema smisla.
- **Jedan pojam, jedan naziv.** Ako ste napisali "AI vidljivost", nemojte dalje mijenjati u "LLM prisutnost" i "GEO rezultate" radi stila.
- **Brojke s jedinicom.** "Od 400 eura mjesečno", ne "pristupačne cijene".

**4) Meta podaci.** Zatražite naslov stranice, meta opis i URL. Naslov neka sadrži točnu pretragu, a opis jednu konkretnu korist ili brojku.

## Prije objave

- Ubacite svoje iskustvo i barem jedan vlastiti screenshot ili fotografiju.
- Izbacite duge crtice i fraze koje odaju AI tekst: "u današnjem dinamičnom svijetu", "ključno je napomenuti", "revolucionaran", "neizostavan".
- Prepišite svaku rečenicu koja bi mogla stajati na webu bilo koje druge firme.
- Pročitajte tekst naglas jednom.

## Nakon objave

1) **Interni linkovi.** Search Console, Performance, kartica Pages, uključite Average position i sortirajte. Odaberite 2 do 3 tematski bliske stranice koje već dobro stoje i iz njihovog teksta stavite link na novu stranicu.
2) **Indeksiranje.** Novi URL zalijepite u traku na vrhu Search Consolea (URL inspection) i kliknite Request indexing.
3) **Provjera.** Kad je stranica indeksirana, isto pitanje postavite ChatGPT-u u novom privremenom razgovoru. Ponovite postupak iz Chromea i potražite svoju domenu u odgovoru. U tablicu upišite datum i jeste li citirani. Ponavljajte jednom tjedno 4 tjedna.

Tako na kraju imate svoju brojku: koliko je dana prošlo od objave do prvog citata, i je li ChatGPT vašu stranicu barem otvorio prije nego što ju je počeo citirati.

Kako se ovo uklapa u ostatak posla oko AI vidljivosti objašnjavamo u vodiču [LLM vidljivost: kako hrvatska tvrtka ulazi u odgovore ChatGPT-a i Googlea](/blog/llm-vidljivost/). Ako želite da ovu analizu napravimo za pitanja vaših kupaca, pogledajte uslugu [AI vidljivost](/ai-vidljivost/).
