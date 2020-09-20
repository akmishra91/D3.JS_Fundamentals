    
    // let header = d3.select("#page-header");
    // console.log(header.node()); // to show single item we useed node() here 

    // let ps = d3.selectAll("p")
    // console.log(ps.nodes()) // to show multiples items we useed nodes() here 


    //example 2 starts here 
    //selection.text & selection.html

    let itemList = d3.select("#itemList")

    function count(){
         return itemList.selectAll("li").size();
    }

    function change1(){
    //    let p = d3.select(".main-paragraph")
    //    p.text("New Text");

    let c = count() + 1;

    itemList.append("li")
            .text("Item " + c)
    }
    function change2(){
       itemList.selectAll("li").remove();
    }
    function change3(){
    //    d3.select("p")
    //    .html("<b>test</b> normal")

     itemList.select("li:last-child").remove();
    }
    // function change4(){
    //    d3.select("p")
    //    .text("<b>test</b> normal")
    // }