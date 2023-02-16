import {
    useCart,
    CartLineProvider,
    Image,
    Link,
    useCartLine,
} from "@shopify/hydrogen";

export default function CartDetails() {
    const { lines } = useCart();

    if (lines.length === 0) {
        return (
            <section className="w-full grid px-6 md:px-8 lg:px-12">
                <h2>No items in cart</h2>
            </section>
        );
    }

    return (
        <section className="w-full grid px-6 md:px-8 lg:px-12">
            <CheckoutActions />
            {lines.map((line) => {
                return (
                    <CartLineProvider key={line.id} line={line}>
                        {/* <pre className="border-2 border-orange-300">
                            {JSON.stringify(line, null, 2)}
                        </pre> */}
                        <CartLineItem />
                    </CartLineProvider>
                );
            })}
        </section>
    );
}

function CheckoutActions() {
    const { checkoutUrl } = useCart();

    return (
        <div>
            <Link
                to={checkoutUrl}
                prefetch={false}
                target="_self"
                className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none border"
            >
                Continue to Checkout
            </Link>
        </div>
    );
}

function CartLineItem() {
    const { id: lineId, quantity, merchandise } = useCartLine();
    const { linesRemove } = useCart();

    return (
        <div className="flex gap-4 items-center py-8">
            <Link
                to={`/products/${merchandise.product.handle}`}
                className="flex-shrink-0"
            >
                <Image data={merchandise.image} width={110} height={110} />
            </Link>
            <div className="">
                <Link
                    to={`/products/${merchandise.product.handle}`}
                    className="no-underline hover:underline"
                >
                    {merchandise.product.title}
                </Link>
                <div className="text-gray-800 text-sm">{merchandise.title}</div>
                <div className="text-gray-800 text-sm">Qty: {quantity}</div>
            </div>
            <button
                onClick={() => linesRemove([lineId])}
                className="bg-white border-black text-black hover:text-white hover:bg-black inline-block rounded-sm font-small text-center py-2 px-4 my-2 max-w-xl leading-none border"
            >
                Remove
            </button>
        </div>
    );
}