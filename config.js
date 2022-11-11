import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvXvspcYQoDghnVYXfCfKMO7MU79YWhnY',

  authDomain: 'eride8-d573e.firebaseapp.com',

  projectId: 'eride8-d573e',

  storageBucket: 'eride8-d573e.appspot.com',

  messagingSenderId: '935434214810',

  appId: '1:935434214810:web:878ccfaee4f8164117ae23',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
