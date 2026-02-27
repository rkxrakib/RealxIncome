import { db, ref, set } from '../assets/firebase-config.js';
const user = localStorage.getItem("user");

document.getElementById('actBtn').onclick = async () => {
    // এখানে পেমেন্ট গেটওয়ে বা ব্যালেন্স চেক লজিক হবে
    await set(ref(db, `users/${user}/status`), "active");
    alert("Account Activated!");
    window.location.href = "../dashboard/";
};
