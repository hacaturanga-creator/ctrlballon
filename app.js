/ Твой Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC8trqk1mHsKTTrts_kFuZSgnb5m5Lp-sw",
  authDomain: "ctrlballon.firebaseapp.com",
  databaseURL: "https://ctrlballon-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ctrlballon",
  storageBucket: "ctrlballon.firebasestorage.app",
  messagingSenderId: "295063050366",
  appId: "1:295063050366:web:18671d07d690489f9c602f",
  measurementId: "G-JDGZ7R3F76"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Кнопка создаёт тестовый баллон
document.getElementById("testWrite").onclick = () => {
  const newBallonRef = db.ref("ballons").push();
  newBallonRef.set({
    status: "full",
    location: "warehouse",
    created: Date.now()
  });
  alert("Тестовый баллон создан!");
};