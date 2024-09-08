// Modal Functionality
const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.querySelector(".cancel-btn").onclick = function() {
    modal.style.display = "none";
}

// Handling the form submission
document.getElementById("projectForm").onsubmit = function(event) {
    event.preventDefault();
    const tech = document.getElementById("tech").value;
    const domain = document.getElementById("domain").value;
    const project = document.getElementById("project").value;

    if (tech && domain && project) {
        addProjectCard(tech, domain, project);
        modal.style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
};

// Adding a project card dynamically
function addProjectCard(tech, domain, projectName) {
    const projectsList = document.getElementById("projects-list");
    
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    
    const statusBadge = document.createElement("span");
    statusBadge.className = "status-badge";
    statusBadge.textContent = "Ongoing";
    
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = projectName;
    
    const viewProjectBtn = document.createElement("a");
    viewProjectBtn.href = "#";
    viewProjectBtn.className = "view-project-btn";
    viewProjectBtn.textContent = "View Project";
    
    projectCard.appendChild(statusBadge);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(viewProjectBtn);
    
    projectsList.appendChild(projectCard);
}
