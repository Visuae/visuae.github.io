// Handle form submission for job postings
document.getElementById('job-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const status = document.getElementById('status').value;
  
    const newRow = `<tr>
      <td>${title}</td>
      <td>${department}</td>
      <td>${status}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    </tr>`;
  
    document.getElementById('job-table').innerHTML += newRow;
    this.reset();
  });
  
  function deleteRow(button) {
    button.parentElement.parentElement.remove();
  }
  
  document.getElementById('job-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const status = document.getElementById('status').value;
  
    // Create job object
    const jobData = {
      title: title,
      department: department,
      status: status
    };
  
    // Push job data to Firebase
    database.ref('jobs/').push(jobData);
  
    alert('Job posting added successfully!');
    this.reset();
  });

  // Load job postings from Firebase
database.ref('jobs/').on('value', (snapshot) => {
    const jobTable = document.getElementById('job-table');
    jobTable.innerHTML = ''; // Clear existing table rows
  
    snapshot.forEach((childSnapshot) => {
      const job = childSnapshot.val();
      const row = `
        <tr>
          <td>${job.title}</td>
          <td>${job.department}</td>
          <td>${job.status}</td>
          <td><button onclick="deleteJob('${childSnapshot.key}')">Delete</button></td>
        </tr>
      `;
      jobTable.innerHTML += row;
    });
  });
  
  // Delete a job posting
  function deleteJob(jobId) {
    database.ref('jobs/' + jobId).remove();
    alert('Job posting deleted successfully!');
  }
  