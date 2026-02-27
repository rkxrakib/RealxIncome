<!DOCTYPE html>
<html lang="en">
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <div class="container">
        <h3>Withdraw Balance</h3>
        <p>Current Balance: <span id="bal" style="color: gold;">0</span> TK</p>
        <select id="method" style="width: 100%; padding: 10px; background: #333; color: white;">
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
        </select>
        <input type="number" id="amount" placeholder="Amount">
        <input type="text" id="number" placeholder="Number">
        <button id="wdBtn">Submit Request</button>
    </div>
    <script type="module" src="main.js"></script>
</body>
</html>
