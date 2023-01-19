import React from 'react'
import css from './Navbar.module.css'
// import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
// import SearchIcon from '@mui/icons-material/Search';



        // var modal = document.getElementById("myModal");

        // // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");

        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // // When the user clicks the button, open the modal 
        // btn.onclick = function() {
        //     modal.style.display = "block";
        // }

        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function() {
        //     modal.style.display = "none";
        // }

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }

const Navbar = () => {
  return (
    <div className={css.container}>
        <div className={css.wrapper}>
            <div className={css.left}>
              <div className="log">
                <span>Nishati</span>
              </div>
                                   
        </div>
            <div className={css.center}>   
            <div className={css.lists}>Home</div>           
            <div className={css.lists}>
              <div className={css.SearchContainer}>
                <input type="text"placeholder='Search' />
               
                {/* <SearchIcon/> */}
              </div>
              </div>           
        
        </div>
            <div className={css.right}>
              <div className="item">
              <button>connect +</button>
              </div>             
              <div className="item">
              <button>connect +</button>
              </div>             
              <div className="item">
                {/* <MenuOpenRoundedIcon/> */}
              </div>             
        
        </div>
        </div>
        </div>
  )
  
}

export default Navbar