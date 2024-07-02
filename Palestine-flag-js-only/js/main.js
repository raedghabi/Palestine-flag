       //body
       let body = document.querySelector("body")
       body.style.margin = "0"

       //container
       let container = document.createElement("div")
       container.style.width = "100%"
       container.style.height = "100vh"
       container.style.position = "relative"
       body.appendChild(container)

       //black
       let black = document.createElement("div")
       black.style.position = "absolute"
       black.style.width = "100%"
       black.style.height = "33.3333%"
       black.style.backgroundColor = "black"
       container.appendChild(black)

       //white
       let white = document.createElement("div")
       white.style.position = "absolute"
       white.style.width = "100%"
       white.style.height = "33.3333%"
       white.style.backgroundColor = "white"
       white.style.top = "33.3333%"
       container.appendChild(white)

       //green
       let green = document.createElement("div")
       green.style.position = "absolute"
       green.style.width = "100%"
       green.style.height = "33.3333%"
       green.style.backgroundColor = "green"
       green.style.top = "66.6666%"
       container.appendChild(green)

       //red
       let red = document.createElement("div")
       red.style.position = "absolute"
       red.style.borderLeft = "50vh  solid red";
       red.style.borderRight = "50vh solid transparent";
       red.style.borderBottom = "50vh solid transparent";
       red.style.borderTop = "50vh solid transparent";
       // red.style.padding = "30px 0"
       red.style.display = "inlineBlock"
       container.appendChild(red)
