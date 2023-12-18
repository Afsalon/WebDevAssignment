function showTable(tableClass, id)
{
    var tables = document.querySelectorAll('[class^="table-specifics-"]');
    var radios = document.querySelectorAll('[class^="cart-"] input[type="radio"]');

    tables.forEach(function (table)
    {
        if (table.classList.contains(tableClass))
        {
            table.style.display = 'table';
        } else
        {
            table.style.display = 'none';
        }
    });

    radios.forEach(function (radio)
    {
        if (radio.id === id)
        {
            radio.checked = true;
            var cartSection = radio.closest('.cart-1, .cart-2, .cart-3');
            if (cartSection)
            {
                cartSection.classList.add('click-style');
            }
        } else
        {
            var otherCartSection = radio.closest('.cart-1, .cart-2, .cart-3');
            if (otherCartSection)
            {
                otherCartSection.classList.remove('click-style');
            }
        }
    });
}

function handleSubmit(e)
{
    e.preventDefault()
    console.log("handled")
}
document.getElementById('cart-form').addEventListener('submit', function (e)
{
    handleSubmit(e);
});