const apiBase = 'http://localhost:3000';

document.getElementById('syllabusForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const style = document.getElementById('style').value;
  const syllabus = document.getElementById('syllabus').value;

  await fetch(`${apiBase}/track/syllabus`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ style, syllabus })
  });
  alert('Syllabus saved!');
});

document.getElementById('dietForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const diet = document.getElementById('diet').value;

  await fetch(`${apiBase}/track/diet`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ diet })
  });
  alert('Diet saved!');
});

document.getElementById('motivationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const motivation = document.getElementById('motivation').value;

  await fetch(`${apiBase}/track/motivation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ motivation })
  });
  alert('Motivation saved!');
});
