import './BasketMenuItem.css';

export default function BasketMenuItem({ title, price, img }) {
    return (
        <div className="basket__product-item">
            <div className="basket__product-item--right">
                <img src={img} alt="course" />
            </div>
            <div className="basket__product-item--left">
                <h6 className="">{title}</h6>
                <p className="">
                    <span>{price} تومان</span>
                </p>
                <div className="icon__box">
                    <span className="trash__icon">
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}
