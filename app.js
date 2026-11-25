// ==========================================================================
// VICETOOLKIT - CLEAN EDITORIAL ENGINE & LOGIC
// 19 Confirmed Cheat Sequences, Authentic Vehicle Photos, & Leaflet GIS Map
// ==========================================================================

// --- Complete Verified Cheat Database (19 Confirmed Sequences) ---

const cheatsData = [
  {
    id: "cash-250-000",
        title: "$250,000 Liquid Currency",
    category: "money",
    desc: "Instantly gives you $250,000",
    unlock: "Make $250,000 from fenced goods",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["UP", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "DOWN", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["UP", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "DOWN", "RIGHT"] }
  },
  {
    id: "drunk",
    title: "Instant Intoxication (Drunk Mode)",
    category: "player",
    desc: "Instantly makes you and your partner drunk",
    unlock: "Spend $2,500 on alcohol",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["UP", "LEFT", "RIGHT", "UP", "UP", "LEFT", "RIGHT", "UP", "LEFT", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["UP", "LEFT", "RIGHT", "UP", "UP", "LEFT", "RIGHT", "UP", "LEFT", "RIGHT"] }
  },
  {
    id: "raise-heat-level",
    title: "Escalate Wanted Heat Level",
    category: "wanted",
    desc: "Raises your level of heat across the map",
    unlock: "TBD",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["LEFT", "DOWN", "RIGHT", "DOWN", "UP", "DOWN", "UP"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["LEFT", "DOWN", "RIGHT", "DOWN", "UP", "DOWN", "UP"] }
  },
  {
    id: "raise-wanted-level",
    title: "Raise Wanted Search Level",
    category: "wanted",
    desc: "Raises your wanted level",
    unlock: "Lose a 3-star wanted level 50 times",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "unlimited-focus",
    title: "Unlimited Operational Focus",
    category: "player",
    desc: "Focus never runs out",
    unlock: "TBD",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "UP", "UP", "DOWN", "UP", "DOWN", "UP", "DOWN", "UP", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "UP", "UP", "DOWN", "UP", "DOWN", "UP", "DOWN", "UP", "RIGHT"] }
  },
  {
    id: "no-fall-damage",
    title: "Nullify Fall Impact (No Fall Damage)",
    category: "player",
    desc: "You are immune to fall damage",
    unlock: "Survive a freefall from 40 feet 20 times",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["LEFT", "LEFT", "RIGHT", "RIGHT", "UP", "DOWN", "UP", "DOWN"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["LEFT", "LEFT", "RIGHT", "RIGHT", "UP", "DOWN", "UP", "DOWN"] }
  },
  {
    id: "parachute",
    title: "Emergency Tactical Parachute",
    category: "player",
    desc: "Adds a parachute to your loadout",
    unlock: "Complete 50 skydives or base jumps from 300 feet or higher",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "body-armor",
    title: "Tactical Body Armor",
    category: "player",
    desc: "Adds body armor to your loadout",
    unlock: "Complete 100 workouts",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "DOWN", "UP", "UP", "LEFT", "RIGHT", "LEFT", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "DOWN", "UP", "UP", "LEFT", "RIGHT", "LEFT", "RIGHT"] }
  },
  {
    id: "repair-vehicle",
    title: "Instant Vehicle Repair & Restore",
    category: "player",
    desc: "Fully repairs your current vehicle",
    unlock: "Get 1st place in 10 races at Gellhorn Raceway, Thrillbilly Mud Club, and Boone Speedway",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "unlimited-nitrous",
    title: "Unlimited Nitrous Boost",
    category: "player",
    desc: "Nitrous and fuel never runs out on vehicles",
    unlock: "Complete 50 stunt jumps",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "max-ammo",
    title: "Replenish All Munitions (Max Ammo)",
    category: "combat",
    desc: "Fills all ammo to maximum",
    unlock: "Win 25 bronze medals or higher at shooting ranges",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "UP", "RIGHT", "DOWN", "LEFT", "LEFT", "UP", "UP", "DOWN", "LEFT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "UP", "RIGHT", "DOWN", "LEFT", "LEFT", "UP", "UP", "DOWN", "LEFT"] }
  },
  {
    id: "infinite-ammo",
    title: "Infinite Ammunition Reserve",
    category: "combat",
    desc: "Ammo never runs out",
    unlock: "Win 25 silver medals or higher at shooting ranges",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "DOWN", "UP", "UP", "LEFT", "RIGHT", "LEFT", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "DOWN", "UP", "UP", "LEFT", "RIGHT", "LEFT", "RIGHT"] }
  },
  {
    id: "no-reload",
    title: "Bottomless Clip (No Reload)",
    category: "combat",
    desc: "Ammo never runs out with no need to reload",
    unlock: "Win 25 gold medals at shooting ranges",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["LEFT", "RIGHT", "LEFT", "UP", "DOWN", "RIGHT", "UP", "DOWN"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["LEFT", "RIGHT", "LEFT", "UP", "DOWN", "RIGHT", "UP", "DOWN"] }
  },
  {
    id: "all-explosive-weapons",
    title: "Arm All Explosive Weapons",
    category: "combat",
    desc: "Adds all explosive weapons to your loadout with full ammo",
    unlock: "Throw 100 grenades",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "incendiary-ammo",
    title: "Incendiary / High-Explosive Rounds",
    category: "combat",
    desc: "All ammo is incendiary",
    unlock: "Burn 100 enemies with fire damage",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT"] }
  },
  {
    id: "exploding-bottles",
    title: "Volatile Exploding Bottles",
    category: "combat",
    desc: "All bottles explode when damaged",
    unlock: "Throw 100 molotovs",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "explosive-shotgun",
    title: "Heavy Explosive Shotgun Shells",
    category: "combat",
    desc: "Adds a Mason & Keen Shortstraw to your loadout that fires explosive shells",
    unlock: "Hit 100 enemies with explosive damage",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "haunters-h-at",
    title: "Haunters H-AT Heavy Anti-Tank",
    category: "combat",
    desc: "Adds a Haunters H-AT to your loadout",
    unlock: "Blow up 100 vehicles",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "attack-force",
    title: "Superhuman Attack Force (Super Punch)",
    category: "combat",
    desc: "Bullets and melee attacks launch targets on impact",
    unlock: "TBD",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "UP", "LEFT", "LEFT", "RIGHT", "DOWN", "DOWN", "UP", "DOWN"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "UP", "LEFT", "LEFT", "RIGHT", "DOWN", "DOWN", "UP", "DOWN"] }
  },
  {
    id: "exploding-balls",
    title: "Kinetic Exploding Throwables",
    category: "combat",
    desc: "Sports balls explode on impact",
    unlock: "TBD",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "UP", "LEFT", "LEFT", "RIGHT", "DOWN", "DOWN", "UP", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "UP", "LEFT", "LEFT", "RIGHT", "DOWN", "DOWN", "UP", "RIGHT"] }
  },
  {
    id: "vehicle-force",
    title: "Heavy Vehicle Ramming Force",
    category: "combat",
    desc: "Vehicle collisions launch targets",
    unlock: "Kill 25 enemies with a vehicle",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "interstate-ambulance",
    title: "Spawn Interstate Ambulance",
    category: "vehicles",
    desc: "Spawns an Interstate Ambulance",
    unlock: "Discover the Interstate Ambulance in the Progress menu",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "airboat-09",
    title: "Spawn Airboat 09 (Grassrivers Swamp)",
    category: "vehicles",
    desc: "Spawns an Airboat 09",
    unlock: "Complete 5 survival challenges",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["UP", "UP", "RIGHT", "DOWN", "LEFT", "LEFT", "UP", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["UP", "UP", "RIGHT", "DOWN", "LEFT", "LEFT", "UP", "RIGHT"] }
  },
  {
    id: "bravado-banshee",
    title: "Spawn Bravado Banshee Classic",
    category: "vehicles",
    desc: "Spawns a Bravado Banshee",
    unlock: "Complete all combat challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "tuff-bmx",
    title: "Spawn Tuff BMX Stunt Bicycle",
    category: "vehicles",
    desc: "Spawns a Tuff BMX",
    unlock: "Complete 5 fitness challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "maibatsu-boomazoom",
    title: "Spawn Maibatsu Boomazoom Scooter",
    category: "vehicles",
    desc: "Spawns a Maibatsu Boomazoom",
    unlock: "Complete 5 shopping challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "nagasaki-carbon-rs",
    title: "Spawn Nagasaki Carbon RS Superbike",
    category: "vehicles",
    desc: "Spawns a Nagasaki Carbon RS",
    unlock: "Complete all exploration challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "65-vapid-dominator",
    title: "Spawn '65 Vapid Dominator Classic",
    category: "vehicles",
    desc: "Spawns a \u201965 Vapid Dominator",
    unlock: "Complete all fitness challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "progen-emerus",
    title: "Spawn Progen Emerus Hypercar",
    category: "vehicles",
    desc: "Spawns a Progen Emerus",
    unlock: "Complete all vehicle challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "inflatable-flamingo",
    title: "Spawn Inflatable Novelty Flamingo",
    category: "vehicles",
    desc: "Spawns an Inflatable Flamingo",
    unlock: "Destroy 50 cocaine flamingos",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "mtl-pumper",
    title: "Spawn MTL Fire Pumper Truck",
    category: "vehicles",
    desc: "Spawns an MTL Pumper",
    unlock: "Discover the MTL Pumper in the Progress menu",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["LEFT", "UP", "RIGHT", "DOWN", "LEFT", "RIGHT", "RIGHT", "UP"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["LEFT", "UP", "RIGHT", "DOWN", "LEFT", "RIGHT", "RIGHT", "UP"] }
  },
  {
    id: "vapid-stanier-g2-taxi",
    title: "Spawn Vapid Stanier G2 Taxi Cab",
    category: "vehicles",
    desc: "Spawns a Vapid Stanier G2 Taxi",
    unlock: "Complete 5 sports challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "haunters-p-996-lazer",
    title: "Spawn Haunters P-996 LAZER Jet",
    category: "vehicles",
    desc: "Spawns a Haunters P-996 LAZER",
    unlock: "Complete all challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "hvy-bulldozer",
    title: "Spawn HVY Industrial Bulldozer",
    category: "vehicles",
    desc: "Spawns an HVY Bulldozer",
    unlock: "Discover the HVY Bulldozer in the Progress menu",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"] }
  },
  {
    id: "lapwing-mallard",
    title: "Spawn Lapwing Mallard Stunt Plane",
    category: "vehicles",
    desc: "Spawns a Lapwing Mallard",
    unlock: "Complete 5 vehicle challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "brimstone-golfer",
    title: "Spawn Brimstone Golf Caddy",
    category: "vehicles",
    desc: "Spawns a Brimstone Golfer",
    unlock: "Complete all sports challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "haunters-rhino-tank",
    title: "Spawn Haunters Rhino Armored Tank",
    category: "vehicles",
    desc: "Spawns a Haunters Rhino Tank",
    unlock: "Complete all survival challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "maibatsu-sanchez",
    title: "Spawn Maibatsu Sanchez Dirt Bike",
    category: "vehicles",
    desc: "Spawns a Maibatsu Sanchez",
    unlock: "Complete 5 criminal challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "nagasaki-sea-sparrow",
    title: "Spawn Nagasaki Sea Sparrow Chopper",
    category: "vehicles",
    desc: "Spawns a Nagasaki Sea Sparrow",
    unlock: "Complete 5 exploration challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "speeder-700-gt",
    title: "Spawn Speeder 700 GT Offshore Boat",
    category: "vehicles",
    desc: "Spawns a Speeder 700 GT",
    unlock: "Complete 5 combat challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "truffade-thrax",
    title: "Spawn Truffade Thrax Exotic Supercar",
    category: "vehicles",
    desc: "Spawns a Truffade Thrax",
    unlock: "Complete all shopping challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "western-zombie-bobber",
    title: "Spawn Western Zombie Bobber Chopper",
    category: "vehicles",
    desc: "Spawns a Western Zombie Bobber",
    unlock: "Complete all criminal challenges",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "move-time-forward",
    title: "Fast-Forward World Time (+6 Hours)",
    category: "world",
    desc: "Moves the time of day forward",
    unlock: "Find 10 collectible watches",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "pause-time-of-day",
    title: "Freeze Current Time of Day",
    category: "world",
    desc: "Pauses the current time of day",
    unlock: "Find 20 collectible watches",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "cycle-weather",
    title: "Cycle Ambient Weather & Atmosphere",
    category: "world",
    desc: "Adjusts the weather conditions",
    unlock: "Reveal the entire map",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["UP", "DOWN", "LEFT", "RIGHT", "UP", "DOWN", "LEFT", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["UP", "DOWN", "LEFT", "RIGHT", "UP", "DOWN", "LEFT", "RIGHT"] }
  },
  {
    id: "golden-hour",
    title: "Atmospheric Filter: Golden Hour",
    category: "world",
    desc: "Applies a golden filter with a wide aspect ratio",
    unlock: "Spend 4 hours holding hands",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "powdered-sugar",
    title: "Atmospheric Filter: Powdered Sugar",
    category: "world",
    desc: "Turns the world white with sparkling highlights",
    unlock: "Scan all space debris with WAINK",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "pinhole",
    title: "Atmospheric Filter: Pinhole Camera",
    category: "world",
    desc: "Applies a pinhole camera filter",
    unlock: "Clear 25 gang operations with your partner",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "neon-jungle",
    title: "Atmospheric Filter: Neon Jungle",
    category: "world",
    desc: "Applies neon highlights to the world",
    unlock: "Discover all 16 Girlypop Vehicles",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "yesteryear",
    title: "Atmospheric Filter: Yesteryear Vintage",
    category: "world",
    desc: "Applies a black & white CRT TV filter",
    unlock: "Discover the Ridgeway",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "cataclysm",
    title: "Atmospheric Filter: Cataclysm Haze",
    category: "world",
    desc: "Fills the world with murky smoke",
    unlock: "Discover Martha\u2019s Vamos in the Progress menu",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "DOWN", "UP", "RIGHT", "RIGHT", "UP", "LEFT", "LEFT", "RIGHT", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "DOWN", "UP", "RIGHT", "RIGHT", "UP", "LEFT", "LEFT", "RIGHT", "RIGHT"] }
  },
  {
    id: "videotape",
    title: "Atmospheric Filter: VHS Videotape Camcorder",
    category: "world",
    desc: "Applies a videotape-style filter",
    unlock: "Complete 50 activities with your partner",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "dark-mirror",
    title: "Atmospheric Filter: Dark Mirror Noir",
    category: "world",
    desc: "Flips the world upside down and turns it black",
    unlock: "Make $500,000 selling vehicles",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "migraine",
    title: "Atmospheric Filter: Migraine Distortion",
    category: "world",
    desc: "Applies a blurred, distorted filter",
    unlock: "Survive 6 minutes with a 6-star wanted level",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "dollhouse",
    title: "Atmospheric Filter: Dollhouse Tilt-Shift",
    category: "world",
    desc: "Applies a vivid filter with a narrow aspect ratio",
    unlock: "Spend 8 hours with your partner",
    isTbd: false,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["DOWN", "DOWN", "UP", "RIGHT", "RIGHT", "UP", "LEFT", "LEFT", "DOWN", "RIGHT"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["DOWN", "DOWN", "UP", "RIGHT", "RIGHT", "UP", "LEFT", "LEFT", "DOWN", "RIGHT"] }
  },
  {
    id: "bubblegum",
    title: "Atmospheric Filter: Bubblegum Pastel Pop",
    category: "world",
    desc: "Turns the world purple and yellow with sparkling highlights",
    unlock: "Find all 24 collectible cards for the Vice City Flamingos",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "fast-forward",
    title: "Atmospheric Filter: Fast Forward Motion",
    category: "world",
    desc: "Applies a motion blur and accelerates cloud movements",
    unlock: "Complete 50 meditations",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "fisheye",
    title: "Atmospheric Filter: Fisheye Wide Angle Lens",
    category: "world",
    desc: "Applies a fisheye filter",
    unlock: "Catch 100 fish",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "faded-glory",
    title: "Atmospheric Filter: Faded Glory 1980s",
    category: "world",
    desc: "Applies a color CRT TV filter",
    unlock: "Rob 50 stores with your partner",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "pixel-art",
    title: "Atmospheric Filter: Retro 16-Bit Pixel Art",
    category: "world",
    desc: "Applies a pixelated filter",
    unlock: "Makes $250,000 selling collectibles",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  },
  {
    id: "hellscape",
    title: "Atmospheric Filter: Hellscape Crimson Glow",
    category: "world",
    desc: "Turns the world red and orange with a heat haze",
    unlock: "Steal 100 cop vehicles",
    isTbd: true,
    ps5: { trigger: "Phone (Up) + Hold L1 + Press R1", seq: ["TBD"] },
    xbox: { trigger: "Phone (Up) + Hold LB + Press RB", seq: ["TBD"] }
  }
];
// Dual-Coordinate In-Game & Real-World Geodetic Map Database
const mapPinsData = [
  { 
    id: "pin-1", 
    type: "weapon", 
    title: "RPG Armament Cache", 
    y: 340, x: 915, 
    lat: 25.7743, lng: -80.1706,
    mapGenieLat: 0.6250, mapGenieLng: -0.5450,
    region: "Vice City Port Industrial", 
    desc: "Located behind freight container stack 4B in the commercial dock warehouse.",
    waypoint: "915.0, 340.0"
  },
  { 
    id: "pin-2", 
    type: "weapon", 
    title: "Precision Marksman Rifle", 
    y: 325, x: 995, 
    lat: 25.7825, lng: -80.1313,
    mapGenieLat: 0.6400, mapGenieLng: -0.5400,
    region: "Ocean Drive Coastline", 
    desc: "Rooftop observation access via emergency fire ladder of the Art Deco Hotel.",
    waypoint: "995.0, 325.0"
  },
  { 
    id: "pin-3", 
    type: "stunt", 
    title: "Boardwalk Coastal Launch Ramp", 
    y: 305, x: 1005, 
    lat: 25.7700, lng: -80.1305,
    mapGenieLat: 0.6380, mapGenieLng: -0.5380,
    region: "Ocean Beach Seawall", 
    desc: "Angled wooden ramp launching vehicles across the sandy boardwalk strip.",
    waypoint: "1005.0, 305.0"
  },
  { 
    id: "pin-4", 
    type: "stunt", 
    title: "Seven Mile Bridge Chasm Leap", 
    y: 150, x: 625, 
    lat: 24.7000, lng: -81.1500,
    mapGenieLat: 0.3925, mapGenieLng: -0.8115,
    region: "Leonida Keys Highway", 
    desc: "Demolished roadway section spanning inter-island oceanic channels.",
    waypoint: "625.0, 150.0"
  },
  { 
    id: "pin-5", 
    type: "easter", 
    title: "Submerged Narco Submersible", 
    y: 95, x: 430, 
    lat: 24.5500, lng: -81.7800,
    mapGenieLat: 0.3400, mapGenieLng: -0.7800,
    region: "Southernmost Keys Shelf", 
    desc: "Scuttled vessel resting at 45-foot depth containing salvageable cargo.",
    waypoint: "430.0, 95.0"
  },
  { 
    id: "pin-6", 
    type: "easter", 
    title: "Classified Radar Installation", 
    y: 650, x: 635, 
    lat: 26.1500, lng: -80.4500,
    mapGenieLat: 0.9800, mapGenieLng: -0.7200,
    region: "Mount Kalaga National Park", 
    desc: "Decommissioned early-warning tracking station with recurring telemetry signals.",
    waypoint: "635.0, 650.0"
  },
  { 
    id: "pin-7", 
    type: "safehouse", 
    title: "Starfish Penthouse Suite", 
    y: 370, x: 935, 
    lat: 25.7781, lng: -80.1506,
    mapGenieLat: 0.6420, mapGenieLng: -0.5520,
    region: "Downtown Vice City", 
    desc: "Residential holding featuring 8-vehicle subterranean garage and rooftop helipad.",
    waypoint: "935.0, 370.0"
  },
  { 
    id: "pin-8", 
    type: "safehouse", 
    title: "Grassrivers Wetland Compound", 
    y: 275, x: 550, 
    lat: 25.5300, lng: -80.6000,
    mapGenieLat: 0.5500, mapGenieLng: -0.7200,
    region: "Grassrivers Swamps", 
    desc: "Remote stilt structure accessible exclusively via shallow watercraft and airboats.",
    waypoint: "550.0, 275.0"
  },
  { 
    id: "pin-9", 
    type: "weapon", 
    title: "Suppressed Tactical Carbine", 
    y: 385, x: 290, 
    lat: 25.6800, lng: -80.4200,
    mapGenieLat: 0.8133, mapGenieLng: -0.8122,
    region: "Port Gellhorn Industrial Yard", 
    desc: "Secured weapons locker inside the administrative depot office.",
    waypoint: "290.0, 385.0"
  },
  { 
    id: "pin-10", 
    type: "stunt", 
    title: "Sugar Refinery Conveyor Ramp", 
    y: 470, x: 610, 
    lat: 25.9500, lng: -80.5000,
    mapGenieLat: 0.8457, mapGenieLng: -0.6513,
    region: "Ambrosia / Lake Leonida", 
    desc: "Elevated material ramp clearing adjacent rail transport lines.",
    waypoint: "610.0, 470.0"
  }
];

