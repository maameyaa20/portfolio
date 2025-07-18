  fetch('assets/abstract.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('abstract-content').innerText = data;
    })
    .catch(error => {
      document.getElementById('abstract-content').innerText = "Failed to load abstract.";
      console.error("Error loading abstract.txt:", error);
    });

  fetch('assets/introduction.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('introduction-content').innerText = data;
    })
    .catch(error => {
      document.getElementById('introduction-content').innerText = "Failed to load abstract.";
      console.error("Error loading introduction.txt:", error);
    });

  fetch('assets/methodology.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('methodology-content').innerText = data;
    })
    .catch(error => {
      document.getElementById('methodology-content').innerText = "Failed to load abstract.";
      console.error("Error loading methodology.txt:", error);
    });
