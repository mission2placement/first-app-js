
const list = document.querySelector('#movie-list ul');

// delete a movie from the list.
list.addEventListener('click', function(e) {
    if(e.target.className === 'delete'){
      const li = e.target.parentElement;
      list.removeChild(li);
    }
})

// add movie a movie to the list
const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e){
  // Prevent the default behaviour of submitting form i.e refresh
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const movieName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent =  'delete';
  movieName.textContent = value;

  // add classes to the above elements
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append content
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})

// Hide the movie list

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
  if (hideBox.checked){
    list.style.display = 'none';
  }
  else {
    list.style.display = 'inline';
  }
})

// Search movies

// we want to grab the element we want to attach event listener to
// we are going to have keyup events as we are going to be searching on easy key release
const searchBar = document.forms['search-movies'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();  // we will be comparing the lower case with the list.
  const movies = list.querySelectorAll('li'); // we can't perform the array in the collection
  movies.forEach(function(movie){
    const title = movie.firstElementChild.textContent;    
    if(title.toLowerCase().indexOf(term) != -1){   // Compares the term to the textContent of title
      movie.style.display = 'block';
    }else{
      movie.style.display = 'none';
    }
  })
})

// Tabbed Content

// we attach our event listener to this ul tag and check which li was clicked
const tab = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tab.addEventListener('click', function(e){
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    console.log(targetPanel);
    panels.forEach(function(panel){
      if(panel==targetPanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
})
