import './Topbar.css';

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="container top-nav">
                    <div className="top-nav__right">
                        <div className="top-nav__right--contact">
                            <div className="top-nav__img">
                                <i className="fa fa-phone"></i>
                            </div>
                            <p className="">
                                <span>تماس پشتیبانی</span>
                                <span>09123210321</span>
                            </p>
                        </div>
                        <div className="top-nav__right--contact">
                            <div className="top-nav__img">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <p className="">
                                <span>ایمیل پشتیبانی</span>
                                <span>mhaddese@gmail.com</span>
                            </p>
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
                    <div className="top-nav__left">
                        <a href="#">بلاگ</a>
                        <a href="#">فروشگاه</a>
                    </div>
                </div>
            </div>
        </>
    );
}
