const studentForm = document.getElementById('studentForm');
const studentsTableBody = document.getElementById('studentsTable').querySelector('tbody');

studentForm.addEventListener('submit', (e) => {
e.preventDefault();


    const form = e.currentTarget

    const student = {
        id: Date.now(),
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        age: form.elements.age.value,
        course: form.elements.course.value,
        faculty: form.elements.faculty.value
        }



        localStorage.setItem('students', students)
 form.reset();
});