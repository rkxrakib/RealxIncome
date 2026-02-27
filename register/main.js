import { db, ref, set, get, child } from '../assets/firebase-config.js';
const tg = window.Telegram.WebApp;
const urlParams = new URLSearchParams(window.location.search);
let referrer = urlParams.get('ref') || tg.initDataUnsafe.start_param || "admin";
document.getElementById('ref_user').value = referrer;

// Telegram Auto Login logic
if (tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user.username || tg.initDataUnsafe.user.id;
    handleAutoLogin(user);
}

async function handleAutoLogin(uid) {
    const snapshot = await get(child(ref(db), `users/${uid}`));
    if (snapshot.exists()) {
        localStorage.setItem("user", uid);
        window.location.href = "../dashboard/";
    }
}

document.getElementById('regBtn').onclick = async () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if(!user || !pass) return alert("Fill all fields");
    
    await set(ref(db, 'users/' + user), {
        username: user, password: pass, referrer: referrer, balance: 0, status: "inactive"
    });
    alert("Success!"); window.location.href = "../login/";
};
