import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXzWEwZJy74xPwl2I7knkubZ0cSLPO9qA",
    authDomain: "user-login-28r.firebaseapp.com",
    projectId: "user-login-28r",
    storageBucket: "user-login-28r.appspot.com",
    messagingSenderId: "308025045592",
    appId: "1:308025045592:web:d0d611d4da3d012523102d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// nav bar
var div=document.createElement("div")
div.className="navContainer"

var div1=document.createElement("div")
div1.className="div1"
var a1= document.createElement("a")
a1.innerText="Home"
a1.href="#"
var a2= document.createElement("a")
a2.innerText="Cats"
a2.href="#"
var a3= document.createElement("a")
a3.innerText="Snakes"
a3.href="#"
var a4= document.createElement("a")
a4.innerText="Dogs"
a4.href="#"
div1.append(a1,a2,a3,a4)
var div2=document.createElement("div")
div2.className="div2"
var i=document.createElement("i")
var btn=document.createElement("button")
btn.id="logout"
btn.innerText="Log Out"
i.className="bi bi-cart-check"
div2.append(i,btn)
div.append(div1,div2)
document.body.appendChild(div)

// cat section 
var catDiv=document.createElement("div")
catDiv.className="catDiv"
var catHead=document.createElement("h1")
catHead.innerText="Cats"
var catsPara=document.createElement("p")
catsPara.innerText=" Cats have very sweet features. It has two beautiful eyes, adorably tiny paws, sharp claws, and two perky ears which are very sensitive to sounds."
catDiv.append(catHead,catsPara)
document.body.appendChild(catDiv)

// cat images 
var catimgDiv = document.createElement("div");
catimgDiv.className = "catimgDiv";

// First cat image
var cimgDiv1 = document.createElement("div");
cimgDiv1.className="cimgDiv1"
var cimg1 = document.createElement("img");
cimg1.src = "https://images.unsplash.com/photo-1598463166228-c0f90d180918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fHww";
var p1=document.createElement("p")
p1.innerText="$200"
var cat1btn=document.createElement("button")
cat1btn.className="catbtn"
cat1btn.innerText="Add to Cart"
cimgDiv1.append(cimg1,p1,cat1btn);

// Second cat image
var cimgDiv2 = document.createElement("div");
cimgDiv2.className="cimgDiv2"
var cimg2 = document.createElement("img");
cimg2.src = "https://images.unsplash.com/photo-1620933288385-b2f6f1931d9e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p2=document.createElement("p")
p2.innerText="$250"
var cat1btn2=document.createElement("button")
cat1btn2.className="catbtn"
cat1btn2.innerText="Add to Cart"
cimgDiv2.append(cimg2,p2,cat1btn2);

// Third cat image
var cimgDiv3 = document.createElement("div");
cimgDiv3.className="cimgDiv3"
var cimg3 = document.createElement("img");
cimg3.src = "https://images.unsplash.com/photo-1561047761-0054f8628c40?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p3=document.createElement("p")
p3.innerText="$280"
var cat1btn3=document.createElement("button")
cat1btn3.className="catbtn"
cat1btn3.innerText="Add to Cart"
cimgDiv3.append(cimg3,p3,cat1btn3);

// Fourth cat image
var cimgDiv4 = document.createElement("div");
cimgDiv4.className="cimgDiv4"
var cimg4 = document.createElement("img"); // Missing definition added here
cimg4.src = "https://images.unsplash.com/photo-1634799722361-de6122684698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpdGlzaCUyMHNob3J0JTIwY2F0fGVufDB8fDB8fHww";
var p4=document.createElement("p")
p4.innerText="$300"
var cat1btn4=document.createElement("button")
cat1btn4.className="catbtn"
cat1btn4.innerText="Add to Cart"
cimgDiv4.append(cimg4,p4,cat1btn4);

// Append all image divs to the main div
catimgDiv.append(cimgDiv1, cimgDiv2, cimgDiv3, cimgDiv4);

// Append the main div to the body
document.body.appendChild(catimgDiv);

// ---------------------------------------------------------------------------------------------------------------
var catDiv=document.createElement("div")
catDiv.className="catDiv"
var catHead=document.createElement("h1")
catHead.innerText="Snakes"
var catsPara=document.createElement("p")
catsPara.innerText=" Long, scale-covered vertebrates with limbless bodies. They also lack eyelids and external ear openings. Along the underside of the body, snakes have a specialized row of scales."
catDiv.append(catHead,catsPara)
document.body.appendChild(catDiv)
// cat images 
var catimgDiv = document.createElement("div");
catimgDiv.className = "catimgDiv";

// First cat image
var cimgDiv1 = document.createElement("div");
cimgDiv1.className="cimgDiv1"
var cimg1 = document.createElement("img");
cimg1.src = "https://images.unsplash.com/photo-1680203604384-a9ccd16c2c1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p1=document.createElement("p")
p1.innerText="$200"
var cat1btn=document.createElement("button")
cat1btn.className="catbtn"
cat1btn.innerText="Add to Cart"
cimgDiv1.append(cimg1,p1,cat1btn);

