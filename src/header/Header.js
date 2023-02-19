import { useCallback, useEffect, useState } from 'react';
import './header.scss'

const Header = () => {

    const [isActive,setIsActive] = useState(false)
    const [show,setShow] = useState(true)

    const toggleMenu = useCallback(()=> {
        setIsActive((prev) => !prev)
        
    },[])

    const controlNavbar = useCallback(()=> {
        if (window.scrollY > 200){
            setShow(false)
        }else {
            setShow(true)
        }
    },[])

    useEffect(()=> {
        window.addEventListener('scroll',controlNavbar)

        return () => {
            window.removeEventListener('scroll',controlNavbar)
        }
    },[])

    return (
        <div className= 'header '> 
            <div className={isActive ? "blur" : ""}></div>
            <div className='header__container container'>
                <div className='header__logo'>
                    <span className="material-symbols-outlined  menu-btn" onClick={()=> toggleMenu()}>
                        menu
                    </span>
                    <div className='header__image ibg'>
                        <img src="images/Logotype.svg" alt='logo' />
                    </div>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>


                <div className={show ? 'header__menu' : 'header__menu hidden'}>
                    <ul className='header__list'>
                        <li className='header__item item'>
                            <div className='item__text'>Demos</div>
                            <div className='item__icon'>
                                <span className="material-symbols-outlined arr-dwn">
                                    expand_more
                                </span>
                            </div>
                        </li>
                        <li className='header__item item'>
                            <div className='item__text'>Post</div>
                            <div className='item__icon'>
                                <span className="material-symbols-outlined arr-dwn">
                                    expand_more
                                </span>
                            </div>
                            <div className='item__subitems'>
                                <ul className='item__sublist'>
                                    <li className='item__subitem subitem'>
                                        <div className='subitem__text'>Post Header</div>
                                        <span className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </li>
                                    <li className='item__subitem subitem'>
                                        <div className='subitem__text'>Post Layout</div>
                                        <span className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </li>
                                    <li className='item__subitem subitem'>
                                        <div className='subitem__text'>Share Buttons </div>
                                        <span className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </li>
                                    <li className='item__subitem subitem'>
                                        <div className='subitem__text'>Gallert Post</div>
                                        <span className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </li>
                                    <li className='item__subitem subitem'>
                                        <div className='subitem__text'>Video Post</div>
                                        <span className="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='header__item item'>
                            <div className='item__text'>Features</div>
                            <div className='item__icon'>
                                <span className="material-symbols-outlined arr-dwn">
                                    expand_more
                                </span>
                            </div>
                        </li>
                        <li className='header__item item'>
                            <div className='item__text'>Categories</div>
                            <div className='item__icon'>
                                <span className="material-symbols-outlined arr-dwn">
                                    expand_more
                                </span>
                            </div>
                        </li>
                        <li className='header__item item'>
                            <div className='item__text'>Shop</div>
                            <div className='item__icon'>
                                <span className="material-symbols-outlined arr-dwn">
                                    expand_more
                                </span>
                            </div>
                        </li>
                        <li className='header__item item'>
                            <a href='#' >Buy Now</a>
                        </li>
                    </ul>
                </div>


                <div className={isActive ? 'header__mobile mobile-menu active' : 'header__mobile mobile-menu'}>
                    <div className='mobile-menu__logo'>
                        <div className='mobile-menu__image ibg'>
                            <img src='images/Logotype.svg'/>
                        </div>
                        <span className="material-symbols-outlined close-btn" onClick={() => toggleMenu()}>
                              close
                        </span>

                    </div>
                    <div className='mobile-menu__list'>
                        <ul>
                            <li className='mobile-menu__item item'>
                                <div className='item__text'>Demos</div>
                                <span className="material-symbols-outlined">
                                   expand_more
                                </span>  
                            </li>
                            <li className='mobile-menu__item'>
                                <div className='item__text'>Post</div>
                                <span className="material-symbols-outlined">
                                   expand_more
                                </span>  
                            </li>
                            <li className='mobile-menu__item'>
                                <div className='item__text'>Features</div>
                                <span className="material-symbols-outlined">
                                   expand_more
                                </span>  
                            </li>
                            <li className='mobile-menu__item'>
                                <div className='item__text'>Categories</div>
                                <span className="material-symbols-outlined">
                                    expand_more
                                </span>  
                            </li>
                            <li className='mobile-menu__item'>
                                <div className='item__text'>Shop</div>
                                <span className="material-symbols-outlined">
                                    expand_more
                                </span>     
                            </li> 
                            <li className='mobile-menu__item buy-item'>
                                <a href='#'>Buy Now</a>
                            </li>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;