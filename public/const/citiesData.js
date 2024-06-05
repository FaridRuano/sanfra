const cities = [
    // Cantones de Azuay
    { id: 1, prov: 1, name: 'Cuenca' },
    { id: 2, prov: 1, name: 'Gualaceo' },
    { id: 3, prov: 1, name: 'Sigsig' },
    { id: 4, prov: 1, name: 'Paute' },
    { id: 5, prov: 1, name: 'Chordeleg' },
    { id: 6, prov: 1, name: 'Girón' },
    { id: 7, prov: 1, name: 'Santa Isabel' },
    { id: 8, prov: 1, name: 'El Pan' },
    { id: 9, prov: 1, name: 'Sevilla de Oro' },
    { id: 10, prov: 1, name: 'Guachapala' },
    { id: 11, prov: 1, name: 'Camilo Ponce Enríquez' },
    { id: 12, prov: 1, name: 'Nabón' },
    { id: 13, prov: 1, name: 'San Fernando' },
    { id: 14, prov: 1, name: 'Pucará' },
    { id: 15, prov: 1, name: 'Paute' },
    // Cantones de Bolívar
    { id: 16, prov: 2, name: 'Guaranda' },
    { id: 17, prov: 2, name: 'Chillanes' },
    { id: 18, prov: 2, name: 'Chimbo' },
    { id: 19, prov: 2, name: 'Echeandía' },
    { id: 20, prov: 2, name: 'San Miguel' },
    { id: 21, prov: 2, name: 'Caluma' },
    { id: 22, prov: 2, name: 'Las Naves' },
    // Cantones de Cañar
    { id: 23, prov: 3, name: 'Azogues' },
    { id: 24, prov: 3, name: 'Biblián' },
    { id: 25, prov: 3, name: 'Cañar' },
    { id: 26, prov: 3, name: 'La Troncal' },
    { id: 27, prov: 3, name: 'El Tambo' },
    { id: 28, prov: 3, name: 'Déleg' },
    { id: 29, prov: 3, name: 'Suscal' },
    // Cantones de Carchi
    { id: 30, prov: 4, name: 'Tulcán' },
    { id: 31, prov: 4, name: 'Bolívar' },
    { id: 32, prov: 4, name: 'Espejo' },
    { id: 33, prov: 4, name: 'Mira' },
    { id: 34, prov: 4, name: 'Montúfar' },

    // Cantones de Chimborazo
    { id: 35, prov: 5, name: 'Riobamba' },
    { id: 36, prov: 5, name: 'Alausí' },
    { id: 37, prov: 5, name: 'Colta' },
    { id: 38, prov: 5, name: 'Chambo' },
    { id: 39, prov: 5, name: 'Chunchi' },
    { id: 40, prov: 5, name: 'Guamote' },
    { id: 41, prov: 5, name: 'Guano' },
    { id: 42, prov: 5, name: 'Pallatanga' },
    { id: 43, prov: 5, name: 'Penipe' },

    // Cantones de Cotopaxi
    { id: 44, prov: 6, name: 'Latacunga' },
    { id: 45, prov: 6, name: 'La Maná' },
    { id: 46, prov: 6, name: 'Pangua' },
    { id: 47, prov: 6, name: 'Pujilí' },
    { id: 48, prov: 6, name: 'Salcedo' },
    { id: 49, prov: 6, name: 'Saquisilí' },
    { id: 50, prov: 6, name: 'Sigchos' },

    // Cantones de El Oro
    { id: 51, prov: 7, name: 'Machala' },
    { id: 52, prov: 7, name: 'Arenillas' },
    { id: 53, prov: 7, name: 'Atahualpa' },
    { id: 54, prov: 7, name: 'Balsas' },
    { id: 55, prov: 7, name: 'Chilla' },
    { id: 56, prov: 7, name: 'El Guabo' },
    { id: 57, prov: 7, name: 'Huaquillas' },
    { id: 58, prov: 7, name: 'Marcabelí' },
    { id: 59, prov: 7, name: 'Pasaje' },
    { id: 60, prov: 7, name: 'Piñas' },
    { id: 61, prov: 7, name: 'Portovelo' },
    { id: 62, prov: 7, name: 'Santa Rosa' },
    { id: 63, prov: 7, name: 'Zaruma' },

    // Cantones de Esmeraldas
    { id: 64, prov: 8, name: 'Esmeraldas' },
    { id: 65, prov: 8, name: 'Eloy Alfaro' },
    { id: 66, prov: 8, name: 'Muisne' },
    { id: 67, prov: 8, name: 'Quinindé' },
    { id: 68, prov: 8, name: 'San Lorenzo' },

    // Cantones de Galápagos
    { id: 69, prov: 9, name: 'San Cristóbal' },
    { id: 70, prov: 9, name: 'Santa Cruz' },
    { id: 71, prov: 9, name: 'Isabela' },

    // Cantones de Guayas
    { id: 72, prov: 10, name: 'Guayaquil' },
    { id: 73, prov: 10, name: 'Alfredo Baquerizo Moreno (Jujan)' },
    { id: 74, prov: 10, name: 'Balao' },
    { id: 75, prov: 10, name: 'Balzar' },
    { id: 76, prov: 10, name: 'Colimes' },
    { id: 77, prov: 10, name: 'Daule' },
    { id: 78, prov: 10, name: 'Durán' },
    { id: 79, prov: 10, name: 'El Empalme' },
    { id: 80, prov: 10, name: 'El Triunfo' },
    { id: 81, prov: 10, name: 'General Antonio Elizalde (Bucay)' },
    { id: 82, prov: 10, name: 'General Villamil (Playas)' },
    { id: 83, prov: 10, name: 'Isidro Ayora' },
    { id: 84, prov: 10, name: 'Lomas de Sargentillo' },
    { id: 85, prov: 10, name: 'Milagro' },
    { id: 86, prov: 10, name: 'Naranjal' },
    { id: 87, prov: 10, name: 'Naranjito' },
    { id: 88, prov: 10, name: 'Palestina' },
    { id: 89, prov: 10, name: 'Pedro Carbo' },
    { id: 90, prov: 10, name: 'Samborondón' },
    { id: 91, prov: 10, name: 'Santa Lucía' },
    { id: 92, prov: 10, name: 'Simón Bolívar' },
    { id: 93, prov: 10, name: 'Yaguachi' },

    // Cantones de Imbabura
    { id: 94, prov: 11, name: 'Ibarra' },
    { id: 95, prov: 11, name: 'Antonio Ante' },
    { id: 96, prov: 11, name: 'Cotacachi' },
    { id: 97, prov: 11, name: 'Otavalo' },
    { id: 98, prov: 11, name: 'Pimampiro' },
    { id: 99, prov: 11, name: 'San Miguel de Urcuquí' },

    // Cantones de Loja
    { id: 100, prov: 12, name: 'Loja' },
    { id: 101, prov: 12, name: 'Calvas' },
    { id: 102, prov: 12, name: 'Catamayo' },
    { id: 103, prov: 12, name: 'Celica' },
    { id: 104, prov: 12, name: 'Chaguarpamba' },
    { id: 105, prov: 12, name: 'Espíndola' },
    { id: 106, prov: 12, name: 'Gonzanamá' },
    { id: 107, prov: 12, name: 'Macará' },
    { id: 108, prov: 12, name: 'Paltas' },
    { id: 109, prov: 12, name: 'Puyango' },
    { id: 110, prov: 12, name: 'Saraguro' },
    { id: 111, prov: 12, name: 'Sozoranga' },
    { id: 112, prov: 12, name: 'Zapotillo' },

    // Cantones de Los Ríos
    { id: 113, prov: 13, name: 'Babahoyo' },
    { id: 114, prov: 13, name: 'Baba' },
    { id: 115, prov: 13, name: 'Montalvo' },
    { id: 116, prov: 13, name: 'Pueblo Viejo' },
    { id: 117, prov: 13, name: 'Quevedo' },
    { id: 118, prov: 13, name: 'Urdaneta' },
    { id: 119, prov: 13, name: 'Ventanas' },
    { id: 120, prov: 13, name: 'Vinces' },

    // Cantones de Manabí
    { id: 121, prov: 14, name: 'Portoviejo' },
    { id: 122, prov: 14, name: 'Bolívar' },
    { id: 123, prov: 14, name: 'Chone' },
    { id: 124, prov: 14, name: 'El Carmen' },
    { id: 125, prov: 14, name: 'Flavio Alfaro' },
    { id: 126, prov: 14, name: 'Jama' },
    { id: 127, prov: 14, name: 'Jaramijó' },
    { id: 128, prov: 14, name: 'Junín' },
    { id: 129, prov: 14, name: 'Manta' },
    { id: 130, prov: 14, name: 'Montecristi' },
    { id: 131, prov: 14, name: 'Olmedo' },
    { id: 132, prov: 14, name: 'Paján' },
    { id: 133, prov: 14, name: 'Pedernales' },
    { id: 134, prov: 14, name: 'Pichincha' },
    { id: 135, prov: 14, name: 'Puerto López' },
    { id: 136, prov: 14, name: 'Rocafuerte' },
    { id: 137, prov: 14, name: 'San Vicente' },
    { id: 138, prov: 14, name: 'Santa Ana' },
    { id: 139, prov: 14, name: 'Sucre' },
    { id: 140, prov: 14, name: 'Tosagua' },
    { id: 141, prov: 14, name: '24 de Mayo' },

    // Cantones de Morona Santiago
    { id: 142, prov: 15, name: 'Macas' },
    { id: 143, prov: 15, name: 'Gualaquiza' },
    { id: 144, prov: 15, name: 'Huamboya' },
    { id: 145, prov: 15, name: 'Limón Indanza' },
    { id: 146, prov: 15, name: 'Logroño' },
    { id: 147, prov: 15, name: 'Morona' },
    { id: 148, prov: 15, name: 'Pablo Sexto' },
    { id: 149, prov: 15, name: 'Palora' },
    { id: 150, prov: 15, name: 'San Juan Bosco' },
    { id: 151, prov: 15, name: 'Santiago' },

    // Cantones de Napo
    { id: 152, prov: 16, name: 'Tena' },
    { id: 153, prov: 16, name: 'Archidona' },
    { id: 154, prov: 16, name: 'El Chaco' },
    { id: 155, prov: 16, name: 'Quijos' },

    // Cantones de Orellana
    { id: 156, prov: 17, name: 'Orellana' },
    { id: 157, prov: 17, name: 'Aguarico' },
    { id: 158, prov: 17, name: 'La Joya de los Sachas' },
    { id: 159, prov: 17, name: 'Loreto' },

    // Cantones de Pastaza
    { id: 160, prov: 18, name: 'Pastaza' },
    { id: 161, prov: 18, name: 'Mera' },
    { id: 162, prov: 18, name: 'Santa Clara' },
    { id: 163, prov: 18, name: 'Arajuno' },

    // Cantones de Pichincha
    { id: 164, prov: 19, name: 'Quito' },
    { id: 165, prov: 19, name: 'Cayambe' },
    { id: 166, prov: 19, name: 'Mejía' },
    { id: 167, prov: 19, name: 'Pedro Moncayo' },
    { id: 168, prov: 19, name: 'Rumiñahui' },
    { id: 169, prov: 19, name: 'San Miguel de los Bancos' },
    { id: 170, prov: 19, name: 'Pedro Vicente Maldonado' },

    // Cantones de Santa Elena
    { id: 171, prov: 20, name: 'Santa Elena' },
    { id: 172, prov: 20, name: 'La Libertad' },
    { id: 173, prov: 20, name: 'Salinas' },

    // Cantones de Santo Domingo de los Tsáchilas
    { id: 174, prov: 21, name: 'Santo Domingo' },
    { id: 175, prov: 21, name: 'La Concordia' },

    // Cantones de Sucumbíos
    { id: 176, prov: 22, name: 'Nueva Loja' },
    { id: 177, prov: 22, name: 'Cascales' },
    { id: 178, prov: 22, name: 'Cuyabeno' },
    { id: 179, prov: 22, name: 'Gonzalo Pizarro' },
    { id: 180, prov: 22, name: 'Putumayo' },
    { id: 181, prov: 22, name: 'Shushufindi' },

    // Cantones de Tungurahua
    { id: 182, prov: 23, name: 'Ambato' },
    { id: 183, prov: 23, name: 'Baños de Agua Santa' },
    { id: 184, prov: 23, name: 'Cevallos' },
    { id: 185, prov: 23, name: 'Mocha' },
    { id: 186, prov: 23, name: 'Patate' },
    { id: 187, prov: 23, name: 'Quero' },
    { id: 188, prov: 23, name: 'Pelileo' },
    { id: 189, prov: 23, name: 'Pillaro' },
    { id: 190, prov: 23, name: 'Tisaleo' },


    // Cantones de Zamora Chinchipe
    { id: 191, prov: 24, name: 'Zamora' },
    { id: 192, prov: 24, name: 'Chinchipe' },
    { id: 193, prov: 24, name: 'Nangaritza' },
    { id: 194, prov: 24, name: 'Yacuambi' },
    { id: 195, prov: 24, name: 'Yantzaza' },
    { id: 196, prov: 24, name: 'El Pangui' },
]

export default cities