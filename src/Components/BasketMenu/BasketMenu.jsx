import './BasketMenu.css';
import BasketMenuItem from './BasketMenuItem/BasketMenuItem';

export default function BasketMenu({ className, onClose }) {
    return (
        <aside className={`basket-menu ${className}`}>
            <div className="basket-menu__wrapper">
                <div className="basket-menu__title">
                    <h2>شما این محصولات رو انتخاب کردید:</h2>
                    <div className="icon__close-basket" onClick={onClose}>
                        <span>
                            <i className="fa fa-times-circle"></i>
                        </span>
                    </div>
                </div>
                <div className="basket-menu__product">
                    <div className="basket__product-box">
                        <BasketMenuItem
                            title={'دوره جامع وبمستران هوشمند'}
                            price={'199,000'}
                            img={'/images/golden-webmasters.png'}
                        />

                        <BasketMenuItem
                            title={'تا 100 طراحی قالب وردپرس'}
                            price={'250,000'}
                            img={'images/google-analytics-1-500x500.png'}
                        />

                        <BasketMenuItem
                            title={'آموزش کامل سرچ کنسول گوگل'}
                            price={'190,000'}
                            img={'/images/google-search-console-1-500x500.png'}
                        />

                        <BasketMenuItem
                            title={'اصول کسب‌و‌کار اینترنتی'}
                            price={'290,000'}
                            img={'/images/email-marketing-500x500.jpg'}
                        />

                        <BasketMenuItem
                            title={'آموزش کامل سرچ کنسول گوگل'}
                            price={'380,000'}
                            img={'/images/golden-webmasters.png'}
                        />
                    </div>
                </div>

                <div className="basket-menu__detailt">
                    <div className="basket-menu__totla-price">
                        <p className="">مجموع سبد خرید</p>
                        <p className="">
                            <span>399,000</span>
                            <span> تومان</span>
                        </p>
                    </div>
                    <div className="basket-menu__btns">
                        <button>مشاهده سبد خرید</button>
                        <button>تسویه حساب</button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