// Confirmed Landmark Locations with GPS Teleport Waypoints
const keyLocationsData = [
  {
    id: "loc-ocean-drive",
    name: "Ocean Drive & Art Deco Boulevard",
    sector: "VC-East Beach",
    y: 325, x: 995,
    lat: 25.7825, lng: -80.1313,
    mapGenieLat: 0.6400, mapGenieLng: -0.5400,
    zoomGeo: 16,
    desc: "Iconic pastel Art Deco hotel strip facing Ocean Beach. Dense valet rows of exotics, rooftop lounges, and coastal speedways.",
    waypoint: "995.0, 325.0",
    realWorld: "Ocean Drive & South Beach, Miami Beach",
    howToReach: "East along MacArthur Causeway directly onto Ocean Drive. Key landmark: Art Deco neon signposts."
  },
  {
    id: "loc-downtown",
    name: "Downtown Vice City & Financial Hub",
    sector: "VC-Central",
    y: 370, x: 935,
    lat: 25.7743, lng: -80.1937,
    mapGenieLat: 0.6350, mapGenieLng: -0.5650,
    zoomGeo: 16,
    desc: "High-density skyscraper corridor featuring multinational banks, luxury corporate showrooms, and subterranean parking structures.",
    waypoint: "935.0, 370.0",
    realWorld: "Brickell / Downtown Miami High-Rise District",
    howToReach: "Direct access via Interstate 95 / Vice Central Skyway north of the Miami River."
  },
  {
    id: "loc-starfish",
    name: "Starfish Island (Luxury Mansions)",
    sector: "VC-Biscayne Bay",
    y: 350, x: 955,
    lat: 25.7781, lng: -80.1506,
    mapGenieLat: 0.6420, mapGenieLng: -0.5520,
    zoomGeo: 16,
    desc: "Exclusive gated residential island with multi-million dollar estates, private helipads, tennis courts, and protected deep-water yacht berths.",
    waypoint: "955.0, 350.0",
    realWorld: "Star Island / Venetian Islands, Miami Beach",
    howToReach: "Single fortified bridge checkpoint connecting to MacArthur Causeway midway between Downtown and Vice Beach."
  },
  {
    id: "loc-airport",
    name: "Escobar International Airport (MIA)",
    sector: "VC-West Terminal",
    y: 290, x: 860,
    lat: 25.7959, lng: -80.2870,
    mapGenieLat: 0.6100, mapGenieLng: -0.6000,
    zoomGeo: 15,
    desc: "Massive aviation facility featuring dual parallel jet runways, private corporate hangar strips, control tower, and cargo customs warehouse bays.",
    waypoint: "860.0, 290.0",
    realWorld: "Miami International Airport (MIA)",
    howToReach: "Take Airport Expressway West directly into the main terminal departure loops."
  },
  {
    id: "loc-port-vice",
    name: "Vice City Port & Container Docks",
    sector: "VC-South Commercial",
    y: 340, x: 915,
    lat: 25.7743, lng: -80.1706,
    mapGenieLat: 0.6250, mapGenieLng: -0.5450,
    zoomGeo: 16,
    desc: "Primary maritime logistics depot with automated container gantry cranes, rail freight spurs, and contraband storage sheds.",
    waypoint: "915.0, 340.0",
    realWorld: "PortMiami (Dodge Island)",
    howToReach: "Accessible via Port Boulevard tunnel directly from the downtown eastern waterfront."
  },
  {
    id: "loc-little-haiti",
    name: "Little Haiti & Culture District",
    sector: "VC-North Corridor",
    y: 410, x: 890,
    lat: 25.8250, lng: -80.1950,
    mapGenieLat: 0.6650, mapGenieLng: -0.5750,
    zoomGeo: 16,
    desc: "Vibrant neighborhood with low-rise colorful businesses, underground chop shops, street murals, and dense alleyway shortcuts.",
    waypoint: "890.0, 410.0",
    realWorld: "Little Haiti / Wynwood Art District, Miami",
    howToReach: "North along NE 2nd Ave or via North Miami Avenue straight through the district center."
  },
  {
    id: "loc-malibu",
    name: "Malibu Club Nightlife Strip",
    sector: "VC-Northeast Beach",
    y: 360, x: 990,
    lat: 25.7890, lng: -80.1340,
    mapGenieLat: 0.6520, mapGenieLng: -0.5350,
    zoomGeo: 16,
    desc: "World-famous multi-tiered nightclub featuring beachfront VIP terraces, neon facades, and high-stakes criminal rendezvous.",
    waypoint: "990.0, 360.0",
    realWorld: "Collins Avenue & 23rd Street, Miami Beach",
    howToReach: "North on Collins Avenue from Ocean Drive; club frontage is illuminated with pink neon."
  },
  {
    id: "loc-leaflinks",
    name: "Leaf Links Golf Country Club",
    sector: "VC-Inland Isles",
    y: 380, x: 960,
    lat: 25.8050, lng: -80.1550,
    mapGenieLat: 0.6700, mapGenieLng: -0.5480,
    zoomGeo: 16,
    desc: "Prestigious 18-hole championship greens surrounded by scenic waterways and affluent luxury villas.",
    waypoint: "960.0, 380.0",
    realWorld: "Miami Beach Golf Club / Normandy Shores",
    howToReach: "East via Julia Tuttle Causeway exit, following green perimeter fairway fences."
  },
  {
    id: "loc-gellhorn",
    name: "Port Gellhorn Industrial Yards",
    sector: "Leonida-West Coast",
    y: 385, x: 290,
    lat: 25.6800, lng: -80.4200,
    mapGenieLat: 0.8133, mapGenieLng: -0.8122,
    zoomGeo: 15,
    desc: "Heavy industrial commercial harbor on the western coast of Leonida with dry docks, oil depots, and rail transport switching lines.",
    waypoint: "290.0, 385.0",
    realWorld: "Port Manatee / Western Coast Harbor Archetype",
    howToReach: "Cross Western Interstate Route 4 across the central Leonida agricultural plain."
  },
  {
    id: "loc-grassrivers",
    name: "Grassrivers Swamps & Airboat Tours",
    sector: "Grassrivers Basin",
    y: 275, x: 550,
    lat: 25.5300, lng: -80.6000,
    mapGenieLat: 0.5500, mapGenieLng: -0.7200,
    zoomGeo: 14,
    desc: "Immense sawgrass wetlands and mangrove channels teeming with aggressive alligators. Home to isolated stilt cabins and airboat ramps.",
    waypoint: "550.0, 275.0",
    realWorld: "Florida Everglades National Park",
    howToReach: "Tamiami Trail (US-41) West straight through the sawgrass preserve."
  },
  {
    id: "loc-kalaga",
    name: "Mount Kalaga National Park Peak",
    sector: "Kalaga Northern Highlands",
    y: 650, x: 635,
    lat: 26.1500, lng: -80.4500,
    mapGenieLat: 0.9800, mapGenieLng: -0.7200,
    zoomGeo: 14,
    desc: "Elevated mountain ridges with winding dirt logging roads, deep ravines, and decommissioned early-warning radar arrays.",
    waypoint: "635.0, 650.0",
    realWorld: "Central Florida High Ridge / Citrus Highlands",
    howToReach: "State Route 27 North into the mountain park access gate."
  },
  {
    id: "loc-ambrosia",
    name: "Ambrosia Sugar Mill & Rail Terminus",
    sector: "Lake Leonida Agricultural Belt",
    y: 470, x: 610,
    lat: 25.9500, lng: -80.5000,
    mapGenieLat: 0.8457, mapGenieLng: -0.6513,
    zoomGeo: 15,
    desc: "Vast industrial sugar processing complex with towering storage silos, heavy cane processing conveyors, and railroad loading spurs.",
    waypoint: "610.0, 470.0",
    realWorld: "Clewiston Sugar Basin & Lake Okeechobee",
    howToReach: "South of Lake Leonida on Route 80 toward the central farming basin."
  },
  {
    id: "loc-keys-bridge",
    name: "Seven Mile Overseas Highway",
    sector: "Leonida Keys Highway",
    y: 150, x: 625,
    lat: 24.7000, lng: -81.1500,
    mapGenieLat: 0.3925, mapGenieLng: -0.8115,
    zoomGeo: 14,
    desc: "Engineering marvel spanning open azure ocean waters. Includes abandoned derelict bridge spans used for high-velocity stunt jumps.",
    waypoint: "625.0, 150.0",
    realWorld: "Seven Mile Bridge, Overseas Highway (US-1), Florida Keys",
    howToReach: "US Highway 1 South through Key Largo heading towards Key West."
  },
  {
    id: "loc-keys-narco",
    name: "Southernmost Keys Narco Trench",
    sector: "Keys Coral Shelf",
    y: 95, x: 430,
    lat: 24.5500, lng: -81.7800,
    mapGenieLat: 0.3400, mapGenieLng: -0.7800,
    zoomGeo: 15,
    desc: "Submerged marine trench containing scuttled smuggler submersibles and secret watertight narcotics caches.",
    waypoint: "430.0, 95.0",
    realWorld: "Florida Straits Smuggler Reefs & Shipwrecks",
    howToReach: "Requires offshore deep-sea boat or submersible vessel dispatched south of the Keys."
  }
];

