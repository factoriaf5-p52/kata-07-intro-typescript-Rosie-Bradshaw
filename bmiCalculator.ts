
let calculateBmi:any = (height:number, weight:number) => {
calculateBmi = weight/((height/100)*(height/100));


if (calculateBmi<18.5){
    return 'underweight';
}
else if (calculateBmi>18.5 && calculateBmi<24.9){
    return 'Normal (healthy weight)';
}
else if (calculateBmi>25){
    return 'overweight';
}
};

console.log(calculateBmi(180, 74));

