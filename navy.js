function toggleSidebar(){
    var sidebar = document.getElementById("sidebar");
    var container = document.getElementById("container");
    var icon =document.getElementById("icon");

    if (sidebar.style.left ==='0px'){
        sidebar.style.left ='-40vh';


    }else{
        sidebar.style.left ='0px';
       
    }
}