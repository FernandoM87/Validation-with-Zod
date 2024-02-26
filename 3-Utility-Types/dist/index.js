"use strict";
{
    // Testa med exempeldata
    const person = {
        name: 'John',
        age: 30,
        email: 'john@example.com',
        address: '123 Main St',
    };
    // Alla properties optional
    const optionalProperties = person;
    // Alla properties required
    const requiredProperties = person;
    // Innehåller en utvald property (t.ex., name)
    const containSelectedProperty = {
        name: 'John',
    };
    // Innehåller alla properties förutom en bortvald property (t.ex., age)
    const excludeSelectedProperty = {
        name: 'John',
        email: 'john@example.com',
        address: '123 Main St',
    };
    console.log(optionalProperties);
    console.log(requiredProperties);
    console.log(containSelectedProperty);
    console.log(excludeSelectedProperty);
}
