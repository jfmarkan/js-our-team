let imgFolder = './img/'
let extension = '.jpg'

// Milestone 0
const teamMembers = [
    {firstName:'Wayne', lastName: 'Barnett', position:'Founder & CEO', img:'wayne-barnett-founder-ceo.jpg'},
    {firstName:'Angela', lastName: 'Caroll', position:'Chief Editor', img:'angela-caroll-chief-editor.jpg'},
    {firstName:'Walter', lastName: 'Gordon', position:'Office Manager', img:'walter-gordon-office-manager.jpg'},
    {firstName:'Angela', lastName: 'Lopez', position:'Social Media Manager', img:'angela-lopez-social-media-manager.jpg'},
    {firstName:'Scott', lastName: 'Estrada', position:'Developer', img:'scott-estrada-developer.jpg'},
    {firstName:'Barbara', lastName: 'Ramos', position:'Graphic Designer', img:'barbara-ramos-graphic-designer.jpg'},
];

// Milestone 1
for (let i = 0; i < teamMembers.length; i++){
    console.log('Name: ' + teamMembers[i].firstName + " " + teamMembers[i].lastName);
    console.log('position: ' + teamMembers[i].position);
    console.log('img: ' + teamMembers[i].img)
    console.log('-----')
}

// Milestone 2
const divElement = document.querySelector('div');

for (let i = 0; i < teamMembers.length; i++){
    const div = document.createElement('div');
    // div.innerHTML = 'Name: ' + teamMembers[i].firstName + ' ' + teamMembers[i].lastName + '<br> ' + 'position: ' + teamMembers[i].position + '<br>' +  'img: ' + teamMembers[i].img;
    div.innerHTML = 'Name: ' + teamMembers[i].firstName + ' ' + teamMembers[i].lastName + '<br> ' + 'position: ' + teamMembers[i].position + '<br>' +  'img: ' + imageToString(i);
    divElement.append(div);
    div.classList.add('my-2')
}

// Bonus 1

let i=1
function imageToString (i){
    firstName = teamMembers[i].firstName.toLowerCase();
    lastName = teamMembers[i].lastName.toLowerCase();
    position = teamMembers[i].position.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase();

    return imgFolder + firstName +'-'+ lastName +'-'+ position + extension;
}
    
