// src/data/goals.js
// Wellness goal categories + product suggestions for Vitalink.
// IMPORTANT (see AGENTS.md): these are general wellness descriptions only —
// no product here should ever be described as treating/curing/preventing a
// named disease or condition. Keep language soft: "often used for",
// "commonly associated with", "many people use this for".

export const goals = [
  {
    id: "energy",
    name: "Energy & vitality",
    sub: "Feeling run down or on the go",
    icon: "Zap",
    products: [
      { name: "Tre-en-en Grain Concentrates", desc: "Whole-food grain concentrate many people use to support everyday cellular energy." },
      { name: "Pro-Vitality Pack", desc: "Daily omega-3, carotenoid and multivitamin combo for general vitality." },
      { name: "Nutrishake", desc: "Protein shake often used as a light, balanced pick-me-up." },
      { name: "Vitality Pack", desc: "Foundational daily pack some people use to support overall energy." }
    ]
  },
  {
    id: "sleep",
    name: "Sleep quality",
    sub: "Trouble winding down at night",
    icon: "Moon",
    products: [
      { name: "Rest & Relax", desc: "Evening blend some people use to support winding down." },
      { name: "Magnesium", desc: "Mineral commonly associated with relaxation and restful nights." },
      { name: "Cal-Mag", desc: "Calcium-magnesium combo often taken in the evening." }
    ]
  },
  {
    id: "stress",
    name: "Stress & calm",
    sub: "A lot on your plate lately",
    icon: "Wind",
    products: [
      { name: "Rest & Relax", desc: "Calming evening blend for stressful stretches." },
      { name: "Vitamin B-Complex", desc: "B vitamins often linked to steady mood and energy." },
      { name: "Aloe Vera Plus", desc: "General wellness tonic some people take daily." }
    ]
  },
  {
    id: "skin",
    name: "Skin & beauty",
    sub: "Dryness, dullness, everyday care",
    icon: "Sparkles",
    products: [
      { name: "Carotenoid Complex", desc: "Antioxidant blend some people use to support skin health." },
      { name: "Vitamin A & D", desc: "Classic pairing associated with skin and immune support." },
      { name: "Aloe Vera Gel", desc: "Topical gel many use for everyday skin comfort." },
      { name: "Vitamin E", desc: "Antioxidant often used to support skin and general wellness." }
    ]
  },
  {
    id: "digestion",
    name: "Digestion support",
    sub: "Feeling bloated or sluggish",
    icon: "Salad",
    products: [
      { name: "Fibre Tablets", desc: "Fibre supplement commonly used to support regularity." },
      { name: "Aloe Vera Plus", desc: "Often used to support everyday digestive comfort." },
      { name: "Magnesium", desc: "Mineral some people use alongside fibre for digestion." },
      { name: "Multi-mineral", desc: "Broad mineral blend some include for general digestive wellness." }
    ]
  },
  {
    id: "immune",
    name: "Immune support",
    sub: "General year-round support",
    icon: "ShieldCheck",
    products: [
      { name: "Vitamin C (or All-C)", desc: "Widely used antioxidant for everyday immune support." },
      { name: "Garlic Complex", desc: "Traditional supplement many use for general wellness." },
      { name: "Beta Guard", desc: "Immune-support blend used as part of a daily routine." },
      { name: "Chelated Zinc", desc: "Mineral often included for everyday immune wellness." }
    ]
  },
  {
    id: "memory",
    name: "Memory & focus",
    sub: "Staying sharp and alert",
    icon: "BrainCog",
    products: [
      { name: "Salmon Oil Plus", desc: "Omega-3 supplement often linked to brain and heart wellness." },
      { name: "Chelated Zinc", desc: "Mineral supporting general cognitive and immune wellness." },
      { name: "Mind Enhancement blend", desc: "Formulated for people wanting extra everyday focus support." },
      { name: "Vitamin B-Complex", desc: "B vitamins commonly associated with mental alertness." }
    ]
  },
  {
    id: "hair",
    name: "Hair & nails",
    sub: "Growth, strength, shine",
    icon: "Sparkle",
    products: [
      { name: "Wheat Germ Oil", desc: "Often used topically or as a supplement to support hair health." },
      { name: "Vitamin B-Complex", desc: "B vitamins commonly associated with hair and nail strength." },
      { name: "Chelated Zinc", desc: "Mineral many take for general hair and skin wellness." },
      { name: "Super Gro (topical)", desc: "Topical formula some people apply to support hair care routines." }
    ]
  },
  {
    id: "weight",
    name: "Weight management",
    sub: "Building healthier habits",
    icon: "Scale",
    products: [
      { name: "Fibre Tablets", desc: "Often used before meals as part of a weight-management routine." },
      { name: "Nutrishake", desc: "Protein shake used as a balanced meal-replacement option." },
      { name: "Amitone", desc: "Supplement some people include in weight-management routines." },
      { name: "Cal-Mag", desc: "Often paired with fibre-based routines for general wellness." }
    ]
  },
  {
    id: "athletic",
    name: "Athletic recovery",
    sub: "Training, sport, staying active",
    icon: "Dumbbell",
    products: [
      { name: "Nutrishake", desc: "Protein support many active people use for recovery." },
      { name: "Tre-en-en Grain Concentrates", desc: "Often used to support energy through training." },
      { name: "Salmon Oil Plus", desc: "Omega-3s some athletes use to support recovery." },
      { name: "Cal-Mag", desc: "Mineral combo some active people use post-training." }
    ]
  },
  {
    id: "joint",
    name: "Joint & mobility comfort",
    sub: "Everyday movement and flexibility",
    icon: "PersonStanding",
    products: [
      { name: "Full Motion", desc: "Joint-support blend many people use for everyday mobility." },
      { name: "Flavonoid Complex", desc: "Antioxidant blend often paired with joint-comfort routines." },
      { name: "Salmon Oil Plus", desc: "Omega-3s commonly used to support joint comfort." },
      { name: "Vitamin C (or All-C)", desc: "Often included for general connective-tissue wellness." }
    ]
  },
  {
    id: "women",
    name: "Women's wellness",
    sub: "General cycle & hormone comfort",
    icon: "Flower2",
    products: [
      { name: "Feminine Herbal Complex", desc: "Herbal blend formulated for general women's wellness." },
      { name: "Cal-Mag", desc: "Often used around the monthly cycle for general comfort." },
      { name: "Cruciferous Plus", desc: "Plant-based supplement some women include in their routine." },
      { name: "Vitamin E", desc: "Antioxidant often included in general wellness routines." }
    ]
  },
  {
    id: "men",
    name: "Men's wellness",
    sub: "General vitality & everyday support",
    icon: "PersonStanding",
    products: [
      { name: "Masculine Herbal Complex", desc: "Herbal blend formulated for general men's wellness." },
      { name: "Pro-Vitality Pack", desc: "Daily omega-3, carotenoid and multivitamin combo." },
      { name: "Chelated Zinc", desc: "Mineral commonly included in men's general wellness routines." }
    ]
  }
];
