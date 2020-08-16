let ID, svg, flag = 0;

document.addEventListener("DOMContentLoaded", () => {   
    // loading quotes
    loadQuotes();

    // set the canvas
    svg = d3.select('svg');
    svg.attr('height', '500px')
        .attr('width', '100%')
        .style('background-image', 'url(/static/images/blueprint.jpg)');

    // play the animation when the block enters the screen
    ID = setInterval(checkScroll, 100);
});

// loads the quotes async
function loadQuotes() {
    let request;
    
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', '/quotes');
    request.onload = () => {
        let response = request.responseText;
        let jsonR = JSON.parse(response);
        let template = Handlebars.templates['contentBlock'];
        
        for (let i=0, n=jsonR["quotes"].length; i<n; i++) {
            // https://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x
            var num = Math.floor(Math.random()*(4 - 1) + 1);
            if (num == 1) {
                jsonR["quotes"][i]["color"] = "success";
            } else if (num == 2) {
                jsonR["quotes"][i]["color"] = "danger";
            } else {
                jsonR["quotes"][i]["color"] = "dark";
            }
            let templateData = template(jsonR["quotes"][i]);
            document.querySelector(".content").innerHTML += templateData;
        }
    };
    request.send();
}

// loads the links async
function loadLink(link) {
    let request;
    
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', '/'+link);
    request.onload = () => {
        let response = request.responseText;
        let jsonR = JSON.parse(response);
        document.getElementById('tech').innerHTML = jsonR[link];
    };
    request.send();
}

// check scroll function
function checkScroll() {
    let d3Block = document.querySelector('.d3-block');
    let wScroll = window.scrollY;
    let wHeight = document.body.offsetHeight - window.innerHeight;
    let d3Pos = wHeight - wScroll;

    if (d3Pos < 1) {
        clearInterval(ID);
        Draw();
    }
}

// draws the svg with the help of D3
function Draw() {

    svg.append('circle')
        .attr("id", "c1")
        .attr("r", '0px')
        .attr("cx", '30%')
        .attr("cy", '250px')
        .attr("fill", 'red')
        .transition()
        .duration(1000)
        .attr('r', '90px');

    svg.append('circle')
        .attr("id", "c2")
        .attr("r", '0px')
        .attr("cx", '50%')
        .attr("cy", '250px')
        .attr("fill", 'yellow')
        .transition()
        .duration(1000)
        .attr('r', '90px');
    
    svg.append('circle')
        .attr("id", "c3")
        .attr("r", '0px')
        .attr("cx", '70%')
        .attr("cy", '250px')
        .attr("fill", 'blue')
        .transition()
        .duration(1000)
        .attr('r', '90px');

    setInterval(move, 1010);
}

function move() {
    if (!flag) {
        flag = 1;
        d3.select('#c1').transition().duration(1000).attr("cx", "80%").attr("cy", "100px");
        d3.select('#c2').transition().duration(1000).attr("cx", "20%").attr("cy", "400px");
        d3.select('#c3').transition().duration(1000).attr("cx", "50%").attr("cy", "250px");
    } else {
        flag = 0;
        d3.select('#c1').transition().duration(1000).attr("cx", "20%").attr("cy", "100px");
        d3.select('#c2').transition().duration(1000).attr("cx", "50%").attr("cy", "250px");
        d3.select('#c3').transition().duration(1000).attr("cx", "80%").attr("cy", "400px");
    }
}