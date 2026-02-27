const user = localStorage.getItem("user");
// আপনার ডোমেইন অনুযায়ী লিঙ্ক সেট করুন
const myLink = `https://t.me/rkxearn_bot?startapp=${user}`;
document.getElementById('referLink').innerText = myLink;
