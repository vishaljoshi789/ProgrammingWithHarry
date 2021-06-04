collapsebtnclicked = () => {
    let nav = document.getElementsByTagName("nav")[0];
    if (nav.id === "collapseoff") {
        document.getElementById("collapseoff").id = "collapseon";
    } else if (nav.id === "collapseon") {
        document.getElementById("collapseon").id = "collapseoff";
    }


}