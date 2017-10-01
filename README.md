# vplan-preact

vplan-preact ist ein Viewer für den Vertretungsplan des [Ernst-Moritz-Arndt-Gymnasiums Bonn](http://ema-bonn.de/).
Er basiert auf [preact-cli](https://github.com/developit/preact-cli) und ist eine vollwertige *Progressive Web App*, inklusive ServiceWorker und Offline-Anzeige.

## Genutzte Pakete
- [preact](https://github.com/developit/preact), light react.js alternative
- [preact-router](https://github.com/developit/preact-router), router for Preact
- [Material-UI](http://www.material-ui.com/), Material Design Components for React
- [react-ga](https://github.com/react-ga/react-ga), Google Analytics Binding

## Genutzte Services
- [vplan-API](http://vplanapp.ema-bonn.de/api?type=json), API der Schule
- [CORS-Anywhere](https://cors-anywhere.herokuapp.com/), Proxy um CORS zu umgehen

## TODO:
- [ ] Reichelt um richtigen Header bemühen (um nicht [cors-anywhere](https://cors-anywhere.herokuapp.com/) nutzen zu müssen)

## Future Features:
- Push Notifications über Service Worker
- Kurse markieren
- Liste zum einklappen (?erwünscht?)
