import { db, ref, get, set, child } from '../assets/firebase-config.js';
const user = localStorage.getItem("user");

document.getElementById('claimBtn').onclick = async () => {
    const snapshot = await get(child(ref(db), `users/${user}`));
    if(snapshot.exists()){
        let currentBalance = snapshot.val().balance || 0;
        await set(ref(db, `users/${user}/balance`), currentBalance + 5);
        alert("5 TK Added!");
    }
};
