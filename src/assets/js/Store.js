import { List } from "./Class";

class Store {
  constructor() {
    this.state = {
      lang: 2,
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
        sort: [
          "Croissant/Décroissant",
          "Ascending/Descending",
          "Ascendente/Descendente",
          "Crescente/Decrescente"
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
          'WAKFU MMORPG : © 2019 Ankama Studio. Tous droits réservés.\n\n"MethodWakfu" et ses services dérivés sont des sites non-officiels sans aucun lien avec Ankama.',
          "Craftkfu is a fan made tool, not affiliated to Ankama Games.",
          "Craftkfu es una herramienta creada por fans, no está afiliada a ankama games.",
          "Craftkfu é uma ferramenta feita por fãs e sem filiação com Ankama."
        ]
      },
      types: [{"id":419,"name":["Semences","Seeds","Semillas (animal)","Sementes"]},{"id":569,"name":["Composants Cuisinier","Chef Components","Componentes Cocinero","Componentes de cozinheiro"]},{"id":612,"name":["Figurines Krosmaster","Krosmaster Figurines","Figuras de Krosmaster","Miniaturas de Krosmaster"]},{"id":746,"name":["Consommable","Consumable","Consumible","Consumível"]},{"id":806,"name":["","","",""]},{"id":745,"name":["Nourriture","Food","Comida","Comida"]},{"id":805,"name":["","","",""]},{"id":817,"name":["Créatures","Monsters","Criaturas","Criaturas"]},{"id":100,"name":["Armes \u0026 Boucliers","Weapons \u0026 Shields","Armas y escudos","Armas e escudos"]},{"id":322,"name":["Prison","Prison","Prisión","Prisão"]},{"id":510,"name":["Hallebarde","Halberd","Alabarda","Alabarda"]},{"id":601,"name":["Fragments de Havre-Gemme","Haven-Gem Fragments","Fragmentos de merkagema","Fragmentos de Gema de Viagem"]},{"id":717,"name":["","","",""]},{"id":822,"name":["Ressources diverses","Miscellaneous resources","Recurso","Recursos diversos"]},{"id":254,"name":["Cartes","Cards","Cartas","Cartas"]},{"id":568,"name":["Raffinage du Trappeur","Trapper's Refinements","Elaboraciones del peletero","Refinamentos do caçador"]},{"id":647,"name":["Costumes","Costumes","Trajes","Trajes"]},{"id":683,"name":["Runes","Runes","Runas","Runas"]},{"id":738,"name":["Transformations","Transformations","Transformaciones","Transformações"]},{"id":218,"name":["Sacs","Bags","Bolsos","Sacos"]},{"id":223,"name":["Epée à 2 mains","Two-handed Sword","Espada a dos manos","Espada de 2 mãos"]},{"id":297,"name":["Aménagements intérieurs","Furniture","Habitaciones interiores","Mobília"]},{"id":385,"name":["Divers","Miscellaneous","Varios","Diversos"]},{"id":581,"name":["Equipement de familier","Pet equipment","Equipo de mascota","Equipamento para mascotes"]},{"id":747,"name":["Consommable","Consumable","Consumible","Consumível"]},{"id":807,"name":["","","",""]},{"id":119,"name":["Bottes","Boots","Botas","Botas"]},{"id":393,"name":["Raffinage du Paysan","Farmer's Refinements","Elaboraciones del campesino","Refinamentos do fazendeiro"]},{"id":535,"name":["Décorations de Havre-Sac","Haven Bag Decorations","Decoraciones para el merkasako","Decorações de Saco de Viagem"]},{"id":567,"name":["Raffinage du Pêcheur","Fisherman's Refinements","Elaboraciones del pescador","Refinamentos do pescador"]},{"id":764,"name":["","","",""]},{"id":691,"name":["[Cellule Test]","[Test Cell]","[Cellule Test]","[Cellule Test]"]},{"id":730,"name":["","","",""]},{"id":808,"name":["","","",""]},{"id":219,"name":["Poing","Fist","Puño","Punho"]},{"id":296,"name":["Vitrines","Display Windows","Muestrarios","Vitrines"]},{"id":622,"name":["","","",""]},{"id":625,"name":["Frigost","Frigost","Frigost","Frigost"]},{"id":643,"name":["Bilbyza","Bilbiza","Bilbyza","Bilbyza"]},{"id":740,"name":["","","",""]},{"id":115,"name":["Aiguille","Hand","Aguja","Ponteiro"]},{"id":138,"name":["Epaulettes","Epaulettes","Hombreras","Dragonas"]},{"id":295,"name":["Havre-Sac","Haven Bag","Merkasako","Saco de viagem"]},{"id":606,"name":["Pochettes","Trinket Boxes","Cajas","Caixinhas"]},{"id":715,"name":["","","",""]},{"id":111,"name":["Pelle","Shovel","Pala","Pá"]},{"id":309,"name":["Récoltes du Paysan","Farmer's Harvests","Colectas del campesino","Colheitas do fazendeiro"]},{"id":512,"name":["Titres","Titles","Títulos","Títulos"]},{"id":686,"name":["Compagnons","Sidekicks","Compañeros","Companheiros"]},{"id":694,"name":["","","",""]},{"id":757,"name":["Nourritures","Food","Comidas","Alimentos"]},{"id":733,"name":["","","",""]},{"id":737,"name":["","","",""]},{"id":768,"name":["","","",""]},{"id":306,"name":["Récoltes du Forestier","Lumberjack's Harvests","Colectas del leñador","Colheitas do lenhador"]},{"id":630,"name":["Téléportation","Teleportation","Teletransportación","Teletransporte"]},{"id":631,"name":["Boost métier","Profession boost","Boost de oficio","Boost de profissão"]},{"id":707,"name":["Apparences de Montures","Mount Skins","Apariencias de monturas","Aparências de Montaria"]},{"id":811,"name":["Enchantement","Enchantment","Encantamiento","Encantamento"]},{"id":327,"name":["Raffinage du Forestier","Lumberjack's Refinements","Elaboraciones del leñador","Refinamentos do lenhador"]},{"id":515,"name":["Décoration de Salle Jardin","Garden Room Decoration","Decoración para la sala del jardín","Decoração para a sala do jardim"]},{"id":574,"name":["Composants Maroquinier","Leather Dealer Components","Componentes Marroquinero","Componentes de coureiro"]},{"id":604,"name":["Panoplies","Sets","Sets","Conjuntos"]},{"id":679,"name":["","","",""]},{"id":133,"name":["Ceinture","Belt","Cinturón","Cinto"]},{"id":571,"name":["Composants Maître d'Armes","Weapons Master Components","Componentes de maestro de armas","Componentes Mestre de Armas"]},{"id":611,"name":["Montures","Mounts","Monturas","Montarias"]},{"id":678,"name":["","","",""]},{"id":709,"name":["Transmutations","Transmutations","Transmutaciones","Transmutações"]},{"id":537,"name":["Outils","Tools","Herramientas","Ferramentas"]},{"id":576,"name":["Composants Bijoutier","Jeweler Components","Componentes Joyero","Componentes de joalheiro"]},{"id":582,"name":["Familiers","Pets","Mascotas","Mascotes"]},{"id":101,"name":["Hache","Axe","Hacha","Machado"]},{"id":136,"name":["Plastron","Breastplate","Coraza","Peitoral"]},{"id":313,"name":["Récoltes de l'Herboriste","Herbalist's Harvests","Colectas del herbolario","Colheitas do herborista"]},{"id":480,"name":["Torches","Torches","Antorchas","Tochas"]},{"id":520,"name":["Seconde Main","Second Hand","Segunda mano","Segunda mão"]},{"id":595,"name":["Coloration de Familiers","Pet Coloring","Color de las mascotas","Tingimento de mascotes"]},{"id":703,"name":["","","",""]},{"id":725,"name":["","","",""]},{"id":751,"name":["","","",""]},{"id":815,"name":["Expérience","Experience","Experiencia","Experiência"]},{"id":769,"name":["","","",""]},{"id":449,"name":["Décoration de Salle Marchande","Trade Room Decoration","Decoración para la sala mercante","Decoração para a sala mercante"]},{"id":463,"name":["Raffinage de l'Herboriste","Herbalist's Refinements","Elaboraciones del herbolario","Refinamentos do herborista"]},{"id":594,"name":["Consommables de Familiers","Pet Consumables","Consumibles de mascotas","Itens consumíveis de mascotes"]},{"id":696,"name":["Artifices","Fireworks","Artificios","Consumíveis Shuhus"]},{"id":728,"name":["","","",""]},{"id":705,"name":["","","",""]},{"id":752,"name":["","","",""]},{"id":756,"name":["Animations","Events","Animaciones","Animações"]},{"id":415,"name":["Mobilier du Havre-Sac","Haven Bag Furniture","Mobiliario del merkasako","Mobília do saco de viagem"]},{"id":416,"name":["Décorations de Havre-Sac","Haven Bag Decorations","Decoraciones para el merkasako","Decorações de Saco de Viagem"]},{"id":577,"name":["Composants Boulanger","Baker Components","Componentes Panadero","Componentes de padeiro"]},{"id":602,"name":["Forgemagie","Smithmagic","Forjamagia","Forjamagia"]},{"id":704,"name":["","","",""]},{"id":816,"name":["","","",""]},{"id":682,"name":["Poudres","Powders","Polvo","Pós"]},{"id":106,"name":["Consommables","Consumables","Consumibles","Consumíveis"]},{"id":281,"name":["Récoltes du Mineur","Miner's Harvests","Colectas del minero","Colheitas do mineiro"]},{"id":294,"name":["Havres-Gemmes","Haven Gems","Merkagemas","Gemas de viagem"]},{"id":422,"name":["Gemme d'Enveloppe","Skin Gem","Gema de cuerpo","Gema de corpo"]},{"id":628,"name":["Forgemarteaux","Smithhammers","Forjamartillos","Forjamartelos"]},{"id":189,"name":["Bouclier","Shield","Escudo","Escudo"]},{"id":421,"name":["Gemme de Visage","Face Gem","Gema de cara","Gema de rosto"]},{"id":514,"name":["Raffinage du Mineur","Miner's Refinements","Minerales refinados","Refinamentos do mineiro"]},{"id":688,"name":["","","",""]},{"id":767,"name":["","","",""]},{"id":110,"name":["Epée","Sword","Espada","Espada"]},{"id":114,"name":["Marteau","Hammer","Martillo","Martelo"]},{"id":118,"name":["Armures","Armors","Armaduras","Armaduras"]},{"id":719,"name":["Recettes","Recipes","Recetas","Receitas"]},{"id":744,"name":["Courses Secondaires","Secondary Running","Carreras secundarias","Corridas Secundárias"]},{"id":652,"name":["Havre Monde","Haven World","Merkamundo","Mundo Seguro"]},{"id":819,"name":["","","",""]},{"id":103,"name":["Anneau","Ring","Anillo","Anel"]},{"id":132,"name":["Cape","Cloak","Capa","Capa"]},{"id":543,"name":["Améliorations de coffre de Havre-Sac","Haven Bag Chest Improvements","Mejoras del cofre del merkasako","Melhorias de baú do Saco de Viagem"]},{"id":551,"name":["Objets de Quête","Quest Items","Objetos de misión","Itens de missão"]},{"id":560,"name":["Apparence de Havre-Sac","Haven Bag Appearance","Aspecto del merkasako","Aparência do Saco de Viagem"]},{"id":531,"name":["Ressources de monstres","Monster Resources","Recursos de monstruos","Recursos de monstros"]},{"id":578,"name":["Composants Ebéniste","Handyman Components","Componentes Ebanista","Componentes de marceneiro"]},{"id":687,"name":["Fragments de Reliques","Relic Fragments","Fragmentos de reliquias","Fragmentos de relíquias"]},{"id":727,"name":["","","",""]},{"id":732,"name":["","","",""]},{"id":743,"name":["Finishers","Finishers","Golpes de gracia","Golpes Fatais"]},{"id":113,"name":["Bâton","One-handed Staff","Bastón","Bastão"]},{"id":117,"name":["Arc","Bow","Arco","Arco"]},{"id":120,"name":["Amulette","Amulet","Amuleto","Amuleto"]},{"id":521,"name":["Accessoires","Accessories","Accesorios","Acessórios"]},{"id":702,"name":["Décoration de Havre-Sac","Haven Bag Decoration","Decoración para el merkasako","Decoração de Saco de Viagem"]},{"id":603,"name":["Jetons","Tokens","Fichas","Fichas"]},{"id":626,"name":["","","",""]},{"id":108,"name":["Baguette","Wand","Varita","Varinha"]},{"id":109,"name":["Equipements","Equipment","Equipo","Equipamento"]},{"id":447,"name":["Machines d'Artisanat","Crafting Machines","Máquinas de artesanía","Máquinas de artesanato"]},{"id":525,"name":["Cosmétique","Cosmetics","Apariencia","Cosméticos"]},{"id":546,"name":["Décoration de Havre-Sac","Haven Bag Decoration","Decoración para el merkasako","Decoração de Saco de Viagem"]},{"id":575,"name":["Composants Armurier","Armorer Components","Componentes Armero","Componentes de armeiro"]},{"id":681,"name":["","","",""]},{"id":720,"name":["","","",""]},{"id":734,"name":["","","",""]},{"id":758,"name":["Récoltes","Crops","Cultivos","Colheitas"]},{"id":810,"name":["Pierres d'évolution","Evolution Stones","Piedras de evolución","Pedras de evolução"]},{"id":821,"name":["","","",""]},{"id":226,"name":["Ressources","Resources","Recursos","Recursos"]},{"id":448,"name":["Affiches","Posters","Carteles","Pôsteres"]},{"id":496,"name":["Livres","Books","Libros","Livros"]},{"id":519,"name":["Armes 2 Mains","Two-Handed Weapons","Armas de dos manos","Armas de 2 mãos"]},{"id":646,"name":["Emblème","Emblem","Emblema","Emblema"]},{"id":476,"name":["Attitudes","Emotes","Actitudes","Emotes"]},{"id":614,"name":["Kamas","Kamas","Kamas","Kamas"]},{"id":670,"name":["","","",""]},{"id":695,"name":["","","",""]},{"id":710,"name":["Auras \u0026 Lumières","Light \u0026 Auras","Luces y auras","Auras \u0026 Luzes"]},{"id":518,"name":["Armes 1 Main","One-Handed Weapons","Armas de una mano","Armas de 1 mão"]},{"id":559,"name":["","","",""]},{"id":735,"name":["","","",""]},{"id":736,"name":["La Mâdrâgue","La Mädrague","La Älmädräbä","Älmadräva"]},{"id":739,"name":["Sioupère-Glous","Souper-Glous","Superglús","Bonds, Super Bonds"]},{"id":673,"name":["Nowel","Kwismas","Nawidad","Nataw"]},{"id":701,"name":["Décoration de Havre-Sac","Haven Bag Decoration","Decoración para el merkasako","Decoração de Saco de Viagem"]},{"id":712,"name":["","","",""]},{"id":134,"name":["Casque","Helmet","Casco","Capacete"]},{"id":253,"name":["Bâton à 2 mains","Two-handed Staff","Bastón a dos manos","Bastão de 2 mãos"]},{"id":282,"name":["Récoltes du Trappeur","Trapper's Harvests","Colectas del peletero","Colheitas do caçador"]},{"id":317,"name":["Clefs","Keys","Llaves","Chaves"]},{"id":649,"name":["","","",""]},{"id":820,"name":["","","",""]},{"id":308,"name":["Récoltes du Pêcheur","Fisherman's Harvests","Colectas del pescador","Colheitas do pescador"]},{"id":399,"name":["sacs","bags","bolsos","Sacos"]},{"id":534,"name":["Vitrines \u0026 Ateliers","Display Windows \u0026 Workshops","Vitrinas y talleres","Vitrines e ateliês"]},{"id":809,"name":["Récoltes diverses","Varied Crops","Recolecciones diversas","Coletas diversas"]},{"id":818,"name":["","","",""]},{"id":112,"name":["Dague","Dagger","Daga","Adaga"]},{"id":718,"name":["","","",""]},{"id":761,"name":["Raffinages \u0026 Composants","Refinements \u0026 Components","Elaboraciones y componentes","Refinamentos e componentes"]},{"id":723,"name":["","","",""]},{"id":729,"name":["","","",""]},{"id":812,"name":["Parchemin de Sublimation","Sublimation Scroll","Pergamino de sublimación","Pergaminho de Sublimação"]},{"id":511,"name":["","","",""]},{"id":566,"name":["Décoration de Havre-Sac","Haven Bag Decoration","Decoración para el merkasako","Decoração de Saco de Viagem"]},{"id":570,"name":["Composants Tailleur","Tailor Components","Componentes Sastre","Componentes de alfaiate"]},{"id":671,"name":["","","",""]},{"id":721,"name":["","","",""]}],
      plurial: function(testBool, str) {
        if (testBool) return str + "s";
        return str;
      }
    };
  }
}

let store = new Store();

export { store };
