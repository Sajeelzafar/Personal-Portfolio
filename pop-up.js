const projects = document.querySelectorAll('.button-box');
const project1 = document.getElementById('firstproject');

const projectdetails = [{
  name: 'Multi - Post stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
  image: 'Pop-upImage1.png',
  technology: ['HTML', 'Ruby on Rails', 'CSS'],
  liveversion: 'https://sajeelzafar.github.io/Personal-Portfolio/',
  livesource: 'https://github.com/Sajeelzafar/Personal-Portfolio',
}];

projects.forEach((n) => n.addEventListener('click', () => {
  project1.style.display = 'block';
  const div = document.createElement('div');
  div.id = 'popup-firstproject';
  project1.appendChild(div);

  const closebutton = document.createElement('button');
  closebutton.id = 'popup-closebutton';
  closebutton.innerHTML = '&times;';
  div.appendChild(closebutton);

  const heading = document.createElement('h1');
  heading.id = 'popup-heading';
  heading.textContent = (projectdetails[0].name);
  div.appendChild(heading);
  const image = document.createElement('img');
  image.src = projectdetails[0].image;
  image.id = 'popup-image';
  div.appendChild(image);
  const paragraph = document.createElement('p');
  paragraph.textContent = projectdetails[0].description;
  paragraph.id = 'popup-paragraph';
  div.appendChild(paragraph);

  const unorderedList = document.createElement('ul');
  unorderedList.id = 'popup-list';
  div.appendChild(unorderedList);

  for (let i = 0; i < projectdetails[0].technology.length; i += 1) {
    const listitem = document.createElement('li');
    listitem.id = 'popup-listitem';
    listitem.textContent = projectdetails[0].technology[i];
    unorderedList.appendChild(listitem);
  }

  const buttonboxcontainer = document.createElement('div');
  buttonboxcontainer.id = 'popup-buttonboxcontainer';
  div.appendChild(buttonboxcontainer);

  const livebuttonbox = document.createElement('div');
  livebuttonbox.id = 'popup-livebuttonbox';
  buttonboxcontainer.appendChild(livebuttonbox);

  const livebutton = document.createElement('button');
  livebutton.id = 'popup-livebutton';
  livebutton.textContent = 'See Live';
  livebuttonbox.appendChild(livebutton);
  const livebuttonimage = document.createElement('img');
  livebuttonimage.src = 'Live_Icon.svg';
  livebuttonimage.id = 'popup-livebuttonimage';
  livebuttonbox.appendChild(livebuttonimage);

  livebuttonbox.addEventListener('click', () => {
    window.open(projectdetails[0].liveversion);
  });

  const sourcebuttonbox = document.createElement('div');
  sourcebuttonbox.id = 'popup-sourcebuttonbox';
  buttonboxcontainer.appendChild(sourcebuttonbox);

  const sourcebutton = document.createElement('button');
  sourcebutton.id = 'popup-sourcebutton';
  sourcebutton.textContent = 'See Source';
  sourcebuttonbox.appendChild(sourcebutton);
  const sourcebuttonimage = document.createElement('img');
  sourcebuttonimage.src = 'Source_Icon.svg';
  sourcebuttonimage.id = 'popup-sourcebuttonimage';
  sourcebuttonbox.appendChild(sourcebuttonimage);

  sourcebuttonbox.addEventListener('click', () => {
    window.open(projectdetails[0].livesource);
  });

  closebutton.addEventListener('click', () => {
    project1.removeChild(div);
    project1.style.display = 'none';
  });
}));