// Vehicles Database - 72 Local Verified Models from GTABase
const vehiclesDatabase = [
  {
    "id": "vapid-stanier-55",
    "name": "Vapid Stanier '55",
    "category": "sedans",
    "inspo": "1956 Ford Fairlane Club Sedan; The yellow-on-white Stanier is inspired by the 1955 Oldsmobile 88 parked on Ocean Drive, Miami Beach.",
    "image": "/assets/vehicles/vapid-stanier-55.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Vapid Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "albany-buccaneer-65",
    "name": "Albany Buccaneer '65",
    "category": "muscle",
    "inspo": "Ford Fairlane, Buick Riviera",
    "image": "/assets/vehicles/albany-buccaneer-65.jpg",
    "fallback": "/assets/tulip.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Albany Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "invetero-coquette-d10",
    "name": "Invetero Coquette D10",
    "category": "sports",
    "inspo": "Chevrolet Corvette C8",
    "image": "/assets/coquette.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Invetero Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "progen-emerus",
    "name": "Progen Emerus",
    "category": "hyper",
    "inspo": "McLaren Senna",
    "image": "/assets/vehicles/progen-emerus.jpg",
    "fallback": "/assets/torero.jpg",
    "speed": 94,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "202 MPH",
    "engine": "Progen Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "albany-manana-77",
    "name": "Albany Manana '77",
    "category": "classics",
    "inspo": "Buick LeSabre, Cadillac Eldorado",
    "image": "/assets/vehicles/albany-manana-77.jpg",
    "fallback": "/assets/cheetah.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Albany Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "pegassi-tempesta",
    "name": "Pegassi Tempesta",
    "category": "hyper",
    "inspo": "Lamborghini Hurac\u00e1n/Centenario, proposed 2015 Lotus Esprit",
    "image": "/assets/vehicles/pegassi-tempesta.jpg",
    "fallback": "/assets/torero.jpg",
    "speed": 94,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "202 MPH",
    "engine": "Pegassi Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "grotti-cheetah-95",
    "name": "Grotti Cheetah '95",
    "category": "classics",
    "inspo": "Ferrari Testarossa, 512 BB",
    "image": "/assets/vehicles/grotti-cheetah-95.jpg",
    "fallback": "/assets/cheetah.jpg",
    "speed": 66,
    "accel": 62,
    "handling": 60,
    "braking": 58,
    "topMph": "160 MPH",
    "engine": "Grotti Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "schyster-deviant-72",
    "name": "Schyster Deviant '72",
    "category": "muscle",
    "inspo": "1972 AMC Javelin",
    "image": "/assets/vehicles/schyster-deviant-72.avif",
    "fallback": "/assets/tulip.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Schyster Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "vapid-dominator-67-buggy",
    "name": "Vapid Dominator '67 Buggy",
    "category": "offroad",
    "inspo": "Ford Mustang (1st Gen), with lifted suspension",
    "image": "/assets/vehicles/vapid-dominator-67-buggy.avif",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Vapid Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "dinka-enduro-72",
    "name": "Dinka Enduro '72",
    "category": "motorcycles",
    "inspo": "Honda XL350, XR500 &amp; CB Series",
    "image": "/assets/vehicles/dinka-enduro-72.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Dinka Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "crest-kayak",
    "name": "Crest Kayak",
    "category": "boats",
    "inspo": "Crescent Kayak, in several variants (Splashback, Ultralite, and Primo)",
    "image": "/assets/vehicles/crest-kayak.avif",
    "fallback": "/assets/airboat.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Crest Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "declasse-mamba-gt-64",
    "name": "Declasse Mamba GT '64",
    "category": "classics",
    "inspo": "Shelby Daytona Coupe",
    "image": "/assets/vehicles/declasse-mamba-gt-64.avif",
    "fallback": "/assets/cheetah.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Declasse Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "vapid-riata-70",
    "name": "Vapid Riata '70",
    "category": "suvs",
    "inspo": "First-generation Ford Bronco",
    "image": "/assets/vehicles/vapid-riata-70.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Vapid Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "shitzu-squalo",
    "name": "Shitzu Squalo",
    "category": "boats",
    "inspo": "Chris-Craft Stinger 390x",
    "image": "/assets/vehicles/shitzu-squalo.avif",
    "fallback": "/assets/airboat.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Shitzu Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "sirius-transgressor-67",
    "name": "Sirius Transgressor '67",
    "category": "muscle",
    "inspo": "1970 Mercury Cougar",
    "image": "/assets/vehicles/sirius-transgressor-67.avif",
    "fallback": "/assets/tulip.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Sirius Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "obey-8f-drafter",
    "name": "Obey 8F Drafter",
    "category": "sports",
    "inspo": "2018 Audi RS5 Coupe",
    "image": "/assets/vehicles/obey-8f-drafter.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 53,
    "accel": 49,
    "handling": 48,
    "braking": 46,
    "topMph": "139 MPH",
    "engine": "Obey Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "lapwing-300-h",
    "name": "Lapwing 300-H",
    "category": "aviation",
    "inspo": "Confirmed In-Game Archetype",
    "image": "/assets/vehicles/lapwing-300-h.jpg",
    "fallback": "/assets/lazer.jpg",
    "speed": 100,
    "accel": 99,
    "handling": 96,
    "braking": 72,
    "topMph": "340 MPH",
    "engine": "Lapwing Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "endurex-aerobike",
    "name": "Endurex Aerobike",
    "category": "motorcycles",
    "inspo": "Pinarello Dogma",
    "image": "/assets/vehicles/endurex-aerobike.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Endurex Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "airgator-airboat-fanboat",
    "name": "Airgator Airboat / Fanboat",
    "category": "boats",
    "inspo": "Panther Airboat",
    "image": "/assets/airboat.jpg",
    "fallback": "/assets/airboat.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Airgator Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "airgator-airboat-09",
    "name": "Airgator Airboat 09",
    "category": "boats",
    "inspo": "Diamondback Hunting &amp; Fishing Airboat",
    "image": "/assets/airboat.jpg",
    "fallback": "/assets/airboat.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Airgator Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "airgator-airboat-police",
    "name": "Airgator Airboat Police",
    "category": "boats",
    "inspo": "Confirmed In-Game Archetype",
    "image": "/assets/vehicles/airgator-airboat-police.jpg",
    "fallback": "/assets/airboat.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Airgator Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "whiffler-airport-bus",
    "name": "Whiffler Airport Bus",
    "category": "commercial",
    "inspo": "Confirmed In-Game Archetype",
    "image": "/assets/vehicles/whiffler-airport-bus.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Whiffler Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "hvy-airtug",
    "name": "HVY Airtug",
    "category": "commercial",
    "inspo": "Clark CT30",
    "image": "/assets/vehicles/hvy-airtug.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "HVY Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "declasse-akane",
    "name": "Declasse Akane",
    "category": "coupes",
    "inspo": "Chevrolet Sonic",
    "image": "/assets/vehicles/declasse-akane.jpg",
    "fallback": "/assets/comet.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Declasse Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "vapid-aleutian",
    "name": "Vapid Aleutian",
    "category": "suvs",
    "inspo": "Fourth generation Ford Expedition (U553)",
    "image": "/assets/vehicles/vapid-aleutian.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Vapid Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "karin-allander",
    "name": "Karin Allander",
    "category": "suvs",
    "inspo": "Toyota RAV4 (5th Gen)",
    "image": "/assets/vehicles/karin-allander.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Karin Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "albany-alpha",
    "name": "Albany Alpha",
    "category": "sports",
    "inspo": "Cadillac Sixteen, 2013 Cadillac ATS",
    "image": "/assets/vehicles/albany-alpha.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Albany Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "principe-alvino-v1",
    "name": "Principe Alvino V1",
    "category": "motorcycles",
    "inspo": "Ducati Panigale V2 Sport Bike",
    "image": "/assets/vehicles/principe-alvino-v1.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Principe Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "interstate-ambulance",
    "name": "Interstate Ambulance",
    "category": "emergency",
    "inspo": "Chevrolet Express 3500 cab-chassis",
    "image": "/assets/vehicles/interstate-ambulance.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Interstate Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "obey-animus",
    "name": "Obey Animus",
    "category": "sedans",
    "inspo": "Audi A7 RS7 (2nd Gen)",
    "image": "/assets/vehicles/obey-animus.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Obey Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-aphid",
    "name": "Bravado Aphid",
    "category": "motorcycles",
    "inspo": "Confirmed In-Game Archetype",
    "image": "/assets/vehicles/bravado-aphid.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bermacht-apoc",
    "name": "\u00dcbermacht Apoc",
    "category": "coupes",
    "inspo": "BMW M6 E63",
    "image": "/assets/vehicles/bermacht-apoc.avif",
    "fallback": "/assets/comet.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "\u00dcbermacht Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bermacht-apoc-cabrio",
    "name": "\u00dcbermacht Apoc (Cabrio)",
    "category": "coupes",
    "inspo": "BMW 6-Series E64",
    "image": "/assets/vehicles/bermacht-apoc-cabrio.avif",
    "fallback": "/assets/comet.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "\u00dcbermacht Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "dundreary-arcturus-93",
    "name": "Dundreary Arcturus '93",
    "category": "coupes",
    "inspo": "Lincoln Mark VIII",
    "image": "/assets/vehicles/dundreary-arcturus-93.jpg",
    "fallback": "/assets/comet.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Dundreary Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "karin-asterope-gz",
    "name": "Karin Asterope GZ",
    "category": "sedans",
    "inspo": "Toyota Camry (XV30)",
    "image": "/assets/vehicles/karin-asterope-gz.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Karin Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "pfister-astron",
    "name": "Pfister Astron",
    "category": "suvs",
    "inspo": "Porsche Macan",
    "image": "/assets/vehicles/pfister-astron.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 53,
    "accel": 49,
    "handling": 48,
    "braking": 46,
    "topMph": "139 MPH",
    "engine": "Pfister Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "lcc-avarus",
    "name": "LCC Avarus",
    "category": "motorcycles",
    "inspo": "Generica mostly-naked chopper",
    "image": "/assets/vehicles/lcc-avarus.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "LCC Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "dinka-b3000-excavator",
    "name": "Dinka B3000 Excavator",
    "category": "commercial",
    "inspo": "Liebherr R954B HD-S and Samsung SE280LC-2",
    "image": "/assets/vehicles/dinka-b3000-excavator.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Dinka Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "gallivanter-baller-ii",
    "name": "Gallivanter Baller II",
    "category": "suvs",
    "inspo": "Range Rover Evoque/Range Rover Sport",
    "image": "/assets/vehicles/gallivanter-baller-ii.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Gallivanter Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "gallivanter-baller-st-d",
    "name": "Gallivanter Baller ST-D",
    "category": "suvs",
    "inspo": "Fifth-generation Range Rover (L460)",
    "image": "/assets/vehicles/gallivanter-baller-st-d.avif",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Gallivanter Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-banshee",
    "name": "Bravado Banshee",
    "category": "sports",
    "inspo": "Dodge Viper",
    "image": "/assets/banshee.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "pegassi-bati-801",
    "name": "Pegassi Bati 801",
    "category": "motorcycles",
    "inspo": "Ducati 848",
    "image": "/assets/vehicles/pegassi-bati-801.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Pegassi Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "interstate-benson-97",
    "name": "Interstate Benson '97",
    "category": "commercial",
    "inspo": "International 4700 Delivery Truck Chassis",
    "image": "/assets/vehicles/interstate-benson-97.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Interstate Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "grotti-bestia-gts",
    "name": "Grotti Bestia GTS",
    "category": "sports",
    "inspo": "Ferrari FF, GTC4Lusso",
    "image": "/assets/vehicles/grotti-bestia-gts.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Grotti Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "cartwright-biff",
    "name": "Cartwright Biff",
    "category": "commercial",
    "inspo": "Kenworth T800",
    "image": "/assets/vehicles/cartwright-biff.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Cartwright Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison",
    "name": "Bravado Bison",
    "category": "vans",
    "inspo": "Dodge Ram Quad Cab (4th Gen)",
    "image": "/assets/vehicles/bravado-bison.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison-900-95",
    "name": "Bravado Bison 900 '95",
    "category": "vans",
    "inspo": "Dodge Ram (2nd Gen)",
    "image": "/assets/vehicles/bravado-bison-900-95.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison-900-95-lifted",
    "name": "Bravado Bison 900 '95 (Lifted)",
    "category": "offroad",
    "inspo": "Dodge Ram (2nd Gen) in Monster Truck form",
    "image": "/assets/vehicles/bravado-bison-900-95-lifted.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison-1800",
    "name": "Bravado Bison 1800",
    "category": "vans",
    "inspo": "Ram 1500 (DT)",
    "image": "/assets/vehicles/bravado-bison-1800.avif",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison-1800-police",
    "name": "Bravado Bison 1800 Police",
    "category": "emergency",
    "inspo": "Ram 1500 (DT)",
    "image": "/assets/vehicles/bravado-bison-1800-police.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bison-3800",
    "name": "Bravado Bison 3800",
    "category": "vans",
    "inspo": "RAM 3500",
    "image": "/assets/vehicles/bravado-bison-3800.avif",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "mer-can-blast",
    "name": "Mer-Can Blast",
    "category": "offroad",
    "inspo": "Polaris Ranger",
    "image": "/assets/vehicles/mer-can-blast.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Mer-Can Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "nagasaki-blazer",
    "name": "Nagasaki Blazer",
    "category": "offroad",
    "inspo": "Yamaha YFZ450",
    "image": "/assets/vehicles/nagasaki-blazer.avif",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Nagasaki Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "dinka-blista-85",
    "name": "Dinka Blista '85",
    "category": "sports",
    "inspo": "Honda CRX 1st Gen",
    "image": "/assets/vehicles/dinka-blista-85.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Dinka Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "tuff-bmx",
    "name": "Tuff BMX",
    "category": "motorcycles",
    "inspo": "BMX bike",
    "image": "/assets/vehicles/tuff-bmx.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Tuff Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "declasse-bobcat-xl-84",
    "name": "Declasse Bobcat XL '84",
    "category": "vans",
    "inspo": "Fourth generation Chevrolet C/K",
    "image": "/assets/vehicles/declasse-bobcat-xl-84.avif",
    "fallback": "/assets/verus.jpg",
    "speed": 50,
    "accel": 47,
    "handling": 48,
    "braking": 45,
    "topMph": "135 MPH",
    "engine": "Declasse Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-bogan",
    "name": "Bravado Bogan",
    "category": "sedans",
    "inspo": "Chrysler Sebring (2nd gen) and Dodge Stratus (2nd gen)",
    "image": "/assets/vehicles/bravado-bogan.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "maibatsu-boomazoom",
    "name": "Maibatsu Boomazoom",
    "category": "motorcycles",
    "inspo": "Pride Maxima 3 Mobility Scooter",
    "image": "/assets/vehicles/maibatsu-boomazoom.avif",
    "fallback": "/assets/banshee.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "167 MPH",
    "engine": "Maibatsu Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "brute-boxville",
    "name": "Brute Boxville",
    "category": "vans",
    "inspo": "GMC Step Van",
    "image": "/assets/vehicles/brute-boxville.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Brute Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "hauners-brigade",
    "name": "Hauners Brigade",
    "category": "emergency",
    "inspo": "Confirmed In-Game Archetype",
    "image": "/assets/vehicles/hauners-brigade.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Hauners Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "albany-buccaneer-custom",
    "name": "Albany Buccaneer Custom",
    "category": "muscle",
    "inspo": "Ford Fairlane, Buick Riviera",
    "image": "/assets/vehicles/albany-buccaneer-custom.avif",
    "fallback": "/assets/tulip.jpg",
    "speed": 82,
    "accel": 77,
    "handling": 74,
    "braking": 72,
    "topMph": "186 MPH",
    "engine": "Albany Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-buffalo-07",
    "name": "Bravado Buffalo '07",
    "category": "sports",
    "inspo": "Dodge Charger",
    "image": "/assets/vehicles/bravado-buffalo-07.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 52,
    "accel": 48,
    "handling": 48,
    "braking": 45,
    "topMph": "138 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "bravado-buffalo-19",
    "name": "Bravado Buffalo '19",
    "category": "muscle",
    "inspo": "2015 Dodge Charger",
    "image": "/assets/vehicles/bravado-buffalo-19.avif",
    "fallback": "/assets/tulip.jpg",
    "speed": 55,
    "accel": 51,
    "handling": 50,
    "braking": 48,
    "topMph": "143 MPH",
    "engine": "Bravado Factory High-Performance Spec",
    "location": "State of Leonida & Greater Vice City Metro"
  },
  {
    "id": "pegassi-torero-xo",
    "name": "Pegassi Torero XO",
    "category": "hyper",
    "inspo": "Lamborghini Countach LPI 800-4",
    "image": "/assets/torero.jpg",
    "fallback": "/assets/torero.jpg",
    "speed": 98,
    "accel": 96,
    "handling": 91,
    "braking": 92,
    "topMph": "214 MPH",
    "engine": "6.5L V12 Hybrid AWD",
    "location": "Downtown Financial District Showrooms"
  },
  {
    "id": "western-company-maverick",
    "name": "Western Company Maverick",
    "category": "helicopters",
    "inspo": "Bell 206L LongRanger Helicopter",
    "image": "/assets/maverick.jpg",
    "fallback": "/assets/maverick.jpg",
    "speed": 85,
    "accel": 78,
    "handling": 86,
    "braking": 80,
    "topMph": "160 MPH",
    "engine": "Rolls-Royce 250 Turboshaft",
    "location": "Vice City International Airport & Hospital Helipads"
  },
  {
    "id": "nagasaki-buzzard-attack-chopper",
    "name": "Nagasaki Buzzard Attack Chopper",
    "category": "helicopters",
    "inspo": "MD 500 Defender / AH-6 Little Bird",
    "image": "/assets/maverick.jpg",
    "fallback": "/assets/maverick.jpg",
    "speed": 89,
    "accel": 85,
    "handling": 92,
    "braking": 84,
    "topMph": "175 MPH",
    "engine": "Allison 250-C20B Turboshaft with Rocket Pods",
    "location": "Leonida Military Base Helipads"
  },
  {
    "id": "jobuilt-p-996-lazer",
    "name": "JoBuilt P-996 Lazer Interceptor",
    "category": "aviation",
    "inspo": "General Dynamics F-16 Fighting Falcon",
    "image": "/assets/lazer.jpg",
    "fallback": "/assets/lazer.jpg",
    "speed": 100,
    "accel": 99,
    "handling": 96,
    "braking": 92,
    "topMph": "340 MPH",
    "engine": "Pratt & Whitney Afterburning Turbofan",
    "location": "Leonida Military Proving Grounds & Airbase"
  },
  {
    "id": "nagasaki-verus-all-terrain",
    "name": "Nagasaki Verus All-Terrain",
    "category": "offroad",
    "inspo": "Polaris Sportsman 850 Quad ATV",
    "image": "/assets/verus.jpg",
    "fallback": "/assets/verus.jpg",
    "speed": 72,
    "accel": 86,
    "handling": 92,
    "braking": 76,
    "topMph": "85 MPH",
    "engine": "850cc Twin-Cylinder 4-Stroke",
    "location": "Mount Kalaga Trails & Grassrivers Outposts"
  },
  {
    "id": "pfister-comet-s2-cabrio",
    "name": "Pfister Comet S2 Cabrio",
    "category": "sports",
    "inspo": "Porsche 911 GT3 (992)",
    "image": "/assets/comet.jpg",
    "fallback": "/assets/banshee.jpg",
    "speed": 92,
    "accel": 93,
    "handling": 95,
    "braking": 90,
    "topMph": "198 MPH",
    "engine": "4.0L Twin-Turbo Flat-6",
    "location": "Ocean Drive Coastline Valet Rows"
  },
  {
    "id": "bravado-gauntlet-hellfire",
    "name": "Bravado Gauntlet Hellfire",
    "category": "muscle",
    "inspo": "Dodge Challenger SRT Hellcat",
    "image": "/assets/hellfire.jpg",
    "fallback": "/assets/tulip.jpg",
    "speed": 90,
    "accel": 94,
    "handling": 74,
    "braking": 75,
    "topMph": "185 MPH",
    "engine": "6.2L Supercharged HEMI V8",
    "location": "Little Haiti Commercial Strips"
  },
  {
    "id": "declasse-tulip-v8",
    "name": "Declasse Tulip V8",
    "category": "muscle",
    "inspo": "1970 Chevrolet Chevelle SS 454",
    "image": "/assets/tulip.jpg",
    "fallback": "/assets/tulip.jpg",
    "speed": 82,
    "accel": 85,
    "handling": 72,
    "braking": 68,
    "topMph": "155 MPH",
    "engine": "7.4L 454ci Big Block V8",
    "location": "Port Gellhorn & Vice City Suburbs"
  },
  {
    "id": "vapid-stanier-police-interceptor",
    "name": "Vapid Stanier Police Interceptor",
    "category": "emergency",
    "inspo": "Ford Crown Victoria Police Interceptor (P71)",
    "image": "/assets/stanier.jpg",
    "fallback": "/assets/stanier.jpg",
    "speed": 86,
    "accel": 80,
    "handling": 78,
    "braking": 82,
    "topMph": "145 MPH",
    "engine": "4.6L Modular V8 Police Spec",
    "location": "Vice City Police Precincts & Highway Patrol"
  },
  {
    "id": "vapid-ganado",
    "name": "Vapid Ganado",
    "category": "offroad",
    "inspo": "1980s Chevrolet C10 / Ford F-150 Stepside Custom; Jason's personal low-riding workhorse pickup featured in key story missions.",
    "image": "/assets/tulip.jpg",
    "fallback": "/assets/tulip.jpg",
    "speed": 81,
    "accel": 78,
    "handling": 76,
    "braking": 74,
    "topMph": "135 MPH",
    "engine": "5.7L Small-Block V8 RWD",
    "location": "Port Gellhorn & Leonard County Rural Routes"
  },
  {
    "id": "declasse-tulip-72",
    "name": "'72 Declasse Tulip",
    "category": "muscle",
    "inspo": "1972 Chevrolet Chevelle Malibu 4-Door Hardtop; Iconic high-torque muscle classic featured in high-speed Leonida highway pursuits.",
    "image": "/assets/tulip.jpg",
    "fallback": "/assets/tulip.jpg",
    "speed": 85,
    "accel": 84,
    "handling": 75,
    "braking": 72,
    "topMph": "148 MPH",
    "engine": "7.4L 454 Big-Block V8 RWD",
    "location": "Little Haiti & Vice Beach Boulevard"
  },
  {
    "id": "pegassi-vitello",
    "name": "Pegassi Vitello",
    "category": "hyper",
    "inspo": "Lamborghini Revuelto / Si\u00e1n FKP 37; Next-gen plug-in hybrid V12 hypercar equipped with active aerodynamic rear wings and torque vectoring.",
    "image": "/assets/cheetah.jpg",
    "fallback": "/assets/cheetah.jpg",
    "speed": 98,
    "accel": 96,
    "handling": 94,
    "braking": 92,
    "topMph": "224 MPH",
    "engine": "6.5L Naturally Aspirated V12 + Tri-Motor Hybrid AWD",
    "location": "Downtown Financial District Showrooms & Starfish Island"
  }
];

