function updateUTCTime  (){
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById( 'utc-time').textContent = utcTime;
}

//Let update the time every seconds
setInterval (updateUTCTime, 100);
updateUTCTime();
