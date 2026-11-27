---
title: "Kako provjeriti e-mail novinara prije slanja (i kako AI tu pomaže, a kako odmaže)"
description: "Kako naći i provjeriti e-mail novinara: formati adresa u redakcijama, alati za provjeru s cijenama, zamke accept-all domena i kako sigurno koristiti AI."
date: 2026-11-27
updated: 2026-11-27
translation: verify-journalist-email
image: /blog/provjera-emaila-novinara/naslovna.png
imageAlt: "Naslovna slika članka o provjeri e-maila novinara: 55 od 61 adrese u formatu ime.prezime"
faq:
  - q: "Koliko stoji Roxhill?"
    a: "Roxhill ne objavljuje cijenu. Britanski katalog javne nabave G-Cloud, kako ga citiraju BuzzStream i Commswith.ai, navodi oko 3.000 £ do 25.000 £ godišnje po instanci, a Prowly procjenjuje od oko 6.000 £ godišnje, samo uz godišnju pretplatu."
  - q: "Koliko stoji Muck Rack?"
    a: "Muck Rack ne objavljuje cijenu. Prema Vendru (59 ugovora, veljača 2026.) medijan ugovora je 13.000 $ godišnje, a za jednog korisnika navodi se oko 5.000 $. Ponude koje su korisnici objavili na Redditu kreću se od 3.500 $ do 53.000 $ godišnje, ovisno o broju korisnika."
  - q: "Koliko stoji Cision?"
    a: "Cision ne objavljuje cijenu. Prema Vendru (107 ugovora) medijan ugovora je 12.625 $ godišnje, od 3.150 $ do 30.368 $."
  - q: "Koliko stoji JournoFinder?"
    a: "JournoFinder objavljuje cijenu: 189 $ mjesečno za jednog korisnika ili 119 $ mjesečno uz godišnju pretplatu (1.428 $ godišnje), 2.748 $ godišnje za tri korisnika, uz 7 dana besplatnog probnog razdoblja."
  - q: "Može li ChatGPT ili Claude pronaći e-mail novinara?"
    a: "Može predložiti adresu, ali je ne može provjeriti, jer ne razgovara s mail serverom. U Hunterovom testu 9 AI modela 76 % adresa koje su modeli predložili bilo je nevažeće. AI koristite za traženje autorske stranice i formata adrese, a adresu provjerite alatom za provjeru."
  - q: "Što znači accept-all ili catch-all kod provjere e-maila?"
    a: "Domena prima poštu za bilo koju adresu, pa se izvana ne može potvrditi postoji li baš ta osoba. Takav rezultat nije potvrda. Adresu tretirajte kao nepotvrđenu i potražite je javno objavljenu, npr. na autorskoj stranici ili profilu novinara."
  - q: "Smijem li pogađati e-mail novinara po formatu redakcije?"
    a: "Smijete složiti kandidate po formatu koji redakcija već koristi, ali šaljete samo na adresu koju je alat potvrdio kao važeću ili koju je novinar sam objavio. Po GDPR-u (članak 14.) morate moći reći odakle vam adresa."
  - q: "Koliko košta provjera e-mail adrese?"
    a: "U Hunterovoj usporedbi iz listopada 2026. 100 provjera stoji od 0,17 $ (Giggal) do 1,95 $ (ZeroBounce); Hunter 1,23 $, Bouncer 0,60 $, Emailable 0,76 $, Clearout i NeverBounce 0,80 $, Kickbox 1,00 $."
sources:
  - name: "JournoFinder: Muck Rack vs Cision vs JournoFinder (cijene)"
    url: "https://journofinder.com/compare/muck-rack-vs-cision-vs-journofinder"
  - name: "BuzzStream: 10 Best Media Databases (Roxhill, G-Cloud cijena)"
    url: "https://www.buzzstream.com/blog/media-databases/"
  - name: "Commswith.ai: Roxhill Media review"
    url: "https://www.commswith.ai/tools/roxhill-media/"
  - name: "Prowly: Roxhill pricing"
    url: "https://prowly.com/magazine/roxhill-pricing/"
  - name: "PressPilot: Muck Rack pricing 2026 (Vendr i Rephonic)"
    url: "https://www.presspilot.io/academy/muck-rack-pricing"
  - name: "Market Intelligence Tools: Media database pricing 2026 (Vendr)"
    url: "https://marketintelligencetools.com/reports/media-database-pricing/"
  - name: "Hunter: MCP for Email Verification, 8 checkers compared (test 8. listopada 2026.)"
    url: "https://hunter.io/blog/mcp-email-verification/"
  - name: "Google: Email sender guidelines"
    url: "https://support.google.com/a/answer/81126?hl=en"
  - name: "Google: Spam rate u Postmaster Tools"
    url: "https://support.google.com/a/answer/14229414?hl=en"
  - name: "GDPR, članak 14. (podaci koji nisu dobiveni od same osobe)"
    url: "https://gdpr-info.eu/art-14-gdpr/"
  - name: "ICO: Electronic mail marketing (PECR)"
    url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/"
