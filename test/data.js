import {
  ProductorService,
  ProductoService,
  ActividadService,
  AgenteTuristicoService,
  PropuestaService,
  TuristaService,
} from '../service/services'

const datasetProductores = async () => {
  const productores = [
    {
      Nombre: 'Finca La Esperanza',
      Ubicación: { latitud: 1.2089, longitud: -77.2772 }, // Nariño, Colombia
      Productos: [
        {
          Nombre: 'Café Orgánico',
          Descripción: 'Café de altura cultivado sin químicos',
          Calificación: 4.8,
          Disponibilidad: true,
          Etiquetas: ['orgánico', 'café', 'premium'],
        },
        {
          Nombre: 'Miel de Abejas',
          Descripción: 'Miel artesanal producida por abejas nativas',
          Calificación: 4.7,
          Disponibilidad: true,
          Etiquetas: ['miel', 'artesanal', 'natural'],
        },
      ],
      Actividades: [
        {
          Itinerario: 'Tour por los cultivos, cata de café',
          Fotos: ['url1.jpg', 'url2.jpg'],
          Descripción:
            'Experiencia inmersiva en el cultivo y procesamiento del café.',
          Calificación: 4.9,
          Etiquetas: ['café', 'tour', 'agroturismo'],
        },
        {
          Itinerario: 'Aprender sobre apicultura y extracción de miel',
          Fotos: ['url3.jpg', 'url4.jpg'],
          Descripción: 'Descubre el proceso de producción de miel artesanal.',
          Calificación: 4.6,
          Etiquetas: ['miel', 'apicultura', 'sostenibilidad'],
        },
      ],
      Descripción:
        'Un espacio dedicado al cultivo responsable y turismo sostenible.',
      Contacto: '3123456789',
    },
    {
      Nombre: 'Huerta Los Naranjos',
      Ubicación: { latitud: 1.2089, longitud: -77.2772 }, // Nariño, Colombia
      Productos: [
        {
          Nombre: 'Frutas Tropicales',
          Descripción: 'Frutas frescas y tropicales de temporada',
          Calificación: 4.5,
          Disponibilidad: true,
          Etiquetas: ['frutas', 'fresco', 'local'],
        },
        {
          Nombre: 'Mermelada de Mango',
          Descripción: 'Mermelada casera elaborada con mangos frescos',
          Calificación: 4.6,
          Disponibilidad: true,
          Etiquetas: ['mermelada', 'artesanal', 'dulce'],
        },
      ],
      Actividades: [
        {
          Itinerario: 'Recolección de frutas y picnic en el campo',
          Fotos: ['url5.jpg', 'url6.jpg'],
          Descripción: 'Vive la experiencia de recolectar tus propias frutas.',
          Calificación: 4.7,
          Etiquetas: ['frutas', 'agroturismo', 'recolección'],
        },
        {
          Itinerario: 'Taller de conservas y mermeladas',
          Fotos: ['url7.jpg', 'url8.jpg'],
          Descripción:
            'Aprende a preparar conservas con las frutas de la huerta.',
          Calificación: 4.5,
          Etiquetas: ['taller', 'mermeladas', 'sostenibilidad'],
        },
      ],
      Descripción:
        'Dedicados al cultivo de frutas de calidad y sostenibilidad.',
      Contacto: '3156789123',
    },
    {
      Nombre: 'Eco Granja Las Palmeras',
      Ubicación: { latitud: 4.711, longitud: -74.0721 }, // Bogotá, Colombia
      Productos: [
        {
          Nombre: 'Huevos Orgánicos',
          Descripción: 'Huevos frescos de gallinas libres de jaula',
          Calificación: 4.9,
          Disponibilidad: true,
          Etiquetas: ['huevos', 'orgánico', 'natural'],
        },
        {
          Nombre: 'Verduras de Huerta',
          Descripción: 'Verduras frescas cultivadas sin químicos',
          Calificación: 4.8,
          Disponibilidad: true,
          Etiquetas: ['verduras', 'fresco', 'local'],
        },
      ],
      Actividades: [
        {
          Itinerario: 'Visita guiada por la granja y alimentación de animales',
          Fotos: ['url9.jpg', 'url10.jpg'],
          Descripción: 'Descubre cómo funciona una granja sostenible.',
          Calificación: 4.8,
          Etiquetas: ['granja', 'sostenibilidad', 'familia'],
        },
        {
          Itinerario: 'Taller de siembra y compostaje',
          Fotos: ['url11.jpg', 'url12.jpg'],
          Descripción: 'Aprende a cultivar tus propias verduras.',
          Calificación: 4.7,
          Etiquetas: ['taller', 'huerta', 'sostenibilidad'],
        },
      ],
      Descripción: 'Granja sostenible con enfoque en educación ambiental.',
      Contacto: '3176543210',
    },
    {
      Nombre: 'Rancho El Encanto',
      Ubicación: { latitud: 6.2518, longitud: -75.5636 }, // Medellín, Colombia
      Productos: [
        {
          Nombre: 'Leche de Cabra',
          Descripción: 'Leche fresca y natural proveniente de cabras felices',
          Calificación: 4.6,
          Disponibilidad: true,
          Etiquetas: ['leche', 'orgánico', 'natural'],
        },
        {
          Nombre: 'Queso Artesanal',
          Descripción: 'Queso elaborado a mano con métodos tradicionales',
          Calificación: 4.7,
          Disponibilidad: true,
          Etiquetas: ['queso', 'artesanal', 'local'],
        },
      ],
      Actividades: [
        {
          Itinerario: 'Ordeño de cabras y elaboración de queso',
          Fotos: ['url13.jpg', 'url14.jpg'],
          Descripción:
            'Experimenta el ordeño de cabras y aprende a hacer queso artesanal.',
          Calificación: 4.9,
          Etiquetas: ['queso', 'artesanal', 'actividad'],
        },
        {
          Itinerario: 'Caminata ecológica por la finca',
          Fotos: ['url15.jpg', 'url16.jpg'],
          Descripción: 'Disfruta de una caminata guiada por la naturaleza.',
          Calificación: 4.7,
          Etiquetas: ['caminata', 'ecología', 'naturaleza'],
        },
      ],
      Descripción: 'Conexión con la naturaleza y los alimentos artesanales.',
      Contacto: '3201234567',
    },
    {
      Nombre: 'Vivero Flor del Campo',
      Ubicación: { latitud: 5.067, longitud: -75.5174 }, // Manizales, Colombia
      Productos: [
        {
          Nombre: 'Plantas Ornamentales',
          Descripción: 'Variedad de plantas para decorar tu hogar',
          Calificación: 4.5,
          Disponibilidad: true,
          Etiquetas: ['plantas', 'ornamental', 'decoración'],
        },
        {
          Nombre: 'Abonos Naturales',
          Descripción: 'Abonos orgánicos ideales para jardinería',
          Calificación: 4.6,
          Disponibilidad: true,
          Etiquetas: ['abonos', 'orgánico', 'jardinería'],
        },
      ],
      Actividades: [
        {
          Itinerario: 'Taller de jardinería para principiantes',
          Fotos: ['url17.jpg', 'url18.jpg'],
          Descripción: 'Aprende a cuidar y mantener tus plantas.',
          Calificación: 4.8,
          Etiquetas: ['jardinería', 'taller', 'actividad'],
        },
        {
          Itinerario: 'Visita guiada al vivero',
          Fotos: ['url19.jpg', 'url20.jpg'],
          Descripción: 'Explora el vivero y conoce diversas plantas ornamentales.',
          Calificación: 4.7,
          Etiquetas: ['vivero', 'plantas', 'exploración'],
        },
      ],
      Descripción: 'Cultivando belleza y sostenibilidad en cada planta.',
      Contacto: '3198765432',
    },
  ];
  

  for (const productor of productores) {
    // Crear Productor
    const productorId = await ProductorService.create({
      Nombre: productor.Nombre,
      Ubicación: productor.Ubicación,
      Descripción: productor.Descripción,
      Contacto: productor.Contacto,
    });

    console.log(`Productor creado: ${productor.Nombre} con ID: ${productorId}`);

    // Listas para guardar IDs de productos y actividades
    const productoIds = [];
    const actividadIds = [];

    // Crear Productos del Productor
    for (const producto of productor.Productos) {
      const productoId = await ProductoService.create({
        ...producto,
        ProductorID: productorId,
      });
      productoIds.push(productoId);
      console.log(`  Producto creado: ${producto.Nombre} con ID: ${productoId}`);
    }

    // Crear Actividades del Productor
    for (const actividad of productor.Actividades) {
      const actividadId = await ActividadService.create({
        ...actividad,
        ProductorID: productorId,
      });
      actividadIds.push(actividadId);
      console.log(
        `  Actividad creada: ${actividad.Itinerario} con ID: ${actividadId}`
      );
    }

    // Actualizar el Productor con los IDs de Productos y Actividades
    await ProductorService.update(productorId, {
      Productos: productoIds,
      Actividades: actividadIds,
    });

    console.log(
      `Productor actualizado: ${productor.Nombre} con IDs de Productos y Actividades`
    );
  }
};

