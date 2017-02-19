//https://api.brewerydb.com/v2/search?q=Goosinator&type=beer&key=800c5616f98b7338e8313f747666c975
fetch('http://api.brewerydb.com/v2/search?q=Goosinator&type=beer&key=800c5616f98b7338e8313f747666c975').then(function(response) {
        console.log(response)
      });

//Set up variables
{
  const app = {
    resultEl:document.querySelector("#resultEl"),
    init: function() {
      this.resultEl = document.querySelector("#resultEl");
      this.searchButton = document.querySelector("button");
      this.searchButton.addEventListener('click', () => { this.getUserInput() });
      this.result = "";
      this.articles = [];
      return this;  //TODO: still needed?
    },

    //User input gathers the title from the input field, queries the wikipedia API and prints the results to an html article
    getUserInput: function() {
      var userInput = document.getElementById("user-input-field").value;
      console.log(userInput);
      this.loadExtract(userInput);
    },

    populateDom: function() {
      this.articles.forEach(function(article, i) {
        resultEl.innerHTML += `<h2>${article.title}</h2>`;
        resultEl.innerHTML += `<span>${article.extract}</span>`;
      })
      console.log(this.articles);
    },

    loadExtract: function(title) {
      //TODO: move these vars
      var myHeaders = new Headers();

      var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };
      this.showElem("resultLoader");
      this.resultEl.innerHTML = "";
      this.result = "";
      //console.log("retrieving request");
      this.articles = [];
      //TODO: Rewrite with ES6 string
      const requestURL = 'http://api.brewerydb.com/v2/search?q=Goosinator&type=beer&key=800c5616f98b7338e8313f747666c975'// + encodeURIComponent(title) + '&prop=extracts&rvprop=content&callback=?';
      const jsonResult = fetch(requestURL, myInit).then(function(response) {
        console.log(response)
        //console.log(typeof data);
        //app.hideElem("resultLoader");
        //console.table(data.query.pages);
        //app.populateDom();
      });
    },
    //TODO: move hideElem and showElem to Utils object
    hideElem: function(el) {
      document.getElementById(el).style.display = "none";
    },
    showElem: function(el) {
      document.getElementById(el).style.display = "block";
    }
  }
  //app.init();
}