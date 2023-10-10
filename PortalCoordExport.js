// ==UserScript==
// @name         Portal Koordinaten Anzeigen
// @namespace    http://example.com
// @version      1.0
// @description  Zeige Portal-Koordinaten in der Portal-Übersicht an
// @author       MRrBenz99
// @include      https://www.ingress.com/intel
// @grant        none
// ==/UserScript==

function showPortalCoordinates() {
    window.addHook('portalDetailsUpdated', function(portal) {
        // Extrahiere die Portal-Koordinaten
        const latlng = portal.getLatLng();
        const coordinates = `Lat: ${latlng.lat}, Lng: ${latlng.lng}`;
        
        // Füge die Koordinaten zur Portal-Übersicht hinzu
        $('#portaldetails > .mods-container').append(`<div class="display-coordinates">${coordinates}</div>`);
    });
}

// Füge das Plugin zur Seite hinzu
const script = document.createElement('script');
script.appendChild(document.createTextNode('('+ showPortalCoordinates +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
