// Author: Hein Dijstelbloem
// Version: 1.0
// Date created: 2024-07-10
// Last updated: 2024-07-15
// License: GNU GPL v2
// Description: This script will show a random gif as cursor on your webpage.
//              The gifs are stored in the images/cursors folder.
//              The way this code works is by adding an image element to the body of the page.
//              This image element will be moved to the position of the mouse cursor.
//              This allows more flexibility in the cursor design than having to use .cur files or whatever.
//
//              <img id="cursor-gif" src="" style="position: fixed; z-index: 1000; pointer-events: none; display: none;">

document.addEventListener('DOMContentLoaded', function() {
    // 30 gifs for yo cursor
    const cursors = ['1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', '9.gif', '10.gif', '11.gif', '12.gif', '13.gif', '14.gif', '15.gif', '16.gif', '17.gif', '18.gif', '19.gif', '20.gif', '21.gif', '22.gif', '23.gif', '24.gif', '25.gif', '26.gif', '27.gif', '28.gif', '29.gif', '30.gif'];
    const randomIndex = Math.floor(Math.random() * cursors.length);
    const cursorGif = document.getElementById('cursor-gif');
    cursorGif.src = `../images/cursors/${cursors[randomIndex]}`;
    cursorGif.style.display = 'block';

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        cursorGif.style.left = x + 'px';
        cursorGif.style.top = y + 'px';
    });
});