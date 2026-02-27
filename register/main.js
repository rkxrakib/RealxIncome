import { db, ref, set, get, child } from '../assets/firebase-config.js';

const tg = window.Telegram.WebApp;
const urlParams = new URLSearchParams(window.location.search);

// ১. রেফারেল চেক
let referrer = urlParams.get('ref') || ""; 

// ২. টেলিগ্রাম অটো লগইন চেক
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const tgUser = tg.initDataUnsafe.user;
    const tgReferrer = tg.initDataUnsafe.start_param || referrer;
    autoLogin(tgUser.username || tgUser.id, tgReferrer);
}

document.getElementById('ref_user').value = referrer;

async function autoLogin(uid, refCode) {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${uid}`));
    
    if (snapshot.exists()) {
        localStorage.setItem("user", uid);
        window.location.href = "../dashboard/";
    } else {
        // নতুন ইউজার তৈরি (টেলিগ্রাম থেকে আসলে)
        await set(ref(db, 'users/' + uid), {
            username: uid,
            referrer: refCode,
            balance: 0,
            status: "active"
        });
        localStorage.setItem("user", uid);
        window.location.href = "../dashboard/";
    }
}

// ম্যানুয়াল রেজিস্ট্রেশন
document.getElementById('regBtn').onclick = async () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const refCode = document.getElementById('ref_user').value;

    if(user && pass) {
        await set(ref(db, 'users/' + user), {
            username: user,
            password: pass,
            referrer: refCode,
            balance: 0,
            status: "pending"
        });
        alert("Registration Successful");
        window.location.href = "../login/";
    }
};
