// firebaseService.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const firebaseService = {
  
  createDocument: async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  },

 
  readDocuments: async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return documents;
    } catch (error) {
      console.error("Error reading documents: ", error);
      throw error;
    }
  },

  updateDocument: async (collectionName, docId, data) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, data);
      console.log("Document updated with ID: ", docId);
      return docId;
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  },

  
  deleteDocument: async (collectionName, docId) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", docId);
      return docId;
    } catch (error) {
      console.error("Error deleting document: ", error);
      throw error;
    }
  },


  deleteAllDocuments: async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
      console.log(`All documents in the '${collectionName}' collection have been deleted.`);
      return true;
    } catch (error) {
      console.error("Error deleting all documents: ", error);
      throw error;
    }
  }
};

export default firebaseService;
