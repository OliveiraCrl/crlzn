import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyAgIoktEtavzB43JLLveu-GozPiy44qJz8",
  authDomain: "crlzn-cf24e.firebaseapp.com",
  databaseURL: "https://crlzn-cf24e-default-rtdb.firebaseio.com",
  projectId: "crlzn-cf24e",
  storageBucket: "crlzn-cf24e.appspot.com",
  messagingSenderId: "86952573737",
  appId: "1:86952573737:web:e632b70c198d4413b39538",
  measurementId: "G-QEHG5YZH53"
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