const datasetAgentesTuristicos = async () => {
  const agentesTuristicos = [
    {
      Nombre: 'EcoTours Colombia',
      Descripción:
        'Experiencias ecológicas y sostenibles para viajeros aventureros.',
      Calificación: 4.8,
      Contacto: '3101234567',
      Propuestas: [
        {
          Descripción:
            'Tour por la selva amazónica con actividades de avistamiento.',
          Fotos: ['selva1.jpg', 'selva2.jpg'],
          Calificación: 4.9,
          Actividades: [
            {
              Itinerario: 'Caminata por la selva y navegación en el río Amazonas',
              Fotos: ['amazonia1.jpg', 'amazonia2.jpg'],
              Descripción: 'Explora la biodiversidad única de la selva.',
              Calificación: 5.0,
              Etiquetas: ['aventura', 'selva', 'naturaleza'],
            },
            {
              Itinerario: 'Avistamiento de aves y fotografía natural',
              Fotos: ['aves1.jpg', 'aves2.jpg'],
              Descripción:
                'Participa en un recorrido para observar aves exóticas.',
              Calificación: 4.8,
              Etiquetas: ['aves', 'fotografía', 'biodiversidad'],
            },
          ],
        },
        {
          Descripción: 'Expedición a los páramos de Colombia.',
          Fotos: ['paramo1.jpg', 'paramo2.jpg'],
          Calificación: 4.7,
          Actividades: [
            {
              Itinerario: 'Trekking por senderos de montaña y lagunas',
              Fotos: ['paramo3.jpg', 'paramo4.jpg'],
              Descripción:
                'Conoce ecosistemas únicos y disfruta de paisajes asombrosos.',
              Calificación: 4.9,
              Etiquetas: ['montaña', 'ecoturismo', 'aventura'],
            },
            {
              Itinerario: 'Visita a comunidades rurales y talleres de conservación',
              Fotos: ['comunidad1.jpg', 'comunidad2.jpg'],
              Descripción:
                'Aprende sobre proyectos de conservación con locales.',
              Calificación: 4.8,
              Etiquetas: ['comunidad', 'educación', 'sostenibilidad'],
            },
          ],
        },
      ],
    },
    {
      Nombre: 'Cultural Treks',
      Descripción: 'Conexión con las raíces culturales de Colombia.',
      Calificación: 4.7,
      Contacto: '3176543210',
      Propuestas: [
        {
          Descripción: 'Ruta cultural por pueblos patrimonio de Colombia.',
          Fotos: ['cultura1.jpg', 'cultura2.jpg'],
          Calificación: 4.8,
          Actividades: [
            {
              Itinerario:
                'Visitas guiadas por monumentos históricos y talleres artesanales',
              Fotos: ['patrimonio1.jpg', 'patrimonio2.jpg'],
              Descripción: 'Descubre la historia y cultura local.',
              Calificación: 4.9,
              Etiquetas: ['cultura', 'historia', 'tradición'],
            },
            {
              Itinerario: 'Participación en festivales tradicionales',
              Fotos: ['festival1.jpg', 'festival2.jpg'],
              Descripción:
                'Experimenta la música, danza y gastronomía típica.',
              Calificación: 4.7,
              Etiquetas: ['festivales', 'tradición', 'experiencia'],
            },
          ],
        },
        {
          Descripción: 'Tour gastronómico por las regiones de Colombia.',
          Fotos: ['gastronomia1.jpg', 'gastronomia2.jpg'],
          Calificación: 4.9,
          Actividades: [
            {
              Itinerario: 'Catas de café y chocolate en fincas locales',
              Fotos: ['cafe1.jpg', 'chocolate1.jpg'],
              Descripción: 'Degusta productos típicos de alta calidad.',
              Calificación: 5.0,
              Etiquetas: ['gastronomía', 'café', 'chocolate'],
            },
            {
              Itinerario: 'Visita a mercados y clases de cocina tradicional',
              Fotos: ['mercado1.jpg', 'cocina1.jpg'],
              Descripción:
                'Aprende a preparar platos emblemáticos con expertos locales.',
              Calificación: 4.8,
              Etiquetas: ['cocina', 'gastronomía', 'local'],
            },
          ],
        },
      ],
    },
    {
      Nombre: 'Adventure Trails',
      Descripción:
        'Exploraciones intensas para los amantes de la aventura y el aire libre.',
      Calificación: 4.9,
      Contacto: '3167894321',
      Propuestas: [
        {
          Descripción: 'Escalada en roca en el Parque Nacional de los Nevados.',
          Fotos: ['roca1.jpg', 'roca2.jpg'],
          Calificación: 4.8,
          Actividades: [
            {
              Itinerario: 'Escalada guiada para principiantes y expertos',
              Fotos: ['roca3.jpg', 'roca4.jpg'],
              Descripción:
                'Supera retos de escalada con vistas impresionantes.',
              Calificación: 4.9,
              Etiquetas: ['aventura', 'escalada', 'deporte'],
            },
            {
              Itinerario: 'Taller de seguridad y técnicas de montañismo',
              Fotos: ['taller1.jpg', 'taller2.jpg'],
              Descripción:
                'Aprende técnicas esenciales para actividades al aire libre.',
              Calificación: 4.8,
              Etiquetas: ['taller', 'montañismo', 'seguridad'],
            },
          ],
        },
        {
          Descripción: 'Aventura en rápidos en San Gil.',
          Fotos: ['rapidos1.jpg', 'rapidos2.jpg'],
          Calificación: 5.0,
          Actividades: [
            {
              Itinerario: 'Rafting por el río Fonce con expertos',
              Fotos: ['rafting1.jpg', 'rafting2.jpg'],
              Descripción:
                'Disfruta de una descarga de adrenalina en los rápidos.',
              Calificación: 5.0,
              Etiquetas: ['rafting', 'aventura', 'agua'],
            },
            {
              Itinerario: 'Exploración de cuevas cercanas',
              Fotos: ['cuevas1.jpg', 'cuevas2.jpg'],
              Descripción:
                'Adéntrate en el mundo subterráneo de San Gil.',
              Calificación: 4.7,
              Etiquetas: ['espeleología', 'aventura', 'naturaleza'],
            },
          ],
        },
      ],
    },
    {
      Nombre: 'Heritage Journeys',
      Descripción:
        'Explora las raíces históricas y el patrimonio cultural colombiano.',
      Calificación: 4.6,
      Contacto: '3156789012',
      Propuestas: [
        {
          Descripción: 'Tour por las haciendas cafeteras del Quindío.',
          Fotos: ['hacienda1.jpg', 'hacienda2.jpg'],
          Calificación: 4.7,
          Actividades: [
            {
              Itinerario: 'Visita a fincas cafeteras y talleres de barismo',
              Fotos: ['barismo1.jpg', 'barismo2.jpg'],
              Descripción:
                'Descubre el proceso de producción de café de calidad.',
              Calificación: 4.8,
              Etiquetas: ['café', 'haciendas', 'cultura'],
            },
            {
              Itinerario: 'Paseo a caballo por paisajes cafeteros',
              Fotos: ['caballo1.jpg', 'paisaje1.jpg'],
              Descripción:
                'Disfruta de vistas espectaculares a caballo.',
              Calificación: 4.6,
              Etiquetas: ['caballos', 'naturaleza', 'relajación'],
            },
          ],
        },
      ],
    },
  ];
  

  for (const agente of agentesTuristicos) {
    // Crear Agente Turístico
    const agenteId = await AgenteTuristicoService.create({
      Nombre: agente.Nombre,
      Descripción: agente.Descripción,
      Calificación: agente.Calificación,
      Contacto: agente.Contacto,
    })

    console.log(`Agente turístico creado: ${agente.Nombre} con ID: ${agenteId}`)
    const propuestasIds = []

    // Crear Propuestas del Agente Turístico
    for (const propuesta of agente.Propuestas) {
      const propuestaId = await PropuestaService.create({
        ...propuesta,
        AgenteTuristicoID: agenteId,
      })
      propuestasIds.push(propuestaId)
      console.log(
        `  Propuesta creada: ${propuesta.Descripción} con ID: ${propuestaId}`
      )

      // Crear Actividades de la Propuesta
      for (const actividad of propuesta.Actividades) {
        const actividadId = await ActividadService.create({
          ...actividad,
          PropuestaID: propuestaId,
        })
        console.log(
          `    Actividad creada: ${actividad.Itinerario} con ID: ${actividadId}`
        )
      }
    }

    // Actualizar Agente Turístico con las IDs de sus propuestas
    await AgenteTuristicoService.update(agenteId, { Propuestas: propuestasIds })
  }
}

