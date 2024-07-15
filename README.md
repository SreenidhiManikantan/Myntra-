# Myntra-```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VR Fashion Show</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>VR Fashion Show</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="ar-try-on.html">AR Try-On</a></li>
                <li><a href="wardrobe.html">Digital Wardrobe</a></li>
                <li><a href="vr-show.html">VR Fashion Show</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div class="container">
            <h2>Experience the VR Fashion Show</h2>
            <button id="enter-vr-button">Enter VR Fashion Show</button>
            <div id="vr-container" style="width: 100%; height: 600px;"></div>
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@webxr/webxr-polyfill@latest"></script>
    <script src="vr-show.js"></script>
</body>
</html>
