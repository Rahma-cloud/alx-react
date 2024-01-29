import $ from 'jquery';
import _ from 'lodash';
import '/alx-react/0x00-Webpack/task_2/css/main.css'

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#startBtn').on('click', _.debounce(updateCounter, 1000));
});
