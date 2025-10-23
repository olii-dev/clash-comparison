// Comprehensive Clash Royale Card Database with Counter Logic & Images
const cardsDatabase = [
    // TROOPS
    { name: 'Archers', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Archers.png' },
    { name: 'Baby Dragon', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/BabyDragon.png' },
    { name: 'Balloon', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Balloon.png' },
    { name: 'Bandit', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Bandit.png' },
    { name: 'Barbarians', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Barbarians.png' },
    { name: 'Bats', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Bats.png' },
    { name: 'Battle Healer', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/BattleHealer.png' },
    { name: 'Battle Ram', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/BattleRam.png' },
    { name: 'Bomber', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Bomber.png' },
    { name: 'Bowler', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Bowler.png' },
    { name: 'Dark Prince', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/DarkPrince.png' },
    { name: 'Dart Goblin', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/DartGoblin.png' },
    { name: 'Electro Dragon', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/ElectroDragon.png' },
    { name: 'Electro Giant', type: 'troop', elixir: 7, image: 'https://www.deckshop.pro/img/card_ed/ElectroGiant.png' },
    { name: 'Electro Wizard', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/ElectroWizard.png' },
    { name: 'Elite Barbarians', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/EliteBarbarians.png' },
    { name: 'Executioner', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Executioner.png' },
    { name: 'Cannon Cart', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/CannonCart.png' },
    { name: 'Firecracker', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Firecracker.png' },
    { name: 'Fire Spirit', type: 'troop', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/FireSpirit.png' },
    { name: 'Fisherman', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Fisherman.png' },
    { name: 'Flying Machine', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/FlyingMachine.png' },
    { name: 'Giant', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Giant.png' },
    { name: 'Giant Skeleton', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/GiantSkeleton.png' },
    { name: 'Goblin Gang', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/GoblinGang.png' },
    { name: 'Goblin Giant', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/GoblinGiant.png' },
    { name: 'Goblins', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Goblins.png' },
    { name: 'Golem', type: 'troop', elixir: 8, image: 'https://www.deckshop.pro/img/card_ed/Golem.png' },
    { name: 'Guards', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Guards.png' },
    { name: 'Heal Spirit', type: 'troop', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/HealSpirit.png' },
    { name: 'Hog Rider', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/HogRider.png' },
    { name: 'Hunter', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Hunter.png' },
    { name: 'Ice Golem', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/IceGolem.png' },
    { name: 'Ice Spirit', type: 'troop', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/IceSpirit.png' },
    { name: 'Ice Wizard', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/IceWizard.png' },
    { name: 'Inferno Dragon', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/InfernoDragon.png' },
    { name: 'Knight', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Knight.png' },
    { name: 'Lava Hound', type: 'troop', elixir: 7, image: 'https://www.deckshop.pro/img/card_ed/LavaHound.png' },
    { name: 'Lumberjack', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Lumberjack.png' },
    { name: 'Magic Archer', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/MagicArcher.png' },
    { name: 'Mega Knight', type: 'troop', elixir: 7, image: 'https://www.deckshop.pro/img/card_ed/MegaKnight.png' },
    { name: 'Mega Minion', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/MegaMinion.png' },
    { name: 'Minion Horde', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/MinionHorde.png' },
    { name: 'Minions', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Minions.png' },
    { name: 'Mother Witch', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/MotherWitch.png' },
    { name: 'Musketeer', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Musketeer.png' },
    { name: 'Night Witch', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/NightWitch.png' },
    { name: 'P.E.K.K.A.', type: 'troop', elixir: 7, image: 'https://www.deckshop.pro/img/card_ed/PEKKA.png' },
    { name: 'Phoenix', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Phoenix.png' },
    { name: 'Prince', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Prince.png' },
    { name: 'Princess', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Princess.png' },
    { name: 'Ram Rider', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/RamRider.png' },
    { name: 'Royal Ghost', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/RoyalGhost.png' },
    { name: 'Royal Giant', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/RoyalGiant.png' },
    { name: 'Royal Hogs', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/RoyalHogs.png' },
    { name: 'Royal Recruits', type: 'troop', elixir: 7, image: 'https://www.deckshop.pro/img/card_ed/RoyalRecruits.png' },
    { name: 'Skeleton Army', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/SkeletonArmy.png' },
    { name: 'Skeleton Barrel', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/SkeletonBarrel.png' },
    { name: 'Skeleton Dragons', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/SkeletonDragons.png' },
    { name: 'Skeletons', type: 'troop', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/Skeletons.png' },
    { name: 'Sparky', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Sparky.png' },
    { name: 'Spear Goblins', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/SpearGoblins.png' },
    { name: 'Three Musketeers', type: 'troop', elixir: 9, image: 'https://www.deckshop.pro/img/card_ed/ThreeMusketeers.png' },
    { name: 'Valkyrie', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Valkyrie.png' },
    { name: 'Wall Breakers', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/WallBreakers.png' },
    { name: 'Witch', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Witch.png' },
    { name: 'Wizard', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Wizard.png' },
    { name: 'Zappies', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Zappies.png' },
    { name: 'Archer Queen', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/ArcherQueen.png' },
    { name: 'Golden Knight', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoldenKnight.png' },
    { name: 'Skeleton King', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/SkeletonKing.png' },
    { name: 'Miner', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Miner.png' },
    { name: 'Electro Spirit', type: 'troop', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/ElectroSpirit.png' },
    { name: 'Berserker', type: 'troop', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Berserker.png' },
    { name: 'Rascals', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Rascals.png' },
    { name: 'Elixir Golem', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/ElixirGolem.png' },
    { name: 'Mini P.E.K.K.A.', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/MiniPEKKA.png' },
    { name: 'Rune Giant', type: 'troop', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/RuneGiant.png' },
    { name: 'Goblin Machine', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoblinMachine.png' },
    { name: 'Spirit Empress', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/SpiritEmpress.png' },
    { name: 'Goblin Demolisher', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoblinDemolisher.png' },
    { name: 'Mighty Miner', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/MightyMiner.png' },
    { name: 'Goblinstein', type: 'troop', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Goblinstein.png' },
    { name: 'Monk', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Monk.png' },
    { name: 'Boss Bandit', type: 'troop', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/BossBandit.png' },
    { name: 'Little Prince', type: 'troop', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/LittlePrince.png' },
    
    // SPELLS
    { name: 'Arrows', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Arrows.png' },
    { name: 'Barbarian Barrel', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/BarbBarrel.png' },
    { name: 'Earthquake', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Earthquake.png' },
    { name: 'Fireball', type: 'spell', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Fireball.png' },
    { name: 'Freeze', type: 'spell', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Freeze.png' },
    { name: 'Giant Snowball', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Snowball.png' },
    { name: 'Goblin Barrel', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/GoblinBarrel.png' },
    { name: 'Lightning', type: 'spell', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Lightning.png' },
    { name: 'Poison', type: 'spell', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Poison.png' },
    { name: 'Rage', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Rage.png' },
    { name: 'Rocket', type: 'spell', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Rocket.png' },
    { name: 'Royal Delivery', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/RoyalDelivery.png' },
    { name: 'The Log', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Log.png' },
    { name: 'Graveyard', type: 'spell', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Graveyard.png' },
    { name: 'Tornado', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Tornado.png' },
    { name: 'Zap', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/Zap.png' },
    { name: 'Mirror', type: 'spell', elixir: 1, image: 'https://www.deckshop.pro/img/card_ed/Mirror.png' },
    { name: 'Goblin Curse', type: 'spell', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/GoblinCurse.png' },
    { name: 'Vines', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Vines.png' },
    { name: 'Clone', type: 'spell', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Clone.png' },
    { name: 'Void', type: 'spell', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/Void.png' },
    
    // BUILDINGS
    { name: 'Bomb Tower', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/BombTower.png' },
    { name: 'Cannon', type: 'building', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Cannon.png' },
    { name: 'Furnace', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Furnace.png' },
    { name: 'Goblin Cage', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoblinCage.png' },
    { name: 'Goblin Drill', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoblinDrill.png' },
    { name: 'Goblin Hut', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/GoblinHut.png' },
    { name: 'Inferno Tower', type: 'building', elixir: 5, image: 'https://www.deckshop.pro/img/card_ed/InfernoTower.png' },
    { name: 'Mortar', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Mortar.png' },
    { name: 'Barbarian Hut', type: 'building', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/BarbHut.png' },
    { name: 'Elixir Collector', type: 'building', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Collector.png' },
    { name: 'Tombstone', type: 'building', elixir: 3, image: 'https://www.deckshop.pro/img/card_ed/Tombstone.png' },
    { name: 'Tesla', type: 'building', elixir: 4, image: 'https://www.deckshop.pro/img/card_ed/Tesla.png' },
    { name: 'X-Bow', type: 'building', elixir: 6, image: 'https://www.deckshop.pro/img/card_ed/Xbow.png' },
    { name: 'Suspicious Bush', type: 'building', elixir: 2, image: 'https://www.deckshop.pro/img/card_ed/SuspiciousBush.png' }
];

// Counter Logic - Define what counters each card (based on Fandom Wiki & community research)
// Data sources: Reddit counter guide (2016), Fandom Wiki troop strategies, DeckShop pro analysis
// ENHANCED: Strategic hierarchies based on elixir trades, mechanic advantages, and positioning
const counterMap = {
    // Troops - Enhanced with strategic analysis
    'Archers': {
        strong: ['Arrows', 'Zap', 'Skeletons', 'Goblins', 'Spear Goblins', 'Fire Spirit', 'Bomb Tower', 'Splash spells'],
        moderate: ['Baby Dragon', 'Knight', 'Minions', 'Ice Wizard', 'Archers']
    },
    'Baby Dragon': {
        strong: ['Musketeer', 'Inferno Dragon', 'Electro Dragon', 'Electro Wizard', 'Tornado', 'Swarm', 'Minion Horde'],
        moderate: ['Spear Goblins', 'Magic Archer', 'Poison', 'Lightning', 'Three Musketeers']
    },
    'Balloon': {
        strong: ['Minions', 'Inferno Dragon', 'Electro Dragon', 'Hunter', 'Musketeer', 'Inferno Tower', 'Tesla'],
        moderate: ['Electro Wizard', 'Poison', 'Tornado', 'Rocket', 'Cannon']
    },
    'Bandit': {
        strong: ['Inferno Dragon', 'Skeleton Army', 'Minions', 'Tornado', 'Archers', 'Spear Goblins'],
        moderate: ['Electro Wizard', 'Ice Wizard', 'Swarm', 'Hunter', 'Poison']
    },
    'Barbarians': {
        strong: ['Fireball', 'Tornado', 'Earthquake', 'Executioner', 'Wizard', 'Splash spells', 'Lightning'],
        moderate: ['Mini P.E.K.K.A.', 'Bomber', 'Poison', 'Valkyrie', 'Fire Spirit', 'Bomb Tower']
    },
    'Bats': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Executioner', 'Wizard', 'Fire Spirit', 'Firecracker'],
        moderate: ['Tornado', 'Bomber', 'Baby Dragon', 'Ice Wizard']
    },
    'Battle Healer': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Lightning', 'Poison', 'Fireball'],
        moderate: ['Earthquake', 'Electro Wizard', 'Tornado']
    },
    'Battle Ram': {
        strong: ['Skeleton Army', 'Tornado', 'Inferno Dragon', 'Earthquake', 'Swarm', 'Cannon'],
        moderate: ['Guards', 'Bomber', 'Poison', 'The Log', 'Mini P.E.K.K.A.']
    },
    'Bomber': {
        strong: ['Mini P.E.K.K.A.', 'Prince', 'Wizard', 'Hunter', 'Knight', 'Skeletons'],
        moderate: ['Musketeer', 'Dart Goblin', 'Magic Archer', 'Tornado']
    },
    'Bowler': {
        strong: ['Inferno Dragon', 'Flying Machine', 'Musketeer', 'Hunter', 'Lightning', 'Poison'],
        moderate: ['Magic Archer', 'Tornado', 'Fireball']
    },
    'Dark Prince': {
        strong: ['Cannon', 'Skeleton Army', 'Tornado', 'Valkyrie', 'Swarm', 'Earthquake'],
        moderate: ['Inferno Dragon', 'Poison', 'Ice Wizard', 'The Log']
    },
    'Dart Goblin': {
        strong: ['Musketeer', 'Magic Archer', 'Wizard', 'Hunter', 'Swarm'],
        moderate: ['Mini P.E.K.K.A.', 'Baby Dragon', 'Poison']
    },
    'Electro Dragon': {
        strong: ['Poison', 'Inferno Tower', 'Earthquake', 'Tornado', 'Lightning', 'Freeze'],
        moderate: ['Mini P.E.K.K.A.', 'Fireball', 'Hunter']
    },
    'Electro Giant': {
        strong: ['Inferno Dragon', 'Poison', 'Earthquake', 'Fireball', 'Rocket', 'Freeze'],
        moderate: ['Hunter', 'Tornado', 'The Log', 'Lightning']
    },
    'Electro Wizard': {
        strong: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Tornado', 'Poison', 'Skeleton Army'],
        moderate: ['Hunter', 'Musketeer', 'Freeze']
    },
    'Elite Barbarians': {
        strong: ['Fireball', 'Executioner', 'Tornado', 'Ice Wizard', 'Poison', 'Earthquake'],
        moderate: ['Inferno Dragon', 'Lightning', 'Swarm', 'Baby Dragon']
    },
    'Executioner': {
        strong: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Lightning', 'Hunter', 'Poison'],
        moderate: ['Musketeer', 'Dart Goblin', 'Magic Archer', 'Tornado']
    },
    'Cannon Cart': {
        strong: ['Skeleton Army', 'Tornado', 'Inferno Dragon', 'Poison', 'Mini P.E.K.K.A.', 'Lightning'],
        moderate: ['Hunter', 'Swarm', 'Executioner']
    },
    'Firecracker': {
        strong: ['Skeleton Army', 'Minions', 'Goblins', 'Bats', 'Swarm', 'Bomber'],
        moderate: ['Musketeer', 'Wizard', 'Inferno Dragon', 'Spear Goblins']
    },
    'Fire Spirit': {
        strong: ['Arrows', 'Zap', 'Ice Wizard', 'Tornado', 'Skeletons', 'Bomb Tower'],
        moderate: ['Bomber', 'Knight', 'Splash spells']
    },
    'Fisherman': {
        strong: ['Skeleton Army', 'Mini P.E.K.K.A.', 'Poison', 'Tornado', 'Swarm'],
        moderate: ['Inferno Dragon', 'Earthquake', 'Hunter', 'Electro Wizard']
    },
    'Flying Machine': {
        strong: ['Inferno Dragon', 'Hunter', 'Electro Wizard', 'Musketeer', 'Lightning', 'Tornado'],
        moderate: ['Wizard', 'Magic Archer', 'Poison', 'Firecracker']
    },
    'Giant': {
        strong: ['Inferno Dragon', 'Inferno Tower', 'Mini P.E.K.K.A.', 'Hunter', 'Cannon', 'Tornado', 'Lightning'],
        moderate: ['Poison', 'Fireball', 'Rocket', 'Musketeer', 'Earthquake']
    },
    'Giant Skeleton': {
        strong: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Hunter', 'Tornado', 'Freeze'],
        moderate: ['Poison', 'Fireball', 'Skeleton Army', 'Earthquake']
    },
    'Goblin Gang': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Splash spells', 'The Log', 'Royal Delivery'],
        moderate: ['Wizard', 'Executioner', 'Fire Spirit']
    },
    'Goblin Giant': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Lightning'],
        moderate: ['Poison', 'Fireball', 'Earthquake', 'Freeze']
    },
    'Goblins': {
        strong: ['Skeletons', 'Arrows', 'Zap', 'Bomb Tower', 'Spear Goblins', 'Fire Spirit'],
        moderate: ['Wizard', 'Bomber', 'The Log', 'Knight']
    },
    'Golem': {
        strong: ['Inferno Dragon', 'Inferno Tower', 'Mini P.E.K.K.A.', 'Hunter', 'Lightning', 'Tornado', 'Freeze'],
        moderate: ['Poison', 'Rocket', 'Fireball', 'Earthquake', 'Electro Dragon']
    },
    'Guards': {
        strong: ['Skeletons', 'Arrows', 'Zap', 'Splash spells', 'The Log'],
        moderate: ['Wizard', 'Executioner', 'Tornado', 'Baby Dragon']
    },
    'Heal Spirit': {
        strong: ['Arrows', 'Zap', 'Tornado', 'Bomb Tower', 'Fire Spirit', 'Firecracker'],
        moderate: ['Bomber', 'Ice Spirit', 'Wizard']
    },
    'Hog Rider': {
        strong: ['Cannon', 'Tornado', 'Skeleton Army', 'Earthquake', 'Swarm', 'Bomb Tower', 'The Log', 'Tesla'],
        moderate: ['Poison', 'Fireball', 'Inferno Dragon', 'Valkyrie', 'Mortar']
    },
    'Hunter': {
        strong: ['Inferno Dragon', 'Musketeer', 'Magic Archer', 'Dart Goblin', 'Lightning', 'Tornado'],
        moderate: ['Poison', 'Freeze', 'Fireball']
    },
    'Ice Golem': {
        strong: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Poison', 'Fireball', 'Hunter'],
        moderate: ['Musketeer', 'Electro Wizard', 'Earthquake']
    },
    'Ice Spirit': {
        strong: ['Arrows', 'Zap', 'Tornado', 'Bomb Tower', 'Skeletons', 'Fire Spirit'],
        moderate: ['Wizard', 'Bomber', 'Knight']
    },
    'Ice Wizard': {
        strong: ['Cannon', 'Inferno Dragon', 'Musketeer', 'Hunter', 'Hog Rider'],
        moderate: ['Mini P.E.K.K.A.', 'Magic Archer', 'Fireball']
    },
    'Inferno Dragon': {
        strong: ['Lightning', 'Freeze', 'Tornado', 'Electro Wizard', 'The Log', 'Zap', 'Electro Dragon'],
        moderate: ['Mini P.E.K.K.A.', 'Hunter', 'Poison', 'Rocket']
    },
    'Knight': {
        strong: ['Minions', 'Spear Goblins', 'Musketeer', 'Archers', 'Splash spells'],
        moderate: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Hunter', 'Fireball']
    },
    'Lava Hound': {
        strong: ['Inferno Dragon', 'Inferno Tower', 'Hunter', 'Electro Dragon', 'Lightning', 'Tornado', 'Freeze'],
        moderate: ['Mini P.E.K.K.A.', 'Musketeer', 'Magic Archer', 'Poison', 'Fireball']
    },
    'Lumberjack': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Musketeer', 'Tornado'],
        moderate: ['Poison', 'Swarm', 'Freeze', 'Skeleton Army']
    },
    'Magic Archer': {
        strong: ['Inferno Dragon', 'Swarm', 'Hunter', 'Mini P.E.K.K.A.', 'Musketeer'],
        moderate: ['Poison', 'Tornado', 'Lightning']
    },
    'Mega Knight': {
        strong: ['Inferno Dragon', 'Hunter', 'Lightning', 'Tornado', 'Poison', 'Skeleton Army'],
        moderate: ['Mini P.E.K.K.A.', 'Fireball', 'Freeze']
    },
    'Mega Minion': {
        strong: ['Inferno Dragon', 'Swarm', 'Splash spells', 'Hunter', 'Poison', 'Lightning'],
        moderate: ['Tornado', 'Fireball', 'Electro Wizard']
    },
    'Minion Horde': {
        strong: ['Arrows', 'Zap', 'Fire Spirits', 'Bomb Tower', 'Executioner', 'Royal Delivery', 'Giant Snowball', 'Wizard'],
        moderate: ['Ice Wizard', 'Fireball', 'Ice Spirit', 'Baby Dragon', 'Splash spells']
    },
    'Minions': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Splash spells', 'Fire Spirit', 'Royal Delivery'],
        moderate: ['Wizard', 'Bomber', 'Spear Goblins', 'Baby Dragon']
    },
    'Mother Witch': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Poison'],
        moderate: ['Earthquake', 'Lightning', 'Fireball']
    },
    'Musketeer': {
        strong: ['Skeleton Army', 'Swarm', 'Poison', 'Lightning', 'Tornado', 'Fireball'],
        moderate: ['Mini P.E.K.K.A.', 'Hunter', 'Electro Wizard', 'Earthquake']
    },
    'Night Witch': {
        strong: ['Inferno Dragon', 'Tornado', 'Lightning', 'Arrows', 'Zap', 'Executioner'],
        moderate: ['Poison', 'Earthquake', 'Baby Dragon']
    },
    'P.E.K.K.A.': {
        strong: ['Inferno Dragon', 'Tornado', 'Lightning', 'Skeleton Army', 'Freeze', 'Electro Dragon', 'Poison'],
        moderate: ['Hunter', 'Fireball', 'Swarm', 'Mini P.E.K.K.A.', 'Earthquake']
    },
    'Prince': {
        strong: ['Skeleton Army', 'Goblins', 'Tombstone', 'Tornado', 'Swarm', 'Cannon'],
        moderate: ['Poison', 'Fireball', 'The Log', 'Inferno Dragon']
    },
    'Phoenix': {
        strong: ['Inferno Dragon', 'Lightning', 'Poison', 'Hunter', 'Freeze', 'Tornado'],
        moderate: ['Mini P.E.K.K.A.', 'Fireball', 'Musketeer']
    },
    'Princess': {
        strong: ['Inferno Dragon', 'Musketeer', 'Hunter', 'Magic Archer', 'Skeletons', 'Archers'],
        moderate: ['Dart Goblin', 'Wizard', 'Lightning']
    },
    'Ram Rider': {
        strong: ['Inferno Dragon', 'Tornado', 'Skeleton Army', 'Earthquake', 'Cannon'],
        moderate: ['Poison', 'Fireball', 'Swarm', 'Electro Wizard']
    },
    'Royal Ghost': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Poison'],
        moderate: ['Electro Wizard', 'Freeze', 'Skeleton Army']
    },
    'Royal Giant': {
        strong: ['Inferno Dragon', 'Mini P.E.K.K.A.', 'Hunter', 'Lightning', 'Tornado'],
        moderate: ['Poison', 'Fireball', 'Cannon', 'Earthquake']
    },
    'Royal Hogs': {
        strong: ['Inferno Dragon', 'Tornado', 'Skeleton Army', 'Earthquake', 'Cannon'],
        moderate: ['Poison', 'Fireball', 'Swarm', 'The Log']
    },
    'Royal Recruits': {
        strong: ['Splash spells', 'Executioner', 'Lightning', 'Earthquake', 'Tornado', 'Fireball'],
        moderate: ['Inferno Dragon', 'Poison', 'Baby Dragon']
    },
    'Skeleton Army': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Splash spells', 'Fireball', 'Ice Spirit', 'Fire Spirit', 'Wizard', 'Executioner', 'Valkyrie', 'Mini P.E.K.K.A.', 'Royal Delivery'],
        moderate: ['Tornado', 'Minions', 'Baby Dragon', 'Giant Snowball', 'Knight', 'Bomber', 'Electro Wizard']
    },
    'Skeleton Barrel': {
        strong: ['Arrows', 'Zap', 'Splash spells', 'Inferno Dragon', 'Electro Wizard'],
        moderate: ['Wizard', 'Bomb Tower', 'The Log', 'Lightning']
    },
    'Skeleton Dragons': {
        strong: ['Inferno Dragon', 'Poison', 'Lightning', 'Hunter', 'Tornado'],
        moderate: ['Fireball', 'Electro Wizard', 'Freeze']
    },
    'Skeletons': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Splash spells', 'Fire Spirit'],
        moderate: ['Wizard', 'Bomber', 'The Log', 'Knight']
    },
    'Sparky': {
        strong: ['Inferno Dragon', 'Freeze', 'Tornado', 'Lightning', 'The Log', 'Electro Wizard'],
        moderate: ['Poison', 'Earthquake', 'Zap', 'Rocket']
    },
    'Spear Goblins': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Splash spells', 'The Log', 'Royal Delivery'],
        moderate: ['Wizard', 'Bomber', 'Fire Spirit']
    },
    'Three Musketeers': {
        strong: ['Fireball', 'Lightning', 'Earthquake', 'Rocket', 'Tornado', 'Poison', 'Inferno Dragon'],
        moderate: ['Hunter', 'Magic Archer', 'Wizard', 'Electro Dragon', 'Freeze']
    },
    'Valkyrie': {
        strong: ['Inferno Dragon', 'Lightning', 'Mini P.E.K.K.A.', 'Poison', 'Tornado', 'Electro Dragon', 'Cannon'],
        moderate: ['Hunter', 'Fireball', 'Earthquake', 'Freeze']
    },
    'Wall Breakers': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Tornado', 'The Log', 'Fire Spirit'],
        moderate: ['Wizard', 'Bomber', 'Skeletons', 'Knight']
    },
    'Witch': {
        strong: ['Valkyrie', 'Executioner', 'Bowler', 'Lightning', 'Tornado', 'Mini P.E.K.K.A.', 'Inferno Dragon', 'Wizard', 'Baby Dragon', 'Poison'],
        moderate: ['Hunter', 'Fireball', 'Earthquake', 'Splash spells', 'Electro Wizard']
    },
    'Wizard': {
        strong: ['Knight', 'Inferno Dragon', 'Mini P.E.K.K.A.', 'Tornado', 'Skeleton Army'],
        moderate: ['Hunter', 'Poison', 'Fireball', 'Electro Wizard']
    },
    'Zappies': {
        strong: ['Skeleton Army', 'Swarm', 'Tornado', 'Poison', 'Fireball'],
        moderate: ['Lightning', 'Earthquake', 'Ice Wizard']
    },
    'Archer Queen': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Freeze'],
        moderate: ['Poison', 'Lightning', 'Musketeer']
    },
    'Golden Knight': {
        strong: ['Inferno Dragon', 'Tornado', 'Skeleton Army', 'Poison', 'Freeze'],
        moderate: ['Hunter', 'Lightning', 'Electro Wizard']
    },
    'Skeleton King': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Lightning'],
        moderate: ['Poison', 'Freeze', 'Earthquake']
    },
    'Miner': {
        strong: ['Skeleton Army', 'Inferno Dragon', 'Tornado', 'Swarm', 'Goblins'],
        moderate: ['Poison', 'Mini P.E.K.K.A.', 'The Log', 'Guards']
    },
    'Electro Spirit': {
        strong: ['Arrows', 'Zap', 'Tornado', 'Ice Wizard', 'Bomb Tower'],
        moderate: ['Bomber', 'Splash spells', 'Knight']
    },
    'Berserker': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Poison'],
        moderate: ['Freeze', 'Lightning', 'Earthquake']
    },
    'Rascals': {
        strong: ['Splash spells', 'Executioner', 'Baby Dragon', 'Tornado', 'Wizard'],
        moderate: ['Poison', 'Fireball', 'Arrows']
    },
    'Elixir Golem': {
        strong: ['Tornado', 'Poison', 'Inferno Dragon', 'Lightning', 'Freeze'],
        moderate: ['Earthquake', 'Fireball', 'Mini P.E.K.K.A.']
    },
    'Mini P.E.K.K.A.': {
        strong: ['Skeleton Army', 'Tornado', 'Swarm', 'Goblins', 'Cannon'],
        moderate: ['Poison', 'Inferno Dragon', 'The Log', 'Freeze']
    },
    'Rune Giant': {
        strong: ['Inferno Dragon', 'Tornado', 'Lightning', 'Hunter', 'Poison'],
        moderate: ['Freeze', 'Mini P.E.K.K.A.', 'Earthquake']
    },
    'Goblin Machine': {
        strong: ['Skeleton Army', 'Tornado', 'Swarm', 'Inferno Dragon', 'Poison'],
        moderate: ['Mini P.E.K.K.A.', 'The Log', 'Freeze']
    },
    'Spirit Empress': {
        strong: ['Inferno Dragon', 'Hunter', 'Lightning', 'Poison', 'Tornado'],
        moderate: ['Freeze', 'Mini P.E.K.K.A.', 'Earthquake']
    },
    'Goblin Demolisher': {
        strong: ['Skeleton Army', 'Swarm', 'Tornado', 'Poison', 'Inferno Dragon'],
        moderate: ['Mini P.E.K.K.A.', 'The Log', 'Freeze']
    },
    'Mighty Miner': {
        strong: ['Inferno Dragon', 'Tornado', 'Skeleton Army', 'Poison', 'Lightning', 'Swarm'],
        moderate: ['Hunter', 'Freeze', 'Mini P.E.K.K.A.']
    },
    'Goblinstein': {
        strong: ['Inferno Dragon', 'Tornado', 'Lightning', 'Hunter', 'Poison', 'Freeze'],
        moderate: ['Mini P.E.K.K.A.', 'Earthquake', 'Fireball']
    },
    'Monk': {
        strong: ['Inferno Dragon', 'Hunter', 'Mini P.E.K.K.A.', 'Tornado', 'Poison', 'Lightning'],
        moderate: ['Freeze', 'Earthquake', 'Fireball']
    },
    'Boss Bandit': {
        strong: ['Inferno Dragon', 'Skeleton Army', 'Tornado', 'Poison', 'Mini P.E.K.K.A.', 'Lightning'],
        moderate: ['Hunter', 'Freeze', 'Earthquake']
    },
    'Little Prince': {
        strong: ['Inferno Dragon', 'Tornado', 'Poison', 'Lightning', 'Hunter', 'Freeze'],
        moderate: ['Mini P.E.K.K.A.', 'Earthquake', 'Fireball']
    },
    
    // SPELLS - Enhanced with strategic analysis
    'Arrows': {
        strong: ['Minion Horde', 'Bats', 'Skeleton Army', 'Goblin Gang', 'Night Witch', 'Firecracker', 'Wall Breakers'],
        moderate: ['Minions', 'Spear Goblins', 'Skeletons', 'Goblin Barrel']
    },
    'Mirror': {
        strong: ['Cycle cards', 'Cheap spells', 'Small troops'],
        moderate: ['Any card type', 'Defensive units']
    },
    'Goblin Curse': {
        strong: ['Swarm units', 'Goblins', 'Skeleton Army', 'Minions', 'Bats', 'Guards'],
        moderate: ['Small troops', 'Spirits', 'Firecracker']
    },
    'Vines': {
        strong: ['Ground units', 'Troops', 'Tanks', 'Swarms', 'Buildings'],
        moderate: ['Medium troops', 'Defensive structures', 'Flying troops']
    },
    'Clone': {
        strong: ['High HP troops', 'Tanks', 'Strong units', 'Dragons', 'Mini P.E.K.K.A.'],
        moderate: ['Medium troops', 'Legends', 'Splash damage']
    },
    'Void': {
        strong: ['Air units', 'Dragons', 'Flying troops', 'Lava Hound', 'Balloon', 'Baby Dragon'],
        moderate: ['Balloons', 'Flying Machine', 'Electro Dragon', 'Phoenix']
    },
    'Barbarian Barrel': {
        strong: ['Goblins', 'Skeleton Army', 'Spear Goblins', 'Bats', 'Wall Breakers', 'Firecracker'],
        moderate: ['Minions', 'Ice Spirit', 'Skeletons']
    },
    'Earthquake': {
        strong: ['Buildings', 'Giant', 'Golem', 'Barbarians', 'Hog Rider', 'Royal Hogs', 'Furnace'],
        moderate: ['Barbarian Hut', 'Mortar', 'Inferno Tower', 'Tesla']
    },
    'Fireball': {
        strong: ['Three Musketeers', 'Minion Horde', 'Barbarians', 'Goblin Giant', 'Wizard', 'Baby Dragon'],
        moderate: ['Bomber', 'Valkyrie', 'Witch', 'Musketeer', 'Hunter']
    },
    'Freeze': {
        strong: ['Inferno Dragon', 'Sparky', 'Mega Knight', 'Mini P.E.K.K.A.', 'P.E.K.K.A.', 'Electro Giant', 'Cannon'],
        moderate: ['Hunter', 'Musketeer', 'Lava Hound', 'Tesla']
    },
    'Giant Snowball': {
        strong: ['Swarm', 'Bats', 'Minions', 'Skeleton Army', 'Goblins', 'Firecracker'],
        moderate: ['Spear Goblins', 'Fire Spirit', 'Minion Horde']
    },
    'Goblin Barrel': {
        strong: ['Arrows', 'Zap', 'The Log', 'Tornado', 'Bomb Tower', 'Cannon'],
        moderate: ['Wizard', 'Executioner', 'Fireball']
    },
    'Lightning': {
        strong: ['Musketeer', 'Hunter', 'Witch', 'Night Witch', 'Three Musketeers', 'Flying Machine', 'Electro Dragon'],
        moderate: ['Wizard', 'Magic Archer', 'Inferno Dragon', 'Lava Hound']
    },
    'Poison': {
        strong: ['Witch', 'Wizard', 'Musketeer', 'Bomber', 'Goblin Giant', 'Baby Dragon', 'Electro Dragon'],
        moderate: ['Battle Healer', 'Inferno Dragon', 'Princess', 'Night Witch']
    },
    'Rage': {
        strong: ['P.E.K.K.A.', 'Mega Knight', 'Sparky', 'Mini P.E.K.K.A.', 'Lumberjack', 'Prince'],
        moderate: ['Balloon', 'Lava Hound', 'Golem', 'Giant Skeleton']
    },
    'Rocket': {
        strong: ['Three Musketeers', 'Musketeer', 'Hunter', 'Inferno Dragon', 'Witch', 'Princess', 'Executioner'],
        moderate: ['Wizard', 'Bomber', 'Dart Goblin', 'Buildings']
    },
    'Royal Delivery': {
        strong: ['Swarm', 'Bats', 'Goblins', 'Minions', 'Skeleton Army', 'Firecracker'],
        moderate: ['Wall Breakers', 'Ice Spirit', 'Spear Goblins']
    },
    'The Log': {
        strong: ['Goblins', 'Skeleton Army', 'Spear Goblins', 'Wall Breakers', 'Bandit', 'Inferno Dragon'],
        moderate: ['Prince', 'Ram Rider', 'Hog Rider', 'Battle Ram']
    },
    'Graveyard': {
        strong: ['Splash spells', 'Baby Dragon', 'Executioner', 'Tornado', 'Arrows', 'Zap', 'Bomb Tower'],
        moderate: ['Wizard', 'Bomber', 'Inferno Dragon']
    },
    'Tornado': {
        strong: ['Inferno Dragon', 'Sparky', 'Lava Hound', 'Mega Knight', 'Mini P.E.K.K.A.', 'Hog Rider'],
        moderate: ['Hunter', 'Executioner', 'Prince', 'Giant', 'Golem', 'P.E.K.K.A.']
    },
    'Zap': {
        strong: ['Minion Horde', 'Bats', 'Skeleton Army', 'Goblin Gang', 'Inferno Dragon', 'Sparky'],
        moderate: ['Electro Wizard', 'Wall Breakers', 'Firecracker', 'Night Witch']
    },
    
    // BUILDINGS - Enhanced with strategic analysis
    'Bomb Tower': {
        strong: ['Bats', 'Minions', 'Goblin Gang', 'Skeleton Army', 'Flying Machine', 'Firecracker'],
        moderate: ['Goblins', 'Spear Goblins', 'Minion Horde', 'Skeleton Dragons']
    },
    'Cannon': {
        strong: ['Hog Rider', 'Balloon', 'Royal Giant', 'Battle Ram', 'Ram Rider', 'Prince'],
        moderate: ['Goblin Gang', 'Bats', 'Ice Wizard', 'Hog Rider', 'Battle Healer']
    },
    'Furnace': {
        strong: ['Tornado', 'Earthquake', 'Rocket', 'Fireball', 'Lightning'],
        moderate: ['Poison', 'Arrows', 'Zap']
    },
    'Goblin Cage': {
        strong: ['Arrows', 'Zap', 'Rocket', 'Earthquake', 'Tornado', 'The Log'],
        moderate: ['Fireball', 'Poison', 'Freeze']
    },
    'Goblin Drill': {
        strong: ['Arrows', 'Zap', 'Rocket', 'Earthquake', 'Lightning', 'The Log'],
        moderate: ['Fireball', 'Poison', 'Tornado']
    },
    'Goblin Hut': {
        strong: ['Arrows', 'Zap', 'Rocket', 'Earthquake', 'Lightning'],
        moderate: ['Poison', 'Tornado', 'Fireball', 'Giant Snowball']
    },
    'Inferno Tower': {
        strong: ['Golem', 'Lava Hound', 'Giant', 'P.E.K.K.A.', 'Electro Dragon', 'Giant Skeleton'],
        moderate: ['Freeze', 'Tornado', 'Lightning', 'Electro Giant']
    },
    'Mortar': {
        strong: ['Hog Rider', 'Giant', 'Balloon', 'Battle Ram', 'Earthquake', 'Royal Giant'],
        moderate: ['Poison', 'Rocket', 'Tornado', 'Lightning']
    },
    'Barbarian Hut': {
        strong: ['Arrows', 'Zap', 'Rocket', 'Earthquake', 'Lightning', 'Fireball'],
        moderate: ['Poison', 'Tornado', 'Executioner']
    },
    'Elixir Collector': {
        strong: ['Rocket', 'Lightning', 'Earthquake', 'Tornado', 'Fireball'],
        moderate: ['Poison', 'Arrows', 'Zap']
    },
    'Tombstone': {
        strong: ['Arrows', 'Zap', 'Tornado', 'Earthquake', 'Fire Spirit'],
        moderate: ['Fireball', 'Poison', 'Royal Delivery']
    },
    'Tesla': {
        strong: ['Hog Rider', 'Balloon', 'Giant', 'Mini P.E.K.K.A.', 'Inferno Dragon'],
        moderate: ['Poison', 'Rocket', 'Earthquake', 'Electro Wizard']
    },
    'X-Bow': {
        strong: ['Hog Rider', 'Giant', 'Mini P.E.K.K.A.', 'Hunter', 'Rocket', 'Earthquake'],
        moderate: ['Poison', 'Tornado', 'Lightning', 'Fireball']
    },
    'Suspicious Bush': {
        strong: ['Arrows', 'Zap', 'Bomb Tower', 'Fire Spirit', 'Tornado'],
        moderate: ['Splash spells', 'Baby Dragon', 'Bomber']
    }
};

// DOM Elements
const cardInput = document.getElementById('cardInput');
const suggestionsDropdown = document.getElementById('suggestions');
const selectedCardInfo = document.getElementById('selectedCard');
const countersContainer = document.getElementById('countersContainer');
const filterSection = document.getElementById('filterSection');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentSelectedCard = null;
let currentFilterType = 'all';

// Search and Autocomplete
cardInput.addEventListener('input', () => {
    const searchTerm = cardInput.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        suggestionsDropdown.classList.remove('active');
        return;
    }
    
    const matches = cardsDatabase.filter(card => 
        card.name.toLowerCase().includes(searchTerm)
    );
    
    if (matches.length === 0) {
        suggestionsDropdown.classList.remove('active');
        return;
    }
    
    suggestionsDropdown.innerHTML = matches
        .slice(0, 8)
        .map(card => `
            <div class="suggestion-item" data-card-name="${card.name}">
                ${card.name}
                <span style="color: #999; font-size: 0.85rem; margin-left: 10px;">${card.type} • ${card.elixir} elixir</span>
            </div>
        `)
        .join('');
    
    suggestionsDropdown.classList.add('active');
    
    const suggestionItems = suggestionsDropdown.querySelectorAll('.suggestion-item');
    suggestionItems.forEach(item => {
        item.addEventListener('click', selectCard);
    });
});

cardInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        suggestionsDropdown.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsDropdown.classList.remove('active');
    }
});

function selectCard(e) {
    const cardName = e.currentTarget.dataset.cardName;
    const card = cardsDatabase.find(c => c.name === cardName);
    
    if (!card) return;
    
    cardInput.value = card.name;
    suggestionsDropdown.classList.remove('active');
    currentSelectedCard = card;
    currentFilterType = 'all';
    
    displaySelectedCard(card);
    displayCounters(card);
    filterSection.style.display = 'block';
    
    // Reset filter buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    filterButtons[0].classList.add('active');
}

function displaySelectedCard(card) {
    selectedCardInfo.innerHTML = `
        <div class="card-info-header">
            <div>
                <span class="card-name">${card.name}</span>
                <span class="badge">${card.type.charAt(0).toUpperCase() + card.type.slice(1)}</span>
            </div>
            <img src="${card.image}" alt="${card.name}" style="width: 60px; height: 60px; object-fit: contain; opacity: 0.8;">
        </div>
        <div class="card-details">
            <div class="card-detail">
                <strong>Elixir Cost:</strong> <span style="color: #4CAF50; font-weight: bold;">${card.elixir}</span>
            </div>
            <div class="card-detail">
                <strong>Type:</strong> ${card.type.charAt(0).toUpperCase() + card.type.slice(1)}
            </div>
        </div>
    `;
    selectedCardInfo.classList.add('active');
}

function displayCounters(card) {
    const counters = counterMap[card.name];
    
    if (!counters) {
        countersContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🤔</div>
                <p>No counter data available for this card yet.</p>
            </div>
        `;
        return;
    }
    
    const strongCounters = counters.strong.map(name => ({
        name,
        strength: 'strong',
        card: cardsDatabase.find(c => c.name === name)
    })).filter(c => c.card);
    
    const moderateCounters = counters.moderate.map(name => ({
        name,
        strength: 'moderate',
        card: cardsDatabase.find(c => c.name === name)
    })).filter(c => c.card);
    
    const allCounters = [...strongCounters, ...moderateCounters];
    
    const filteredCounters = currentFilterType === 'all' 
        ? allCounters 
        : allCounters.filter(c => c.card.type === currentFilterType);
    
    if (filteredCounters.length === 0) {
        countersContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>No counters found for this filter.</p>
            </div>
        `;
        return;
    }
    
    countersContainer.innerHTML = filteredCounters
        .map(counter => `
            <div class="counter-card ${counter.strength}" style="--card-image: url('${counter.card.image}');">
                <div class="counter-strength-badge strength-${counter.strength}">
                    ${counter.strength === 'strong' ? '⭐ Strong Counter' : '✓ Moderate Counter'}
                </div>
                <div class="counter-name">${counter.name}</div>
                <div class="counter-type">${counter.card.type}</div>
                <div class="counter-elixir">
                    <span class="elixir-label">Elixir Cost:</span>
                    <span class="elixir-cost">${counter.card.elixir}</span>
                </div>
            </div>
        `)
        .join('');
}

// Filter Buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilterType = btn.dataset.type;
        
        if (currentSelectedCard) {
            displayCounters(currentSelectedCard);
        }
    });
});

// Initial message
window.addEventListener('load', () => {
    countersContainer.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">🔍</div>
            <p>Search for a card to find its best counters</p>
        </div>
    `;
});
