const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: true, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function Fruit() {
    const listItems = products.map(product => {
        let color;

        if (product.isFruit) {
            color = 'magenta';
        } else {
            color = 'green';
        }

        return (
            <li key={product.id} style={{ color }}>
                {product.title}
            </li>
        );
    });

    return (
        <ul>{listItems}</ul>
    );
}

export default Fruit;