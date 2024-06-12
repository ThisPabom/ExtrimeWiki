function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "block";
}

function navigateContent(contentName) {
    var sections = document.querySelectorAll("aside ul li");
    sections.forEach(function(section) {
        section.classList.remove("active");
    });
    
    var sectionToActivate = Array.from(sections).find(function(section) {
        return section.textContent.trim() === contentName;
    });
    
    if (sectionToActivate) {
        sectionToActivate.classList.add("active");
        document.querySelector("main h2").textContent = contentName;
        document.querySelector("main p").textContent = `Content for ${contentName}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("aside ul li.active").click();
});