---

E-mail novinara najčešće se ne nalazi pogađanjem nego čitanjem: autorska stranica, profil na X-u, potpis ispod članka. Kad adresa nije javna, može se složiti po formatu koji redakcija već koristi, ali šalje se tek kad je alat za provjeru potvrdi kao važeću. U ovom članku su naši podaci iz liste od 199 britanskih novinara, test osam alata za provjeru i način na koji AI pomaže, a gdje izmišlja.

## Ukratko

- **Prvo tražite objavljenu adresu.** Od 199 novinara s naše liste, 61 je imao e-mail na autorskoj stranici, a 133 profil na X-u.
- **Format je predvidljiv, domena nije.** 55 od tih 61 adresa ima oblik ime.prezime, ali novinari Liverpool Echa, Manchester Evening Newsa i Birmingham Maila nemaju adresu na domeni svog portala, nego na reachplc.com.
- **AI ne smije biti zadnji korak.** U Hunterovom testu 76 % adresa koje su AI modeli predložili bilo je nevažeće.
- **Accept-all nije potvrda.** Kad domena prima sve adrese, nijedan alat ne može potvrditi osobu.

## Gdje je adresa već objavljena

Prije bilo kakvog alata provjerite pet mjesta, ovim redom:

1. **Autorska stranica na portalu.** Kliknite ime autora ispod članka. Lokalni i tabloidni portali često ondje pišu e-mail.
2. **Profil na X-u ili Blueskyju.** Novinari u opisu profila često pišu adresu ili napomenu „DM za pitcheve“.
3. **Kraj članka.** Neki portali uz članak stave „Imate priču? Javite se na…“.
4. **Kontakt stranica redakcije.** Ondje su adrese rubrika (vijesti, potrošači, biznis) kad osobna adresa nije javna.
5. **Baza novinara** (Muck Rack, Roxhill, Cision, JournoFinder). Vrijedi kad šaljete često; koliko stoje, piše [niže](#koliko-stoje-baze-novinara-roxhill-muck-rack-cision-meltwater-i-journofinder).

Kad smo za UK kampanju složili listu od 199 novinara koji pišu o temi, rezultat je izgledao ovako:

| Što smo našli | Novinara |
|---|---|
| E-mail objavljen na autorskoj stranici | 61 |
| Profil na X-u | 133 |
| Profil na Blueskyju | 13 |
| Bez objavljene adrese, samo kandidat po formatu redakcije | 110 |

Razlika je bila u izdavaču, a ne u novinaru. Na Liverpool Echu e-mail je objavilo 9 od 9 novinara, na Manchester Evening Newsu 7 od 9 i na Expressu 8 od 10. Na BBC-ju, Evening Standardu, Telegraphu i Independentu nijedan.

## Koliko stoje baze novinara: Roxhill, Muck Rack, Cision, Meltwater i JournoFinder

Od pet najpoznatijih baza novinara samo JournoFinder javno objavljuje cijenu: 189 $ mjesečno za jednog korisnika, odnosno 1.428 $ godišnje uz godišnju pretplatu. Roxhill, Muck Rack, Cision i Meltwater cijenu daju tek na upit, pa su brojke ispod ono što navode kupci, katalozi nabave i usporedbe, a ne službeni cjenici. Stanje u studenom 2026.:

| Baza | Cijena (godišnje) | Odakle je podatak |
|---|---|---|
| JournoFinder | 1.428 $ za jednog korisnika (119 $ mjesečno); 2.748 $ za tri korisnika; mjesečno 189 $; 7 dana besplatno | objavljeno na stranici JournoFindera |
| Roxhill | oko 3.000 £ do 25.000 £ „po instanci“; Prowly procjenjuje od oko 6.000 £, samo godišnja pretplata | britanski katalog javne nabave G-Cloud, kako ga citiraju BuzzStream i Commswith.ai; procjena Prowlyja |
| Muck Rack | medijan ugovora 13.000 $ (raspon 8.000 do 20.860 $); za jednog korisnika navodi se oko 5.000 $ | Vendr, 59 ugovora (veljača 2026.); Prezly i Rephonic |
| Cision | medijan ugovora 12.625 $ (najniže 3.150 $, najviše 30.368 $) | Vendr, 107 ugovora |
| Meltwater | medijan ugovora 25.800 $ | Vendr (veljača 2026.) |

**Što kažu korisnici:**

- Na r/PublicRelations jedan korisnik preporučuje JournoFinder kao povoljnu opciju jer „stoji oko 1.100 £ godišnje“, što odgovara službenoj godišnjoj cijeni preračunatoj u funte.
- Rephonic je skupio 24 ponude za Muck Rack iz šest Reddit niti: od 3.500 $ za jednog korisnika do 53.000 $ za tim od sedam do devet ljudi. Za jednog korisnika najčešće se navodi oko 5.000 $, za pet korisnika oko 25.000 $. Rephonic navodi da te brojke nije mogao provjeriti i da su neke starije.
- Jedan korisnik Reddita naveo je da mu je Muck Rack za tim od 12 ljudi ponudio 34.000 $ godišnje (citira JournoFinder).

**Kako se te cijene slažu:**

- **Plaća se po korisniku.** Roxhill ima pakete Core, Boutique, Enterprise i Premium s 1, 3 i 5 prijava u prva tri; distribucija priopćenja uključena je tek od paketa Boutique.
- **Prva ponuda nije konačna.** Kupci Muck Racka kroz Vendr u prosjeku su dobili 17 % popusta na prvu ponudu.
- **Obnova može biti skuplja.** Cisionovi opći uvjeti predviđaju poskupljenje od 5 % pri svakoj obnovi, ako ugovor ne kaže drugačije.

Dio izvora su konkurentski alati (Prowly, PressPilot, JournoFinder), koji imaju interes prikazati druge baze skupljima. Prije kupnje zatražite pisanu ponudu.

## Format adrese: kako redakcije slažu e-mail

Iz 61 adrese koje su novinari sami objavili izlazi jasan obrazac:

| Portal | Format | Domena adrese |
|---|---|---|
| Liverpool Echo, Manchester Evening News, Birmingham Mail, Hull Daily Mail, Nottingham Post, Bristol Post, Express | ime.prezime | reachplc.com |
| Mirror | ime.prezime | reachplc.com, mirror.co.uk, a kod honorarnih suradnika i gmail.com |
| Daily Mail | ime.prezime | mailonline.co.uk, mailonline.com i dailymail.com |

- **55 od 61** adrese ima oblik ime.prezime. Još 4 su ime.prezime s varijacijom (srednje ime, drugačije napisano ime).
- **Domena često nije domena portala.** Adresa novinara Liverpool Echa nije @liverpoolecho.co.uk, nego @reachplc.com, jer list izdaje Reach plc. Tko pogađa po domeni portala, pogađa krivo.
- **Jedan portal može imati više domena.** Daily Mail koristi tri, pa pravu saznajete samo iz adrese koju je novinar ili njegov kolega objavio.
- **Honorarni suradnici imaju svoje adrese.** Kod Mirrora je jedna objavljena adresa bila na gmail.com.

**Pravilo za pogađanje:** format i domenu uzmite iz najmanje dvije adrese kolega iz iste redakcije koje su javno objavljene. Tek tada složite kandidata za novinara koji svoju adresu nije objavio.

<div data-embed="email-generator"></div>

## Provjera: što alat stvarno radi

Alat za provjeru pita mail server primatelja postoji li taj pretinac, bez slanja poruke. Odgovor ima pet mogućnosti:

- **Valid (važeća):** pretinac postoji. Samo to je sigurno za slanje.
- **Invalid (nevažeća):** pretinac ne postoji. Ne šaljite.
- **Accept all / catch-all:** domena prima poštu za bilo koju adresu, pa se izvana ne može znati postoji li ta osoba. To nije potvrda, čak ni kad alat uz to pokaže ocjenu 73 od 100.
- **Unknown (nepoznato):** server nije odgovorio. Nepotvrđeno.
- **Disposable / webmail:** privremena adresa ili besplatni servis (Gmail i slično). Kod novinara webmail može biti stvaran, ali provjerite ga u njihovu profilu.

Hunter je u listopadu 2026. testirao osam alata na 25 izmišljenih adresa u stvarnim tvrtkama, u formatima poput ime.prezime@tvrtka.com. Svaka adresa bila je lažna, pa je „važeća“ bio jedini pogrešan odgovor.

| Alat | Lažnih adresa propušteno | Cijena za 100 provjera |
|---|---|---|
| Hunter | 0 od 25 | 1,23 $ |
| ZeroBounce | 0 od 25 | 1,95 $ |
| Giggal | 0 od 25 | 0,17 $ |
| Bouncer | 0 od 25 | 0,60 $ |
| Clearout | 0 od 25 | 0,80 $ |
| Emailable | 0 od 25 | 0,76 $ |
| NeverBounce | 0 od 10 | 0,80 $ |
| Kickbox | 1 od 25 | 1,00 $ |

Dvije napomene uz tablicu:

- **Test je napravio Hunter**, i sam to navodi u članku. Pokazuje samo hvata li alat lažne adrese, a ne odbija li pogrešno stvarne ljude. NeverBounce je testiran na 10 adresa jer je besplatni račun imao 10 provjera.
- **Besplatni „verifikatori“ koji provjeravaju samo domenu** propustili su 24 od 25 lažnih adresa. Oni potvrđuju samo da tvrtka ima e-mail, a to izmišljena adresa u stvarnoj tvrtki uvijek prođe.

## Kako AI pomaže, a gdje izmišlja

AI je odličan za traženje, a loš za potvrđivanje.

**Gdje AI štedi vrijeme:**

- Nađe autorsku stranicu i zadnjih pet do deset članaka novinara, pa vidite piše li još o vašoj temi.
- Pretraži web za javno objavljene adrese kolega iz iste redakcije i iz njih izvuče format i domenu.
- Složi listu kandidata za adresu i za svakog napiše odakle je format.

**Gdje AI izmišlja:**

- Kad ga pitate za nečiju poslovnu adresu, AI vrati uvjerljivu adresu koja često ne postoji. U Hunterovom testu 9 modela 76 % predloženih adresa bilo je nevažeće.
- AI ne može razgovarati s mail serverom, pa adresu ne može provjeriti. Za to mu treba povezan alat za provjeru (u Claudeu i ChatGPT-u preko MCP konektora; Hunter, Giggal i Bouncer imaju vlastite).

**Uputa koju zalijepite u Claude ili ChatGPT prije rada s adresama:**

> Za svaku e-mail adresu navedi izvor (stranicu na kojoj je objavljena). Adresu koju nisi našao objavljenu označi kao pretpostavku. Kao sigurnu za slanje tretiraj samo adresu koju je alat za provjeru označio kao valid. Accept all, catch-all, risky i unknown su nepotvrđene. Nikad ne predlaži adresu koju nisi provjerio.

## Prije nego pošaljete

- **Šaljite samo na „valid“ ili javno objavljenu adresu.** Za accept-all domene potražite adresu objavljenu na autorskoj stranici ili adresu rubrike.
- **Zapišite odakle vam je adresa.** Po GDPR-u (članak 14.), kad osobni podatak ne dobijete od same osobe, morate joj moći reći odakle je. Hunter uz provjeru navodi i stranice na kojima je adresa objavljena, pa odgovor na „odakle vam moj e-mail?“ imate spreman.
- **Pazite na pritužbe na spam.** Google traži da udio poruka koje primatelji prijave kao spam ostane ispod 0,1 % i nikad ne dođe do 0,3 %. Pošiljatelji s više od 5.000 poruka dnevno prema Gmailu moraju imati postavljene SPF, DKIM i DMARC.
- **Jedna loša lista kvari sve ostale mailove.** Odbijene poruke i prijave spama spuštaju ugled domene, pa sljedeći pitch, i onaj na točnu adresu, lakše završi u spamu.

## Postupak u sedam koraka

1. Nađite novinara koji je o temi pisao u zadnjih mjesec dana.
2. Provjerite autorsku stranicu, X i kraj članka.
3. Ako adresa nije objavljena, nađite dvije objavljene adrese kolega iz iste redakcije i iz njih format i domenu.
4. Složite kandidata (alat iznad radi to za vas).
5. Provjerite ga alatom za provjeru.
6. Šaljite samo na „valid“. Accept-all i unknown zamijenite adresom rubrike ili porukom na X-u.
7. Zapišite izvor adrese u tablicu kampanje.

Ako želite da listu novinara i provjeru adresa za vašu kampanju napravimo mi, [javite nam se](/kontakt/).
