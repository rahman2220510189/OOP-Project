function login(event) {
    event.preventDefault();
  
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('attendanceSection').classList.remove('hidden');
}


function logout() {
  
    document.getElementById('attendanceList').innerHTML = '';
  
    document.getElementById('attendanceSection').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}


function startFaceDetection() {
    const courseSelect = document.getElementById('courseSelect');
    const attendanceID = document.getElementById('attendanceID');
    const attendanceList = document.getElementById('attendanceList');

    if (!courseSelect.value) {
        alert('Please select a course.');
        return;
    }

    if (!attendanceID.value) {
        alert('Please select an attendance ID.');
        return;
    }

    
    const detectedStudents = [
        { id: attendanceID.value,  name: '' },
        { id: 0242220005101894, name: 'Riyad' },
        { id: 0242220005101480, name: 'Roky' },
        { id: 0242220005101609, name: 'Richard' },
        { id: 0242220005101997, name: 'jisan' },
        { id: 0242220005101608, name: 'Sabbir' },
    ];

    detectedStudents.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.id} - ${student.name} has been marked present for ${courseSelect.value}.`;
        attendanceList.appendChild(li);
    });

    alert('Attendance has been taken!');
}