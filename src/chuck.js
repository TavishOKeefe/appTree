class Chuck {
  constructor(){
  }

  searchAPIforChuckNorrisJokes(query){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.chucknorris.io/jokes/search?query=${query}`;
      request.onload = function () {
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  };
}

export { Chuck };