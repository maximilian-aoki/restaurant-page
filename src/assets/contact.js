export function getContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-content');

  contact.innerHTML = 
    `
    <div class="location-image"></div>
    <div class="other-details">
      <div class="location-info flex-column">
        <h3>Location</h3>
        <p>151 Gold Mine Road</p>
        <p>San Francisco, California</p>
        <p>M6S 4R5</p>
      </div>
      <div class="contact-info flex-column">
        <h3>Contact</h3>
        <p>info@roboticecream.com</p>
        <p>(888) 531-5455</p>
      </div>
      <div class="hours flex-column">
        <h3>Hours</h3>
        <div class="hours-separation">
          <div class="days">
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Weekend</p>
          </div>
          <div class="times">
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 8PM</p>
            <p>11AM - 10PM</p>
            <p>11AM - 10PM</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </div>
    `
  ;

  return contact;
}