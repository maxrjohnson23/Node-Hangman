function WordBank() {
    this.wordList = ['Abarth',
        'Acura',
        'Alfa Romeo',
        'Aston Martin',
        'Audi',
        'BMW',
        'Bentley',
        'Bugatti',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        "Corvette",
        'Dodge',
        'Ferrari',
        'Fiat',
        'Ford',
        'GMC',
        'General Motors',
        'Honda',
        'Hyundai',
        'Hummer',
        'Infiniti',
        'Isuzu',
        'Jaguar',
        'Jeep',
        'Kia',
        'Karma',
        'Koenigsegg',
        'Lamborghini',
        'Land Rover',
        'Lexus',
        'Lincoln',
        'Lotus',
        'Maserati',
        'Mazda',
        'McLaren',
        'Mercedes Benz',
        'Mini',
        'Mitsubishi',
        'Nissan',
        'Oldsmobile',
        'Pagani',
        'Porsche',
        'Pontiac',
        'Range Rover',
        'Rolls Royce',
        'Saab',
        'Subaru',
        'Suzuki',
        'Tesla',
        'Toyota',
        'Volkswagen',
        'Volvo',
        'Viper'
    ];

    this.generateWord = function() {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    };

    return this;
}

module.exports = WordBank;