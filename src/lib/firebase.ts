import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { auth, storage } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function uploadImage(file: File): Promise<string> {
  const storageRef = ref(storage, `images/projects/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}

export async function deleteImage(imageUrl: string) {
  const storageRef = ref(storage, imageUrl);
  await deleteObject(storageRef);
}

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("Oturum açıldı:", user);
    return user;
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
};
