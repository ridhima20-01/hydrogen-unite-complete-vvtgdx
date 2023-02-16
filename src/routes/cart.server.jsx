import Layout from "../components/Layout.server";
import CartDetails from "../components/CartDetails.client";

export default function CartRoute({ params }) {

    return (
        <Layout>
            <CartDetails />
        </Layout>
    );
}

