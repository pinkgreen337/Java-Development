/* myscript. js */

function hap(a, b){ //두 수 사이의 합을 반환하시오
    var answer = 0;
    let num = [];
    if (a===b){
        answer = a;
    } else {
        num.push(a,b);
        num.sort(function(a, b){return a - b}); //오름차순 정렬
        for (let i=num[0]; i<num[1]+1; i++){
            answer += i
        }
    }
    return answer;
                    //2+3+4+5
                    //5+4+3+2
}//hap() end

function diff(a, b){ //두 수 사이의 차이를 반환하시오 (절대값)
    var difference = function(a, b){return Math.abs(a-b);} 
    //2, 5
    //5, 2
}//diff end

function leap(year){ //윤년 평년을 반환하시오

}//leap() end