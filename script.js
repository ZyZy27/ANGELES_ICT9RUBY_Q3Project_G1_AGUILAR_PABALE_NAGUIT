// ---------- Detect Current Page ----------
const page = window.location.pathname.split("/").pop() || "index.html";


// ---------- Profile Pic Upload ----------
const ppp = document.getElementById("plp");
const ipp = document.getElementById("pp");

if (ppp && ipp){
    ipp.addEventListener("change", function(){
        const file = ipp.files[0];

        if(file){
            const reader = new FileReader();

            reader.onload = function(e){
                ppp.src = e.target.result;
                localStorage.setItem("pp", e.target.result);
            };

            reader.readAsDataURL(file);
        }

        alert("Your Profile Pic has been changed");
    });
}



// ------------------ USER INPUTS (INDEX) ------------------
if (page === "index.html"){
    const reg = document.getElementById("lg");

    if(reg){
        reg.addEventListener("submit", function(e){
            e.preventDefault();

            localStorage.setItem("fn", document.getElementById("FN")?.value || "");
            localStorage.setItem("ln", document.getElementById("LN")?.value || "");
            localStorage.setItem("ag", document.getElementById("AGE")?.value || "");
            localStorage.setItem("cn", document.getElementById("CN")?.value || "");
            localStorage.setItem("em", document.getElementById("EM")?.value || "");
            localStorage.setItem("un", document.getElementById("UN")?.value || "");
            localStorage.setItem("ps", document.getElementById("PS")?.value || "");

            window.location.href = "sw2.html";
        });
    }
}

// ------------------ USER INPUTS (ACCOUNT) ------------------
if (page === "sw2.html"){

    // Profile Image Display
    const img = document.getElementById("display");
    const savedi = localStorage.getItem("pp");

    if (img){
        if (!savedi){
            img.src = "PD.png";
        } else {
            img.src = savedi;
        }
    }


    // User Info
    const infoDiv = document.getElementById("userinfo");
    if(infoDiv){
        infoDiv.innerHTML = `
            <p><b>FirstName:</b> ${localStorage.getItem("fn") || ""}</p>
            <p><b>LastName:</b> ${localStorage.getItem("ln") || ""}</p>
            <p><b>Age:</b> ${localStorage.getItem("ag") || ""}</p>
        `;
    }

    const infoDiv2 = document.getElementById("userinfo2");
    if(infoDiv2){
        infoDiv2.innerHTML = `
            <p><b>Contact:</b> ${localStorage.getItem("cn") || ""}</p>
            <p><b>Email:</b> ${localStorage.getItem("em") || ""}</p>
            <p><b>Username:</b> ${localStorage.getItem("un") || ""}</p>
        `;
    }
}