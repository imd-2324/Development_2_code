# Evaluatie 2

Maak een domotica app op basis van deze statische html pagina's volledig dynamisch via Node.JS, mongoDB (+mongoose) en handlebar views.

Importeer de json bestanden in een mongodb met 2 collections (buttons, rooms).

Er zijn 2 verschillende pagina's die gemaakt moeten worden:
- Startpagina: hierop staan de verschillende ruimtes met hun bijhorende icon, je kan doorklikken naar een detailpagina van een ruimte
- Detailpagina: hierop staan enkel de schakelaars van deze ruimte en wordt afhankelijk van de status een active class aangepast zodat duidelijk is dat deze verlichting aan het branden is.

Daarnaast moet je ook de status van de buttons kunnen aanpassen in de database. Dus een verlichting dat aanstaat (status = 1) moet uitgezet kunnen worden (status = 0). 
Tip: Maar hiervoor een extra post route aan die je dan vanuit een script in de client kan aanroepen via een fetch. (dit zal moeten gebeuren via de mongoose method findByIdAndUpdate)


## Puntenverdeling

| Onderdeel | Punten |
| --------- | ------ |
| Navigatie | 4 |
| Detail | 4 |
| Toggle | 2 |
