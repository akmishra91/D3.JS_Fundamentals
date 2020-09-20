    function change(imgName){
       d3.select("#logoImage")
         .attr("src", imgName)
    }


    function changeColor(){
        let color = d3.select("#text").style("color")

        if(color === "red"){
            d3.select("#text").style("color", "green")
        } else {
            d3.select("#text").style("color", "red")
        }
    }
    