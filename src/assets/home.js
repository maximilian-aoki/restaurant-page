export function getHome() {
  const home = document.createElement('div');
  home.classList.add('home-content');

  home.innerHTML = 
    `
    <div class="main-image"></div>
    <div class="quote">
      <h2>"Scoops of Singularity - Taste the Artificially Sweet!"</h2>
      <p>--robo-chef</p>
    </div>
    `
  ;

  return home;
}