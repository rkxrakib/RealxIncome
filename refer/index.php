<!DOCTYPE html>
<html lang="en">
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <div class="container" style="text-align: center;">
        <h3>Refer & Earn</h3>
        <p>Share your link to get 10% commission</p>
        <div style="background: rgba(255,255,255,0.1); padding: 10px; word-break: break-all;" id="referLink"></div>
        <button onclick="copyLink()">Copy Link</button>
    </div>
    <script type="module" src="main.js"></script>
    <script>
        function copyLink() {
            const link = document.getElementById('referLink').innerText;
            navigator.clipboard.writeText(link);
            alert("Link Copied!");
        }
    </script>
</body>
</html>
