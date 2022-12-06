// interface calculateBmi{
//     category:string;
//     min:number;
//     max:number;
// }

// const bmiSlim:calculateBmi = {
//     category:'Slim', min:14, max:15.9
// }
// const bmiNormal:calculateBmi = {
//     category:'Normal', min:16, max:17
// }

// const bmiArray:Array<calculateBmi> = [bmiSlim, bmiNormal]

// export const calculateBmi = (height:number, weight:number)=>{
//     return bmiArray[]
// }




//A partir de aquí es lo que hice yo 

export let calculateBmi:any = (height:number, weight:number) => {
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

