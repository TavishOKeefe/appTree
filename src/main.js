import { Chuck } from './chuck.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#submitChuckInfo').click(function(event) {
    event.preventDefault();
    $('.name1').text('');
    let word = $('#word').val();

    let newChuck = new Chuck();
    let promise = newChuck.searchAPIforChuckNorrisJokes(query);

    promise.then(function (response) {
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.name1').append("Sorry, but your search matched no results.")
      } else {
        body.data.forEach(function(chuck){
        $('.name1').append('<ul><li>' + '<strong>' + chuck.result.value + '</strong>' + '</li><ul>');
        });
      }
    }, function(error) {
        $('.error').text(`There was an error processing your request: ${error.message}`);
      });
  });
});