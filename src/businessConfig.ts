export const businessConfig = {
    // 1. Brand Identity & Contact Info
    companyName: "Patriot Pool & Spa",
    logoImage: "/images/logo.png",
    phone: "866-501-5396",
    phoneLink: "tel:+18665015396",

    // 2. Hero Section
    heroImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000",
    heroTitle: "Premium Pool Maintenance",
    heroSubtitle: "We make pool ownership easy - so you can focus on what matters. Serving Florida & Texas Since 1987.",

    // 3. Service Areas
    serviceAreas: ["Austin, TX", "Dallas, TX", "Fort Worth, TX", "Keller, TX", "Coral Springs, FL", "Naples, FL"],

    // 4. Testimonials
    testimonials: [
        {
            name: "Greg M.",
            location: "Dallas, TX",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
            text: "Patriot Pool and Spa ensures effortless enjoyment of your pool through exceptionally high-quality service, delivered by the most trustworthy technicians. We make your pool sparkle."
        },
        {
            name: "Linda K.",
            location: "Fort Worth, TX",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
            text: "Friendly team of technicians, safe & thorough service, effortless payment & reporting. Best pool company we've ever used in the DFW area!"
        },
        {
            name: "James T.",
            location: "Austin, TX",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
            text: "We make your pool sparkle, protect your investment, and keep you in the loop, every step of the way. Owning a pool has never been easier."
        }
    ],

    // 5. Pricing Plans
    pricingPlans: [
        {
            name: "Basic Pool Cleaning",
            monthlyPrice: "99",
            annualPrice: "85",
            isPopular: false,
            features: [
                "Water testing & chemical balancing",
                "Empty skimmer baskets",
                "Inspect pool equipment"
            ]
        },
        {
            name: "Weekly Full Maintenance",
            monthlyPrice: "165",
            annualPrice: "140",
            isPopular: true,
            features: [
                "Everything in Basic Cleaning",
                "Brush walls & tile line",
                "Skim pool surface",
                "Vacuum pool floor"
            ]
        },
        {
            name: "Premium Pool Care",
            monthlyPrice: "220",
            annualPrice: "190",
            isPopular: false,
            features: [
                "Everything in Weekly Full",
                "Filter cleaning (2x/year)",
                "Deep green pool cleaning",
                "Priority emergency service"
            ]
        }
    ],

    // 6. Services & Sub-Services
    services: [
        {
            title: "Weekly Pool Maintenance",
            description: "Thorough surface skimming, vacuuming, brushing, water testing, and chemical balancing to keep your pool sparkling.",
            image: "/images/pool-services.png",
            subServices: [
                {
                    name: "Water Testing & Balancing",
                    description: "Professional chemical analysis to ensure safe, perfectly balanced water for swimmers."
                },
                {
                    name: "Green Pool Cleaning",
                    description: "Expert green pool recovery and algae treatments to turn your swamp back into an oasis."
                },
                {
                    name: "Pool Inspection",
                    description: "Comprehensive care including filter & pump inspection for long-term health."
                }
            ]
        },
        {
            title: "Pool Equipment Repair",
            description: "Expert diagnostics and repair for heaters, pumps, automation systems, and plumbing — keeping your pool running smooth.",
            image: "/images/spa-services.png",
            subServices: [
                {
                    name: "Pool Appliance Installation",
                    description: "Installing modern, energy-efficient pumps and appliances."
                },
                {
                    name: "Pool Heater Repair",
                    description: "Diagnostics and repair for gas, electric, and solar pool heaters."
                },
                {
                    name: "Pool Light Repair",
                    description: "Repair and installation of modern LED pool lighting systems."
                }
            ]
        },
        {
            title: "Pool Automation",
            description: "Control your pool system directly from your smartphone for ultimate convenience.",
            image: "/images/sauna-services.png",
            subServices: [
                {
                    name: "Smart System Install",
                    description: "Custom installation of Pentair and other smart pool automation systems."
                },
                {
                    name: "Upgrades & Improvements",
                    description: "Upgrading legacy systems to modern mobile-controlled automation panels."
                }
            ]
        }
    ],

    // 7. FAQs
    faqs: [
        {
            question: "How often should my pool be serviced?",
            answer: "We recommend weekly service for most residential pools in Texas and Florida. This ensures optimal water chemistry, prevents algae growth, and keeps your pool safe."
        },
        {
            question: "What makes Patriot Pool & Spa different?",
            answer: "Patriot Pool and Spa ensures effortless enjoyment of your pool through exceptionally high-quality service, delivered by the most trustworthy technicians with clear, proactive communication."
        },
        {
            question: "Where do you offer pool service?",
            answer: "We proudly serve multiple locations across Texas (Austin, Dallas, Fort Worth, Keller) and Florida (Naples, Coral Springs, Fort Lauderdale, Pompano Beach)."
        },
        {
            question: "Do you offer pool automation?",
            answer: "Yes, we offer comprehensive pool automation services so you can control your pool's temperature, lighting, and pumps easily from your connected devices."
        }
    ]
};
