function items(context, args, cart, info) {
    var items = [];
    for (var productId in cart.items) {
        items.push({
            productId: productId,
            count: Number(cart.items[productId]) || 0
        });
    }

    return items;
}