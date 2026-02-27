<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RKX Earn</title>
    <link rel="stylesheet" href="style.css">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

    <!-- Intro Animation Screen -->
    <div id="intro">
        <div class="logo-anim">RKX EARN</div>
    </div>

    <!-- Header Section -->
    <header>
        <div class="menu-btn" id="openMenu">
            <i class="fas fa-bars"></i>
        </div>
        <div class="site-name">CAREER LINK BD</div>
        <div class="user-icon">
            <a href="./login/"><i class="fas fa-user-circle"></i></a>
        </div>
    </header>

    <!-- Side Navigation -->
    <div class="sidebar" id="sidebar">
        <div class="side-header">
            <i class="fas fa-layer-group"></i> নেভিগেশন
        </div>
        <nav>
            <p class="nav-label">GENERAL</p>
            <a href="#"><i class="fas fa-home"></i> হোম</a>
            <a href="#"><i class="fas fa-info-circle"></i> আমাদের সম্পর্কে</a>
            <a href="#"><i class="fas fa-shield-alt"></i> গোপনীয়তা নীতি</a>
            <a href="#"><i class="fas fa-video"></i> ভিডিও টিউটোরিয়াল <span class="badge">NEW</span></a>
            
            <p class="nav-label">COMMUNITY</p>
            <a href="https://t.me/your_group"><i class="fab fa-telegram"></i> টেলিগ্রাম গ্রুপ</a>
            <a href="#"><i class="fab fa-facebook"></i> ফেসবুক গ্রুপ</a>
            
            <p class="nav-label">ACCOUNT</p>
            <a href="./login/"><i class="fas fa-sign-in-alt"></i> লগইন</a>
        </nav>
        <button id="closeMenu" class="close-btn"><i class="fas fa-times"></i> বন্ধ করুন</button>
    </div>

    <!-- Hero Content -->
    <main class="hero">
        <h2 class="fade-in">কেন CAREER LINK BD-তে কাজ করবেন?</h2>
        
        <!-- Stats Cards -->
        <div class="stats-container">
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <h3 id="total_members">0+</h3>
                <p>টোটাল ইউজার</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-money-bill-wave"></i>
                <h3 id="total_paid">0 TK</h3>
                <p>টোটাল পেইড</p>
            </div>
        </div>

        <div class="action-buttons">
            <button onclick="location.href='./register/'" class="btn-start">Get Started</button>
            <button onclick="location.href='./login/'" class="btn-login">Login</button>
        </div>
    </main>

    <!-- Floating Buttons -->
    <div class="floating-btn">
        <a href="#" class="msg"><i class="fab fa-facebook-messenger"></i></a>
        <a href="#" class="tg"><i class="fab fa-telegram-plane"></i></a>
    </div>

    <footer>
        © 2026 CAREER LINK BD. All rights reserved.
    </footer>

    <!-- Firebase SDK (Version 10+) -->
    <script type="module" src="app.js"></script>
</body>
</html>
