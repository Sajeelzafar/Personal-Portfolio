const projects = document.querySelectorAll('.button-box');
const project1 = document.getElementById('firstproject');
//const modal = document.querySelector('firstproject');

let projectdetails = [{name: "Multi - Post stories",
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.", 
image: "Pop-upImage1.png",
technology: ["HTML", "Ruby on Rails", "CSS"],
liveversion: "https://sajeelzafar.github.io/Personal-Portfolio/",
livesorce: "https://github.com/Sajeelzafar/Personal-Portfolio"
}]

projects.forEach((n) =>
    n.addEventListener('click', (e) => {
        console.log(e);
        project1.style.display = "block";
        let div = document.createElement('div');
        div.id = 'popup-firstproject';
        project1.appendChild(div);
        let heading = document.createElement('h1');
        heading.id = 'popup-heading';
        heading.textContent = (projectdetails[0].name);
        div.appendChild(heading);
        let image = document.createElement('img');
        image.src = projectdetails[0].image;
        image.id = 'popup-image';
        div.appendChild(image);
        let paragraph = document.createElement('p');
        paragraph.textContent = projectdetails[0].description;
        paragraph.id = 'popup-paragraph';
        div.appendChild(paragraph);

        let unordered_list = document.createElement('ul');
        unordered_list.id = 'popup-list';
        div.appendChild(unordered_list);

        for(let i=0; i < projectdetails[0].technology.length; i++){
            let listitem = document.createElement('li');
            listitem.id = 'popup-listitem';
            listitem.textContent = projectdetails[0].technology[i];
            unordered_list.appendChild(listitem)
        }

        let livebuttonbox = document.createElement('div');
        livebuttonbox.id = 'popup-livebuttonbox';
        div.appendChild(livebuttonbox);

        let livebutton = document.createElement('button');
        livebutton.id = 'popup-livebutton';
        livebutton.textContent = "See Live";
        livebuttonbox.appendChild(livebutton);

        let sourcebuttonbox = document.createElement('div');
        sourcebuttonbox.id = 'popup-sourcebuttonbox';
        div.appendChild(sourcebuttonbox);

        let sourcebutton = document.createElement('button');
        sourcebutton.id = 'popup-sourcebutton';
        sourcebutton.textContent = "See Source";
        sourcebuttonbox.appendChild(sourcebutton);



}));