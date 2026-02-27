import { db, ref, get, child } from './assets/firebase-config.js';

// ১. ইন্ট্রো এনিমেশন বন্ধ করা (২ সেকেন্ড পর)
window.onload = () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.opacity = '0';
        setTimeout(() => intro.style.display = 'none', 800);
    }, 2000);
};

// ২. সাইডবার লজিক
const sidebar = document.getElementById('sidebar');
document.getElementById('openMenu').onclick = () => sidebar.classList.add('active');
document.getElementById('closeMenu').onclick = () => sidebar.classList.remove('active');

// ৩. রিয়েল টাইম স্ট্যাটাস আপডেট (Firebase)
async function fetchStats() {
    const dbRef = ref(db);
    
    // টোটাল মেম্বার সংখ্যা
    get(child(dbRef, `users`)).then((snapshot) => {
        if (snapshot.exists()) {
            const totalUsers = Object.keys(snapshot.val()).length;
            document.getElementById('total_members').innerText = totalUsers + "+";
        }
    });

    // টোটাল পেইড এমাউন্ট (Withdrawal কালেকশন থেকে)
    get(child(dbRef, `withdrawals`)).then((snapshot) => {
        if (snapshot.exists()) {
            let totalPaid = 0;
            const data = snapshot.val();
            for (let key in data) {
                if (data[key].status === "approved") {
                    totalPaid += Number(data[key].amount);
                }
            }
            document.getElementById('total_paid').innerText = totalPaid + " TK";
        }
    });
}

fetchStats();
