var toc = document.querySelector('#toc');
var headings = document.querySelectorAll('h2, h3');
var tocHTML = '<ol>';
for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var headingText = heading.textContent;
    var headingSlug = headingText.toLowerCase().replace(/\W+/g, '-');
    heading.id = headingSlug;
    tocHTML += '<li><a class="toc-element" href="#' + headingSlug + '">' + headingText + '</a></li>';
}
tocHTML += '</ol>';
toc.innerHTML = tocHTML;