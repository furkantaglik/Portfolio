import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCncIZInmHxsLkTlQsmC4rZvPdIp9mgGVg",
  authDomain: "portfolio-e4517.firebaseapp.com",
  projectId: "portfolio-e4517",
  storageBucket: "portfolio-e4517.appspot.com",
  messagingSenderId: "727185978669",
  appId: "1:727185978669:web:25a3d492f5008f919f0fa4",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
