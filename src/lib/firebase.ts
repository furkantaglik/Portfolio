import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase.config";

export async function uploadImage(file: File): Promise<string> {
  const storageRef = ref(storage, `images/projects/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}

export async function deleteImage(imageUrl: string) {
  const storageRef = ref(storage, imageUrl);
  await deleteObject(storageRef);
}