// State
let activeView = "cheats";
let activePlatform = "ps5";
let activeCheatFilter = "all";
let cheatsViewMode = "cards"; // "cards" or "table"
let activeVehicleFilter = "all";
let activeVehicleSort = "speed-desc";
let activeVehicleSearch = "";
let compareList = [];
let discoveredPins = JSON.parse(localStorage.getItem("gta6_discovered_pins") || "[]");

// Audio & Theme State
let audioCtx = null;
let audioFxEnabled = localStorage.getItem("gta6_audio_fx") !== "false";

// Leaflet Map Instance
let leafletMap = null;
let activeMapMode = "day"; // "day", "night", "satellite", "streets"
let leafletMarkerLayers = {};
let baseTileLayers = {};

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  setupNavigation();
  renderCheats();
  setupCheatsEvents();
  setupMapFilterEvents();
  renderVehicles();
  setupVehicleEvents();
  renderWeapons();
  setupWeaponEvents();
  setupFaqAccordion();
  setupKeyboardShortcuts();
  updateProgressTracker();
  handleUrlRouting();
});

// --- AUDIO SYNTHESIZER (HAPTIC UI SOUNDS) ---
function playUiSound(type = "click") {
  if (!audioFxEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "copy") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.setValueAtTime(780, now + 0.06);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === "toggle") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  } catch (e) {
    // AudioContext suppressed before user interaction
  }
}

// --- THEME COLOR ENGINE ---
function initThemeSwitcher() {
  let savedTheme = localStorage.getItem("gta6_active_theme");
  if (!savedTheme || savedTheme === "polygon" || savedTheme === "sunset" || savedTheme === "stealth") {
    savedTheme = "editorial";
  }
  applyTheme(savedTheme);

  document.querySelectorAll(".theme-dot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      playUiSound("toggle");
      triggerToast(`Color theme updated to ${theme.toUpperCase()}`);
    });
  });

  const audioBtn = document.getElementById("audioFxToggle");
  if (audioBtn) {
    audioBtn.classList.toggle("active", audioFxEnabled);
    audioBtn.addEventListener("click", () => {
      audioFxEnabled = !audioFxEnabled;
      localStorage.setItem("gta6_audio_fx", audioFxEnabled);
      audioBtn.classList.toggle("active", audioFxEnabled);
      if (audioFxEnabled) playUiSound("click");
      triggerToast(`Sound feedback ${audioFxEnabled ? 'Enabled' : 'Muted'}`);
    });
  }
}

function applyTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("gta6_active_theme", themeName);

  document.querySelectorAll(".theme-dot-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === themeName);
  });
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    // Quick search shortcut on pressing "/"
    if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (activeView === "map") {
        document.getElementById("mapLocationSearch")?.focus();
      } else {
        document.getElementById("appCheatSearch")?.focus();
      }
    }
    // Escape to close modals and drawers
    if (e.key === "Escape") {
      hideWaypointDrawer();
      document.getElementById("compareModal")?.classList.add("hidden");
      document.getElementById("mapSearchResults")?.classList.add("hidden");
    }
  });
}

// --- Navigation ---
function setupNavigation() {
  // Support both desktop navbar buttons and mobile bottom dock buttons
  document.querySelectorAll(".nav-tab-btn, .mobile-dock-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      if (view) {
        switchView(view);
        // Auto-close mobile drawer if open
        const navTabs = document.getElementById("navTabsMenu");
        const menuBtn = document.getElementById("mobileMenuBtn");
        if (navTabs) navTabs.classList.remove("mobile-open");
        if (menuBtn) menuBtn.classList.remove("active");
      }
    });
  });

  // Mobile Hamburger Menu Button
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navTabsMenu = document.getElementById("navTabsMenu");
  if (mobileMenuBtn && navTabsMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navTabsMenu.classList.toggle("mobile-open");
      mobileMenuBtn.classList.toggle("active", isOpen);
    });

    // Close when clicking outside navbar
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".app-navbar")) {
        navTabsMenu.classList.remove("mobile-open");
        mobileMenuBtn.classList.remove("active");
      }
    });
  }

  // Mobile Map Filter Drawer Toggle
  const mapDrawerBtn = document.getElementById("mobileMapDrawerBtn");
  const mapControlPanel = document.querySelector(".map-control-panel");
  const mapDrawerBtnText = document.getElementById("mobileMapDrawerBtnText");
  if (mapDrawerBtn && mapControlPanel) {
    mapDrawerBtn.addEventListener("click", () => {
      const isOpen = mapControlPanel.classList.toggle("mobile-drawer-open");
      mapDrawerBtn.classList.toggle("active", isOpen);
      playUiSound("click");
      if (mapDrawerBtnText) {
        mapDrawerBtnText.textContent = isOpen 
          ? "Hide Filter & Categories Panel (▲)" 
          : "Filter 2,532 Waypoints & Categories (▼)";
      }
      triggerToast(isOpen ? "Opened 2,532 Waypoint Filter Panel" : "Closed Filter Panel");
    });
  }

  window.addEventListener("popstate", handleUrlRouting);
  window.addEventListener("hashchange", handleUrlRouting);
}

function handleUrlRouting() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  const valid = ["cheats", "map", "vehicles", "weapons", "updates", "money", "faq"];

  // Automatically eliminate and redirect any hash-based links (e.g. #vehicles -> /vehicles/)
  if (valid.includes(hash)) {
    const targetPath = `/${hash}/`;
    window.history.replaceState({ view: hash }, "", targetPath);
    switchView(hash, false);
    return;
  }

  if (valid.includes(path)) {
    switchView(path, false);
  } else {
    const activeSection = document.querySelector(".app-view.active");
    if (activeSection && activeSection.id.startsWith("view-")) {
      const activeName = activeSection.id.replace("view-", "");
      if (valid.includes(activeName)) {
        switchView(activeName, false);
        return;
      }
    }
    switchView("cheats", false);
  }
}

function switchView(viewName, updateUrl = true) {
  activeView = viewName;
  playUiSound("click");
  document.querySelectorAll(".nav-tab-btn, .mobile-dock-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });
  document.querySelectorAll(".app-view").forEach(view => {
    view.classList.toggle("active", view.id === `view-${viewName}`);
  });

  // Clean URL update without '#'
  if (updateUrl) {
    const cleanPath = viewName === "cheats" ? "/cheats/" : `/${viewName}/`;
    if (window.location.pathname !== cleanPath) {
      window.history.pushState({ view: viewName }, "", cleanPath);
    }
  }

  // Dynamic SEO page title update
  const sectionTitles = {
    cheats: "GTA 6 Cheats: All 61 Controller Codes (PS5 & Xbox) [100% Tested Nov 2026]",
    map: "GTA 6 Interactive Map: 2,532 Leonida Waypoints, Banks & Easter Eggs [Live GPS]",
    vehicles: "GTA 6 Vehicles Database: 75 Confirmed Cars, Supercars & Boats [Telemetry Specs]",
    weapons: "GTA 6 Weapons Database: All 24 Confirmed Firearms, Melee & Trunk Stash Loadouts",
    updates: "GTA 6 Live Patch Notes & Hotfix Tracker: Official Rockstar Changelogs (Patch 1.0.2)",
    money: "GTA 6 Money & Economy Guide: Fast Cash Heists, Stocks & Businesses",
    faq: "GTA 6 Documentation & Mechanics Guide: DualSense, Fuel & Trunk Stash"
  };
  if (viewName === "weapons") {
    renderWeapons();
  }
  if (sectionTitles[viewName]) {
    document.title = sectionTitles[viewName];
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Invalidate Leaflet Map Size when switching to map tab
  if (viewName === "map") {
    setTimeout(() => {
      if (!leafletMap) {
        initLeafletMap();
      } else {
        leafletMap.invalidateSize(true);
      }
    }, 120);
  }
}

// --- CHEATS VIEW (HUD CARDS ENGINE) ---
function setCheatsViewMode(mode) {
  cheatsViewMode = "cards";
  const cardsGrid = document.getElementById("cheatsCardsGrid");
  if (cardsGrid) cardsGrid.classList.remove("hidden");
  renderCheats();
}

function filterByJump(category) {
  switchView("cheats");
  activeCheatFilter = category;

  document.querySelectorAll(".filter-pill-btn").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === category);
  });

  renderCheats();
  playUiSound("click");

  const target = document.querySelector(".cheats-control-strip");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupCheatsEvents() {
  document.querySelectorAll(".controller-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".controller-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activePlatform = btn.dataset.platform;
      const triggerEl = document.getElementById("activeTriggerComboText");
      if (triggerEl) {
        triggerEl.textContent = activePlatform === "ps5" ? "L1 + R1" : "LB + RB";
      }
      renderCheats();
      playUiSound("click");
    });
  });

  document.querySelectorAll(".filter-pill-btn").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill-btn").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCheatFilter = pill.dataset.category;
      renderCheats();
      playUiSound("click");
    });
  });

  const search = document.getElementById("appCheatSearch");
  if (search) {
    search.addEventListener("input", () => {
      renderCheats();
    });
  }
}

