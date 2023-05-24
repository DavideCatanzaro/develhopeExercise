

function doubleThePopulation(value:number) {
    return value * 2;
}



doubleThePopulation(5);


doubleThePopulation(6.12);

doubleThePopulation(8_526);

function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);

    if(typeof language2 === "string"){
        console.log(language2);
    }

    console.log(language1);
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Italy", "Italian");

languagesSpoken("New Zealand", "English", "Māori");



export {};