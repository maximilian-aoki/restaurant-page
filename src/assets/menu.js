export function getMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-content');

  menu.innerHTML = 
    `
    <div class="product one">
      <div class="product-image"></div>
      <div class="product-details">
        <p>Cyber Chocolate</p>
        <p>$8</p>
        <p>"Delta-driven dark chocolate for decoding deliciousness"</p>
      </div>
    </div>
    <div class="product two">
      <div class="product-image"></div>
      <div class="product-details">
        <p>Smart Strawberry</p>
        <p>$8</p>
        <p>"Berry intelligence at it's ~berry~ best ;D"</p>
      </div>
    </div>
    <div class="product three">
      <div class="product-image"></div>
      <div class="product-details">
        <p>Quantum Crunch</p>
        <p>$12</p>
        <p>"Crunchy ~bits~ in a delicious quantum entanglement"</p>
      </div>
    </div>
    <div class="product four">
      <div class="product-image"></div>
      <div class="product-details">
        <p>Binary Swirl</p>
        <p>$7</p>
        <p>"0s and 1s of sweet, sweet swirly satisfaction"</p>
      </div>
    </div>
    <div class="product five">
      <div class="product-image"></div>
      <div class="product-details">
        <p>Circuitry Sorbet</p>
        <p>$9</p>
        <p>"Zesty citrus with a spark of tech.. in a popsicle!"</p>
      </div>
    </div>
    <div class="product six">
      <div class="product-image"></div>
      <div class="product-details">
        <p>VST Velvet</p>
        <p>$6</p>
        <p>"A silky smooth simulation of chocolate flavour"</p>
      </div>
    </div>
    `
  ;

  return menu;
}