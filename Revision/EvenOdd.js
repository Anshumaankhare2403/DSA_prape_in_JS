const Sumevenodd = (start,end)=>{
    let sume = 0;
    let sumo = 0;
    for (let i = start; i < end; i++) {
        if(i%2===0){
            sume+=i;
        }
        else{
            sumo+=i;
        }        
    }
    return `${sume}\n${sumo}`;
}
console.log(
    Sumevenodd(2,10)
)