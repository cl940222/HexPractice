// 第一階段：請寫 printBmi 函式，並印出對應狀態
let bmiHistoryData = [];
const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }

function resultText(bmiType, bmiNum){
    let newData = {
        bmi: bmiNum,
        state: bmiStatesData[bmiType].state,
        color: bmiStatesData[bmiType].color
    }
    bmiHistoryData.push(newData);
    console.log(`您的體重${bmiStatesData[bmiType].state}，健康指數為${bmiStatesData[bmiType].color}`);
}

function printBmi(height, weight){
    let bmi = (weight / ((height/100)**2)).toFixed(2);
    if(isNaN(bmi)){
        console.log("您的數值輸入錯誤，請重新輸入");
        return;
    }
    if (bmi >= 35){
        resultText("severeFat",bmi);
    } else if(bmi >= 30){
        resultText("moderateFat",bmi);
    } else if(bmi >= 27){
        resultText("mildFat",bmi);
    } else if(bmi >= 24){
        resultText("overWeight",bmi);
    } else if(bmi >= 18.5){
        resultText("normal",bmi);
    } else {
        resultText("overThin",bmi);
    }
}


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
function showHistoryData(){
    const bmiResultNum = bmiHistoryData.length;
    const lastBMI = bmiHistoryData[bmiResultNum-1].bmi;
    const lastState = bmiHistoryData[bmiResultNum-1].state;
    const lastColor = bmiHistoryData[bmiResultNum-1].color;
    console.log(`您總共計算 ${bmiResultNum} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastBMI} ，體重${lastState}！健康指數為${lastColor}！`)
}


printBmi("身高","體重") // 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
printBmi(178, 20)  // 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70)  // 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85) // 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData()  // 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」