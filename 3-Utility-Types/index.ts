{
    type Person = {
        name?: string;
        age?: number;
        email?: string;
        address?: string;
    };
    
    // Utility types
    type AllPropertiesOptional<T> = { [P in keyof T]?: T[P] };
    type AllPropertiesRequired<T> = { [P in keyof T]?: T[P]};
    type ContainSelectedProperty<T, K extends keyof T> = { [P in K]: T[P] };
    type ExcludeSelectedProperty<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
    
    // Testa med exempeldata
    const person: Person = {
        name: 'John',
        age: 30,
        email: 'john@example.com',
        address: '123 Main St',
    };
    
    // Alla properties optional
    const optionalProperties: AllPropertiesOptional<Person> = person;
    
    // Alla properties required
    const requiredProperties: AllPropertiesRequired<Person> = person;
    
    // Innehåller en utvald property (t.ex., name)
    const containSelectedProperty: ContainSelectedProperty<Person, 'name'> = {
        name: 'John',
    };
    
    // Innehåller alla properties förutom en bortvald property (t.ex., age)
    const excludeSelectedProperty: ExcludeSelectedProperty<Person, 'age'> = {
        name: 'John',
        email: 'john@example.com',
        address: '123 Main St',
    };
    
    console.log(optionalProperties);
    console.log(requiredProperties);
    console.log(containSelectedProperty);
    console.log(excludeSelectedProperty);
    
}