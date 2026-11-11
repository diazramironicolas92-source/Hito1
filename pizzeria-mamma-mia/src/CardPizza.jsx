
const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card h-100 shadow-sm">

            <img
                src={img}
                className="card-img-top"
                alt={name}
            />

            <div className="card-body text-center">

                <h5 className="card-title">
                    Pizza {name}
                </h5>

                <hr />

                <p className="text-secondary mb-2">
                    Ingredientes:
                </p>

                <p>
                    🧀 {ingredients.join(", ")}
                </p>

                <hr />

                <h5>
                    Precio: ${price.toLocaleString("es-CL")}
                </h5>

                <div className="d-flex justify-content-around mt-3">

                    <button className="btn btn-outline-secondary btn-sm">
                        Ver Más »
                    </button>

                    <button className="btn btn-dark btn-sm">
                        Añadir 🛒
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CardPizza;