const datasetTuristas = async () => {
  const turistas = [
    {
      Nombre: 'Laura Pérez',
      Correo: 'laura.perez@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Caminata por la selva y navegación en el río Amazonas',
          Calificación: 5.0,
          Comentarios: 'Increíble experiencia, aprendí mucho sobre biodiversidad.',
        },
        {
          Actividad: 'Visitas guiadas por monumentos históricos y talleres artesanales',
          Calificación: 4.8,
          Comentarios: 'Me encantó la conexión con la historia y la tradición.',
        },
      ],
      Intereses: ['aventura', 'cultura', 'naturaleza'],
    },
    {
      Nombre: 'Carlos Gómez',
      Correo: 'carlos.gomez@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Catas de café y chocolate en fincas locales',
          Calificación: 5.0,
          Comentarios: 'Delicioso, una experiencia sensorial única.',
        },
        {
          Actividad: 'Ruta cultural por pueblos patrimonio de Colombia',
          Calificación: 4.7,
          Comentarios: 'Muy enriquecedor, aprendí mucho sobre la cultura local.',
        },
      ],
      Intereses: ['historia', 'gastronomía'],
    },
    {
      Nombre: 'Ana Torres',
      Correo: 'ana.torres@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Avistamiento de aves y fotografía natural',
          Calificación: 4.9,
          Comentarios: 'La cantidad de aves que vi fue espectacular.',
        },
        {
          Actividad: 'Taller de jardinería para principiantes',
          Calificación: 4.6,
          Comentarios: 'Aprendí muchas técnicas útiles para cuidar mis plantas.',
        },
      ],
      Intereses: ['naturaleza', 'fotografía', 'manualidades'],
    },
    {
      Nombre: 'Juan Martínez',
      Correo: 'juan.martinez@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Rafting por el río Fonce con expertos',
          Calificación: 5.0,
          Comentarios: 'La mejor experiencia de aventura que he tenido.',
        },
        {
          Actividad: 'Escalada guiada para principiantes y expertos',
          Calificación: 4.8,
          Comentarios: 'Retador, pero las vistas valieron totalmente la pena.',
        },
      ],
      Intereses: ['aventura', 'deportes extremos'],
    },
    {
      Nombre: 'Sofía Rivera',
      Correo: 'sofia.rivera@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Taller de seguridad y técnicas de montañismo',
          Calificación: 4.7,
          Comentarios: 'Aprendí habilidades prácticas y disfruté mucho la actividad.',
        },
        {
          Actividad: 'Paseo a caballo por paisajes cafeteros',
          Calificación: 4.6,
          Comentarios: 'Muy relajante y perfecto para disfrutar del paisaje.',
        },
      ],
      Intereses: ['naturaleza', 'relajación', 'educación ambiental'],
    },
    {
      Nombre: 'Miguel Rojas',
      Correo: 'miguel.rojas@example.com',
      ActividadesFavoritas: [
        {
          Actividad: 'Exploración de cuevas cercanas',
          Calificación: 4.8,
          Comentarios: 'Una experiencia única bajo tierra, fascinante.',
        },
        {
          Actividad: 'Participación en festivales tradicionales',
          Calificación: 4.7,
          Comentarios: 'La música y la comida fueron lo mejor.',
        },
      ],
      Intereses: ['exploración', 'cultura', 'gastronomía'],
    },
  ];
  

  for (const turista of turistas) {
    const turistaId = await TuristaService.create(turista)
    console.log(`Turista creado: ${turista.Nombre} con ID: ${turistaId}`)
  }
}

export const loadData = async () => {
  try {
    await datasetProductores()
    await datasetAgentesTuristicos()
    await datasetTuristas()
    console.log('Datos cargados con éxito.')
  } catch (error) {
    console.error('Error al cargar los datos:', error)
  }
}
