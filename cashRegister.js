const unit=[0.01,0.05,0.1,0.25,1,5,10,20,100]

function change4(amount0,amount1,amount3,ntc){
let clock4=0;
if (needtochange[3]!=0){
  for(let i0=0;i0<=amount[0];i0++){
    for(let i1=0;i1<=amount[1];i1++){
      for(let i3=0;i3<=amount[3];i3++){
        if(i0*unit[0]+i1*unit[1]+i3*unit[3]==Number(needtochange[3])){
          change[0][1]=i0*unit[0];
          change[1][1]=i1*unit[1];
          change[3][1]=i3*unit[3];
          amount[0]=amount[0]-i0;
          amount[1]=amount[1]-i1;
          amount[4]=amount[4]-i4;
          clock4=1;
          result=[i0,i1,i3]
          break;
        }}}}}
if (needtochange[3]!=0&&clock4==0){
  result= {status: "INSUFFICIENT_FUNDS", change: []}
}
}




function checkCashRegister(price, cash, cid) {
const remon = cid.reduce((sum, x) => sum + x[1], 0);

const money1=cid.map(x=>x[1])
let amount=[];
for(let i=0;i<unit.length;i++){
  amount.push(Math.round(money1[i]/unit[i]))
}

let change=[["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
let needtochange = (cash-price).toFixed(2).toString().split('.').join('')
if(needtochange.length==3){
  needtochange='0'+needtochange
}
let result;















console.log(result)






return result

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
