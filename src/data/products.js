const products = [
    // Ceniceros
    { 
        id: 1, 
        title: 'Cenicero Terra', 
        category: 'ceniceros', 
        price: 2000, 
        image: 'cenicero1.jpg' 
    },
    { 
        id: 2, 
        title: 'Cenicero Minimal', 
        category: 'ceniceros', 
        price: 2200, 
        image: 'cenicero2.jpg' 
    },
    { 
        id: 3, 
        title: 'Cenicero Rústico', 
        category: 'ceniceros', 
        price: 2500, 
        image: 'cenicero3.jpg' 
    },
    { 
        id: 4, 
        title: 'Cenicero Zen', 
        category: 'ceniceros', 
        price: 2400, 
        image: 'cenicero4.jpg' 
    },

    // Cuencos
    { 
        id: 5, 
        title: 'Cuenco Esmaltado', 
        category: 'cuencos', 
        price: 2800, 
        image: 'bowl1.jpg' 
    },
    { 
        id: 6, 
        title: 'Cuenco Grande', 
        category: 'cuencos', 
        price: 3000, 
        image: 'bowl2.jpg' 
    },
    { 
        id: 7, 
        title: 'Cuenco Rústico', 
        category: 'cuencos', 
        price: 2900, 
        image: 'bowl3.jpg' 
    },
    { 
        id: 8, 
        title: 'Cuenco Moderno', 
        category: 'cuencos', 
        price: 3100, 
        image: 'bowl4.jpg' 
    },

    // Deco
    { 
        id: 9, 
        title: 'Deco Flor', 
        category: 'deco', 
        price: 1800, 
        image: 'deco1.jpg' 
    },
    { 
        id: 10, 
        title: 'Deco Minimal', 
        category: 'deco', 
        price: 2000, 
        image: 'deco2.jpg' 
    },
    { 
        id: 11, 
        title: 'Deco Moderno', 
        category: 'deco', 
        price: 2100, 
        image: 'deco3.jpg' 
    },
    { 
        id: 12, 
        title: 'Deco Zen', 
        category: 'deco', 
        price: 1900, 
        image: 'deco4.jpg' 
    },

    // Macetas
    { 
        id: 13, 
        title: 'Maceta Rústica', 
        category: 'macetas', 
        price: 4500, 
        image: 'maceta1.jpg' 
    },
    { 
        id: 14, 
        title: 'Maceta Minimal', 
        category: 'macetas', 
        price: 4600, 
        image: 'maceta2.jpg' 
    },
    { 
        id: 15, 
        title: 'Maceta Colgante', 
        category: 'macetas', 
        price: 4700, 
        image: 'maceta3.jpg' 
    },
    { 
        id: 16, 
        title: 'Maceta Moderna', 
        category: 'macetas', 
        price: 4800, 
        image: 'maceta4.jpg' 
    },

    // Mates
    { 
        id: 17, 
        title: 'Mate Tradicional', 
        category: 'mates', 
        price: 1200, 
        image: 'mate1.jpg' 
    },
    { 
        id: 18, 
        title: 'Mate Moderno', 
        category: 'mates', 
        price: 1300, 
        image: 'mate2.jpg' 
    },
    { 
        id: 19, 
        title: 'Mate Minimal', 
        category: 'mates', 
        price: 1250, 
        image: 'mate3.jpg' },
    { 
        id: 20, 
        title: 'Mate Zen', 
        category: 'mates', 
        price: 1350, 
        image: 'mate4.jpg' 
    },

    // Portasahumerios
    { 
        id: 21, 
        title: 'Porta Sahumerio Rústico', 
        category: 'portasahumerios', 
        price: 1500, 
        image: 'portasahumerio1.jpg' 
    },
    { 
        id: 22, 
        title: 'Porta Sahumerio Minimal', 
        category: 'portasahumerios', 
        price: 1600, 
        image: 'portasahumerio2.jpg' 
    },
    { 
        id: 23, 
        title: 'Porta Sahumerio Zen', 
        category: 'portasahumerios', 
        price: 1550, 
        image: 'portasahumerio4.jpg' 
    },
    { 
        id: 24, 
        title: 'Porta Sahumerio Moderno', 
        category: 'portasahumerios', 
        price: 1650, 
        image: 'portasahumerio5.jpg' 
    },

    // Tazas
    { 
        id: 25, 
        title: 'Taza Mediterránea', 
        category: 'tazas', 
        price: 3500, 
        image: 'taza3.jpg' 
    },
    { 
        id: 26, 
        title: 'Taza Minimal', 
        category: 'tazas', 
        price: 3600, 
        image: 'taza5.jpg' 
    },
    { 
        id: 27, 
        title: 'Taza Zen', 
        category: 'tazas', 
        price: 3550, 
        image: 'taza6.jpg' 
    },
    { 
        id: 28, 
        title: 'Taza Moderna', 
        category: 'tazas', 
        price: 3650, 
        image: 'taza7.jpg' 
    },

    // Teteras
    { 
        id: 29, 
        title: 'Tetera Sakura', 
        category: 'teteras', 
        price: 6000, 
        image: 'tetera2.jpg' 
    },
    { 
        id: 30, 
        title: 'Tetera Minimal', 
        category: 'teteras', 
        price: 6100, 
        image: 'tetera4.jpg' 
    },
    { 
        id: 31, 
        title: 'Tetera Zen', 
        category: 'teteras', 
        price: 6050, 
        image: 'tetera5.jpg' 
    },
    { 
        id: 32, 
        title: 'Tetera Moderna', 
        category: 'teteras', 
        price: 6150, 
        image: 'tetera7.jpg' 
    },
];

export const getProducts = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });

export const getProductById = (id) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products.find((p) => p.id === Number(id))), 1000);
    });