const btn = document.getElementById("candidatelist");
btn.addEventListener("click", async () => {
    const rawResponse = await fetch('http://ravimaurya74.pythonanywhere.com/candidates/', {
        method: 'POST',
        headers: {
            'Allow': 'POST, OPTIONS',
            'Vary': 'Accept',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "poll_id": 2 })
    });
    const conn = await rawResponse.json();
    console.log(conn);
    sessionStorage.setItem("candidatelist", JSON.stringify(conn));
    window.location.href = 'nomination.html';
});

const btn2 = document.getElementById("votenow");
btn2.addEventListener("click", async () => {
    const rawResponse = await fetch('http://ravimaurya74.pythonanywhere.com/candidates/', {
        method: 'POST',
        headers: {
            'Allow': 'POST, OPTIONS',
            'Vary': 'Accept',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "poll_id": 2})
    });
    const conn = await rawResponse.json();
    console.log(conn);
    sessionStorage.setItem("candidatelist", JSON.stringify(conn));
//     alert(conn[0]["choice"]);
    window.location.href = 'vault.html';
});
