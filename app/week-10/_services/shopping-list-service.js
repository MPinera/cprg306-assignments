import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(query(itemsCollection));
    itemsSnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
  return items;
}

export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
