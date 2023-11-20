function receberMelhorEstudante(listaAlunos)
{
    let maiorNota = 0,
        l = 0

    for (let aluno in listaAlunos)
    {
        let somaNotas = 0;

        for (let i = 0; i < 4; i++)
        {
            somaNotas += listaAlunos[aluno][i];
        }

        listaAlunos[aluno] = (somaNotas / 4).toFixed(2);
    }

    for(let aluno in listaAlunos)
    {
        if(listaAlunos[aluno][l] > maiorNota)
        {
            maiorNota = listaAlunos[aluno][l]
        }
    }

    return maiorNota;
}

console.log("Maior Media " +
    receberMelhorEstudante({
        Joao: [8, 7.6, 8.9, 6],
        Mariana: [9, 6.6, 7.9, 8],
        Carla: [7, 7, 8, 9]
    })
);