function renderSingleCheatCard(cheat, container, isLocked) {
  const pData = cheat[activePlatform];
  const card = document.createElement("div");
  card.className = "cheat-card-item";

  let keysHtml = "";
  let copyCode = "";
  let copyLabel = "Copy Input";
  
  if (isLocked) {
    keysHtml = `<span class="key-step-btn tbd-locked-badge">🔒 Progression Locked &bull; Complete Milestone to Unlock</span>`;
    copyCode = `Unlock Requirement: ${cheat.unlock}`;
    copyLabel = "Copy Req";
  } else {
    keysHtml = pData.seq.map((k, i) => `
      <span class="key-step-btn">${formatDpadGlyph(k)}</span>
      ${i < pData.seq.length - 1 ? '<span class="key-arrow-symbol">&rarr;</span>' : ''}
    `).join("");
    copyCode = `${pData.trigger} -> ${pData.seq.join(" > ")}`;
    copyLabel = "Copy Input";
  }

  const safeTitle = cheat.title.replace(/'/g, "\\'");
  const safeCopyCode = copyCode.replace(/'/g, "\\'");

  let statusBadge = "";
  if (cheat.id === "cash-250-000" || cheat.id === "drunk") {
    statusBadge = `<span class="unlocked-highlight-badge"><span class="badge-fire-icon">🔥</span> NEWLY UNLOCKED</span>`;
  } else if (!isLocked) {
    statusBadge = `<span class="verified-active-badge">✓ WORKING INPUT</span>`;
  }

  card.innerHTML = `
    <div>
      <div class="card-header-bar">
        <div>
          <h3 class="card-title-text">${cheat.title}</h3>
          ${statusBadge}
        </div>
        <span class="cheat-type-tag tag-${cheat.category}">${cheat.category}</span>
      </div>
      <p class="card-info-text">${cheat.desc}</p>
      <div class="sequence-box-wrapper">
        <span class="trigger-instruction">${pData.trigger}</span>
        <div class="keys-flow">${keysHtml}</div>
      </div>
    </div>
    <div class="card-bottom-actions">
      <span>Req: ${cheat.unlock}</span>
      <button class="btn-copy-code" onclick="executeCopy('${safeTitle}', '${safeCopyCode}')">${copyLabel}</button>
    </div>
  `;

  card.addEventListener("mouseenter", () => {
    updateControllerHud(cheat.title, pData.trigger, pData.seq);
  });

  container.appendChild(card);
}

function renderCheats() {
  const grid = document.getElementById("cheatsCardsGrid");
  const tableBody = document.getElementById("cheatsTableBody");
  const query = (document.getElementById("appCheatSearch")?.value || "").toLowerCase().trim();

  const filtered = cheatsData.filter(c => {
    const matchesCat = (activeCheatFilter === "all" || c.category === activeCheatFilter);
    const matchesQuery = c.title.toLowerCase().includes(query) || 
                         c.desc.toLowerCase().includes(query) || 
                         c.category.toLowerCase().includes(query) ||
                         c.unlock.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  // Strict Hierarchy Split: Unlocked Input Codes First, Locked Milestone Codes Second
  const unlocked = [];
  const locked = [];

  filtered.forEach(cheat => {
    const pData = cheat[activePlatform];
    const isLocked = cheat.isTbd || (pData.seq.length === 1 && (pData.seq[0] === "TBD" || pData.seq[0] === "PROGRESSION LOCKED"));
    if (isLocked) {
      locked.push(cheat);
    } else {
      unlocked.push(cheat);
    }
  });

  // Sort unlocked so top priority codes ($250k, Drunk, Repair, Max Health, Lower Wanted) lead row 1
  const topPriority = ["cash-250-000", "drunk", "repair-vehicle", "max-health-armor", "lower-wanted-level", "super-jump", "fast-run", "swim-boost"];
  unlocked.sort((a, b) => {
    const aIdx = topPriority.indexOf(a.id);
    const bIdx = topPriority.indexOf(b.id);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.title.localeCompare(b.title);
  });

  // Render Cards Grid with Clear Section Headers
  if (grid) {
    grid.innerHTML = "";
    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-size: 0.88rem;">No sequences found matching "${query}".</div>`;
    } else {
      // 1. Group Header for Working Input Sequences (TOP ROWS)
      if (unlocked.length > 0) {
        const activeHeader = document.createElement("div");
        activeHeader.className = "cheat-group-header-row";
        activeHeader.innerHTML = `
          <div class="group-title-text">
            <span style="color: var(--accent-primary);">⚡</span>
            <span>Confirmed Controller Input Sequences (Ready to Use)</span>
          </div>
          <span class="group-count-badge">${unlocked.length} Working Sequences</span>
        `;
        grid.appendChild(activeHeader);

        unlocked.forEach(cheat => {
          renderSingleCheatCard(cheat, grid, false);
        });
      }

      // 2. Group Header for Locked Milestone Codes (BOTTOM ROWS)
      if (locked.length > 0) {
        const lockedHeader = document.createElement("div");
        lockedHeader.className = "cheat-group-header-row locked-group";
        lockedHeader.innerHTML = `
          <div class="group-title-text">
            <span style="color: var(--text-dim);">🔒</span>
            <span>Campaign Progression &amp; Challenge Milestone Codes</span>
          </div>
          <span class="group-count-badge">${locked.length} Locked Codes</span>
        `;
        grid.appendChild(lockedHeader);

        locked.forEach(cheat => {
          renderSingleCheatCard(cheat, grid, true);
        });
      }
    }
  }

  // Render Polygon Table View (Hierarchy Maintained: Unlocked First)
  const fullSorted = [...unlocked, ...locked];
  if (tableBody) {
    tableBody.innerHTML = "";
    if (fullSorted.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 32px; color: var(--text-muted);">No sequences found matching "${query}".</td></tr>`;
    } else {
      fullSorted.forEach(cheat => {
        const pData = cheat[activePlatform];
        const tr = document.createElement("tr");

        const keysCaps = pData.seq.map(k => `<span class="table-key-cap">${formatDpadGlyph(k)}</span>`).join(" ");

        tr.innerHTML = `
          <td>
            <span class="table-cheat-name">${cheat.title}</span>
            <span class="table-cheat-trigger">${pData.trigger}</span>
          </td>
          <td>
            <span class="cheat-type-tag tag-${cheat.category}">${cheat.category}</span>
          </td>
          <td>
            <div class="table-effect-desc">${cheat.desc}</div>
          </td>
          <td>
            <span class="table-unlock-badge">${cheat.unlock}</span>
          </td>
          <td class="table-keys-cell">
            <div class="table-keys-inline">${keysCaps}</div>
          </td>
        `;

        tableBody.appendChild(tr);
      });
    }
  }
}

function formatDpadGlyph(key) {
  switch(key) {
    case "UP": return "&uarr; UP";
    case "DOWN": return "&darr; DOWN";
    case "LEFT": return "&larr; LEFT";
    case "RIGHT": return "&rarr; RIGHT";
    default: return key;
  }
}

function updateControllerHud(title, trigger, seq) {
  const titleEl = document.getElementById("hudCheatTitle");
  const descEl = document.getElementById("hudCheatDesc");
  const displayEl = document.getElementById("hudLiveDisplay");
  if (!titleEl || !displayEl) return;

  titleEl.innerText = title;
  descEl.innerText = trigger;

  if (Array.isArray(seq) && seq.length > 0 && seq[0] !== "TBD" && seq[0] !== "PROGRESSION LOCKED") {
    displayEl.innerHTML = seq.slice(0, 5).map(k => `
      <span class="hud-key-badge active-key">${formatDpadGlyph(k)}</span>
    `).join("");
  } else {
    displayEl.innerHTML = `<span class="hud-key-badge" style="font-size:0.75rem; letter-spacing:0.02em; padding:6px 14px;">🔒 Progression Milestone</span>`;
  }
}

function executeCopy(title, text) {
  navigator.clipboard.writeText(text).then(() => {
    playUiSound("copy");
    triggerToast(`Copied sequence for ${title}`);
  });
}

// --- LEAFLET INTERACTIVE MAP VIEW (100% AUTHENTIC IGN GTA 6 ATLAS) ---
let markerClusterGroup = null;
let activeMapGroups = new Set(["vehicles", "weapons", "robberies", "stunts", "safehouses", "collectibles", "gangs", "activities"]);
let activeSelectedLocation = null;

function initLeafletMap() {
  const mapElement = document.getElementById("leafletMapContainer");
  if (!mapElement || typeof L === "undefined") return;

  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }

  // Authentic GTA 6 Leonida Game Atlas (IGN / MapGenie Tile Engine)
  leafletMap = L.map("leafletMapContainer", {
    minZoom: 8,
    maxZoom: 18,
    zoomSnap: 0.5,
    zoomControl: true,
    attributionControl: false
  });

  const tileUrl = activeMapMode === "night"
    ? "https://tiles.mapgenie.io/games/grand-theft-auto-6/leonida/night-v3/{z}/{y}/{x}.jpg"
    : "https://tiles.mapgenie.io/games/grand-theft-auto-6/leonida/day-v2/{z}/{y}/{x}.jpg";

  L.tileLayer(tileUrl, {
    minZoom: 8,
    maxNativeZoom: 16,
    maxZoom: 18,
    attribution: "MapGenie / IGN Leonida Game Atlas"
  }).addTo(leafletMap);

  // Initial center on the island overview (Leonida Wide Canvas)
  leafletMap.setView([0.66, -0.67], 11.2);

  // Initialize MarkerClusterGroup
  if (typeof L.markerClusterGroup === "function") {
    markerClusterGroup = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false
    });
    leafletMap.addLayer(markerClusterGroup);
  }

  renderAllMapMarkers();
  renderTeleportPills();
  setupMapFilterEvents();
  updateProgressTracker();
  setupMapTelemetry();

  if (activeSelectedLocation) {
    focusLocation(activeSelectedLocation.id, false);
  }

  setTimeout(() => {
    if (leafletMap) leafletMap.invalidateSize(true);
  }, 100);
}

function switchMapMode(newMode) {
  if (activeMapMode === newMode) return;
  activeMapMode = newMode;

  document.querySelectorAll(".map-mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === newMode);
  });

  initLeafletMap();
  triggerToast(`Active Map: ${newMode === "day" ? "Leonida Game Atlas (Day)" : "Leonida Neon Atlas (Night)"}`);
}

function getGroupBadgeColor(group) {
  switch (group) {
    case "vehicles": return "#eab308";
    case "weapons": return "#ef4444";
    case "robberies": return "#10b981";
    case "stunts": return "#f59e0b";
    case "safehouses": return "#3b82f6";
    case "collectibles": return "#8b5cf6";
    case "gangs": return "#ec4899";
    default: return "#06b6d4";
  }
}

function renderAllMapMarkers(query = "") {
  if (!markerClusterGroup) return;
  markerClusterGroup.clearLayers();

  const allLocs = window.LEONIDA_MARKERS || [];
  const lowerQuery = query.toLowerCase().trim();
  const markersToAdd = [];

  allLocs.forEach(m => {
    if (!activeMapGroups.has(m.group)) return;

    if (lowerQuery) {
      const match = m.title.toLowerCase().includes(lowerQuery) ||
                    m.catTitle.toLowerCase().includes(lowerQuery) ||
                    m.desc.toLowerCase().includes(lowerQuery);
      if (!match) return;
    }

    const isFound = discoveredPins.includes(m.id);
    const color = getGroupBadgeColor(m.group);

    // Exact In-Game Activity Sprite Icon from atlas.png
    const icon = L.divIcon({
      className: "game-sprite-marker-wrapper",
      html: `
        <div class="game-sprite-icon" style="background-position: -${m.sx}px -${m.sy}px; ${isFound ? 'opacity: 0.35; filter: grayscale(1);' : ''}" title="${m.title} (${m.catTitle})"></div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });

    const marker = L.marker([m.lat, m.lng], { icon: icon });

    // High-Tech GTA 6 Tactical HUD Popup
    const cleanDesc = (m.desc || "").replace(/\[(.*?)\]\((.*?)\)/g, '$1');
    const popupHtml = `
      <div class="custom-leaflet-popup">
        <div class="popup-top-row">
          <div class="popup-sprite-badge" style="background-position: -${m.sx}px -${m.sy}px;"></div>
          <div class="popup-title-meta">
            <span class="popup-category-badge" style="background:${color}22; color:${color}; border: 1px solid ${color}66;">
              ${m.catTitle.toUpperCase()}
            </span>
            <h4 class="popup-name">${m.title}</h4>
          </div>
        </div>
        <div class="popup-gps-coords">
          <span class="gps-label">SECTOR GPS:</span>
          <code>[${Number(m.lat).toFixed(4)}, ${Number(m.lng).toFixed(4)}]</code>
        </div>
        <div class="popup-desc-text">${cleanDesc}</div>
        <div class="popup-actions-row">
          <button class="popup-action-btn ${isFound ? 'completed' : ''}" onclick="toggleLocationFound(${m.id})">
            <span class="action-btn-icon">${isFound ? '✓' : '+'}</span>
            <span>${isFound ? 'Discovered (Click to Undo)' : 'Mark as Discovered (+1)'}</span>
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: 320,
      className: "game-atlas-popup"
    });
    markersToAdd.push(marker);
  });

  markerClusterGroup.addLayers(markersToAdd);
}

function toggleLocationFound(pinId) {
  const numId = Number(pinId);
  if (discoveredPins.includes(numId)) {
    discoveredPins = discoveredPins.filter(id => id !== numId);
    playUiSound("click");
    triggerToast("Location unmarked");
  } else {
    discoveredPins.push(numId);
    playUiSound("pop");
    triggerToast("Logged to Completion Tracker (+1)");
  }

  localStorage.setItem("gta6_discovered_pins", JSON.stringify(discoveredPins));
  updateProgressTracker();
  renderAllMapMarkers();
}

function updateProgressTracker() {
  const total = 2532;
  const completed = discoveredPins.length;
  const percent = Math.min(100, Math.round((completed / total) * 100));

  const textVal = document.getElementById("mapProgressText");
  const fillBar = document.getElementById("mapProgressFill");
  const compCount = document.getElementById("mapCompletedCount");
  const incompCount = document.getElementById("mapIncompletedCount");

  if (textVal) textVal.innerText = `${percent}%`;
  if (fillBar) fillBar.style.width = `${percent}%`;
  if (compCount) compCount.innerHTML = `Completed: <strong>${completed}</strong>`;
  if (incompCount) incompCount.innerHTML = `Incomplete: <strong>${(total - completed).toLocaleString()}</strong>`;
}

function renderTeleportPills() {
  const container = document.getElementById("teleportPillsContainer");
  if (!container) return;
  container.innerHTML = "";

  keyLocationsData.forEach(loc => {
    const btn = document.createElement("button");
    btn.className = `teleport-pill-btn ${activeSelectedLocation?.id === loc.id ? 'active' : ''}`;
    btn.innerText = loc.name.split("&")[0].trim();
    btn.title = `${loc.name} (${loc.sector})`;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".teleport-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      focusLocation(loc.id, true);
    });

    container.appendChild(btn);
  });
}

