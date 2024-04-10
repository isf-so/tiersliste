document.getElementById('ajouterBtn').addEventListener('click', function() {
    var lettre = document.getElementById('lettreInput').value.toUpperCase();
    var prenom = document.getElementById('prenomInput').value;
  
    ajouterPrenom(lettre, prenom);
  });
  
  function ajouterPrenom(lettre, prenom) {
    if (lettre >= 'A' && lettre <= 'D') {
      var element = document.querySelector('li[data-lettre="' + lettre + '"]');
      if (element) {
        var nouveauPrenom = document.createElement('li');
        nouveauPrenom.textContent = prenom;
        element.insertAdjacentElement('afterend', nouveauPrenom);
      } else {
        console.log('La lettre spécifiée ne correspond à aucune entrée dans la liste.');
      }
    } else {
      console.log('La lettre spécifiée ne se situe pas entre A et D.');
    }
  }
  