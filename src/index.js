function addDog(dog) {
    const dog_list = document.getElementById("dog-image-container");
    const div = makeDog(dog);
    dog_list.appendChild(div);
}
function addBreed(breed) {
    const breed_list = document.getElementById("dog-breeds");
    const letter = document.getElementById("breed-dropdown")
    if (letter.value == breed[0]) {
      const ul = makeBreed(breed);
      breed_list.appendChild(ul);
    }
}
function makeDog(dog) {
    const div = document.createElement("div");
    div.className = "profile";
    const img = document.createElement("img");
    img.src = dog
    div.appendChild(img);
    return div;
}
function makeBreed(breed) {
    const li = document.createElement("li");
    li.className = "breed";
    const name = document.createElement("p");
    name.innerText = breed
    li.appendChild(name);
    li.addEventListener('click', function () {
       // document.getElementById(“p2").style.color = “blue”;
        li.style.color = "blue";
    })
    return li;
}
// console.log(‘%c HI’, ‘color: firebrick’)
document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        showDogs(data.message)
    });
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(function(response){
        return response.json();
    })
    .then(function(data) {
        showBreeds(data.message)
    })
 });


document.addEventListener('change', function() {
    const breed_list = document.getElementById("dog-breeds");
    breed_list.innerHTML = ''
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl).then(function(response){
        return response.json();
    })
    .then(function(data) {
        showBreeds(data.message)
    })

});


function showDogs(dogArray) {
    dogArray.forEach(function(dog) {
        addDog(dog);
    });
}
function showBreeds(breedArray) {
    const realArray = Object.keys(breedArray)
    realArray.forEach(function(breed) {
        addBreed(breed);
    });
}






// function addDog(dog) {
//     const dog_list = document.getElementById("dog-image-container");
//     const div = makeDog(dog);
//     dog_list.appendChild(div);
// }

// function addBreed(breed) {
//     const breed_list = document.getElementById("dog-breeds");
//     const ul = makeBreed(breed);
//     breed_list.appendChild(ul);
// }

// function makeDog(dog) {
//     const div = document.createElement("div");
//     div.className = "profile";

//     const img = document.createElement("img");
//     img.src = dog

//     div.appendChild(img);

//     return div;
// }

// function makeBreed(breed) {
//     const li = document.createElement("li");
//     li.className = "breed";

//     const name = document.createElement("p");
//     name.src = breed
    
//     li.appendChild(name);
    
//     return li;
// }

// // console.log('%c HI', 'color: firebrick')
// document.addEventListener('DOMContentLoaded', function() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl).then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         showDogs(data.message)
//     });

//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     fetch(breedUrl).then(function(response){
//         return response.json();
//     })
//     .then(function(data) {
//         showBreeds(data.message)
//     })
//  });


// function showDogs(dogArray) {
//     dogArray.forEach(function(dog) {
//         addDog(dog);
//     });
// }

// function showBreeds(breedArray) {
//     console.log(breedArray)
//     console.log(typeof breedArray)
//     // breedArray.forEach(function(breed){
//         // console.log(br)
//     // })
//     // breedArray.forEach(function(breed) {
//         // addBreed(breed);
//     // });
// }

// // function showBooks(bookArray) {
// //     // bookArray.map(book => {
// //     //   addBook(book);
// //     // });
  
// //     bookArray.forEach(function(book) {
// //       addBook(book);
// //     });
// //   }