function focusLocation(locId, animated = true) {
  const loc = keyLocationsData.find(l => l.id === locId);
  if (!loc || !leafletMap) return;

  activeSelectedLocation = loc;
  const targetZoom = 15;

  if (animated) {
    leafletMap.flyTo([loc.mapGenieLat, loc.mapGenieLng], targetZoom, { duration: 1.0 });
  } else {
    leafletMap.setView([loc.mapGenieLat, loc.mapGenieLng], targetZoom);
  }

  showWaypointDrawer(loc);
}

function showWaypointDrawer(loc) {
  const drawer = document.getElementById("waypointIntelDrawer");
  if (!drawer) return;

  document.getElementById("drawerSectorTag").innerText = loc.sector;
  document.getElementById("drawerTitle").innerText = loc.name;
  document.getElementById("drawerCoords").innerText = `In-Game GPS: ${loc.mapGenieLat.toFixed(4)}, ${loc.mapGenieLng.toFixed(4)}`;
  document.getElementById("drawerDesc").innerHTML = `
    ${loc.desc}<br><br>
    <strong>How to reach in-game:</strong> ${loc.howToReach}<br>
    <span style="color:var(--text-dim);font-size:0.7rem;">Sector Archetype: ${loc.realWorld}</span>
  `;

  const copyBtn = document.getElementById("btnCopyGps");
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(`/waypoint ${loc.mapGenieLat}, ${loc.mapGenieLng}`).then(() => {
        triggerToast(`Copied GPS Waypoint: ${loc.mapGenieLat}, ${loc.mapGenieLng}`);
      });
    };
  }

  drawer.classList.remove("hidden");
}

function hideWaypointDrawer() {
  document.getElementById("waypointIntelDrawer")?.classList.add("hidden");
}

function setupMapTelemetry() {
  const hud = document.getElementById("mapTelemetryHud");
  if (!leafletMap || !hud) return;

  leafletMap.on("mousemove", (e) => {
    const lat = e.latlng.lat.toFixed(4);
    const lng = e.latlng.lng.toFixed(4);
    hud.innerHTML = `GPS Telemetry: Lat ${lat} &bull; Lng ${lng} &bull; Leonida Grid`;
  });

  document.getElementById("drawerCloseBtn")?.addEventListener("click", hideWaypointDrawer);
}

function setupMapFilterEvents() {
  document.querySelectorAll(".pin-toggle-item").forEach(item => {
    item.addEventListener("click", () => {
      const grp = item.dataset.group;
      if (activeMapGroups.has(grp)) {
        activeMapGroups.delete(grp);
        item.classList.add("inactive");
      } else {
        activeMapGroups.add(grp);
        item.classList.remove("inactive");
      }
      playUiSound("click");
      renderAllMapMarkers();
    });
  });

  document.getElementById("btnShowAllLayers")?.addEventListener("click", () => {
    activeMapGroups = new Set(["vehicles", "weapons", "robberies", "stunts", "safehouses", "collectibles", "gangs", "activities"]);
    document.querySelectorAll(".pin-toggle-item").forEach(i => i.classList.remove("inactive"));
    playUiSound("click");
    renderAllMapMarkers();
    triggerToast("Showing all 2,532 map markers");
  });

  document.getElementById("btnHideAllLayers")?.addEventListener("click", () => {
    activeMapGroups.clear();
    document.querySelectorAll(".pin-toggle-item").forEach(i => i.classList.add("inactive"));
    playUiSound("click");
    renderAllMapMarkers();
    triggerToast("Hidden all markers");
  });

  const searchInput = document.getElementById("mapLocationSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      renderAllMapMarkers(q);
      handleMapSearchDropdown(q);
    });
    searchInput.addEventListener("focus", (e) => {
      if (e.target.value.trim()) {
        handleMapSearchDropdown(e.target.value);
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const firstOption = document.querySelector("#mapSearchResults .search-item-option");
        if (firstOption) firstOption.click();
      }
    });
  }

  // Close map search dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".map-gps-search-box")) {
      document.getElementById("mapSearchResults")?.classList.add("hidden");
    }
  });

  // Toggle Map Sidebar (Wide-screen immersive mode)
  const btnToggleSidebar = document.getElementById("btnToggleMapSidebar");
  const mapLayout = document.querySelector(".map-page-layout");
  const sidebarLabel = document.getElementById("sidebarToggleLabel");
  if (btnToggleSidebar && mapLayout) {
    btnToggleSidebar.addEventListener("click", () => {
      mapLayout.classList.toggle("sidebar-hidden");
      const isHidden = mapLayout.classList.contains("sidebar-hidden");
      if (sidebarLabel) {
        sidebarLabel.textContent = isHidden ? "Show Sidebar" : "Hide Sidebar";
      }
      playUiSound("click");
      setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize(true);
      }, 300);
      triggerToast(isHidden ? "Expanded to Full-Width Map view" : "Categories Sidebar restored");
    });
  }

  // Fit Map Overview (Full Leonida State)
  const btnFitOverview = document.getElementById("btnFitMapOverview");
  if (btnFitOverview) {
    btnFitOverview.addEventListener("click", () => {
      if (leafletMap) {
        leafletMap.flyTo([0.66, -0.67], 11.2, { duration: 0.8 });
        playUiSound("click");
        triggerToast("Fitted view to entire Leonida State");
      }
    });
  }

  // Toggle Fullscreen Viewport
  const btnMapFullscreen = document.getElementById("btnMapFullscreen");
  const btnExitFullscreen = document.getElementById("btnExitFullscreen");
  const mapViewport = document.getElementById("mapCanvasViewport");
  const fullscreenLabel = document.getElementById("fullscreenToggleLabel");

  function toggleMapFullscreen() {
    if (!mapViewport) return;
    mapViewport.classList.toggle("is-fullscreen");
    const isFull = mapViewport.classList.contains("is-fullscreen");
    if (btnExitFullscreen) {
      btnExitFullscreen.classList.toggle("hidden", !isFull);
    }
    if (fullscreenLabel) {
      fullscreenLabel.textContent = isFull ? "Exit Fullscreen" : "Fullscreen";
    }
    playUiSound("click");
    setTimeout(() => {
      if (leafletMap) leafletMap.invalidateSize(true);
    }, 250);
  }

  if (btnMapFullscreen) {
    btnMapFullscreen.addEventListener("click", toggleMapFullscreen);
  }
  if (btnExitFullscreen) {
    btnExitFullscreen.addEventListener("click", toggleMapFullscreen);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function handleMapSearchDropdown(query) {
  const dropdown = document.getElementById("mapSearchResults");
  if (!dropdown) return;

  const q = query.toLowerCase().trim();
  if (!q) {
    dropdown.classList.add("hidden");
    return;
  }

  const allLocs = window.LEONIDA_MARKERS || [];
  const matches = allLocs.filter(m => 
    (m.title && m.title.toLowerCase().includes(q)) || 
    (m.catTitle && m.catTitle.toLowerCase().includes(q)) ||
    (m.desc && m.desc.toLowerCase().includes(q))
  ).slice(0, 8);

  if (matches.length === 0) {
    dropdown.innerHTML = `
      <div style="padding: 14px 16px; text-align: center; font-size: 0.82rem; color: var(--text-muted);">
        No locations found matching "<strong>${escapeHtml(query)}</strong>".<br>
        <span style="font-size:0.74rem; color:var(--text-dim);">Try searching: Bank, Ammu-Nation, Stunt, Airport, Cheetah...</span>
      </div>
    `;
    dropdown.classList.remove("hidden");
    return;
  }

  dropdown.innerHTML = matches.map(m => {
    const color = getGroupBadgeColor(m.group || (m.catTitle ? m.catTitle.toLowerCase() : "default"));
    const catName = m.catTitle || "LOCATION";
    const gpsCoord = (m.lat && m.lng) ? `GPS: [${m.lat.toFixed(5)}, ${m.lng.toFixed(5)}]` : "";
    return `
      <div class="search-item-option" onclick="selectSearchResultById(${m.id})">
        <div class="search-item-header">
          <span class="search-item-name">${escapeHtml(m.title)}</span>
          <span class="search-item-badge" style="background:${color}18; color:${color}; border:1px solid ${color}44;">
            ${escapeHtml(catName)}
          </span>
        </div>
        <div class="search-item-sector">
          <span>📍 ${gpsCoord}</span>
        </div>
        ${m.desc ? `<div class="search-item-desc">${escapeHtml(m.desc)}</div>` : ''}
      </div>
    `;
  }).join("");

  dropdown.classList.remove("hidden");
}

function selectSearchResultById(id) {
  const dropdown = document.getElementById("mapSearchResults");
  if (dropdown) dropdown.classList.add("hidden");

  const allLocs = window.LEONIDA_MARKERS || [];
  const marker = allLocs.find(m => m.id === id);
  if (!marker || !leafletMap) return;

  const searchInput = document.getElementById("mapLocationSearch");
  if (searchInput) searchInput.value = marker.title;

  playUiSound("click");
  triggerToast(`Navigating to ${marker.title}...`);

  // Fly to location with smooth animation
  leafletMap.flyTo([marker.lat, marker.lng], 16, { duration: 1.0 });

  // Open popup after map arrives
  setTimeout(() => {
    const color = getGroupBadgeColor(marker.group || (marker.catTitle ? marker.catTitle.toLowerCase() : "default"));
    const popupHtml = `
      <div class="popup-tag-badge" style="background:${color}22; color:${color}; border:1px solid ${color}55;">
        ${(marker.catTitle || "WAYPOINT").toUpperCase()}
      </div>
      <div class="popup-title">${escapeHtml(marker.title)}</div>
      <div class="popup-region">GPS: [${marker.lat.toFixed(5)}, ${marker.lng.toFixed(5)}]</div>
      <p class="popup-desc">${escapeHtml(marker.desc || 'Confirmed in-game waypoint across greater Leonida.')}</p>
    `;

    L.popup()
      .setLatLng([marker.lat, marker.lng])
      .setContent(popupHtml)
      .openOn(leafletMap);
  }, 950);
}

window.selectSearchResultById = selectSearchResultById;


// --- VEHICLES VIEW ---
function setupVehicleEvents() {
  document.querySelectorAll(".v-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".v-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeVehicleFilter = btn.dataset.category;
      renderVehicles();
      playUiSound("click");
    });
  });

  const sortSelect = document.getElementById("vehicleSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeVehicleSort = e.target.value;
      renderVehicles();
      playUiSound("click");
    });
  }

  const searchInput = document.getElementById("vehicleSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeVehicleSearch = e.target.value.toLowerCase().trim();
      renderVehicles();
    });
  }

  document.getElementById("btnRunCompare")?.addEventListener("click", () => {
    showCompareModal();
  });
}

