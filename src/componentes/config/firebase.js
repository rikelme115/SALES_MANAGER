import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSy2mxRq89sOepjRKqO31N2erZSspHvEc",
  authDomain: "sales-manager-652e4.firebaseapp.com",
  projectId: "sales-manager-652e4",
  storageBucket: "sales-manager-652e4.appspot.com",
  messagingSenderId: "510298277002",
  appId: "1:510298277002:web:fcda0fb6a4dd47fa6d1973",
  measurementId: "G-1DFBDQ6TNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;