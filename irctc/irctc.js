function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful');
        // Redirect to another page
        window.location.href = 'https://www.railyatri.in/live-train-status';
    } else {
        alert('Invalid username or password');
    }
}


document.getElementById('sidebarToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    }
});

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const content = document.getElementById('content');
    if (sidebar.style.left === '0px' && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    }
});

function loadSection(section) {
    const mainContent = document.getElementById('main-content');
    let sectionContent = '';

    if (section === 'indian') {
        sectionContent = `
             <div class="login-container" style="background-image: url('https://s12.gifyu.com/images/Srk4n.gif'); background-size: cover; background-repeat: no-repeat; background-position: center;">
            <h2 style="color: #ffA500;">Indian</h2>
                <form id="loginForm" onsubmit="validateLogin(event)">
                    <input type="text" id="username" name="username" placeholder="Username" required>
                    <input type="password" id="password" name="password" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
                <p><a href="#" onclick="loadSection('indian-signup')" style="color: red; text-decoration: underline;"">Sign Up</a></p>
            </div>
        `;
    } else if (section === 'non-indian') {
        sectionContent = `
            <div class="login-container" style="background-image: url('https://s10.gifyu.com/images/SrkCD.gif'); background-size: cover; background-repeat: no-repeat; background-position: center;">
                <h2 style="color: #ffA500";>Non-Indian Login</h2>
                <form id="nonIndianLoginForm" onsubmit="validateNonIndianLogin(event)">
                    <input type="text" id="nonIndianUsername" name="username" placeholder="Username" required>
                    <input type="password" id="nonIndianPassword" name="password" placeholder="Password" required>
                    <input type="text" id="country" name="country" placeholder="Country" required>
                    <button type="submit">Login</button>
                </form>
                <p><a href="#" onclick="loadSection('non-indian-signup')" style="color: red; text-decoration: underline;"">Sign Up</a></p>
            </div>
        `;
    } else if (section === 'guest') {
        // Redirect to another page
        window.location.href = 'https://www.railyatri.in/live-train-status';
        return;
    } else if (section === 'indian-signup') {
        sectionContent = `
            <div class="login-container">
                <h2>Indian Sign Up</h2>
                <form id="indianSignupForm" onsubmit="validateSignup(event, 'indian')">
                    <input type="text" id="signupUsername" name="username" placeholder="Username" required>
                    <input type="password" id="signupPassword" name="password" placeholder="Password" required>
                    <input type="email" id="signupEmail" name="email" placeholder="Email" required>
                    <button type="submit">Sign Up</button>
                </form>
                <p><a href="#" onclick="loadSection('indian')">Back to Login</a></p>
            </div>
        `;
    } else if (section === 'non-indian-signup') {
        sectionContent = `
            <div class="login-container">
                <h2>Non-Indian Sign Up</h2>
                <form id="nonIndianSignupForm" onsubmit="validateSignup(event, 'non-indian')">
                    <input type="text" id="signupUsername" name="username" placeholder="Username" required>
                    <input type="password" id="signupPassword" name="password" placeholder="Password" required>
                    <input type="email" id="signupEmail" name="email" placeholder="Email" required>
                    <input type="text" id="signupCountry" name="country" placeholder="Country" required>
                    <button type="submit">Sign Up</button>
                </form>
                <p><a href="#" onclick="loadSection('non-indian')">Back to Login</a></p>
            </div>
        `;
    } else if (section === 'home') {
document.body.style.backgroundImage = "url('https://i.postimg.cc/ZnjjXDp5/Welcome-To-India-s-Largest-Service.jpg')";
        sectionContent = `
             <div class="login-container" id="home" style="background-image: url('https://i.postimg.cc/7YzQHD7p/download-1.jpg');">
                <h2>IRCTC</h2>
              <p style="color: #ff0000;">Welcome to the IRCTC Website.</p>
                <p><a href="#" onclick="loadSection('indian')" style="color: orange; text-decoration: underline;">Indian Login</a></p>
            <p><a href="#" onclick="loadSection('non-indian')" style="color: white; text-decoration: underline;">Non-Indian Login</a></p>
            <p><a href="#" onclick="loadSection('guest')" style="color:green; text-decoration: underline;">Guest Section</a></p>
            </div>
        `;
    }

    mainContent.innerHTML = sectionContent;
}

// Initial load of the home section
loadSection('home');
