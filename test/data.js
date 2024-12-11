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
      Ubicación: 'Nariño, Colombia',
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
      Ubicación: 'Nariño, Colombia',
      Productos: [
        {
          Nombre: 'Frutas Tropicales',
          Descripción: 'Frutas frescas y tropicales de temporada',
          Calificación: 4.5,
          Disponibilidad: true,
          Etiquetas: ['frutas', 'fresco', 'local'],
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
      ],
      Descripción:
        'Dedicados al cultivo de frutas de calidad y sostenibilidad.',
      Contacto: '3156789123',
    },
  ]

  for (const productor of productores) {
    // Crear Productor
    const productorId = await ProductorService.create({
      Nombre: productor.Nombre,
      Ubicación: productor.Ubicación,
      Descripción: productor.Descripción,
      Contacto: productor.Contacto,
    })

    console.log(`Productor creado: ${productor.Nombre} con ID: ${productorId}`)

    // Crear Productos del Productor
    for (const producto of productor.Productos) {
      const productoId = await ProductoService.create({
        ...producto,
        ProductorID: productorId,
      })
      console.log(`  Producto creado: ${producto.Nombre} con ID: ${productoId}`)
    }

    // Crear Actividades del Productor
    for (const actividad of productor.Actividades) {
      const actividadId = await ActividadService.create({
        ...actividad,
        ProductorID: productorId,
      })
      console.log(
        `  Actividad creada: ${actividad.Itinerario} con ID: ${actividadId}`
      )
    }
  }
}

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
              Itinerario:
                'Caminata por la selva y navegación en el río Amazonas',
              Fotos: ['amazonia1.jpg', 'amazonia2.jpg'],
              Descripción: 'Explora la biodiversidad única de la selva.',
              Calificación: 5.0,
              Etiquetas: ['aventura', 'selva', 'naturaleza'],
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
          ],
        },
      ],
    },
  ]

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
      ActividadesFavoritas: [],
      Intereses: ['aventura', 'cultura', 'naturaleza'],
    },
    {
      Nombre: 'Carlos Gómez',
      Correo: 'carlos.gomez@example.com',
      ActividadesFavoritas: [],
      Intereses: ['historia', 'gastronomía'],
    },
  ]

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
