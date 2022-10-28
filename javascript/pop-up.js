const projects = document.querySelectorAll('.button-box');
const project1 = document.getElementById('firstproject');


const projectdetails = [{
  name: 'Awesome Books Website',
  description: "The project models the local library. The books can be added and removed from the library. The books are added into the local storage of browser. The contact page is also designed to reach out to us for any query. The website works best for the desktop version.",
  image: './Projects/AwesomeBooks.png',
  technology: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Babel'],
  liveversion: 'https://sajeelzafar.github.io/Book_Website/',
  livesource: 'https://github.com/Sajeelzafar/Book_Website',
},
{
  name: 'Multi - Post stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
  image: './BigImages/Pop-upImage1.png',
  technology: ['HTML', 'Ruby on Rails', 'CSS'],
  liveversion: 'https://sajeelzafar.github.io/Personal-Portfolio/',
  livesource: 'https://github.com/Sajeelzafar/Personal-Portfolio',
},
{
  name: 'Multi - Post stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
  image: './BigImages/Pop-upImage1.png',
  technology: ['HTML', 'Ruby on Rails', 'CSS'],
  liveversion: 'https://sajeelzafar.github.io/Personal-Portfolio/',
  livesource: 'https://github.com/Sajeelzafar/Personal-Portfolio',
},
{
  name: 'Multi - Post stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
  image: './BigImages/Pop-upImage1.png',
  technology: ['HTML', 'Ruby on Rails', 'CSS'],
  liveversion: 'https://sajeelzafar.github.io/Personal-Portfolio/',
  livesource: 'https://github.com/Sajeelzafar/Personal-Portfolio',
}];

projects.forEach((n) => n.addEventListener('click', (e) => {
  let popupcontent = parseInt(e.target.id, 10);
  console.log(typeof popupcontent, popupcontent);
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
  console.log("projectdetails[popupcontent].name is ", projectdetails[popupcontent].name)
  heading.textContent = (projectdetails[popupcontent].name);
  div.appendChild(heading);
  const image = document.createElement('img');
  image.src = projectdetails[popupcontent].image;
  image.id = 'popup-image';
  div.appendChild(image);
  const paragraph = document.createElement('p');
  paragraph.textContent = projectdetails[popupcontent].description;
  paragraph.id = 'popup-paragraph';
  div.appendChild(paragraph);

  const unorderedList = document.createElement('ul');
  unorderedList.id = 'popup-list';
  div.appendChild(unorderedList);

  for (let i = 0; i < projectdetails[popupcontent].technology.length; i += 1) {
    const listitem = document.createElement('li');
    listitem.id = 'popup-listitem';
    listitem.textContent = projectdetails[popupcontent].technology[i];
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
  livebuttonimage.src = './InteractiveButtons/Live_Icon.svg';
  livebuttonimage.id = 'popup-livebuttonimage';
  livebuttonbox.appendChild(livebuttonimage);

  livebuttonbox.addEventListener('click', () => {
    window.open(projectdetails[popupcontent].liveversion, '_blank');
  });

  const sourcebuttonbox = document.createElement('div');
  sourcebuttonbox.id = 'popup-sourcebuttonbox';
  buttonboxcontainer.appendChild(sourcebuttonbox);

  const sourcebutton = document.createElement('button');
  sourcebutton.id = 'popup-sourcebutton';
  sourcebutton.textContent = 'See Source';
  sourcebuttonbox.appendChild(sourcebutton);
  const sourcebuttonimage = document.createElement('img');
  sourcebuttonimage.src = './InteractiveButtons/Source_Icon.svg';
  sourcebuttonimage.id = 'popup-sourcebuttonimage';
  sourcebuttonbox.appendChild(sourcebuttonimage);

  sourcebuttonbox.addEventListener('click', () => {
    window.open(projectdetails[popupcontent].livesource, '_blank');
  });

  closebutton.addEventListener('click', () => {
    project1.removeChild(div);
    project1.style.display = 'none';
  });
}));
