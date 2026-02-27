import { db, ref, get, set, child } from '../assets/firebase-config.js';
const user = localStorage.getItem("user");

// Load Balance
get(child(ref(db), `users/${user}`)).then(s => {
    document.getElementById('bal').innerText = s.val().balance;
});

document.getElementById('wdBtn').onclick = async () => {
    const amount = Number(document.getElementById('amount').value);
    const snapshot = await get(child(ref(db), `users/${user}`));
    const currentBal = snapshot.val().balance;

    if(amount > currentBal || amount < 20) return alert("Invalid Amount");

    await set(ref(db, 'withdrawals/' + Date.now()), {
        user: user, amount: amount, method: document.getElementById('method').value,
        number: document.getElementById('number').value, status: "pending"
    });
    await set(ref(db, `users/${user}/balance`), currentBal - amount);
    alert("Request Sent!");
};
