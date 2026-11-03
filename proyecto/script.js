const bancoPreguntas = {
  sociales: [
    { pregunta: "¿Cuál es la capital constitucional de Bolivia?", opciones: ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"], correcta: 1 },
    { pregunta: "¿En qué año se proclamó la independencia de Bolivia?", opciones: ["1810", "1825", "1809", "1830"], correcta: 1 },
    { pregunta: "¿Quién fue el primer presidente de Bolivia?", opciones: ["Simón Bolívar", "Antonio José de Sucre", "Andrés de Santa Cruz", "José Ballivián"], correcta: 1 },
    { pregunta: "¿Cuál es el lago navegable más alto del mundo?", opciones: ["Lago Poopó", "Lago Titicaca", "Lago Uru Uru", "Lago Huiñaymarca"], correcta: 1 },
    { pregunta: "¿Qué océano baña las costas occidentales de América del Sur?", opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: 2 },
    { pregunta: "¿Cuál es el río más largo de América del Sur?", opciones: ["Río Paraná", "Río Orinoco", "Río Amazonas", "Río de la Plata"], correcta: 2 },
    { pregunta: "¿Qué documento establece los derechos y deberes de los bolivianos?", opciones: ["El Código Penal", "La Constitución Política del Estado", "El Código Civil", "La Ley de Educación"], correcta: 1 },
    { pregunta: "¿Cuál es el departamento más grande de Bolivia?", opciones: ["La Paz", "Santa Cruz", "Beni", "Pando"], correcta: 1 },
    { pregunta: "¿Qué significa la sigla ONU?", opciones: ["Organización de Naciones Unidas", "Organización Nacional Unida", "Oficina de Naciones Unidas", "Organismo de Naciones Unidas"], correcta: 0 },
    { pregunta: "¿Cuál es la forma de gobierno de Bolivia?", opciones: ["Monarquía", "República unitaria", "Estado Unitario Social de Derecho Plurinacional", "Federación"], correcta: 2 },
    { pregunta: "¿Qué ciudad es la sede del Poder Ejecutivo en Bolivia?", opciones: ["Sucre", "La Paz", "Santa Cruz", "Cochabamba"], correcta: 1 },
    { pregunta: "¿Cuál es el idioma oficial más hablado en Bolivia después del español?", opciones: ["Aymara", "Quechua", "Guaraní", "Inglés"], correcta: 1 },
    { pregunta: "¿Qué recurso natural es muy importante en la economía de Bolivia?", opciones: ["Petróleo", "Gas natural", "Oro", "Carbón"], correcta: 1 },
    { pregunta: "¿En qué continente se encuentra Bolivia?", opciones: ["África", "Europa", "América del Sur", "Asia"], correcta: 2 },
    { pregunta: "¿Cuál es el símbolo patrio que representa la libertad?", opciones: ["La bandera", "El escudo", "La wiphala", "El himno nacional"], correcta: 0 },
    { pregunta: "¿Qué significa la palabra 'Bolivia'?", opciones: ["Tierra de los Andes", "En honor a Simón Bolívar", "País del lago", "Nación libre"], correcta: 1 }
  ],
  biologia: [
    { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["El átomo", "La célula", "El tejido", "El órgano"], correcta: 1 },
    { pregunta: "¿Qué organelo produce la mayor parte de la energía en la célula?", opciones: ["Núcleo", "Mitocondria", "Ribosoma", "Cloroplasto"], correcta: 1 },
    { pregunta: "¿Qué gas absorben las plantas durante la fotosíntesis?", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correcta: 2 },
    { pregunta: "¿Cuántos cromosomas tiene normalmente una célula humana?", opciones: ["23", "46", "48", "32"], correcta: 1 },
    { pregunta: "¿Qué tipo de célula no tiene núcleo definido?", opciones: ["Eucariota", "Procariota", "Animal", "Vegetal"], correcta: 1 },
    { pregunta: "¿Cómo se llama el proceso de división celular que produce células idénticas?", opciones: ["Meiosis", "Mitosis", "Fotosíntesis", "Respiración"], correcta: 1 },
    { pregunta: "¿Qué molécula lleva la información genética?", opciones: ["ARN", "Proteína", "ADN", "Lípido"], correcta: 2 },
    { pregunta: "¿Cuál es el principal producto de la fotosíntesis?", opciones: ["Agua", "Glucosa y oxígeno", "Dióxido de carbono", "Sales minerales"], correcta: 1 },
    { pregunta: "¿En qué organelo ocurre la fotosíntesis?", opciones: ["Mitocondria", "Núcleo", "Cloroplasto", "Vacuola"], correcta: 2 },
    { pregunta: "¿Qué sistema del cuerpo transporta oxígeno y nutrientes?", opciones: ["Sistema nervioso", "Sistema digestivo", "Sistema circulatorio", "Sistema respiratorio"], correcta: 2 },
    { pregunta: "¿Qué organelo contiene el material genético de la célula?", opciones: ["Mitocondria", "Ribosoma", "Núcleo", "Lisosoma"], correcta: 2 },
    { pregunta: "¿Cómo se llaman los organismos que fabrican su propio alimento?", opciones: ["Heterótrofos", "Autótrofos", "Parásitos", "Descomponedores"], correcta: 1 },
    { pregunta: "¿Qué proceso permite a las plantas liberar oxígeno?", opciones: ["Respiración", "Fotosíntesis", "Digestión", "Transpiración"], correcta: 1 },
    { pregunta: "¿Cuál es el órgano principal del sistema respiratorio?", opciones: ["Corazón", "Pulmones", "Hígado", "Riñones"], correcta: 1 },
    { pregunta: "¿Qué tipo de reproducción produce seres genéticamente idénticos?", opciones: ["Sexual", "Asexual", "Mixto", "Esporulación"], correcta: 1 },
    { pregunta: "¿Qué sustancia da el color verde a las plantas?", opciones: ["Hemoglobina", "Clorofila", "Queratina", "Melanina"], correcta: 1 }
  ],
  quimica: [
    { pregunta: "¿Cuál es la fórmula química del agua?", opciones: ["O₂", "H₂O", "CO₂", "NaCl"], correcta: 1 },
    { pregunta: "¿Qué elemento tiene el símbolo 'O'?", opciones: ["Oro", "Oxígeno", "Osmio", "Oganesón"], correcta: 1 },
    { pregunta: "¿Cuál es el número atómico del hidrógeno?", opciones: ["1", "2", "8", "16"], correcta: 0 },
    { pregunta: "¿Qué gas es indispensable para la combustión?", opciones: ["Nitrógeno", "Dióxido de carbono", "Oxígeno", "Helio"], correcta: 2 },
    { pregunta: "¿Cuál es la fórmula del dióxido de carbono?", opciones: ["CO", "CO₂", "C₂O", "O₂C"], correcta: 1 },
    { pregunta: "¿Qué tipo de enlace se forma cuando se comparten electrones?", opciones: ["Iónico", "Covalente", "Metálico", "De hidrógeno"], correcta: 1 },
    { pregunta: "¿Qué partícula del átomo tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: 2 },
    { pregunta: "¿Cuál es el símbolo del sodio?", opciones: ["So", "Sd", "Na", "S"], correcta: 2 },
    { pregunta: "¿Qué se obtiene al mezclar un ácido con una base?", opciones: ["Solo agua", "Sal y agua", "Solo gas", "Solo sal"], correcta: 1 },
    { pregunta: "¿Cuál es el estado de la materia con forma y volumen definidos?", opciones: ["Gas", "Líquido", "Sólido", "Plasma"], correcta: 2 },
    { pregunta: "¿Qué partícula del átomo tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Núcleo"], correcta: 2 },
    { pregunta: "¿Cuál es el símbolo químico del oro?", opciones: ["Go", "Au", "Ag", "Or"], correcta: 1 },
    { pregunta: "¿Qué tabla organiza los elementos químicos?", opciones: ["Tabla de multiplicar", "Tabla periódica", "Tabla de logaritmos", "Tabla de densidades"], correcta: 1 },
    { pregunta: "¿Qué gas es el más abundante en la atmósfera terrestre?", opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], correcta: 2 },
    { pregunta: "¿Qué se forma cuando un metal reacciona con el oxígeno?", opciones: ["Ácido", "Óxido", "Sal", "Base"], correcta: 1 },
    { pregunta: "¿Cuál es el pH de una sustancia neutra?", opciones: ["0", "7", "14", "1"], correcta: 1 }
  ],
  fisica: [
    { pregunta: "¿Cuál es la unidad de fuerza en el Sistema Internacional?", opciones: ["Joule", "Newton", "Watt", "Pascal"], correcta: 1 },
    { pregunta: "¿Quién formuló las tres leyes del movimiento?", opciones: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correcta: 1 },
    { pregunta: "¿Cuál es aproximadamente la velocidad de la luz?", opciones: ["300.000 km/s", "150.000 km/s", "30.000 km/s", "3.000 km/s"], correcta: 0 },
    { pregunta: "¿Qué magnitud se mide en Joules?", opciones: ["Fuerza", "Energía", "Potencia", "Presión"], correcta: 1 },
    { pregunta: "¿Cuál es la fórmula de la velocidad media?", opciones: ["v = d × t", "v = d / t", "v = t / d", "v = d + t"], correcta: 1 },
    { pregunta: "¿Qué tipo de energía tiene un objeto en movimiento?", opciones: ["Energía potencial", "Energía cinética", "Energía térmica", "Energía química"], correcta: 1 },
    { pregunta: "¿Cuál es la unidad de potencia?", opciones: ["Joule", "Newton", "Watt", "Metro"], correcta: 2 },
    { pregunta: "¿Qué ley dice que a toda acción corresponde una reacción igual y contraria?", opciones: ["Primera ley de Newton", "Segunda ley de Newton", "Tercera ley de Newton", "Ley de la gravitación"], correcta: 2 },
    { pregunta: "¿Qué instrumento se usa para medir la temperatura?", opciones: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"], correcta: 1 },
    { pregunta: "¿Cuál es la aceleración de la gravedad aproximada en la Tierra?", opciones: ["9,8 m/s²", "10 m/s", "9,8 km/h", "8,9 m/s²"], correcta: 0 },
    { pregunta: "¿Qué magnitud se mide en metros?", opciones: ["Masa", "Tiempo", "Longitud", "Temperatura"], correcta: 2 },
    { pregunta: "¿Qué tipo de espejo se usa en los telescopios reflectores?", opciones: ["Plano", "Cóncavo", "Convexo", "Cilíndrico"], correcta: 1 },
    { pregunta: "¿Qué fenómeno ocurre cuando la luz cambia de dirección al pasar de un medio a otro?", opciones: ["Reflexión", "Refracción", "Difracción", "Absorción"], correcta: 1 },
    { pregunta: "¿Cuál es la unidad de masa en el Sistema Internacional?", opciones: ["Gramo", "Kilogramo", "Libra", "Tonelada"], correcta: 1 },
    { pregunta: "¿Qué fuerza atrae los objetos hacia el centro de la Tierra?", opciones: ["Fuerza magnética", "Fuerza eléctrica", "Gravedad", "Fuerza nuclear"], correcta: 2 },
    { pregunta: "¿Qué tipo de onda es el sonido?", opciones: ["Electromagnética", "Transversal", "Longitudinal", "Luminosa"], correcta: 2 }
  ],
  matematicas: [
    { pregunta: "¿Cuánto es 7 × 8?", opciones: ["54", "56", "64", "48"], correcta: 1 },
    { pregunta: "¿Cuál es el resultado de 15 + 27?", opciones: ["41", "42", "43", "40"], correcta: 1 },
    { pregunta: "¿Cuántos lados tiene un triángulo?", opciones: ["2", "3", "4", "5"], correcta: 1 },
    { pregunta: "¿Cuál es el valor aproximado de π (pi)?", opciones: ["2,14", "3,14", "4,14", "3,41"], correcta: 1 },
    { pregunta: "¿Cuánto es la raíz cuadrada de 81?", opciones: ["8", "9", "10", "7"], correcta: 1 },
    { pregunta: "¿Qué porcentaje es 25 de 100?", opciones: ["20%", "25%", "30%", "15%"], correcta: 1 },
    { pregunta: "¿Cuánto es 12²?", opciones: ["124", "144", "132", "156"], correcta: 1 },
    { pregunta: "¿Cuál es el mínimo común múltiplo de 4 y 6?", opciones: ["10", "12", "24", "8"], correcta: 1 },
    { pregunta: "Si un ángulo mide 90°, ¿cómo se llama?", opciones: ["Agudo", "Obtuso", "Recto", "Llano"], correcta: 2 },
    { pregunta: "¿Cuánto es 3/4 + 1/4?", opciones: ["1", "1/2", "3/8", "4/4"], correcta: 0 },
    { pregunta: "¿Cuánto es 9 × 9?", opciones: ["72", "81", "99", "18"], correcta: 1 },
    { pregunta: "¿Cuál es el perímetro de un cuadrado de lado 5?", opciones: ["10", "15", "20", "25"], correcta: 2 },
    { pregunta: "¿Cuánto es 100 ÷ 4?", opciones: ["20", "25", "30", "40"], correcta: 1 },
    { pregunta: "¿Qué número es primo?", opciones: ["9", "15", "17", "21"], correcta: 2 },
    { pregunta: "¿Cuánto es la mitad de 86?", opciones: ["40", "42", "43", "44"], correcta: 2 },
    { pregunta: "¿Cuál es el área de un rectángulo de 4 × 6?", opciones: ["10", "20", "24", "30"], correcta: 2 },
    { pregunta: "¿Cuánto es 2³?", opciones: ["6", "8", "9", "4"], correcta: 1 }
  ],
  lenguaje: [
    { pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", opciones: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Julio Cortázar"], correcta: 1 },
    { pregunta: "¿Cuál es el antónimo de 'alegre'?", opciones: ["Contento", "Triste", "Feliz", "Divertido"], correcta: 1 },
    { pregunta: "¿Qué es un sustantivo?", opciones: ["Una acción", "Una palabra que nombra personas, animales o cosas", "Una cualidad", "Un nexo"], correcta: 1 },
    { pregunta: "¿Cuál de estas palabras está correctamente escrita?", opciones: ["Haser", "Hacer", "Acer", "Aser"], correcta: 1 },
    { pregunta: "¿Qué figura literaria consiste en exagerar?", opciones: ["Metáfora", "Hipérbole", "Símil", "Personificación"], correcta: 1 },
    { pregunta: "¿Cuántas sílabas tiene la palabra 'computadora'?", opciones: ["4", "5", "6", "3"], correcta: 1 },
    { pregunta: "¿Qué tipo de texto busca convencer al lector?", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Expositivo"], correcta: 2 },
    { pregunta: "¿Cuál es el plural de 'lápiz'?", opciones: ["Lápizes", "Lápizs", "Lápices", "Lapices"], correcta: 2 },
    { pregunta: "¿Qué signo se usa al final de una pregunta?", opciones: ["Punto", "Coma", "Signos de interrogación", "Punto y coma"], correcta: 2 },
    { pregunta: "¿Quién es el autor de 'Cien años de soledad'?", opciones: ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Isabel Allende"], correcta: 1 },
    { pregunta: "¿Qué es un adjetivo?", opciones: ["Una acción", "Una palabra que describe al sustantivo", "Un nombre", "Un nexo"], correcta: 1 },
    { pregunta: "¿Cuál es el sinónimo de 'rápido'?", opciones: ["Lento", "Veloz", "Pesado", "Tranquilo"], correcta: 1 },
    { pregunta: "¿Qué tipo de oración expresa una orden?", opciones: ["Enunciativa", "Interrogativa", "Exclamativa", "Imperativa"], correcta: 3 },
    { pregunta: "¿Qué figura literaria compara usando 'como'?", opciones: ["Metáfora", "Símil", "Hipérbole", "Personificación"], correcta: 1 },
    { pregunta: "¿Cuál es el aumentativo de 'casa'?", opciones: ["Casita", "Casona", "Casero", "Casal"], correcta: 1 },
    { pregunta: "¿Qué palabra está mal escrita?", opciones: ["Haber", "Hacer", "Ahi", "Ahora"], correcta: 2 }
  ],
  historia: [
    { pregunta: "¿En qué año llegó Cristóbal Colón a América?", opciones: ["1490", "1492", "1500", "1489"], correcta: 1 },
    { pregunta: "¿Quién fue el libertador de varias naciones de América del Sur?", opciones: ["José de San Martín", "Simón Bolívar", "Antonio José de Sucre", "Bernardo O'Higgins"], correcta: 1 },
    { pregunta: "¿En qué año se produjo la Revolución Francesa?", opciones: ["1776", "1789", "1810", "1804"], correcta: 1 },
    { pregunta: "¿Qué imperio construyó Machu Picchu?", opciones: ["Azteca", "Maya", "Inca", "Olmeca"], correcta: 2 },
    { pregunta: "¿Quién fue el primer emperador de Francia?", opciones: ["Luis XVI", "Napoleón Bonaparte", "Carlomagno", "Luis XIV"], correcta: 1 },
    { pregunta: "¿En qué siglo comenzó la Edad Media aproximadamente?", opciones: ["Siglo III", "Siglo V", "Siglo X", "Siglo XV"], correcta: 1 },
    { pregunta: "¿Qué guerra se libró entre 1914 y 1918?", opciones: ["Segunda Guerra Mundial", "Primera Guerra Mundial", "Guerra Fría", "Guerra de los Cien Años"], correcta: 1 },
    { pregunta: "¿Quién descubrió América según la historia tradicional?", opciones: ["Américo Vespucio", "Cristóbal Colón", "Fernando de Magallanes", "Hernán Cortés"], correcta: 1 },
    { pregunta: "¿En qué año terminó la Segunda Guerra Mundial?", opciones: ["1943", "1944", "1945", "1946"], correcta: 2 },
    { pregunta: "¿Qué civilización construyó las pirámides de Egipto?", opciones: ["Mesopotámica", "Egipcia", "Romana", "Griega"], correcta: 1 },
    { pregunta: "¿Quién fue el líder de la independencia de la India?", opciones: ["Nelson Mandela", "Mahatma Gandhi", "Martin Luther King", "Winston Churchill"], correcta: 1 },
    { pregunta: "¿En qué año cayó el Muro de Berlín?", opciones: ["1985", "1989", "1991", "1995"], correcta: 1 },
    { pregunta: "¿Qué imperio dominó gran parte de Europa en la antigüedad?", opciones: ["Persa", "Romano", "Otomano", "Mongol"], correcta: 1 },
    { pregunta: "¿Quién inventó la imprenta?", opciones: ["Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton", "Galileo"], correcta: 1 },
    { pregunta: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?", opciones: ["1776", "1789", "1810", "1492"], correcta: 0 },
    { pregunta: "¿Qué civilización antigua inventó la escritura cuneiforme?", opciones: ["Egipcia", "Sumeria", "China", "Griega"], correcta: 1 }
  ],
  geografia: [
    { pregunta: "¿Cuál es el continente más grande del mundo?", opciones: ["África", "América", "Asia", "Europa"], correcta: 2 },
    { pregunta: "¿Cuál es el océano más grande?", opciones: ["Atlántico", "Índico", "Ártico", "Pacífico"], correcta: 3 },
    { pregunta: "¿En qué continente se encuentra el desierto del Sahara?", opciones: ["Asia", "África", "América", "Australia"], correcta: 1 },
    { pregunta: "¿Cuál es la montaña más alta del mundo?", opciones: ["K2", "Kangchenjunga", "Everest", "Aconcagua"], correcta: 2 },
    { pregunta: "¿Qué país tiene la mayor población del mundo?", opciones: ["India", "Estados Unidos", "China", "Indonesia"], correcta: 2 },
    { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], correcta: 1 },
    { pregunta: "¿En qué hemisferio se encuentra la mayor parte de Bolivia?", opciones: ["Norte", "Sur", "Este", "Oeste"], correcta: 1 },
    { pregunta: "¿Cuál es el país más grande de América del Sur?", opciones: ["Argentina", "Brasil", "Colombia", "Perú"], correcta: 1 },
    { pregunta: "¿Qué cordillera atraviesa América del Sur de norte a sur?", opciones: ["Himalaya", "Andes", "Rocosas", "Alpes"], correcta: 1 },
    { pregunta: "¿Cuál es el lago más grande de América del Sur?", opciones: ["Lago Titicaca", "Lago Maracaibo", "Lago Poopó", "Lago Nicaragua"], correcta: 0 },
    { pregunta: "¿Cuál es el desierto más seco del mundo?", opciones: ["Sahara", "Gobi", "Atacama", "Kalahari"], correcta: 2 },
    { pregunta: "¿Qué país tiene forma de bota?", opciones: ["España", "Italia", "Grecia", "Portugal"], correcta: 1 },
    { pregunta: "¿Cuál es la capital de Francia?", opciones: ["Londres", "Berlín", "París", "Madrid"], correcta: 2 },
    { pregunta: "¿En qué continente está Australia?", opciones: ["Asia", "Oceanía", "África", "Europa"], correcta: 1 },
    { pregunta: "¿Cuál es el país más pequeño del mundo?", opciones: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"], correcta: 1 },
    { pregunta: "¿Qué océano está entre América y Europa?", opciones: ["Pacífico", "Índico", "Atlántico", "Ártico"], correcta: 2 }
  ],
  artes: [
    { pregunta: "¿Cuáles son los colores primarios?", opciones: ["Rojo, verde y azul", "Rojo, amarillo y azul", "Verde, naranja y violeta", "Blanco, negro y gris"], correcta: 1 },
    { pregunta: "¿Qué técnica usa agua para diluir los pigmentos?", opciones: ["Óleo", "Acuarela", "Acrílico", "Pastel"], correcta: 1 },
    { pregunta: "¿Quién pintó la Mona Lisa?", opciones: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correcta: 2 },
    { pregunta: "¿Qué elemento visual se refiere a la claridad u oscuridad de un color?", opciones: ["Textura", "Valor o tono", "Forma", "Línea"], correcta: 1 },
    { pregunta: "¿Cuál es una técnica de escultura que consiste en quitar material?", opciones: ["Modelado", "Talla", "Ensamblaje", "Fundición"], correcta: 1 },
    { pregunta: "¿Qué movimiento artístico es famoso por las formas geométricas de Picasso?", opciones: ["Impresionismo", "Cubismo", "Surrealismo", "Expresionismo"], correcta: 1 },
    { pregunta: "¿Qué material se usa tradicionalmente en la cerámica?", opciones: ["Madera", "Arcilla", "Metal", "Vidrio"], correcta: 1 },
    { pregunta: "¿Cuál de estos es un color secundario?", opciones: ["Rojo", "Azul", "Verde", "Amarillo"], correcta: 2 },
    { pregunta: "¿Quién pintó 'La noche estrellada'?", opciones: ["Picasso", "Van Gogh", "Dalí", "Monet"], correcta: 1 },
    { pregunta: "¿Qué técnica usa cera caliente y pigmentos?", opciones: ["Fresco", "Encáustica", "Tempera", "Gouache"], correcta: 1 },
    { pregunta: "¿Qué artista es conocido por el surrealismo y los relojes blandos?", opciones: ["Picasso", "Dalí", "Miró", "Magritte"], correcta: 1 },
    { pregunta: "¿Cuáles son los colores complementarios del rojo?", opciones: ["Azul", "Verde", "Amarillo", "Naranja"], correcta: 1 },
    { pregunta: "¿Qué instrumento se usa para mezclar colores en pintura?", opciones: ["Pincel", "Paleta", "Caballete", "Espátula"], correcta: 1 },
    { pregunta: "¿Qué estilo artístico busca representar la luz y el color de forma inmediata?", opciones: ["Cubismo", "Impresionismo", "Realismo", "Barroco"], correcta: 1 },
    { pregunta: "¿Qué artista boliviano es famoso por sus obras indigenistas?", opciones: ["Cecilio Guzmán de Rojas", "Arturo Borda", "Marina Núñez del Prado", "Todos los anteriores"], correcta: 3 }
  ],
  musica: [
    { pregunta: "¿Cuántas líneas tiene un pentagrama?", opciones: ["3", "4", "5", "6"], correcta: 2 },
    { pregunta: "¿Qué figura musical dura 4 tiempos?", opciones: ["Blanca", "Negra", "Redonda", "Corchea"], correcta: 2 },
    { pregunta: "¿Cómo se llama el símbolo que eleva una nota medio tono?", opciones: ["Bemol", "Sostenido", "Becuadro", "Calderón"], correcta: 1 },
    { pregunta: "¿Qué instrumento pertenece a la familia de las cuerdas?", opciones: ["Flauta", "Trompeta", "Violín", "Tambor"], correcta: 2 },
    { pregunta: "¿Quién compuso 'Para Elisa'?", opciones: ["Mozart", "Beethoven", "Bach", "Chopin"], correcta: 1 },
    { pregunta: "¿Cuántas notas tiene la escala diatónica mayor?", opciones: ["5", "6", "7", "8"], correcta: 2 },
    { pregunta: "¿Qué significa el término 'piano' en música?", opciones: ["Fuerte", "Suave", "Rápido", "Lento"], correcta: 1 },
    { pregunta: "¿Qué familia de instrumentos produce sonido al soplar?", opciones: ["Cuerdas", "Percusión", "Viento", "Teclado"], correcta: 2 },
    { pregunta: "¿Qué figura musical dura 2 tiempos?", opciones: ["Redonda", "Blanca", "Negra", "Corchea"], correcta: 1 },
    { pregunta: "¿Cómo se llama el símbolo que baja una nota medio tono?", opciones: ["Sostenido", "Bemol", "Becuadro", "Calderón"], correcta: 1 },
    { pregunta: "¿Qué instrumento es de percusión?", opciones: ["Guitarra", "Flauta", "Tambor", "Violín"], correcta: 2 },
    { pregunta: "¿Quién es conocido como el 'Rey del Rock and Roll'?", opciones: ["Michael Jackson", "Elvis Presley", "The Beatles", "Chuck Berry"], correcta: 1 },
    { pregunta: "¿Qué nota sigue después de Do en la escala?", opciones: ["Re", "Mi", "Fa", "Sol"], correcta: 0 },
    { pregunta: "¿Qué significa 'forte' en música?", opciones: ["Suave", "Fuerte", "Rápido", "Lento"], correcta: 1 },
    { pregunta: "¿Cuál es el instrumento nacional de Bolivia?", opciones: ["Charango", "Quena", "Zampoña", "Todas son importantes"], correcta: 3 },
    { pregunta: "¿Cuántas cuerdas tiene normalmente una guitarra?", opciones: ["4", "5", "6", "7"], correcta: 2 }
  ]
};

let preguntas = [];
let indiceActual = 0;
let puntaje = 0;
let respondida = false;
let materiaActual = "";
let cantidadElegida = 10;

function mezclarArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(function(p) {
    p.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

function mostrarInicio() { mostrarPantalla('inicio'); }
function mostrarInstrucciones() { mostrarPantalla('instrucciones'); }
function mostrarMaterias() { mostrarPantalla('materias'); }

function seleccionarMateria(materia) {
  materiaActual = materia;
  const nombres = {
    sociales: "🌍 Ciencias Sociales", biologia: "🧬 Biología", quimica: "⚗️ Química",
    fisica: "⚡ Física", matematicas: "🔢 Matemáticas", lenguaje: "📚 Lenguaje",
    historia: "🏛️ Historia", geografia: "🗺️ Geografía", artes: "🎨 Artes Plásticas",
    musica: "🎵 Música"
  };
  document.getElementById('texto-materia-elegida').textContent = nombres[materia];
  const total = bancoPreguntas[materia].length;
  const contenedor = document.getElementById('opciones-cantidad');
  contenedor.innerHTML = '';
  for (let i = 5; i <= total; i++) {
    const btn = document.createElement('button');
    btn.className = 'btn-cantidad';
    btn.textContent = i;
    btn.onclick = function() { iniciarConCantidad(i); };
    contenedor.appendChild(btn);
  }
  mostrarPantalla('cantidad');
}

function iniciarConCantidad(cantidad) {
  cantidadElegida = cantidad;
  const mezcladas = mezclarArray(bancoPreguntas[materiaActual]);
  preguntas = mezcladas.slice(0, cantidad);
  const nombres = {
    sociales: "🌍 Ciencias Sociales", biologia: "🧬 Biología", quimica: "⚗️ Química",
    fisica: "⚡ Física", matematicas: "🔢 Matemáticas", lenguaje: "📚 Lenguaje",
    historia: "🏛️ Historia", geografia: "🗺️ Geografía", artes: "🎨 Artes Plásticas",
    musica: "🎵 Música"
  };
  document.getElementById('nombre-materia').textContent = nombres[materiaActual];
  indiceActual = 0;
  puntaje = 0;
  document.getElementById('puntos').textContent = 0;
  document.getElementById('total-preguntas').textContent = preguntas.length;
  document.getElementById('max-puntos').textContent = preguntas.length;
  mostrarPantalla('juego');
  cargarPregunta();
}

function cargarPregunta() {
  respondida = false;
  const p = preguntas[indiceActual];
  document.getElementById('num-pregunta').textContent = indiceActual + 1;
  document.getElementById('texto-pregunta').textContent = p.pregunta;
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('btn-siguiente').style.display = 'none';
  document.getElementById('btn-reintentar').style.display = 'none';
  document.getElementById('barra').style.width = (indiceActual / preguntas.length * 100) + '%';
  const contenedor = document.getElementById('opciones');
  contenedor.innerHTML = '';
  p.opciones.forEach(function(texto, i) {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = (i + 1) + '. ' + texto;
    div.onclick = function() { seleccionarOpcion(i); };
    contenedor.appendChild(div);
  });
}

function reproducirSonidoAcierto() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function reproducirSonidoError() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {}
}

function seleccionarOpcion(indice) {
  if (respondida) return;
  respondida = true;
  const p = preguntas[indiceActual];
  const opciones = document.querySelectorAll('.opcion');
  const feedback = document.getElementById('feedback');
  opciones[p.correcta].classList.add('correcta');
  if (indice === p.correcta) {
    puntaje++;
    document.getElementById('puntos').textContent = puntaje;
    feedback.textContent = '¡Correcto! Bien hecho.';
    feedback.className = 'feedback correcto';
    document.getElementById('btn-siguiente').style.display = 'inline-block';
    document.getElementById('btn-reintentar').style.display = 'none';
    reproducirSonidoAcierto();
  } else {
    opciones[indice].classList.add('incorrecta');
    feedback.textContent = 'Incorrecto. Puedes reintentar esta pregunta.';
    feedback.className = 'feedback incorrecto';
    document.getElementById('btn-siguiente').style.display = 'inline-block';
    document.getElementById('btn-reintentar').style.display = 'inline-block';
    reproducirSonidoError();
  }
}

function reintentarPregunta() {
  respondida = false;
  document.querySelectorAll('.opcion').forEach(function(op) {
    op.classList.remove('correcta', 'incorrecta');
  });
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('btn-siguiente').style.display = 'none';
  document.getElementById('btn-reintentar').style.display = 'none';
}

function siguientePregunta() {
  indiceActual++;
  if (indiceActual < preguntas.length) {
    cargarPregunta();
  } else {
    mostrarResultado();
  }
}
function reproducirVozMeme(porcentaje) {
  try {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    let frase = "";

    if (porcentaje === 12) {
      frase = "¡YANET Y SORIA POR SIEMPRE!";
    } else if (porcentaje >= 6) {
      frase = "¡Ufff! ¡Qué máquina! ¡Muy buen trabajo!";
    } else if (porcentaje >= 3) {
      frase = "¡BUENO, BUENO, !HAY POTENCIAL! A SEGUIR PRACTICANDO!";
    } else {
      frase = "¡F en el chat! ¡No te rindas, campeón!";
    }

    const voz = new SpeechSynthesisUtterance(frase);

    voz.lang = "es-ES";
    voz.rate = 1;
    voz.pitch = 1.15;
    voz.volume = 1;

    window.speechSynthesis.speak(voz);

  } catch (error) {
    console.log("Error al reproducir la voz:", error);
  }
}

function reproducirSonidoFinal() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const notas = [
      { frecuencia: 523.25, tiempo: 0 },
      { frecuencia: 659.25, tiempo: 0.15 },
      { frecuencia: 783.99, tiempo: 0.30 },
      { frecuencia: 1046.50, tiempo: 0.45 }
    ];

    notas.forEach(function(nota) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "sawtooth";
      osc.frequency.value = nota.frecuencia;

      gain.gain.setValueAtTime(0.35, ctx.currentTime + nota.tiempo);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + nota.tiempo + 0.5
      );

      osc.start(ctx.currentTime + nota.tiempo);
      osc.stop(ctx.currentTime + nota.tiempo + 0.5);
    });

  } catch (error) {
    console.log("Error en el sonido final:", error);
  }
}

function mostrarResultado() {
  const max = preguntas.length;
  const porcentaje = Math.round((puntaje / max) * 12);

  let mensaje = "";
  let emoji = "😊";

  if (porcentaje === 12) {
    mensaje ="Exelente, Dominas el temaa.";
    emoji = "🌟";
  } else if (porcentaje >= 9) {
    mensaje = "¡Muy bien! Buen trabajo.";
    emoji = "👏";
  } else if (porcentaje >= 3) {
    mensaje = "Buen intento. Sigue practicando.";
    emoji = "💪";
  } else {
    mensaje = "No te desanimes. La práctica hace al maestro.";
    emoji = "📚";
  }

  document.getElementById("emoji-final").textContent = emoji;
  document.getElementById("mensaje-final").textContent = mensaje;
  document.getElementById("puntaje-final").textContent = puntaje;

  document.getElementById("barra").style.width = "100%";

  mostrarPantalla("resultado");

  // Sonido y voz solamente al finalizar el juego
  reproducirSonidoFinal();

  setTimeout(function() {
    reproducirVozMeme(porcentaje);
  }, 700);
}

function reiniciar() {
  iniciarConCantidad(cantidadElegida);
}