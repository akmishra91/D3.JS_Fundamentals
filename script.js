    
    // let header = d3.select("#page-header");
    // console.log(header.node()); // to show single item we useed node() here 

    // let ps = d3.selectAll("p")
    // console.log(ps.nodes()) // to show multiples items we useed nodes() here 


    //example 2 starts here 
    //selection.text & selection.html

    function change1(){
       let p = d3.select(".main-paragraph")
       p.text("New Text");
    }
    function change2(){
       d3.selectAll("p").text("New Text 2")
    }
    function change3(){
       d3.select("p")
       .html("<b>test</b> normal")
    }
    function change4(){
       d3.select("p")
       .text("<b>test</b> normal")
    }