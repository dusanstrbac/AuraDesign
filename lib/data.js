export const allProjects = [
  { 
    id: 1,
    slug: "penthouse-bw", 
    title: "Penthouse BW", 
    category: "Rezidencijalni Enterijer",
    location: "Beograd na Vodi, Srbija",
    year: "2024",
    description: "Projekat Penthouse BW fokusiran je na maksimalno iskorišćenje prirodne svetlosti uz korišćenje sirovih materijala poput betona i prirodnog hrasta. Cilj je bio stvoriti prostor koji odiše luksuzom, ali zadržava toplinu doma kroz teksture i pažljivo birano osvetljenje.",
    image: "/project-1.jpg", // Ova slika ide u grid
    images: ["/project-1.jpg", "/detail-1.jpg", "/hero-interior.jpg"] // Ove idu u single project
  },
  { 
    id: 2,
    slug: "minimalist-loft", 
    title: "Minimalist Loft", 
    category: "Rezidencijalni Enterijer",
    location: "Novi Sad, Srbija",
    year: "2023",
    description: "Loft u Novom Sadu predstavlja spoj industrijskog stila i ekstremnog minimalizma. Čiste linije nameštaja po meri i monohromatska paleta boja stvaraju umirujuću atmosferu, dok visoki plafoni daju osećaj slobode i nesputanosti.",
    image: "/project-2.jpg",
    images: ["/project-2.jpg", "/detail-1.jpg", "/hero-interior.jpg"]
  },
  { 
    id: 3,
    slug: "zen-office", 
    title: "Zen Office", 
    category: "Komercijalni Enterijer",
    location: "Budimpešta, Mađarska",
    year: "2024",
    description: "Inspirisan japanskom estetikom, Zen Office je dizajniran da smanji stres i podstakne kreativnost. Korišćenjem prirodnih pregrada od bambusa i integrisane unutrašnje bašte, prostor briše granice između enterijera i eksterijera.",
    image: "/project-4.jpg",
    images: ["/project-4.jpg", "/detail-1.jpg", "/hero-interior.jpg"]
  },
  { 
    id: 4,
    slug: "villa-aura", 
    title: "Villa Aura", 
    category: "Rezidencijalni Enterijer",
    location: "Zlatibor, Srbija",
    year: "2023",
    description: "Villa Aura na Zlatiboru je interpretacija moderne planinske kuće. Velike staklene površine uokviruju prirodu poput umetničkih dela, dok enterijerom dominira kamen i tamni mermer koji reflektuje okolni pejzaž.",
    image: "/project-3.jpg",
    images: ["/project-3.jpg", "/detail-1.jpg", "/hero-interior.jpg"]
  },
  { 
    id: 5,
    slug: "concrete-studio", 
    title: "Concrete Studio", 
    category: "Komercijalni Enterijer",
    location: "Beograd, Srbija",
    year: "2022",
    description: "Eksperimentalan pristup dizajnu gde je beton glavni dekorativni element. Ovaj studio pokazuje kako hladni materijali mogu postati sofisticirani kroz preciznu izradu i kontrast sa luksuznim tkaninama.",
    image: "/detail-1.jpg",
    images: ["/detail-1.jpg", "/project-1.jpg", "/hero-interior.jpg"]
  },
  { 
    id: 6,
    slug: "modern-haven", 
    title: "Modern Haven", 
    category: "Konceptualni Dizajn",
    location: "Milano, Italija",
    year: "2024",
    description: "Modern Haven je konceptualno rešenje za digitalne nomade. Fokus je na transformabilnom nameštaju i pametnim sistemima koji se prilagođavaju potrebama korisnika tokom dana, od radnog prostora do zone za relaksaciju.",
    image: "/hero-interior.jpg",
    images: ["/hero-interior.jpg", "/detail-1.jpg", "/project-2.jpg"]
  }
];

export const categories = ["Sve", "Rezidencijalni Enterijer", "Komercijalni Enterijer", "Konceptualni Dizajn"];