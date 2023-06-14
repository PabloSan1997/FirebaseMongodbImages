// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const carpeta = "misImagenes";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC_InBjqrPupwBi4EKazGzJxWGWygNYes",
  authDomain: "ejemploimagenes-f0ee3.firebaseapp.com",
  projectId: "ejemploimagenes-f0ee3",
  storageBucket: "ejemploimagenes-f0ee3.appspot.com",
  messagingSenderId: "856988013566",
  appId: "1:856988013566:web:a732f5aece73259e4be6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function subirImagen(imagen: File, name: string): Promise<string> {
  try {
    const storagref = ref(storage, `${carpeta}/${name}`);
    await uploadBytes(storagref, imagen).then((snapshot) => {
      console.log(snapshot);
    });
    const url = await getDownloadURL(storagref);
    return url;
  } catch (error) {
    throw "Error al guardar imagne"
  }
}
export async function eliminarImagen(name: string) {
  const storagref = ref(storage, `${carpeta}/${name}`);
  await deleteObject(storagref);

}