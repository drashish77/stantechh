import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhbrmtL8Ner17dOcljfv9znm_x1-bmtf8",
  authDomain: "taqq-479aa.firebaseapp.com",
  projectId: "taqq-479aa",
  storageBucket: "taqq-479aa.appspot.com",
  messagingSenderId: "100707570256",
  appId: "1:100707570256:web:9306d86533a6743195f755",
};

export default initializeApp(firebaseConfig);
export const auth = getAuth();
