#  Beatmaker Pro (Interactive Drum Machine)

**Live Demo:** [Click here to play the drum machine!](https://sackeytech.github.io/beatmaker-pro/)

##  Overview
Beatmaker Pro is a fully interactive, 9-pad web-based drum machine. It was built to demonstrate proficiency in DOM manipulation, event handling, and modern CSS layouts.

##  Features
* **Global Keyboard Support:** Play the drums using your physical keyboard (Q, W, E, A, S, D, Z, X, C).
* **Click Interaction:** Fully responsive pads for mouse users.
* **Dynamic LCD Display:** The screen instantly updates to show the name of the active audio clip.
* **Rapid Playback:** Audio play heads are reset to `0` on every click, allowing for rapid-fire drumming without lag.
* **Custom UI:** Designed with a dark-mode aesthetic, utilizing CSS Grid for the pad bank and CSS animations for physical button-press effects.

##  Technologies Used
* **HTML5:** Semantic structure and embedded `<audio>` elements.
* **CSS3:** CSS Grid for layout, flexbox, and interactive hover/active states.
* **JavaScript (ES6):** * `document.querySelectorAll()` and `forEach` loops for efficient event binding.
  * Global `keydown` event listeners.
  * DOM traversal (`parentElement`) to extract and display dynamic data.

##  How to Run Locally
1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.
3. Make sure your volume is up and start dropping beats!