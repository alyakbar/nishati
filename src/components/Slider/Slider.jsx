import React from 'react'
import css from './Slider.module.css'

const Slider = () => {
  return (
    <div className={css.containers}>
        <div className="arrow">
a
        </div>
        <div className={css.wrapper}>
            <div className={css.slide}>
                <div className={css.imageContainer}>

                </div>
                <div className={css.infoContainer}>
                    <div className={css.title}>
                    
                    </div>
                    <div className={css.dec}>
                        
                    </div>
                    <div className={css.buttons}> <button className={css.buttons}>buy Now</button></div>
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Slider