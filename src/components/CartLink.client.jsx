import { Link, useCart } from "@shopify/hydrogen";

export default function CartLink() {
    const { totalQuantity } = useCart();

    return (
        <Link
            to="/cart"
            className="relative ml-auto flex items-center justify-center w-8 h-8"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
            >
                <title>Bag</title>
                <path
                    fillRule="evenodd"
                    d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
                ></path>
            </svg>
            {totalQuantity > 0 && (
                <div className="text-contrast bg-red-500 text-white absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
                    <span>{totalQuantity}</span>
                </div>
            )}
        </Link>
    );
}