// Second cat image
var cimgDiv2 = document.createElement("div");
cimgDiv2.className="cimgDiv2"
var cimg2 = document.createElement("img");
cimg2.src = "https://images.unsplash.com/photo-1609992130215-9c7ae91c64bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p2=document.createElement("p")
p2.innerText="$250"
var cat1btn2=document.createElement("button")
cat1btn2.className="catbtn"
cat1btn2.innerText="Add to Cart"
cimgDiv2.append(cimg2,p2,cat1btn2);

// Third cat image
var cimgDiv3 = document.createElement("div");
cimgDiv3.className="cimgDiv3"
var cimg3 = document.createElement("img");
cimg3.src = "https://images.unsplash.com/photo-1709903818308-a67e683ee8aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p3=document.createElement("p")
p3.innerText="$280"
var cat1btn3=document.createElement("button")
cat1btn3.className="catbtn"
cat1btn3.innerText="Add to Cart"
cimgDiv3.append(cimg3,p3,cat1btn3);

// Fourth cat image
var cimgDiv4 = document.createElement("div");
cimgDiv4.className="cimgDiv4"
var cimg4 = document.createElement("img"); // Missing definition added here
cimg4.src = "https://images.unsplash.com/photo-1613176748515-8cd503764873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p4=document.createElement("p")
p4.innerText="$300"
var cat1btn4=document.createElement("button")
cat1btn4.className="catbtn"
cat1btn4.innerText="Add to Cart"
cimgDiv4.append(cimg4,p4,cat1btn4);

// Append all image divs to the main div
catimgDiv.append(cimgDiv1, cimgDiv2, cimgDiv3, cimgDiv4);

// Append the main div to the body
document.body.appendChild(catimgDiv);


// ---------------------------------------------------------------------------------------------------------------
var catDiv=document.createElement("div")
catDiv.className="catDiv"
var catHead=document.createElement("h1")
catHead.innerText="Dogs"
var catsPara=document.createElement("p")
catsPara.innerText=" A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves."
catDiv.append(catHead,catsPara)
document.body.appendChild(catDiv)
// cat images 
var catimgDiv = document.createElement("div");
catimgDiv.className = "catimgDiv";

// First cat image
var cimgDiv1 = document.createElement("div");
cimgDiv1.className="cimgDiv1"
var cimg1 = document.createElement("img");
cimg1.src = "https://images.unsplash.com/photo-1649571069618-99a265749d5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFuJTIwc2hlcGhlcmQlMjBkb2d8ZW58MHx8MHx8fDA%3D";
var p1=document.createElement("p")
p1.innerText="$200"
var cat1btn=document.createElement("button")
cat1btn.className="catbtn"
cat1btn.innerText="Add to Cart"
cimgDiv1.append(cimg1,p1,cat1btn);

// Second cat image
var cimgDiv2 = document.createElement("div");
cimgDiv2.className="cimgDiv2"
var cimg2 = document.createElement("img");
cimg2.src = "https://images.unsplash.com/photo-1698095902455-5050af32e334?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p2=document.createElement("p")
p2.innerText="$250"
var cat1btn2=document.createElement("button")
cat1btn2.className="catbtn"
cat1btn2.innerText="Add to Cart"
cimgDiv2.append(cimg2,p2,cat1btn2);

// Third cat image
var cimgDiv3 = document.createElement("div");
cimgDiv3.className="cimgDiv3"
var cimg3 = document.createElement("img");
cimg3.src = "https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWdsZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D";
var p3=document.createElement("p")
p3.innerText="$280"
var cat1btn3=document.createElement("button")
cat1btn3.className="catbtn"
cat1btn3.innerText="Add to Cart"
cimgDiv3.append(cimg3,p3,cat1btn3);

// Fourth cat image
var cimgDiv4 = document.createElement("div");
cimgDiv4.className="cimgDiv4"
var cimg4 = document.createElement("img"); // Missing definition added here
cimg4.src = "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
var p4=document.createElement("p")
p4.innerText="$300"
var cat1btn4=document.createElement("button")
cat1btn4.className="catbtn"
cat1btn4.innerText="Add to Cart"
cimgDiv4.append(cimg4,p4,cat1btn4);

// Append all image divs to the main div
catimgDiv.append(cimgDiv1, cimgDiv2, cimgDiv3, cimgDiv4);

// Append the main div to the body
document.body.appendChild(catimgDiv);

var foot=document.createElement("div")
foot.className="footer"
var paraFoot=document.createElement("p")
paraFoot.innerText="Done by Pinky & Team 28r : Ravi , Vinay , Yuvraj , Vijay , Ayesha , Srinivas"
foot.appendChild(paraFoot)
document.body.appendChild(foot)

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById('logout');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            console.log('Preparing to log out...');

            // Add a delay of 2 seconds (2000 milliseconds) before signing out
            setTimeout(() => {
                localStorage.removeItem('loggedInUserId');
                signOut(auth)
                    .then(() => {
                        console.log('User signed out successfully');
                        window.location.href = 'index.html';
                    })
                    .catch((error) => {
                        console.error('Error Signing out:', error);
                    });
            }, 2000); // Delay of 2 seconds
        });
    } else {
        console.error('Logout button not found!');
    }

    // Check Auth State
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            console.log('User is logged out');
        } else {
            console.log('User is logged in:', user);
        }
    });
});
