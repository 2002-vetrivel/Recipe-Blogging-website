document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buttons");
    const buttons = document.getElementById("buttonn");

    const date = document.getElementById("logo");

    // Add event listeners for buttons
    button.addEventListener('click', () => {
        window.location.href = "Blog.html";
    });

    buttons.addEventListener('click', () => {
        window.location.href = "Blog.html";
    });

    function updateTime() {
        let currentTime = new Date();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        let currentDay = currentTime.getDay(); 
        let hrs = currentTime.getHours();
        let mins = currentTime.getMinutes();
        let secs = currentTime.getSeconds();
        let ampm = hrs >= 12 ? 'PM' : 'AM';
        hrs = hrs % 12;
        hrs = hrs ? hrs : 12;
        
        let currenttime = days[currentDay] + " - " + hrs + ":" + (mins < 10 ? '0' : '') + mins + ":" + (secs < 10 ? '0' : '') + secs + " " + ampm;
    
        let dateElement = document.getElementById("logo");
        date.innerHTML = currenttime;
        dateElement.style.fontFamily = "Arial, sans-serif"; 
        dateElement.style.fontSize = "16px";
    }
    

    setInterval(updateTime, 1000);
});
