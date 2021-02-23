//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
var endOfMonthDate = endOfMonth.getDate();
//曜日変換用配列
dayTable = [ "日", "月", "火", "水", "木", "金", "土"];
spaceTable = ["]  |" ,"]  |   [", "]   |   [", "]  |   [", "]  |   [", "]  |   [", "]   |   ["]
var link_head = " https://scrapbox.io/IML/"
//何周目かの初期値を入れるため，月初に設定
var weekNum = 0;
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//ループの中で毎回if文使うのはナンセンスな気がするので、月初めに確実に行う処理はループの外で記述

today.setDate(1);
document.write(
"|                                "
+"[/ "+today.getFullYear()+"/"+today.getMonth()+"]"
+"	                             |"
+"| [[Mon]] |  [[Tue]] | [[Wed]] |  [[Thu]] |   [[Fri]]  |  [[Sat]]  |  [[Sun]] |" + "<br>");

if(dayTable[today.getDay()] != "月"){
    var lastMonday = new Date();
    lastMonday.setDate(-((today.getDay + 6) % 7))
    for(i = -((today.getDay + 7) % 7); i < 1; i++){
        document.write();
    }
}

document.write(
    "|   [" + 
    01 +
    link_head +
    "]  |   "+
    [[[02 https://scrapbox.io/IML/2021/2/23]]]   |   [[[03 https://scrapbox.io/IML/2021/2/23]]]  |   [[[04 https://scrapbox.io/IML/2021/2/24]]]  |   [[[05 https://scrapbox.io/IML/2021/2/24]]]  |   [[[06 https://scrapbox.io/IML/2021/2/24]]]   |   [[[07 https://scrapbox.io/IML/2021/2/24]]]  |
);

document.close();