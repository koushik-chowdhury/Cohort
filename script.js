const container = document.querySelector('.container');

const events = [
    {
        title: "Click",
        explanation: "Triggers when an element is clicked.",
        code: `
            const myButton = document.getElementById("myButton");
            myButton.addEventListener("click", () => {
                alert("Button clicked!");
            });
        `,
        example: `<button id="myButton">Click Me</button>`,
        listener: () => {
            const myButton = document.getElementById("myButton");
            myButton.addEventListener("click", () => {
                alert("Button clicked!");
            });
        }
    },
    {
        title: "Mouseover / Mouseout",
        explanation: "Triggers when the mouse pointer moves onto/out of an element.",
        code: `
            const colorBox = document.getElementById("colorBox");
            colorBox.addEventListener("mouseover", () => {
                colorBox.style.backgroundColor = "blue";
            });
            colorBox.addEventListener("mouseout", () => {
                colorBox.style.backgroundColor = "red";
            });
        `,
        example: `<div id="colorBox"></div>`,
        listener: () => {
            const colorBox = document.getElementById("colorBox");
            colorBox.addEventListener("mouseover", () => {
                colorBox.style.backgroundColor = "blue";
            });
            colorBox.addEventListener("mouseout", () => {
                colorBox.style.backgroundColor = "red";
            });
        }
    },
    {
        title: "Keyup",
        explanation: "Triggers when a key is released.",
        code: `
            const textInput = document.getElementById("textInput");
            const textChangeDiv = document.getElementById("textChangeDiv");
            textInput.addEventListener("keyup", (event) => {
                textChangeDiv.textContent = event.target.value;
            });
        `,
        example: `
            <input type="text" id="textInput" placeholder="Type something...">
            <div id="textChangeDiv"></div>
        `,
        listener: () => {
            const textInput = document.getElementById("textInput");
            const textChangeDiv = document.getElementById("textChangeDiv");
            textInput.addEventListener("keyup", (event) => {
                textChangeDiv.textContent = event.target.value;
            });
        }
    },
    {
        title: "Focus / Blur",
        explanation: "Triggers when an element gains/loses focus.",
        code: `
            const myInput = document.getElementById("myInput");
            myInput.addEventListener("focus", () => {
                myInput.style.backgroundColor = "lightyellow";
            });
            myInput.addEventListener("blur", () => {
                myInput.style.backgroundColor = "";
            });
        `,
        example: `<input type="text" id="myInput" placeholder="Focus on me">`,
        listener: () => {
            const myInput = document.getElementById("myInput");
            myInput.addEventListener("focus", () => {
                myInput.style.backgroundColor = "lightyellow";
            });
            myInput.addEventListener("blur", () => {
                myInput.style.backgroundColor = "";
            });
        }
    },
    {
        title: "Change",
        explanation: "Triggers when the value of an input element changes.",
        code: `
            const mySelect = document.getElementById("mySelect");
            mySelect.addEventListener("change", (event) => {
                alert("Selected value: " + event.target.value);
            });
        `,
        example: `
            <select id="mySelect">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        `,
        listener: () => {
            const mySelect = document.getElementById("mySelect");
            mySelect.addEventListener("change", (event) => {
                alert("Selected value: " + event.target.value);
            });
        }
    },
    {
        title: "Submit",
        explanation: "Triggers when a form is submitted.",
        code: `
            const myForm = document.getElementById("myForm");
            myForm.addEventListener("submit", (event) => {
                event.preventDefault();
                alert("Form submitted (but not really)!");
            });
        `,
        example: `
            <form id="myForm">
                <input type="text" placeholder="Enter something">
                <button type="submit">Submit</button>
            </form>
        `,
        listener: () => {
            const myForm = document.getElementById("myForm");
            myForm.addEventListener("submit", (event) => {
                event.preventDefault();
                alert("Form submitted (but not really)!");
            });
        }
    },
    {
        title: "Load",
        explanation: "Triggers when the page has finished loading.",
        code: `
            window.addEventListener('load', () => {
                document.getElementById('loadMessage').textContent = 'Page loaded!';
            });
        `,
        example: `<p id="loadMessage"></p>`,
        listener: () => {
            window.addEventListener('load', () => {
                document.getElementById('loadMessage').textContent = 'Page loaded!';
            });
        }
    },
    {
        title: "Resize",
        explanation: "Triggers when the browser window is resized.",
        code: `
            window.addEventListener('resize', () => {
                document.getElementById('resizeMessage').textContent = \`Window resized to \${window.innerWidth} x \${window.innerHeight}\`;
            });
        `,
        example: `<p id="resizeMessage"></p>`,
        listener: () => {
            window.addEventListener('resize', () => {
                document.getElementById('resizeMessage').textContent = `Window resized to ${window.innerWidth} x ${window.innerHeight}`;
            });
        }
    }
];

events.forEach(event => {
    const section = document.createElement('div');
    section.classList.add('event-section');
    section.innerHTML = `
        <div class="event-title">${event.title}</div>
        <div class="event-explanation">${event.explanation}</div>
        <div class="code-snippet">${event.code}</div>
        <div class="live-example">${event.example}</div>
    `;
    container.appendChild(section);
    event.listener(); // Call the listener function to attach the event
});