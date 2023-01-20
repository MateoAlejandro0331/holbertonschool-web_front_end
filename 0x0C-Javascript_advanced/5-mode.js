function changeMode(size, weight, transfrom, background, color) {
    return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transfrom;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode('9', 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode('12', 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode('12', 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Welcome Holberton!'
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement("button");
    spookyButton.innerText = 'Spooky';
    document.body.appendChild(spookyButton);
    spookyButton.onclick = spooky;

    const darkButton = document.createElement("button");
    darkButton.innerText = 'Dark mode';
    document.body.appendChild(darkButton);
    darkButton.onclick = darkMode;

    const screamButton = document.createElement("button");
    screamButton.innerText = "Scream mode";
    document.body.appendChild(screamButton);
    screamButton.onclick = screamMode;
}

main();