const form = document.getElementById('madLibForm');
const output = document.getElementById('madLibOutput');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const noun1 = document.getElementById('noun1').value;
  const adjective1 = document.getElementById('adjective1').value;
  const noun2 = document.getElementById('noun2').value;
  const verb1 = document.getElementById('verb1').value;
  const adjective2 = document.getElementById('adjective2').value;

  const madLibStory = `In a dark house on a spooky hill, there were three creepy ${noun1} who lived in a ${adjective1} room. They were scared by the ghostly sounds of a old, creaky ${noun2}. Every night, the weird noise of ${verb1} could be heard echoing through the halls. The air was cold with a spooky feeling that sent shivers down the spine. As the moon cast a ghostly light, the people in the house were left to discover the scary secrets that hid within its walls.`;

  output.innerText = madLibStory;
});
