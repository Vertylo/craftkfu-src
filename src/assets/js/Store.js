import { List } from "./Class";

class Store {
  constructor() {
    this.state = {
      lang: 0,
      list: new List(),
      jobs: [
        {
          id: -1,
          name: ["Tous les métiers", "Every Job", "", "Todas as Profissões"]
        },
        { id: 71, name: ["Forestier", "Lumberjack", "Leñador", "Lenhador"] },
        {
          id: 72,
          name: ["Herboriste", "Herbalist", "Herbolario", "Herborista"]
        },
        { id: 73, name: ["Mineur", "Miner", "Minero", "Mineiro"] },
        { id: 64, name: ["Paysan", "Farmer", "Campesino", "Fazendeiro"] },
        { id: 75, name: ["Pêcheur", "Fisherman", "Pescador", "Pescador"] },
        { id: 74, name: ["Trappeur", "Trapper", "Peletero", "Caçador"] },
        { id: 77, name: ["Armurier", "Armorer", "Armero", "Armeiro"] },
        { id: 78, name: ["Bijoutier", "Jeweler", "Joyero", "Joalheiro"] },
        { id: 40, name: ["Boulanger", "Baker", "Panadero", "Padeiro"] },
        { id: 76, name: ["Cuisinier", "Chef", "Cocinero", "Cozinheiro"] },
        { id: 81, name: ["Ebéniste", "Handyman", "Ebanista", "Marceneiro"] },
        {
          id: 83,
          name: [
            "Maitre d'Armes",
            "Weapons Master",
            "Maestro de armas",
            "Mestre de armas"
          ]
        },
        {
          id: 80,
          name: ["Maroquinier", "Leather Dealer", "Marroquiniero", "Coureiro"]
        },
        { id: 79, name: ["Tailleur", "Tailor", "Sastre", "Alfaiate"] }
      ],
      rarity: [
        { id: 0, name: ["Commun", "Common", "Comun", "Comum"] },
        { id: 1, name: ["Inhabituel", "Unusual", "Incomum"] },
        { id: 2, name: ["Rare", "Rare", "Raro", "Raro"] },
        { id: 3, name: ["Mythique", "Mythical", "Mítico"] },
        { id: 4, name: ["Légendaire", "Legendary", "Lendário"] },
        { id: 5, name: ["Relique", "Relic", "Reliquia", "Relíquia"] },
        { id: 6, name: ["Souvenir", "Souvenir", "Recuerdo", "Lembrança"] },
        { id: 7, name: ["Epique", "Epic", "Epico", "Épico"] }
      ],
      txt: {
        searchTitle: ["Recherche", "Search", "", "Pesquisa"],
        noResult: ["Aucun résultat...", "No result...", "", "No resultado..."],
        result: ["résultat", "result", "", "resultado"],
        addCraft1: ['Ajouter "', 'Add "', "", 'Adicionar "'],
        addCraft2: ['" à la liste', '" to the list', "", '" a lista'],
        lvl: ["Niv.", "Lv.", "", "Nív."],
        step: ["Liste des recettes", "Recipes List", "", "Lista de Receitas"],
        noCraft: ["Aucun craft dans la liste...", "No craft...", "", ""],
        craft: ["craft", "craft", "craft", "craft"],
        slide: ["Tout montrer", "Show all", "", "Mostrar todos"],
        erase: ["Tout effacer", "Reset all", "", "Apagar tudo"],
        showRecipe: [
          "Montrer les composants",
          "Show recipe",
          "",
          "Mostrar componentes"
        ],
        switch: ["Changer la recette", "Switch recipe", "", "Trocar receita"],
        del1: ['Supprimer "', 'Remove "', "", 'Retirar "'],
        del2: ['" de la liste', '" from the list', "", '" da lista'],
        shop: ["Courses", "Shopping List", "", "Lista de Compras"],
        resource: ["ressource", "resource", "", "recurso"],
        exportCsv: ["Exporter en CSV", "Export to CSV", "", "Exportar em CSV"],
        exportTxt: ["Exporter en TXT", "Export to TXT", "", "Exportar em TXT"],
        link: [
          "https://www.wakfu.com/fr/mmorpg/encyclopedie/ressources/",
          "https://www.wakfu.com/en/mmorpg/encyclopedia/resources/",
          "https://www.wakfu.com/es/mmorpg/enciclopedia/recursos/",
          "https://www.wakfu.com/pt/mmorpg/enciclopedia/recursos/"
        ],
        footer: [
          "Craftkfu est un outil non-officiel sans aucun lien avec Ankama, éditeur de WAKFU.",
          "Craftkfu is a fan made tool, not affiliated to Ankama Games.",
          "",
          "Craftkfu é uma ferramenta feita por fãs e sem filiação com Ankama."
        ]
      },
      plurial: function(testBool, str) {
        if (testBool) return str + "s";
        return str;
      }
    };
  }
}

let store = new Store();

export { store };
