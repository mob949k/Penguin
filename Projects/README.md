# Submarine Interactive 🚤

This project is an interactive web experience where a submarine descends through different depth levels, displaying educational slides about **hydraulic elevators** and their operation. It also features an **interactive quiz** at the end to test the user's knowledge.

## Overview

- The submarine moves down through various points, each presenting an **informative slide**.
- The content of the slides and quiz can be **customized** in the JavaScript file (`script.js`), but **not** directly in the `index.html`.
- The project is **responsive**, which means it works on both desktop and mobile devices.
- **Fish and seaweed animations** can be replaced or customized according to your needs.
- The project is versatile and can be used for **schools, universities, work presentations**, or even by teachers for classroom activities.
- It is crucial to **keep credits** to "MR Mob" or "mob949k" and the email **mob949k@gmail.com**. This information should remain in the footer of the page.

## Features

1. **Submarine animation**: The submarine moves down automatically through different depth points, revealing slides.
2. **Customizable slides and quiz**: Modify the educational content and questions in the `script.js` file.
3. **Quiz at the end**: After reaching 10,000 meters, users can take a quiz related to the material presented.
4. **Responsive design**: Works seamlessly on mobile and desktop.
5. **Replaceable assets**: The fish and seaweed animations can be replaced with custom images or designs.

## How to Use the Project

### Installation and Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/mob949k/Submarine-Interactive.git
    ```

2. Open the `index.html` file in your browser to view the project.

### Customizing Slides and Quiz

To modify the educational slides and quiz, you need to edit the `script.js` file. In this file, you'll find the sections for each slide and the quiz questions.

**For example:**

In `script.js`, to change the text for the first slide:
```javascript
if (index === 1) {
    title = "What is a Hydraulic Elevator?";
    text = "A hydraulic elevator is like a large lift used to raise and lower people or objects within a building...";
}
