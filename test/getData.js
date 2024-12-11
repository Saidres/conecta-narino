import { ProductorService, ProductoService, ActividadService, AgenteTuristicoService, PropuestaService, TuristaService } from "../service/services";

const getData = async () => {
  console.log("Cargando datos...");
  const productores = await ProductorService.readAll();
  const productos = await ProductoService.readAll();
  const actividades = await ActividadService.readAll();
  const agentesTuristicos = await AgenteTuristicoService.readAll();
  const propuestas = await PropuestaService.readAll();
  const turistas = await TuristaService.readAll();

  return {
    productores,
    productos,
    actividades,
    agentesTuristicos,
    propuestas,
    turistas,
  };
};

export default getData;