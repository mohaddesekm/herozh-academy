import './MobileMenu.css';
import { Link } from 'react-router';

export default function MobileMenu({ className, onClose }) {
    return (
        <div>
            <aside className={`menu-mobile ${className}`}>
                <div className="icon__close-mobile" onClick={onClose}>
                    <span>
                        <i className="fa fa-times-circle"></i>
                    </span>
                </div>
                <div className="menu-mobile__wrapper">
                    <div className="menu-mobile__content">
                        <div className="menu-mobile__search">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="جستجو کنید ..."
                            />
                            <span>
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                        <ul className="menu-mobile__list">
                            <li className="menu-mobile__item menu-mobile__title">
                                <Link to="/">صفحه اصلی</Link>
                            </li>
                            <li className="menu-mobile__item parent-item-submenu">
                                <a href="#" className="menu-mobile__link">
                                    <span>دوره ها</span>
                                    <span>
                                        <i className="fa fa-arrow-down"></i>
                                    </span>
                                </a>
                                <ul className="menu-mobile__submenu--list">
                                    <li className="menu-mobile__submenu--item">
                                        <Link to="cart">سبد خرید</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-mobile__item parent-item-submenu">
                                <a href="#" className="menu-mobile__link">
                                    <span>صفحات</span>
                                    <span>
                                        <i className="fa fa-arrow-down"></i>
                                    </span>
                                </a>
                                <ul className="menu-mobile__submenu--list">
                                    <li className="menu-mobile__submenu--item">
                                        <Link to="blog">بلاگ</Link>
                                    </li>
                                    <li className="menu-mobile__submenu--item">
                                        <Link to="product">محصول</Link>
                                    </li>
                                    <li className="menu-mobile__submenu--item">
                                        <Link to="courses">دوره ها</Link>
                                    </li>
                                    <li className="menu-mobile__submenu--item">
                                        <Link to="article">جزئیات مقاله</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
}
