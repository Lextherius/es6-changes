let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes)
{
    console.log(income);
    total += income;
}

console.log(`Total : ${total}`);