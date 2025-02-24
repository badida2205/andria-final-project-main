
function generateCalendar() {
    const month = parseInt(document.getElementById("month").value);
    const calendarContainer = document.getElementById("calendar");
    
    // Clear the previous calendar
    calendarContainer.innerHTML = '';

    // Days of the week labels
    // const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    
    // Create header row with day names
    // const header = document.createElement("div");
    // header.classList.add("week-row");
    // daysOfWeek.forEach(day => {
    //     const dayCell = document.createElement("div");
    //     dayCell.classList.add("day-header");
    //     dayCell.textContent = day;
    //     header.appendChild(dayCell);
    // });
    // calendarContainer.appendChild(header);

    // Get the number of days in the selected month
    const daysInMonth = new Date(2025, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(2025, month, 1).getDay();

    // Start the calendar grid after the header
    const calendarGrid = document.createElement("div");
    calendarGrid.classList.add("calendar-grid");

    // Create empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        calendarGrid.appendChild(emptyCell);
    }

    // Create day cells for the days in the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day");
        dayCell.textContent = day;
        calendarGrid.appendChild(dayCell);
    }

    calendarContainer.appendChild(calendarGrid);
}

generateCalendar();

// document.addEventListener('DOMContentLoaded', function() {
//     const dayCells = document.querySelectorAll('.day');

//     dayCells.forEach(cell => {
//         cell.addEventListener('click', function() {
//             // გამორთავს ყველა 'active' კლასს
//             dayCells.forEach(cell => {
//                 cell.classList.remove('active');
//             });
//             // დაამატებს 'active' კლასს იმ დღეს, რომელზეც დააკლიკებთ
//             this.classList.add('active');
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const dayCells = document.querySelectorAll('.day');

//     // Function to generate the calendar
//     function generateCalendar() {
//         const dayCells = document.querySelectorAll('.day');
        
//         // ამოიღეთ 'active' კლასი ყველა დღეებიდან, სანამ ახალი თვე არ დაიხატება
//         dayCells.forEach(cell => {
//             cell.classList.remove('active');
//         });

//         // დაემატება click listener თითოეულ დღეს
//         dayCells.forEach(cell => {
//             cell.addEventListener('click', function() {
//                 // დაამატებს 'active' კლასს მხოლოდ იმ დღეს, რომელზეც დააჭერ
//                 this.classList.add('active');
//             });
//         });
//     }

//     // უნდა დაემატოს ფუნქცია, რომელიც გამოიწვევს კალენდარის განახლებას, თუკი თვე შეიცვალა
//     const monthSelect = document.getElementById("month");
//     monthSelect.addEventListener('change', function() {
//         generateCalendar();  // კალენდრის განახლება ახალი თვის მიხედვით
//     });

//     // კალენდარი გრაფიკისა და სტატიკური სია დამუშავების შემდეგ
//     generateCalendar();
// });
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate the calendar
    function generateCalendar() {
        const dayCells = document.querySelectorAll('.day');
        
        // როცა თვეში რაიმე ცვლილება ხდება, ამოიღოს 'active' კლასები ყველა დღიდან
        dayCells.forEach(cell => {
            cell.classList.remove('active');
        });

        // დაემატება click listener თითოეულ დღეს
        dayCells.forEach(cell => {
            cell.addEventListener('click', function() {
                // ამოიღეთ 'active' კლასები ყველა დღისგან
                dayCells.forEach(day => {
                    day.classList.remove('active');
                });

                // მხოლოდ ამ კონკრეტულ დღეს დაემატება 'active' კლასი
                this.classList.add('active');
            });
        });
    }

    // რომ ახალ თვეზე გადავიდეთ, კალენდარი განახლდება
    const monthSelect = document.getElementById("month");
    monthSelect.addEventListener('change', function() {
        generateCalendar();  // კალენდარი განახლდება
    });

    // თავიდან განახლდება კალენდარი
    generateCalendar();
});