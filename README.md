Ciao ragazzi,

Esercizio di oggi: React Router Store

repo: `react-router`

Consegna

Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.

https://fakestoreapi.com/

1. Installiamo React Router DOM: `npm i react-router-dom`
2. Creiamo almeno 3 pagine principali:
   - Homepage (con un messaggio di benvenuto o immagine promozionale)
   - Chi siamo
   - Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)
3. Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse
4. Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa `<Link>`)
5. Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da `https://fakestoreapi.com/products/:id`
6. Configuriamo il routing dinamico per leggere l’`id` del prodotto dalla URL

Bonus

- Centralizziamo la Navbar usando un componente `Layout`
- Gestiamo la classe `active` per i link attivi nella Navbar
- Aggiungiamo una navigazione programmatica che riporti alla pagina di listato se viene aperta la pagina di un prodotto che non esiste;
- Aggiungiamo una pagina 404;
- Aggiungiamo un loading per caricamento del dettaglio prodotto.
- Aggiungiamo nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo (usando `useNavigate()` programmaticamente)
