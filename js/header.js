console.log('Script cargado');

function createNavbar() {
    console.log('Función createNavbar ejecutada');
    
    const header = document.querySelector('header');
    
    if (!header) {
        console.error('No se encontró el elemento header');
        return;
    }
    
    header.innerHTML = `
        <nav class="main-navbar">
            <div class="navbar-container">
                <a href="../index.html" class="artist-logo">Anna Weyant</a>
                <ul class="navbar-menu">
                    <li><a href="work.html">WORK</a></li>
                    <li><a href="about-me.html">ABOUT ME</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    console.log('Navbar insertado');
}

document.addEventListener('DOMContentLoaded', createNavbar);