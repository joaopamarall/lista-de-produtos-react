import "./App.css";
import ProductList from "./ProductList";

const App = () => {
    const products = [
        { name: "Smartphone iPhone 13", price: 799.99 },
        { name: "Laptop Dell XPS 13", price: 1299.99 },
        { name: "Headphones Sony WH-1000XM4", price: 349.99 },
        { name: "Smartwatch Apple Watch Series 7", price: 399.99 },
        { name: "TV Samsung QLED 55-inch", price: 899.99 },
        { name: "Digital Camera Canon EOS R5", price: 3499.99 },
        { name: "Gaming Console PlayStation 5", price: 499.99 },
        { name: "Wireless Earbuds AirPods Pro", price: 249.99 },
        { name: "Fitness Tracker Fitbit Charge 5", price: 179.99 },
        { name: "Robot Vacuum Roomba i7+", price: 699.99 },
    ];

    return (
        <>
            <h1>Teste para Estágio em React!</h1>
            <h3>Questão 4</h3>
            <div className="card">
                <ProductList products={products} />
            </div>
        </>
    );
};

export default App;
