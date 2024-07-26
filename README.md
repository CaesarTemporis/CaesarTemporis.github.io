<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive website demonstrating HTML, CSS, JavaScript, and Python concepts">
    <title>Comprehensive Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Comprehensive Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This website demonstrates various concepts from HTML, CSS, JavaScript, and Python.</p>
            <button id="fetch-data">Fetch Data</button>
            <div id="data-container"></div>
        </section>

        <section id="about">
            <h2>About</h2>
            <p>This section provides information about the website.</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <input type="submit" value="Submit">
            </form>
        </section>
    </main>

    <footer>
        <p>© 2024 My Comprehensive Website</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>