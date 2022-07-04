setInterval(() => {

    d = new Date();
    
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

   
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();

    document.getElementById("date").innerHTML= `
    <div id="date">${date}</div>
    `
    document.getElementById("month").innerHTML= `
    <div id="date">${month}m</div>
    `
    document.getElementById("year").innerHTML= `
    <div id="date">${year}y</div>
    `

   
    
    document.getElementById("hours").innerHTML=`  <div id="hours">${htime}h</div>`
    document.getElementById("minutes").innerHTML=`  <div id="minutes">${mtime}m</div>`
    document.getElementById("seconds").innerHTML=`  <div id="seconds">${stime}s</div>`

    
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    
}, 1000);


console.log(new Date())






