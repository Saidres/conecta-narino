import { db } from "../firebase";
import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";

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

  // Leer todos los documentos
  async readAll() {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(`Error leyendo todos los documentos en ${collectionName}:`, error);
      throw new Error("No se pudo leer los documentos.");
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
export const ProductorService = CrudService("Productores");
export const ProductoService = CrudService("Productos");

export const ActividadService = CrudService("Actividades");

export const AgenteTuristicoService = CrudService("AgentesTuristicos");
export const PropuestaService = CrudService("Propuestas");
export const TuristaService = CrudService("Turistas");
