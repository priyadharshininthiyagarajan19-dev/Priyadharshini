document.getElementById('year').textContent = new Date().getFullYear();

function openProject(e){
  const title = e.currentTarget.querySelector('h3').innerText;
  alert('Open project: ' + title);
}

// Resume download
 document.getElementById('downloadResume').addEventListener('click', () => {
   const resume = `Your Name\nFrontend Developer\n\nExperience:\n- Example Project\n\nSkills: HTML, CSS, JS`;
   const blob = new Blob([resume], {type:'text/plain'});
   const url = URL.createObjectURL(blob);
   const a = document.createElement('a'); a.href = url; a.download = 'YourName_CV.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
 });

// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  status.textContent = 'Message saved (demo).';
  form.reset();
});
document.getElementById('clearForm').addEventListener('click', ()=>{ form.reset(); status.textContent=''; });
