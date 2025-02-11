/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)
// added defer to html file script tag in header so that the Javascript loads after html loads.


/***** Deliverable 2 *****/
header.style.color = "#7F6A7C"



/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
// const travelerDiv = document.querySelector('div.traveler')
const profileDiv = document.querySelector('div#profile')

const image = profileDiv.querySelector('img')
image.src = traveler.photo
image.alt = traveler.name

travelerName = profileDiv.querySelector('h2')
travelerName.innerHTML = traveler.name

travelerNickname = profileDiv.querySelector('em')
travelerNickname.innerHTML = traveler.nickname


/***** Deliverable 4 *****/
 
 traveler.animalSightings.forEach(function (objectElement){
     
     const newLi = document.createElement("li")
     newLi.dataset.id = objectElement.id
     newLi.innerHTML =    
          ` 
            <p>${objectElement.description}</p>
            <img src="${objectElement.photo}" alt="${objectElement.species}"/>
            <a href="${objectElement.link}" target="_blank">Here's a video about the ${objectElement.species} species!</a>
            </li>`
    
            const animalsUl = document.querySelector("ul#animals")
    animalsUl.append(newLi)

 })


/***** Deliverable 5 *****/

const dataId3 = document.querySelector('[data-id="3"]') 
dataId3.remove()