document.addEventListener("DOMContentLoaded", function() {
  // Define a mapping between subtitle text and corresponding class names
  const subtitleClassMap = {
    "Workshop Material": "workshop",
    "Lecture Slide": "lecture",
    "Tutorial Material": "tutorial",
    "Homework Assignment": "homework"
  };

  // Select all elements with the class 'card-subtitle'
  document.querySelectorAll(".card-subtitle").forEach(function(el) {
    // Get the trimmed text content of the element
    const text = el.innerText.trim();
    // Check if the text matches any key in the subtitleClassMap
    if (subtitleClassMap.hasOwnProperty(text)) {
      // Add the corresponding class to the element
      el.classList.add(subtitleClassMap[text]);
    }
  });
});
