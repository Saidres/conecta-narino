import { db, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, query, where } from "../firebase";

// CRUD Service con manejo de errores y relaciones entre colecciones
const CrudService = (collectionName) => ({
  // Crear documento
  async create(data) {
    try {
      const colRef = collection(db, collectionName);
      const docRef = await addDoc(colRef, data);
      return docRef.id;
    } catch (error) {
      console.error(`Error creando documento en ${collectionName}:`, error);
      throw new Error("No se pudo crear el documento.");
    }
  },

  // Leer documento por ID
  async readById(id) {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error(`El documento con ID ${id} no existe en ${collectionName}.`);
      }
      return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
      console.error(`Error leyendo documento en ${collectionName} con ID ${id}:`, error);
      throw new Error("No se pudo leer el documento.");
    }
  },

  // Leer todos los documentos con un filtro opcional
  async readAll(filters = []) {
    try {
      const colRef = collection(db, collectionName);
      let q = query(colRef);
      filters.forEach(({ field, operator, value }) => {
        q = query(q, where(field, operator, value));
      });
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(`Error leyendo documentos en ${collectionName} con filtros ${JSON.stringify(filters)}:`, error);
      throw new Error("No se pudieron leer los documentos.");
    }
  },

  // Actualizar documento por ID
  async update(id, data) {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      return true;
    } catch (error) {
      console.error(`Error actualizando documento en ${collectionName} con ID ${id}:`, error);
      throw new Error("No se pudo actualizar el documento.");
    }
  },

  // Eliminar documento por ID
  async delete(id) {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error(`Error eliminando documento en ${collectionName} con ID ${id}:`, error);
      throw new Error("No se pudo eliminar el documento.");
    }
  },
});

// Servicios específicos para cada colección
export const ProductorService = CrudService("productores");
export const ProductoService = {
  ...CrudService("productos"),
  async create(data) {
    try {
      const productId = await CrudService("productos").create(data);
      if (data.ProductorID) {
        const productorRef = doc(db, "productores", data.ProductorID);
        const productorSnap = await getDoc(productorRef);
        if (productorSnap.exists()) {
          const productorData = productorSnap.data();
          await updateDoc(productorRef, {
            Productos: [...(productorData.Productos || []), productId],
          });
        }
      }
      return productId;
    } catch (error) {
      console.error("Error creando producto con relación a Productor:", error);
      throw new Error("No se pudo crear el producto.");
    }
  },
};

export const ActividadService = {
  ...CrudService("actividades"),
  async create(data) {
    try {
      const actividadId = await CrudService("actividades").create(data);
      if (data.ProductorID) {
        const productorRef = doc(db, "productores", data.ProductorID);
        const productorSnap = await getDoc(productorRef);
        if (productorSnap.exists()) {
          const productorData = productorSnap.data();
          await updateDoc(productorRef, {
            Actividades: [...(productorData.Actividades || []), actividadId],
          });
        }
      }
      return actividadId;
    } catch (error) {
      console.error("Error creando actividad con relación a Productor:", error);
      throw new Error("No se pudo crear la actividad.");
    }
  },
};

export const AgenteTuristicoService = CrudService("agentesTuristicos");
export const PropuestaService = CrudService("propuestas");
export const TuristaService = CrudService("turistas");
