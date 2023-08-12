const sections = document.querySelectorAll("section");
for (const section of sections) {
  // console.log(section);
  section.style.border = '2px solid steelblue';
  section.style.marginBottom = '5px';
  section.style.borderRadius = '15px';
  section.style.paddingLeft = '8px';
  section.style.backgroundColor = 'lightgray'
}
   
    //   const placesContainer = document.getElementById('places-container');
    //   placesContainer.style.backgroundColor = 'yellow';
      const placesContainer = document.getElementById('places-container');
      placesContainer.classList.add('text-center') ;
// priority matters!
placesContainer.classList.remove('large-text');