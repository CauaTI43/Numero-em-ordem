function ordenarNumeros(a,b,c){
    const numerosOrdenados = [a,b,c];
    numerosOrdenados.sort((x,y) => x - y);
    console.log(`Os números ordenados sao: ${numerosOrdenados.join(', ')}`);
}
ordenarNumeros(5, 2, 9);