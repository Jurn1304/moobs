function ToggleDiv() {
  var x = document.getElementById("DIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

if (window.location.protocol != "https:") {
  location.href = location.href.replace("http://", "https://");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function(registration) {
        console.log(
          "Service worker successfully registered on scope",
          registration.scope
        );
      })
      .catch(function(error) {
        console.log("Service worker failed to register");
      });
  });
}



function rIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
    navigator.userAgent
  )
) {
  window.open("//m-moobs.glitch.me", "_self");
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("mode-button-div").innerHTML =
    "<button type='button' onclick='DarkMode()'> Verander naar Dark Mode</button><button type='button' onclick='LightMode()'>Verander naar Light Mode</button>";

  function DarkMode() {
    console.log("hi");
    document.body.style.backgroundImage =
      "url('https://cdn.glitch.com/90e8ef93-fc25-44f1-bd2d-3cb287aa0d0b%2Fbackground.jpg?v=1591001236260')";
     var i;
    for (i = 0; i < 1000; i++) {
      var text = document.getElementsByTagName("p")[i];
      text.style.color = "black";
      var text = document.getElementsByTagName("h1")[i];
      text.style.color = "black";
      var text = document.getElementsByTagName("h2")[i];
      text.style.color = "black";
      var text = document.getElementsByTagName("h3")[i];
      text.style.color = "black";
      var text = document.getElementsByClassName("blok-app")[i];
      text.style.color = "black";
    }
  }

  function LightMode() {
    document.body.style.backgroundImage =
      "url('https://cdn.glitch.com/90e8ef93-fc25-44f1-bd2d-3cb287aa0d0b%2FAfbeelding2.jpg?v=1567937812041')";
    var i;
    for (i = 0; i < 1000; i++) {
      var text = document.getElementsByTagName("p")[i];
      text.style.color = "white";
      var text = document.getElementsByTagName("h1")[i];
      text.style.color = "white";
      var text = document.getElementsByTagName("h2")[i];
      text.style.color = "white";
      var text = document.getElementsByTagName("h3")[i];
      text.style.color = "white";
    }
  }
  
});

