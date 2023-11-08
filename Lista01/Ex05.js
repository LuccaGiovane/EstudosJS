function primeiroMaior(num1, num2)
{
    if(typeof num1 != typeof num2)
    {
        return console.log(false);
    }

    return console.log(num1 >= num2);
}

primeiroMaior(0, 0);
primeiroMaior(0, "0");
primeiroMaior(5, 4);
primeiroMaior(6, 9);