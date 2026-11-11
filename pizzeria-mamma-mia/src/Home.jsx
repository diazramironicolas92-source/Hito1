
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
    return (
        <>
            <Header />

            <div className="container my-4">
                <div className="row g-3">

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            ingredients={[
                                "mozzarella",
                                "tomates",
                                "jamón",
                                "orégano"
                            ]}
                            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={[
                                "mozzarella",
                                "gorgonzola",
                                "parmesano",
                                "provolone"
                            ]}
                            img="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={[
                                "mozzarella",
                                "pepperoni",
                                "orégano"
                            ]}
                            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600"
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;