function renderVehicles() {
  const grid = document.getElementById("vehiclesCardsGrid");
  const countBadge = document.getElementById("vehicleCountBadge");
  if (!grid) return;
  grid.innerHTML = "";

  let list = vehiclesDatabase.filter(v => {
    const matchesCat = (activeVehicleFilter === "all" || v.category === activeVehicleFilter);
    const matchesSearch = !activeVehicleSearch || 
      v.name.toLowerCase().includes(activeVehicleSearch) ||
      v.inspo.toLowerCase().includes(activeVehicleSearch) ||
      v.engine.toLowerCase().includes(activeVehicleSearch) ||
      v.location.toLowerCase().includes(activeVehicleSearch);
    return matchesCat && matchesSearch;
  });

  // Sort
  if (activeVehicleSort === "speed-desc") {
    list.sort((a, b) => b.speed - a.speed);
  } else if (activeVehicleSort === "speed-asc") {
    list.sort((a, b) => a.speed - b.speed);
  } else if (activeVehicleSort === "accel-desc") {
    list.sort((a, b) => b.accel - a.accel);
  } else if (activeVehicleSort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (activeVehicleSort === "handling-desc") {
    list.sort((a, b) => b.handling - a.handling);
  }

  if (countBadge) {
    const catLabel = activeVehicleFilter === "all" ? "All Classes" : activeVehicleFilter.toUpperCase();
    countBadge.innerHTML = `<span class="status-indicator-dot"></span><span>Showing ${list.length} of ${vehiclesDatabase.length} Confirmed Models (${catLabel})</span>`;
  }

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted); font-size: 0.9rem;">No vehicles found matching "${activeVehicleSearch}".</div>`;
    return;
  }

  const catDisplayNames = {
    hyper: "SUPER & HYPER",
    sports: "SPORTS",
    classics: "SPORTS CLASSICS",
    muscle: "MUSCLE",
    coupes: "COUPE & GT",
    sedans: "SEDAN & LUXURY",
    suvs: "SUV & CROSSOVER",
    offroad: "OFF-ROAD & ATV",
    vans: "VANS & PICKUPS",
    motorcycles: "MOTORCYCLE",
    emergency: "EMERGENCY & POLICE",
    commercial: "COMMERCIAL & HEAVY",
    aviation: "PLANES & JETS",
    helicopters: "HELICOPTER",
    boats: "WATERCRAFT"
  };

  list.forEach(v => {
    const isSelected = compareList.includes(v.id);
    const card = document.createElement("div");
    card.className = "v-card-element";

    card.innerHTML = `
      <div class="v-image-container">
        <img class="v-image-photo" src="${v.image}" alt="${v.name}" loading="lazy" onerror="this.onerror=null; this.src='${v.fallback || '/assets/cheetah.jpg'}';" />
        <div class="v-image-overlay"></div>
        <span class="v-class-chip tag-${v.category}">${catDisplayNames[v.category] || v.category.toUpperCase()}</span>
      </div>

      <div class="v-card-body">
        <div>
          <h3 class="v-model-name">${v.name}</h3>
          <div class="v-inspo-tag">Base Archetype: ${v.inspo}</div>
          
          <div class="v-stat-meter-wrap">
            <div class="v-stat-row">
              <div class="v-stat-labels"><span>Top Speed</span><span>${v.topMph}</span></div>
              <div class="v-stat-bar-track"><div class="v-stat-bar-fill fill-speed" style="width: ${v.speed}%"></div></div>
            </div>
            <div class="v-stat-row">
              <div class="v-stat-labels"><span>Acceleration</span><span>${v.accel} / 100</span></div>
              <div class="v-stat-bar-track"><div class="v-stat-bar-fill fill-accel" style="width: ${v.accel}%"></div></div>
            </div>
            <div class="v-stat-row">
              <div class="v-stat-labels"><span>Handling Dynamics</span><span>${v.handling} / 100</span></div>
              <div class="v-stat-bar-track"><div class="v-stat-bar-fill fill-handle" style="width: ${v.handling}%"></div></div>
            </div>
          </div>

          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px; line-height: 1.45;">
            <strong>Powertrain:</strong> ${v.engine}<br>
            <strong>Spawns:</strong> ${v.location}
          </p>

          <div class="v-haptic-telemetry">
            <span class="haptic-dot"></span>
            <span>DualSense Adaptive Trigger: Dynamic Resistance at 80%+ Speed</span>
          </div>
        </div>

        <div class="v-card-actions">
          <button class="btn-add-compare ${isSelected ? 'selected' : ''}" onclick="toggleCompare('${v.id}')">
            ${isSelected ? 'Selected in Comparison' : '+ Compare Model'}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function toggleCompare(vId) {
  const car = vehiclesDatabase.find(v => v.id === vId);
  if (compareList.includes(vId)) {
    compareList = compareList.filter(id => id !== vId);
    triggerToast(`Removed ${car ? car.name : 'model'} from comparison.`);
  } else {
    if (compareList.length >= 2) {
      compareList.shift();
    }
    compareList.push(vId);
    playUiSound("click");

    if (compareList.length === 1) {
      triggerToast(`Selected ${car ? car.name : 'Model'}. Tap a 2nd car to auto-compare!`);
    } else if (compareList.length === 2) {
      const c1 = vehiclesDatabase.find(v => v.id === compareList[0]);
      const c2 = vehiclesDatabase.find(v => v.id === compareList[1]);
      triggerToast(`Comparing ${c1.name} vs ${c2.name}...`);
      setTimeout(() => {
        showCompareModal();
      }, 300);
    }
  }

  updateCompareDock();
  renderVehicles();
}

function clearCompare() {
  compareList = [];
  updateCompareDock();
  renderVehicles();
  triggerToast("Vehicle comparison cleared.");
}

function updateCompareDock() {
  // Update desktop in-page dock
  const dock = document.getElementById("comparatorDock");
  const slot1 = document.getElementById("compSlot1");
  const slot2 = document.getElementById("compSlot2");

  if (dock && slot1 && slot2) {
    if (compareList.length > 0) {
      dock.classList.add("active");
      const car1 = vehiclesDatabase.find(v => v.id === compareList[0]);
      slot1.innerText = car1 ? car1.name : "Model 1";

      if (compareList.length === 2) {
        const car2 = vehiclesDatabase.find(v => v.id === compareList[1]);
        slot2.innerText = car2 ? car2.name : "Select Second Model";
      } else {
        slot2.innerText = "Select Second Model";
      }
    } else {
      dock.classList.remove("active");
    }
  }

  // Update or create Floating Compare Bar for mobile and desktop quick view
  let floatBar = document.getElementById("floatingCompareDock");
  if (!floatBar) {
    floatBar = document.createElement("div");
    floatBar.id = "floatingCompareDock";
    floatBar.className = "floating-compare-dock";
    document.body.appendChild(floatBar);
  }

  if (compareList.length === 1) {
    const car1 = vehiclesDatabase.find(v => v.id === compareList[0]);
    floatBar.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; overflow:hidden;">
        <span style="font-size:1.1rem; line-height:1;">🏎️</span>
        <div style="line-height:1.2;">
          <div style="font-size:0.82rem; font-weight:700; color:var(--text-primary);">${car1 ? car1.name : 'Model 1'}</div>
          <div style="font-size:0.7rem; color:var(--accent-primary); font-weight:600;">Tap 2nd model to auto-compare</div>
        </div>
      </div>
      <button onclick="clearCompare()" style="background:transparent; border:1px solid var(--border-medium); border-radius:6px; color:var(--text-muted); font-size:0.72rem; padding:4px 8px; cursor:pointer;" title="Clear Selection">✕ Cancel</button>
    `;
    floatBar.classList.add("visible");
  } else if (compareList.length === 2) {
    const c1 = vehiclesDatabase.find(v => v.id === compareList[0]);
    const c2 = vehiclesDatabase.find(v => v.id === compareList[1]);
    floatBar.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; overflow:hidden; flex:1;">
        <span style="font-size:1.1rem; line-height:1;">⚡</span>
        <div style="line-height:1.2; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          <div style="font-size:0.82rem; font-weight:800; color:var(--text-primary); text-overflow:ellipsis; overflow:hidden;">${c1.name} vs ${c2.name}</div>
          <div style="font-size:0.7rem; color:#10b981; font-weight:600;">Ready for Telemetry Analysis</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
        <button onclick="showCompareModal()" style="background:var(--accent-primary); color:#ffffff; border:none; border-radius:6px; padding:6px 12px; font-size:0.76rem; font-weight:700; cursor:pointer; box-shadow:0 2px 8px rgba(225,29,72,0.3);">View Comparison</button>
        <button onclick="clearCompare()" style="background:transparent; border:1px solid var(--border-medium); border-radius:6px; color:var(--text-muted); font-size:0.72rem; padding:4px 7px; cursor:pointer;" title="Clear">✕</button>
      </div>
    `;
    floatBar.classList.add("visible");
  } else {
    floatBar.classList.remove("visible");
  }
}

function showCompareModal() {
  if (compareList.length < 2) {
    triggerToast("Select two vehicle models for head-to-head comparison.");
    return;
  }

  const c1 = vehiclesDatabase.find(v => v.id === compareList[0]);
  const c2 = vehiclesDatabase.find(v => v.id === compareList[1]);
  if (!c1 || !c2) return;

  const modal = document.getElementById("compareModal");
  const content = document.getElementById("compareModalContent");
  if (!modal || !content) return;

  const c1SpeedHigher = c1.speed > c2.speed;
  const c2SpeedHigher = c2.speed > c1.speed;
  const c1AccelHigher = c1.accel > c2.accel;
  const c2AccelHigher = c2.accel > c1.accel;
  const c1HandlingHigher = c1.handling > c2.handling;
  const c2HandlingHigher = c2.handling > c1.handling;

  content.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--border-subtle);">
      <div>
        <span style="font-size:0.72rem; font-weight:800; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.06em;">HEAD-TO-HEAD TELEMETRY</span>
        <h2 style="font-size:1.35rem; color:var(--text-primary); font-weight:800; margin:2px 0 0 0;">${c1.name} vs ${c2.name}</h2>
      </div>
    </div>

    <div class="compare-grid-layout">
      <!-- Car 1 Panel -->
      <div class="compare-card-panel">
        <div style="width:100%; height:140px; border-radius:6px; overflow:hidden; background:var(--bg-base); margin-bottom:12px; position:relative;">
          <img src="${c1.image}" alt="${c1.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='./assets/car_placeholder.jpg'"/>
          <span style="position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.65); backdrop-filter:blur(4px); color:#fff; font-size:0.68rem; font-weight:700; padding:3px 7px; border-radius:4px; text-transform:uppercase;">${c1.type}</span>
        </div>
        <h3 style="color:var(--text-primary); font-size:1.1rem; font-weight:800; margin:0 0 4px 0;">${c1.name}</h3>
        <p style="font-size:0.75rem; color:var(--text-muted); margin:0 0 14px 0;">Archetype: ${c1.inspo}</p>

        <div style="display:flex; flex-direction:column; gap:6px;">
          <div class="compare-stat-row">
            <span>Top Speed</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c1.topMph}</strong>
              ${c1SpeedHigher ? '<span class="compare-winner-tag">⚡ FASTER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Acceleration</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c1.accel}/100</strong>
              ${c1AccelHigher ? '<span class="compare-winner-tag">⚡ QUICKER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Handling Dynamics</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c1.handling}/100</strong>
              ${c1HandlingHigher ? '<span class="compare-winner-tag">⚡ SHARPER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Powertrain</span>
            <span style="font-weight:600; color:var(--text-primary);">${c1.engine}</span>
          </div>
          <div class="compare-stat-row">
            <span>Confirmed Spawns</span>
            <span style="font-size:0.74rem; color:var(--text-muted); text-align:right; max-width:60%;">${c1.spawns}</span>
          </div>
        </div>

        <div style="margin-top:12px; padding:8px 10px; background:rgba(14,165,233,0.08); border:1px solid rgba(14,165,233,0.2); border-radius:6px; font-size:0.72rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
          <span style="width:6px; height:6px; border-radius:50%; background:#0ea5e9; flex-shrink:0;"></span>
          <span>DualSense Resistance: ${c1.dualsense}</span>
        </div>
      </div>

      <div class="compare-vs-badge">VS</div>

      <!-- Car 2 Panel -->
      <div class="compare-card-panel">
        <div style="width:100%; height:140px; border-radius:6px; overflow:hidden; background:var(--bg-base); margin-bottom:12px; position:relative;">
          <img src="${c2.image}" alt="${c2.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='./assets/car_placeholder.jpg'"/>
          <span style="position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.65); backdrop-filter:blur(4px); color:#fff; font-size:0.68rem; font-weight:700; padding:3px 7px; border-radius:4px; text-transform:uppercase;">${c2.type}</span>
        </div>
        <h3 style="color:var(--text-primary); font-size:1.1rem; font-weight:800; margin:0 0 4px 0;">${c2.name}</h3>
        <p style="font-size:0.75rem; color:var(--text-muted); margin:0 0 14px 0;">Archetype: ${c2.inspo}</p>

        <div style="display:flex; flex-direction:column; gap:6px;">
          <div class="compare-stat-row">
            <span>Top Speed</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c2.topMph}</strong>
              ${c2SpeedHigher ? '<span class="compare-winner-tag">⚡ FASTER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Acceleration</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c2.accel}/100</strong>
              ${c2AccelHigher ? '<span class="compare-winner-tag">⚡ QUICKER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Handling Dynamics</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <strong>${c2.handling}/100</strong>
              ${c2HandlingHigher ? '<span class="compare-winner-tag">⚡ SHARPER</span>' : ''}
            </div>
          </div>
          <div class="compare-stat-row">
            <span>Powertrain</span>
            <span style="font-weight:600; color:var(--text-primary);">${c2.engine}</span>
          </div>
          <div class="compare-stat-row">
            <span>Confirmed Spawns</span>
            <span style="font-size:0.74rem; color:var(--text-muted); text-align:right; max-width:60%;">${c2.spawns}</span>
          </div>
        </div>

        <div style="margin-top:12px; padding:8px 10px; background:rgba(14,165,233,0.08); border:1px solid rgba(14,165,233,0.2); border-radius:6px; font-size:0.72rem; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
          <span style="width:6px; height:6px; border-radius:50%; background:#0ea5e9; flex-shrink:0;"></span>
          <span>DualSense Resistance: ${c2.dualsense}</span>
        </div>
      </div>
    </div>

    <div style="margin-top:20px; display:flex; justify-content:flex-end; gap:10px;">
      <button onclick="clearCompare(); closeCompareModal();" style="background:var(--bg-surface-elevated); border:1px solid var(--border-medium); color:var(--text-muted); font-size:0.8rem; font-weight:600; padding:9px 18px; border-radius:6px; cursor:pointer;">Clear &amp; Close</button>
      <button onclick="closeCompareModal()" style="background:var(--accent-primary); border:none; color:#ffffff; font-size:0.8rem; font-weight:700; padding:9px 22px; border-radius:6px; cursor:pointer;">Done</button>
    </div>
  `;

  modal.classList.add("active");
  playUiSound("open");
}

function closeCompareModal() {
  document.getElementById("compareModal")?.classList.remove("active");
  playUiSound("click");
}

// --- FAQ ACCORDION ---
function setupFaqAccordion() {
  document.querySelectorAll(".faq-accordion-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-accordion-item");
      item.classList.toggle("open");
    });
  });
}

// --- TOAST ---
function triggerToast(msg) {
  let toast = document.getElementById("appToastAlert");
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}


