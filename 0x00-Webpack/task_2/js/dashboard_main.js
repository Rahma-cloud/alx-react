import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const countElement = $('#count');
  const currentCount = parseInt(countElement.text()) || 0;
  const newCount = currentCount + 1;
  countElement.text(`${newCount} clicks on the button`);
}, 500);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#clickButton').on('click', updateCounter);
