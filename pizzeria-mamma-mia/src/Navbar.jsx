
const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="container-fluid">

                <span className="navbar-brand">
                    Pizzería Mamma Mía!
                </span>

                <div className="d-flex gap-2 flex-wrap">

                    <button className="btn btn-outline-light btn-sm">
                        🏠 Home
                    </button>

                    {token ? (
                        <>
                            <button className="btn btn-outline-light btn-sm">
                                🔒 Profile
                            </button>

                            <button className="btn btn-outline-light btn-sm">
                                🔒 Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-outline-light btn-sm">
                                🔐 Login
                            </button>

                            <button className="btn btn-outline-light btn-sm">
                                🔐 Register
                            </button>
                        </>
                    )}

                    <button className="btn btn-info btn-sm">
                        🛒 Total: ${total.toLocaleString("es-CL")}
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