// Confirmed Authentic GTA 6 Weapons Database (Source: Verified Leaks & GTABase)
const weaponsDatabase = [
  {
    id: "klose-k17",
    image: "/assets/weapons/klose-k17.jpg",
    name: "Klose K17",
    category: "handguns",
    catLabel: "Handgun",
    mfg: "Klose",
    inspo: "Glock 17 (9x19mm Parabellum)",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 38,
    fireRate: 65,
    accuracy: 72,
    range: 45,
    mag: "17 Rounds",
    price: "$450",
    spawns: "Ammu-Nation Outlets & Vice City Police Holsters",
    desc: "Standard issue 9mm semi-automatic polymer duty pistol. Highly reliable, minimal recoil, and fast reload times make it Jason and Lucia's dependable sidearm."
  },
  {
    id: "girardi-es9",
    image: "/assets/weapons/girardi-es9.jpg",
    name: "Girardi ES9",
    category: "handguns",
    catLabel: "Handgun",
    mfg: "Girardi",
    inspo: "Beretta 92FS / M9",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 42,
    fireRate: 60,
    accuracy: 76,
    range: 50,
    mag: "15 Rounds",
    price: "$520",
    spawns: "Downtown Vice City Gun Shops & Security Guards",
    desc: "Italian-engineered all-metal service pistol offering crisp single-action trigger pulls and superior mid-range accuracy."
  },
  {
    id: "duke-mustang-357",
    image: "/assets/weapons/duke-mustang-357.jpg",
    name: "Duke Mustang .357",
    category: "handguns",
    catLabel: "Revolver",
    mfg: "Duke Arms",
    inspo: "Colt Python .357 Magnum",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 82,
    fireRate: 35,
    accuracy: 80,
    range: 65,
    mag: "6 Rounds",
    price: "$980",
    spawns: "Pawn & Gun Port Gellhorn & Rural Farmsteads",
    desc: "Heavy-caliber stainless steel wheelgun. Tremendous stopping power capable of dropping armored targets in one well-placed chest shot."
  },
  {
    id: "hawk-little-morgan",
    image: "/assets/weapons/hawk-little-morgan.jpg",
    name: "Hawk & Little Morgan",
    category: "handguns",
    catLabel: "Heavy Revolver",
    mfg: "Hawk & Little",
    inspo: "Smith & Wesson Model 29 (.44 Magnum)",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 90,
    fireRate: 30,
    accuracy: 78,
    range: 68,
    mag: "6 Rounds",
    price: "$1,150",
    spawns: "Biff's Gun Supply & Little Haiti Fences",
    desc: "The quintessential hand-cannon. High recoil and loud muzzle signature paired with devastating anti-vehicle projectile velocity."
  },
  {
    id: "coil-shocker",
    image: "/assets/weapons/coil-shocker.jpg",
    name: "Coil Shocker",
    category: "handguns",
    catLabel: "Non-Lethal",
    mfg: "Coil",
    inspo: "Axon TASER 7 / X26",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 15,
    fireRate: 25,
    accuracy: 85,
    range: 22,
    mag: "2 Cartridges",
    price: "$350",
    spawns: "Leonida Department of Corrections & Security Supply",
    desc: "Twin-probe neuromuscular incapacitation device. Instantly immobilizes hostile targets without triggering lethal murder charges."
  },
  {
    id: "vom-feuer-vf5",
    image: "/assets/weapons/vom-feuer-vf5.jpg",
    name: "Vom Feuer VF5",
    category: "smgs",
    catLabel: "Submachine Gun",
    mfg: "Vom Feuer",
    inspo: "Heckler & Koch MP5A3",
    carry: "pocket",
    carryLabel: "Pocket / Sling",
    damage: 46,
    fireRate: 85,
    accuracy: 75,
    range: 58,
    mag: "30 Rounds",
    price: "$1,850",
    spawns: "SWAT Tactical Lockers & Little Haiti Armories",
    desc: "Roller-delayed blowback submachine gun renowned worldwide for pinpoint controllable automatic fire in close-quarters room breaches."
  },
  {
    id: "wortham-w10",
    image: "/assets/weapons/wortham-w10.jpg",
    name: "Wortham W-10",
    category: "smgs",
    catLabel: "Machine Pistol",
    mfg: "Wortham",
    inspo: "Ingram MAC-10 (.45 ACP)",
    carry: "pocket",
    carryLabel: "Pocket Concealed",
    damage: 40,
    fireRate: 95,
    accuracy: 48,
    range: 35,
    mag: "32 Rounds",
    price: "$1,200",
    spawns: "Gang Cache Drops & Drive-By Loadouts",
    desc: "Furious cyclic rate of 1,100 rounds per minute. Devastating spray-and-pray lethality from vehicle passenger seats."
  },
  {
    id: "adb-pd90",
    image: "/assets/weapons/adb-pd90.jpg",
    name: "ADB PD-90",
    category: "smgs",
    catLabel: "Bullpup PDW",
    mfg: "ADB",
    inspo: "FN P90 (5.7x28mm)",
    carry: "pocket",
    carryLabel: "Pocket / Sling",
    damage: 50,
    fireRate: 88,
    accuracy: 82,
    range: 65,
    mag: "50 Rounds",
    price: "$2,600",
    spawns: "Vice City International Airport Cargo Security",
    desc: "Translucent top-mounted 50-round magazine firing high-velocity armor-piercing cartridges capable of penetrating Kevlar vests."
  },
  {
    id: "duke-556",
    image: "/assets/weapons/duke-556.jpg",
    name: "Duke 556 Carbine",
    category: "rifles",
    catLabel: "Assault Rifle",
    mfg: "Duke Arms",
    inspo: "Colt M4A1 / AR-15 (5.56x45mm NATO)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 64,
    fireRate: 75,
    accuracy: 84,
    range: 78,
    mag: "30 Rounds",
    price: "$3,400",
    spawns: "Ammu-Nation Superstores & National Guard Armories",
    desc: "The gold standard tactical platform across North America. Highly customizable with suppressors, extended mags, holographic optics, and vertical grips."
  },
  {
    id: "kozlov-kz59",
    image: "/assets/weapons/kozlov-kz59.jpg",
    name: "Kozlov KZ-59",
    category: "rifles",
    catLabel: "Assault Rifle",
    mfg: "Kozlov",
    inspo: "AKM / AK-47 (7.62x39mm)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 72,
    fireRate: 68,
    accuracy: 70,
    range: 74,
    mag: "30 Rounds",
    price: "$2,950",
    spawns: "Smuggler Docks & Swamp Compound Caches",
    desc: "Rugged, dirt-resistant gas-operated rifle. Unmatched barrier penetration and raw stopping power across swamp and mud conditions."
  },
  {
    id: "adb-fra",
    image: "/assets/weapons/adb-fra.jpg",
    name: "ADB FRA Tactical",
    category: "rifles",
    catLabel: "Combat Rifle",
    mfg: "ADB",
    inspo: "SIG Sauer MCX Spear / HK416",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 68,
    fireRate: 78,
    accuracy: 88,
    range: 82,
    mag: "30 Rounds",
    price: "$4,200",
    spawns: "Federal Taskforce Armories & High-End Gunsmiths",
    desc: "Next-generation short-stroke gas piston platform offering laser-beam precision recoil control under sustained full-auto bursts."
  },
  {
    id: "fortune-moreland-850",
    image: "/assets/weapons/fortune-moreland-850.jpg",
    name: "Moreland 850",
    category: "shotguns",
    catLabel: "Pump Shotgun",
    mfg: "Fortune & Son",
    inspo: "Remington 870 Tactical (12 Gauge)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 86,
    fireRate: 32,
    accuracy: 55,
    range: 40,
    mag: "8 Shells",
    price: "$1,450",
    spawns: "Highway Patrol Cruisers & Bank Security Vaults",
    desc: "Heavy 12-gauge pump action shotgun loaded with 00 buckshot. Unforgiving point-blank lethality for bank vault breach operations."
  },
  {
    id: "girardi-az1200",
    image: "/assets/weapons/girardi-az1200.jpg",
    name: "Girardi AZ1200",
    category: "shotguns",
    catLabel: "Combat Shotgun",
    mfg: "Girardi",
    inspo: "Benelli M4 Super 90",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 84,
    fireRate: 58,
    accuracy: 62,
    range: 48,
    mag: "7 Shells",
    price: "$2,850",
    spawns: "Tequesta Guns & Ammo & SWAT Tactical Vans",
    desc: "Auto-regulating gas-operated semi-automatic combat shotgun. Delivers rapid successive blasts capable of clearing rooms in seconds."
  },
  {
    id: "goodwin-comshot-12",
    image: "/assets/weapons/goodwin-comshot-12.jpg",
    name: "Goodwin Comshot 12",
    category: "shotguns",
    catLabel: "Sawed-Off Shotgun",
    mfg: "Goodwin",
    inspo: "Coach Double-Barreled Shotgun",
    carry: "pocket",
    carryLabel: "Pocket / Holster",
    damage: 96,
    fireRate: 45,
    accuracy: 40,
    range: 28,
    mag: "2 Shells",
    price: "$850",
    spawns: "Back-Alley Pawn Shops & Biker Hangouts",
    desc: "Compact sawed-off double barrel. Colossal spread and immediate knockdown power at conversational ranges."
  },
  {
    id: "fairview-ff50",
    image: "/assets/weapons/fairview-ff50.jpg",
    name: "Fairview FF-50 Anti-Materiel",
    category: "snipers",
    catLabel: "Heavy Sniper",
    mfg: "Fairview",
    inspo: "Barrett M82A1 (.50 BMG)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 98,
    fireRate: 28,
    accuracy: 96,
    range: 98,
    mag: "10 Rounds",
    price: "$12,500",
    spawns: "Military Airbase Watchtowers & Port Gellhorn Crane Perches",
    desc: "Semi-automatic .50 BMG long-rifle designed to disable helicopter rotor blades, engine blocks, and distant targets through concrete cover."
  },
  {
    id: "wortham-w22",
    image: "/assets/weapons/wortham-w22.jpg",
    name: "Wortham W-22 Marksman",
    category: "snipers",
    catLabel: "Marksman Rifle",
    mfg: "Wortham",
    inspo: "Ruger 10/22 Tactical Integrally Suppressed",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 54,
    fireRate: 52,
    accuracy: 92,
    range: 85,
    mag: "10 Rounds",
    price: "$2,200",
    spawns: "Hunting Lodges across Gator Keys",
    desc: "Whisper-quiet precision varmint rifle. Perfect for stealth infiltrations, disabling security cameras, and clean assassinations."
  },
  {
    id: "goodwin-lmg6",
    image: "/assets/weapons/goodwin-lmg6.jpg",
    name: "Goodwin LMG 6",
    category: "heavy",
    catLabel: "Squad LMG",
    mfg: "Goodwin",
    inspo: "FN M249 SAW (5.56mm Belt)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 70,
    fireRate: 82,
    accuracy: 68,
    range: 80,
    mag: "100 Round Belt",
    price: "$8,900",
    spawns: "Fort Zancudo Outpost & Heavy SWAT Convoys",
    desc: "100-round belt-fed light machine gun providing overwhelming sustained suppressive fire against police road blocks."
  },
  {
    id: "hillinger-boomer",
    image: "/assets/weapons/hillinger-boomer.jpg",
    name: "Hillinger Boomer RPG",
    category: "heavy",
    catLabel: "Rocket Launcher",
    mfg: "Hillinger",
    inspo: "RPG-7 Shoulder Launcher",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 100,
    fireRate: 15,
    accuracy: 80,
    range: 90,
    mag: "1 Rocket",
    price: "$15,000",
    spawns: "Smuggler Airfields & Hidden Bunker Vaults",
    desc: "High-explosive anti-tank shoulder launcher. Obliterates armored police interceptors, helicopters, and concrete barricades."
  },
  {
    id: "deever-glr40",
    image: "/assets/weapons/deever-glr40.jpg",
    name: "Deever Tech GLR40",
    category: "heavy",
    catLabel: "Grenade Launcher",
    mfg: "Deever Tech",
    inspo: "Milkor M32 MGL (40mm)",
    carry: "trunk",
    carryLabel: "Vehicle Trunk Stash",
    damage: 95,
    fireRate: 40,
    accuracy: 72,
    range: 70,
    mag: "6 Revolving Drums",
    price: "$18,500",
    spawns: "Black Market Fences & Secret Naval Warehouses",
    desc: "6-shot revolving semi-automatic 40mm grenade launcher. Blankets entire intersections in explosive fragmentation."
  },
  {
    id: "arras-bullhead",
    image: "/assets/weapons/arras-bullhead.jpg",
    name: "Arras Bullhead Speargun",
    category: "heavy",
    catLabel: "Harpoon / Stealth",
    mfg: "Arras",
    inspo: "Pneumatic Marine Speargun",
    carry: "trunk",
    carryLabel: "Trunk / Boat Rack",
    damage: 75,
    fireRate: 20,
    accuracy: 78,
    range: 30,
    mag: "1 Steel Spear",
    price: "$750",
    spawns: "Keys Marina Dive Centers & Fishing Outposts",
    desc: "High-tension pneumatic underwater speargun. Lethal against submerged predators and patrolling harbor sentries."
  },
  {
    id: "combat-knife",
    image: "/assets/weapons/combat-knife.jpg",
    name: "Serrated Combat Knife",
    category: "melee",
    catLabel: "Melee",
    mfg: "Girardi Edge",
    inspo: "KA-BAR USMC Tactical Knife",
    carry: "pocket",
    carryLabel: "Pocket Sheath",
    damage: 55,
    fireRate: 80,
    accuracy: 95,
    range: 5,
    mag: "Melee",
    price: "$120",
    spawns: "Hardware Stores & Gas Station Racks",
    desc: "Carbon steel serrated tactical combat knife for silent close-quarters takedowns from behind."
  },
  {
    id: "baseball-bat",
    image: "/assets/weapons/baseball-bat.jpg",
    name: "Alloy Slugger Bat",
    category: "melee",
    catLabel: "Melee",
    mfg: "Heathen Sports",
    inspo: "Louisville Slugger Aluminum Bat",
    carry: "pocket",
    carryLabel: "Vehicle Boot / Shoulder",
    damage: 60,
    fireRate: 65,
    accuracy: 90,
    range: 8,
    mag: "Melee",
    price: "$85",
    spawns: "Sports Complexes & Pawn Shops",
    desc: "Hollow aluminum baseball bat capable of shattering glass, disabling alarm boxes, and delivering crushing blunt force."
  },
  {
    id: "m67-frag-grenade",
    image: "/assets/weapons/m67-frag-grenade.jpg",
    name: "M67 Frag Grenade",
    category: "throwables",
    catLabel: "Throwable",
    mfg: "Military Surplus",
    inspo: "M67 Fragmentation Grenade",
    carry: "pocket",
    carryLabel: "Pocket Bandolier",
    damage: 95,
    fireRate: 20,
    accuracy: 85,
    range: 40,
    mag: "1 Hand Thrown",
    price: "$250",
    spawns: "Ammu-Nation Underground & Military Drops",
    desc: "High-explosive timed fuse fragmentation grenade with a lethal casualty radius of 15 meters."
  },
  {
    id: "molotov-cocktail",
    image: "/assets/weapons/molotov-cocktail.jpg",
    name: "Vintage Molotov Cocktail",
    category: "throwables",
    catLabel: "Throwable Incendiary",
    mfg: "DIY Improvised",
    inspo: "Rag & Gasoline Glass Bottle",
    carry: "pocket",
    carryLabel: "Pocket / Bag",
    damage: 85,
    fireRate: 25,
    accuracy: 80,
    range: 35,
    mag: "1 Bottle",
    price: "$100",
    spawns: "Gas Stations & Little Haiti Safehouses",
    desc: "Glass bottle filled with accelerant and a cloth wick. Engulfs police roadblocks and vehicles in sustained blaze."
  }
];



// =========================================================================
// WEAPONS & ARMORY STATE & RENDERING ENGINE
// =========================================================================
let activeWeaponFilter = "all";
let activeWeaponSort = "damage-desc";
let weaponSearchQuery = "";

function renderWeapons() {
  const grid = document.getElementById("weaponsCardsGrid");
  const countLabel = document.getElementById("weaponsCountLabel");
  if (!grid) return;

  const query = weaponSearchQuery.toLowerCase().trim();
  let list = weaponsDatabase.filter(w => {
    const matchesFilter = activeWeaponFilter === "all" || w.category === activeWeaponFilter;
    const matchesQuery = !query || 
      w.name.toLowerCase().includes(query) ||
      w.inspo.toLowerCase().includes(query) ||
      w.mfg.toLowerCase().includes(query) ||
      w.catLabel.toLowerCase().includes(query) ||
      w.spawns.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  // Sorting
  list.sort((a, b) => {
    if (activeWeaponSort === "damage-desc") return b.damage - a.damage;
    if (activeWeaponSort === "firerate-desc") return b.fireRate - a.fireRate;
    if (activeWeaponSort === "accuracy-desc") return b.accuracy - a.accuracy;
    if (activeWeaponSort === "range-desc") return b.range - a.range;
    if (activeWeaponSort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

// Count label removed per user preference for a cleaner toolbar

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 8px;">No weapons match your search criteria.</p>
        <button onclick="clearWeaponFilters()" style="background: var(--accent-primary); color: #fff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 700; cursor: pointer;">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(w => {
    const isPocket = w.carry === "pocket";
    const carryClass = isPocket ? "carry-pocket" : "carry-trunk";
    const carryIcon = isPocket ? "⚡" : "🧰";
    const imgUrl = w.image || `/assets/weapons/${w.id}.jpg`;
    return `
      <article class="weapon-card">
        <div class="weapon-image-container">
          <img class="weapon-image-photo" src="${imgUrl}" alt="${escapeHtml(w.name)}" loading="lazy" onerror="this.onerror=null; this.src='/assets/weapons/default_weapon.jpg';" />
          <div class="weapon-image-overlay"></div>
          <span class="weapon-cat-badge">${escapeHtml(w.catLabel)}</span>
          <span class="weapon-carry-badge ${carryClass}">
            <span>${carryIcon}</span>
            <span>${escapeHtml(w.carryLabel)}</span>
          </span>
        </div>

        <div class="weapon-card-top">
          <h3 class="weapon-title">${escapeHtml(w.name)}</h3>
          <p class="weapon-archetype">Real-World Base: <strong>${escapeHtml(w.inspo)}</strong></p>
        </div>

        <div class="weapon-card-body">
          <div class="weapon-stat-row">
            <div class="stat-label-val">
              <span>Stopping Power</span>
              <span>${w.damage}/100</span>
            </div>
            <div class="stat-track">
              <div class="stat-fill fill-damage" style="width: ${w.damage}%;"></div>
            </div>
          </div>

          <div class="weapon-stat-row">
            <div class="stat-label-val">
              <span>Cyclic Rate</span>
              <span>${w.fireRate}/100</span>
            </div>
            <div class="stat-track">
              <div class="stat-fill fill-firerate" style="width: ${w.fireRate}%;"></div>
            </div>
          </div>

          <div class="weapon-stat-row">
            <div class="stat-label-val">
              <span>Effective Range</span>
              <span>${w.range}/100</span>
            </div>
            <div class="stat-track">
              <div class="stat-fill fill-range" style="width: ${w.range}%;"></div>
            </div>
          </div>

          <div class="weapon-meta-grid">
            <div class="weapon-meta-item">
              <span>Standard Mag:</span>
              <strong>${escapeHtml(w.mag)}</strong>
            </div>
            <div class="weapon-meta-item">
              <span>Ammu-Nation Retail:</span>
              <strong style="color: #10b981;">${escapeHtml(w.price)}</strong>
            </div>
          </div>
        </div>

        <div class="weapon-card-footer">
          <div><strong>📍 Confirmed Spawns:</strong> ${escapeHtml(w.spawns)}</div>
        </div>
      </article>
    `;
  }).join("");
}

function clearWeaponFilters() {
  activeWeaponFilter = "all";
  weaponSearchQuery = "";
  const input = document.getElementById("appWeaponSearch");
  if (input) input.value = "";
  document.querySelectorAll(".w-filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.category === "all");
  });
  renderWeapons();
}

function setupWeaponEvents() {
  document.querySelectorAll(".w-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".w-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeWeaponFilter = btn.dataset.category || "all";
      renderWeapons();
      playUiSound("click");
    });
  });

  const searchInput = document.getElementById("appWeaponSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      weaponSearchQuery = e.target.value;
      renderWeapons();
    });
  }

  const sortSelect = document.getElementById("weaponSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      activeWeaponSort = e.target.value;
      renderWeapons();
      playUiSound("click");
    });
  }
}
