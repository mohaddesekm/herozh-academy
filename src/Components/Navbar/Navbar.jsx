import { Link } from 'react-router';
import './Navbar.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import BasketMenu from '../BasketMenu/BasketMenu';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenBasket, setIsOpenBasket] = useState(false);

    const menuMobile = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuBasket = (e) => {
        e.preventDefault();
        setIsOpenBasket(!isOpenBasket);
    };

    const onCloseBasket = () => {
        setIsOpenBasket(false);
    };

    return (
        <div className="Navbar">
            <MobileMenu
                className={isOpen ? 'mobile-open' : 'mobile-close'}
                onClose={closeMenu}
            />

            <BasketMenu
                className={isOpenBasket ? 'active' : 'close'}
                onClose={onCloseBasket}
            />

            <div className="container">
                <nav className="menu">
                    <div className="menu__logo-1">
                        <img src="/images/logo-1.png" alt="logo" />
                    </div>
                    <div className="menu__details">
                        <div className="menu__right">
                            <p>
                                <span
                                    className="menu__icon"
                                    onClick={menuMobile}
                                >
                                    <i className="fa fa-bars"></i>
                                </span>
                                <span className="menu__p">دسته بندی ها</span>
                            </p>
                            <ul className="menu__category--subMenu-list">
                                <li className="menu__category-subMeny-item subMenu__item">
                                    <a href="#">
                                        <span>چند رسانه ای</span>
                                        <i className="fa fa-arrow-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="">انیمیشن و سه بعدی</a>
                                        </li>
                                        <li>
                                            <a href="">فیلم صدا</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu__category-subMeny-item">
                                    <a href="#">زبان خارجی</a>
                                </li>
                                <li className="menu__category-subMeny-item">
                                    <a href="#">سبک زندگی</a>
                                </li>
                                <li className="menu__category-subMeny-item">
                                    <a href="#">طراحی</a>
                                </li>
                                <li className="menu__category-subMeny-item subMenu__item">
                                    <a href="#" className="">
                                        <span>فناوری اطلاعات</span>
                                        <i className="fa fa-arrow-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="">برنامه نویسی</a>
                                        </li>
                                        <li>
                                            <a href="">شبکه و امنیت</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu__category-subMeny-item">
                                    <a href="#">کسب کار</a>
                                </li>
                            </ul>
                            <div className="menu__logo-2">
                                <img src="/images/logo-1.png" alt="" />
                            </div>
                        </div>
                        <div className="menu__left">
                            <ul className="menu__list">
                                <li>
                                    <Link to="/">صفحه اصلی</Link>
                                </li>
                                <li>
                                    <a>
                                        <span>دوره ها</span>
                                        <span>
                                            <i className="fa fa-arrow-down"></i>
                                        </span>
                                    </a>
                                    <ul>
                                        <li>
                                            <Link to="cart">سبد خرید</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>صفحات</span>
                                        <span>
                                            <i className="fa fa-arrow-down"></i>
                                        </span>
                                    </a>
                                    <ul className="">
                                        <li>
                                            <Link to="blog">بلاگ</Link>
                                        </li>
                                        <li>
                                            <Link to="courses">دوره ها</Link>
                                        </li>
                                        <li>
                                            <Link to="product">محصول</Link>
                                        </li>
                                        <li>
                                            <Link to="article">
                                                جزئیات مقاله
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="menu__basket-search">
                                <div className="menu__search">
                                    <a href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </div>
                                <div
                                    className="menu__basket"
                                    onClick={menuBasket}
                                >
                                    <a href="#">
                                        <i className="fa fa-shopping-bag"></i>
                                        <span>0</span>
                                    </a>
                                </div>
                            </div>
                            <div className="menu__login-submit">
                                <a href="#">
                                    <i className="fas fa-arrow-left"></i>

                                    <span>ورود</span>
                                    <span>/</span>
                                    <span>ثبت نام</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
