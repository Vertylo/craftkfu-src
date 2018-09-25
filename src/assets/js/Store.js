import { List } from "./Class";

class Store {
  constructor() {
    this.state = {
      lang: 0,
      list: new List(),
      jobs: [
        {
          id: -1,
          name: [
            "Tous les métiers",
            "Every Job",
            "Cada oficio",
            "Todas as Profissões"
          ]
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
        searchTitle: ["Recherche", "Search", "Buscar", "Pesquisa"],
        noResult: [
          "Aucun résultat...",
          "No result...",
          "Sin resultado...",
          "No resultado..."
        ],
        result: ["résultat", "result", "resultado", "resultado"],
        addCraft1: ['Ajouter "', 'Add "', "Añadir", 'Adicionar "'],
        addCraft2: ['" à la liste', '" to the list', "a la lista", '" a lista'],
        lvl: ["Niv.", "Lv.", "Niv.", "Nív."],
        step: [
          "Liste des Recettes",
          "Recipes List",
          "Lista de Recetas",
          "Lista de Receitas"
        ],
        noCraft: [
          "Aucune recette dans la liste...",
          "No craft...",
          "Sin receta...",
          "No receita.."
        ],
        craft: ["recette", "recipe", "receta", "receita"],
        slide: ["Tout montrer", "Show all", "Mostrar todo", "Mostrar todos"],
        erase: ["Tout effacer", "Remove all", "Eliminar todo", "Apagar tudo"],
        showRecipe: [
          "Montrer les composants",
          "Show recipe",
          "Mostrar receta",
          "Mostrar receita"
        ],
        switch: [
          "Changer la recette",
          "Switch recipe",
          "Cambiar la receta",
          "Trocar receita"
        ],
        del1: ['Supprimer "', 'Remove "', "Eliminar", 'Retirar "'],
        del2: ['" de la liste', '" from the list', "de la lista", '" da lista'],
        shop: [
          "Courses",
          "Shopping List",
          "Lista de Compras",
          "Lista de Compras"
        ],
        resource: ["ressource", "resource", "recurso", "recurso"],
        exportCsv: [
          "Exporter en CSV",
          "Export to CSV",
          "Exportar a CSV",
          "Exportar em CSV"
        ],
        exportTxt: [
          "Exporter en TXT",
          "Export to TXT",
          "Exportar a TXT",
          "Exportar em TXT"
        ],
        link: [
          "https://www.wakfu.com/fr/mmorpg/encyclopedie/ressources/",
          "https://www.wakfu.com/en/mmorpg/encyclopedia/resources/",
          "https://www.wakfu.com/es/mmorpg/enciclopedia/recursos/",
          "https://www.wakfu.com/pt/mmorpg/enciclopedia/recursos/"
        ],
        footer: [
          "Craftkfu est un outil non-officiel sans aucun lien avec Ankama, éditeur de WAKFU.",
          "Craftkfu is a fan made tool, not affiliated to Ankama Games.",
          "Craftkfu es una herramienta creada por fans, no está afiliada a ankama games.",
          "Craftkfu é uma ferramenta feita por fãs e sem filiação com Ankama."
        ]
      },
      types: [
        { id: 1, name: ["Equipement", "Gear", "Equipo", "Equipamento"] },
        { id: 101, name: ["Hache", "", "", ""] },
        { id: 103, name: ["Anneau", "", "", ""] },
        { id: 108, name: ["Baguette", "", "", ""] },
        { id: 110, name: ["Epée", "", "", ""] },
        { id: 111, name: ["Pelle", "", "", ""] },
        { id: 112, name: ["Dague", "", "", ""] },
        { id: 113, name: ["Bâton", "", "", ""] },
        { id: 114, name: ["Marteau", "", "", ""] },
        { id: 115, name: ["Aiguille", "", "", ""] },
        { id: 117, name: ["Armures", "", "", ""] },
        { id: 119, name: ["Bottes", "", "", ""] },
        { id: 120, name: ["Amulette", "", "", ""] },
        { id: 132, name: ["Cape", "", "", ""] },
        { id: 133, name: ["Ceinture", "", "", ""] },
        { id: 134, name: ["Casque", "", "", ""] },
        { id: 136, name: ["Plastron", "", "", ""] },
        { id: 138, name: ["Epaulettes", "", "", ""] },
        { id: 189, name: ["Boucliers", "", "", ""] },
        { id: 218, name: ["Sacs", "", "", ""] },
        { id: 223, name: ["Epée à 2 mains", "", "", ""] },
        { id: 253, name: ["Bâton à 2 mains", "", "", ""] },
        { id: 254, name: ["Cartes", "", "", ""] },
        {
          id: 281,
          name: [
            "Récoltes du Mineur",
            "Miner's Harvests",
            "Colectas del minero",
            "Colheitas do mineiro"
          ]
        },
        {
          id: 282,
          name: [
            "Récoltes du Trappeur",
            "Trapper's Harvests",
            "Colectas del peletero",
            "Colheitas do caçador"
          ]
        },
        {
          id: 306,
          name: [
            "Récoltes du Forestier",
            "Lumberjack's Harvests",
            "Colectas del leñador",
            "Colheitas do lenhador"
          ]
        },
        {
          id: 308,
          name: [
            "Récoltes du Pêcheur",
            "Fisherman's Harvests",
            "Colectas del pescador",
            "Colheitas do pescador"
          ]
        },
        {
          id: 309,
          name: [
            "Récoltes du Paysan",
            "Farmer's Harvests",
            "Colectas del campesino",
            "Colheitas do fazendeiro"
          ]
        },
        {
          id: 313,
          name: [
            "Récoltes de l'Herboriste",
            "Herbalist's Harvests",
            "Colectas del herbolario",
            "Colheitas do herborista"
          ]
        },
        { id: 322, name: ["Prison", "Prison", "Prisión", "Prisão"] },
        { id: 419, name: ["Semences", "Seeds", "Semillas", "Sementes"] },
        { id: 458, name: ["Autres", "Other", "Otros", "Outros"] },
        {
          id: 472,
          name: [
            "Consommables Divers",
            "Miscellaneous Consumables",
            "Consumibles varios",
            "Consumíveis diversos"
          ]
        },
        {
          id: 531,
          name: [
            "Accessoires",
            "Miscellaneous Drops",
            "Drops varios",
            "Itens ganhos diversos"
          ]
        },
        {
          id: 551,
          name: [
            "Objets de Quête",
            "Quest Items",
            "Objetos de misión",
            "Itens de missão"
          ]
        },
        { id: 559, name: ["Donjons", "", "", ""] },
        {
          id: 594,
          name: [
            "Nourriture de familiers",
            "Pet Food",
            "Comida para mascotas",
            ""
          ]
        },
        {
          id: 646,
          name: ["Emblème", "Emblem", "Emblema", "Alimentos de mascotes"]
        },
        { id: 682, name: ["Poudres", "Powders", "Polvo", "Pós"] },
        { id: 683, name: ["Runes", "Runes", "Runas", "Runas"] },
        {
          id: 687,
          name: [
            "Fragments de Relique",
            "Relic Fragments",
            "Fragmentos de reliquias",
            "Fragmentos de relíquias"
          ]
        },
        {
          id: 739,
          name: [
            "Sioupère-Glous",
            "Souper-Glous",
            "Superglús",
            "Bonds, Super Bonds"
          ]
        },
        { id: 747, name: ["Nourritures", "Food", "Comidas", "Alimentos"] }
      ],
      plurial: function(testBool, str) {
        if (testBool) return str + "s";
        return str;
      }
    };
  }
}

let store = new Store();

export { store };
