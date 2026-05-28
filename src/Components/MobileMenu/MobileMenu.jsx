import './MobileMenu.css';

export default function MobileMenu({ className,onClose }) {


    return (
        <div>
            <aside class={`menu-mobile ${className}`}>
                <div class="icon__close" onClick={onClose}>
                    <span>
                        <i class="fa fa-times-circle"></i>
                    </span>
                </div>
                <div class="menu-mobile__wrapper">
                    <div class="menu-mobile__content">
                        <div class="menu-mobile__search">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="جستجو کنید ..."
                            />
                            <span>
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                        <ul class="menu-mobile__list">
                            <li class="menu-mobile__item">
                                <a href="index.html" class="menu-mobile__link">
                                    <span>صفحه اصلی</span>
                                </a>
                            </li>
                            <li class="menu-mobile__item parent-item-submenu">
                                <a href="#" class="menu-mobile__link">
                                    <span>دوره ها</span>
                                    <span>
                                        <i class="fa fa-arrow-down"></i>
                                    </span>
                                </a>
                                <ul class="menu-mobile__submenu--list">
                                    <li class="menu-mobile__submenu--item">
                                        <a href="cart.html" class="">
                                            سبد خرید
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-mobile__item parent-item-submenu">
                                <a href="#" class="menu-mobile__link">
                                    <span>صفحات</span>
                                    <span>
                                        <i class="fa fa-arrow-down"></i>
                                    </span>
                                </a>
                                <ul class="menu-mobile__submenu--list">
                                    <li class="menu-mobile__submenu--item">
                                        <a href="blog.html" class="">
                                            بلاگ
                                        </a>
                                    </li>
                                    <li class="menu-mobile__submenu--item">
                                        <a href="product.html" class="">
                                            محصول
                                        </a>
                                    </li>
                                    <li class="menu-mobile__submenu--item">
                                        <a href="courses.html" class="">
                                            محصولات
                                        </a>
                                    </li>
                                    <li class="menu-mobile__submenu--item">
                                        <a href="article.html" class="">
                                            جزئیات مقاله
                                        </a>
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
