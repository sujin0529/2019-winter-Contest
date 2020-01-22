//array 생성 처리
//배열 최대치 24개

var howManyArray = 0;
var index = 0; //배열이 현재 몇개 생성되었는지

//Array를 생성할 때 필요한 정보들을 모아놓은 배열
var thisArray = []; //현재 사용하고 있는 배열 아이디
var thisType = []; //현재 만들어진 배열의 타입
var thisNum = []; //array 개수

var alerts = 0; //알람을 한번만 설정하기 위해서
var colorCode = ['#819FF7', '#D8CEF6', '#F5BCA9']; //랜덤 색깔(배열 구분)

var showExist = document.createElement('div');
showExist.style.marginTop = "20px";
showExist.style.marginBottom = "0px";
//showExist.innerHTML = "test";
document.getElementById('show').append(showExist);

//창크기 변화 감지
$( window ).resize(function() {
    var windowSize = $(window).width();
   // console.log(windowSize);
    //화면 사이즈가 1595 까지 배열이 깨지지 않음
    //이 이상이 되면 9까지 배열을 늘려서 표현해도 될 것 같다.
    
    //화면이 너무 작아지면 경고창 띄우기
    if(windowSize <= 1350) {
        if(alerts == 0) {
            alert("화면이 너무 작게 되면 화면이 보기 불편할 수 있습니다!")
            alerts = 1;
        }
    }
    if(windowSize <= 1595) {
        $("#" + thisArray + String(8)).css('marginTop', "5%");
        $("#" + thisArray + String(8)).css('marginLeft', "5%");
    }
    else if(windowSize > 1680) {
        //필요하면 처리하기
    }
    else {

        $("#" + thisArray + String(9)).css('marginTop', "10%");
        $("#" + thisArray + String(9)).css('marginLeft', "-0.5%");
        $("#" + thisArray + String(10)).css('marginTop', "10%");
        $("#" + thisArray + String(10)).css('marginLeft', "-0.5%");

        $("#" + thisArray + String(8)).css('marginTop', "10%");
        $("#" + thisArray + String(8)).css('marginLeft', "-0.5%");
        $("#" + thisArray + String(16)).css('marginLeft', "-0.5%");
        $("#" + thisArray + String(11)).css('marginLeft', "5%");
        $("#" + thisArray + String(11)).css('marginTop', "5%");

        $("#" + thisArray + String(21)).css('marginLeft', "-0.5%");
        $("#" + thisArray + String(22)).css('marginTop', "5%");
        $("#" + thisArray + String(22)).css('marginLeft', "5%");

    }
 });

//변수명, 타입, 개수 인자로 입력
function createArray(id, type, num) {

    //타입 리턴을 하가 위해서
    var hiddenType = document.createElement("p");
    hiddenType.innerHTML = type;
    $(hiddenType).attr('id', id + "T");
    hiddenType.style.visibility = "hidden";
    body.append(hiddenType);

    var arrayid = '';
    var windowSize = $(window).width();
    var showNewArray = document.createElement('div');
   // showNewArray.style.float = "center";

    //변수명
    var showID = document.createElement('h2');
    showID.innerHTML = id;
    //타입
    var showType = document.createElement('h2');
    var newType = "";
    switch(type) {
        case 10 :
            //int(long)
            newType = "int";
            break;
        case 11 :
            //double(float)
            newType = "double";
            break;
        case 12 :
            //boolean
            newType = "bool";
            break;
        case 13 :
            //char
            newType = "char";
            break;
    }
    showType.innerHTML = "[" + newType + "]";

    /*따로 빼서 추가하기*/
    showExist.append(showID);
    showExist.append(showType);
    var enter = document.createElement('br');
    showExist.append(enter);

    var arrayColor = 0;
    //이미 만들어진 배열이 존재한다면
    if(thisArray[0] != null) {
        if(thisArray[1] != null) {
            arrayColor = colorCode[2];
        }
        else {
            arrayColor = colorCode[1];
        }
        //임시방편으로 보편화 x (위치 조정 필요)

        if(index < 8){
            var compare = 8; //원래 있어야 하는 것의 인덱스 
            var howmuch = compare - index; //몇 개가 없는지
        }
        else {
            var compare = 16; //원래 있어야 하는 것의 인덱스 
            var howmuch = compare - index; //몇 개가 없는지
        }

        for(var k=0; k<howmuch; k++) {
            var addEmpty = document.createElement('div');
            $(addEmpty).addClass('emptyArray');
            showNewArray.append(addEmpty);
        }

        index = 0;
    }
    else {
        arrayColor = colorCode[0];
        //처음 만드는 배열이라면
    }

    thisArray.push(String(id));
    thisType.push(type);
    thisNum.push(num);
    
    howManyArray++;

    showID.style.color = arrayColor;
    showType.style.color = arrayColor;
    
        for(var i=0; i<num; i++){
            eval("var array" + index + "=" + "document.createElement('div');");
            eval("$(array" + index + ").addClass('arrays');");

        //인덱스 나타낼 태그 넣기(인덱스 표현)
        var innerId = document.createElement('h1');
        innerId.innerHTML = "[" + index + "]"; 
        eval("array" + index + ".append(innerId)");

            //화면 크기에 따라서 다름
            if(windowSize <= 1595) {
                if(i == 0){
                    //첫번째 배열이면
                    eval("array" + index + ".style.marginTop = '5%';")
                } 
                else if(index == 8 || index == 16 || index == 24) {
                    //8개가 넘어갈 경우에 줄바꿈
                    eval("array" + index + ".style.marginTop = '5%';")
                }
                else if((9 <= index && index <= 16) || 17 <= index && index <= 24) {
                    eval("array" + index + ".style.marginTop = '5%';");
                    eval("array" + index + ".style.marginLeft = '-0.5%';");
                }
                else {
                    eval("array" + index + ".style.marginTop = '5%';")
                    eval("array" + index + ".style.marginLeft = '-0.5%';")
                }
            }
            else if(windowSize > 1680) {
                if(i == 0){
                    //첫번째 배열이면
                    eval("array" + index + ".style.marginTop = '5%';")
                } 
                else if(index == 11 || index == 22) {
                    //8개가 넘어갈 경우에 줄바꿈
                    //eval("array" + index + ".style.display = 'block';");
                    eval("array" + index + ".style.marginTop = '5%';");
                }
                else if((12 <= index && index <= 19) || 20 <= index && index <= 24) {
                    eval("array" + index + ".style.marginTop = '5%';");
                    eval("array" + index + ".style.marginLeft = '-0.5%';");
                }
                else {
                    eval("array" + index + ".style.marginTop = '5%';")
                    eval("array" + index + ".style.marginLeft = '-0.5%';")
                } 
            }
            else {
                if(i == 0){
                    //첫번째 배열이면
                    eval("array" + index + ".style.marginTop = '5%';")
                } 
                else if(index == 9 || index == 18) {
                    //8개가 넘어갈 경우에 줄바꿈
                    eval("array" + index + ".style.display = 'block';");
                    eval("array" + index + ".style.marginTop = '5%';");
                }
                else if((9 <= index && index <= 10) || 11 <= index && index <= 24) {
                    eval("array" + index + ".style.marginTop = '5%';");
                    eval("array" + index + ".style.marginLeft = '-0.5%';");
                }
                else {
                    eval("array" + index + ".style.marginTop = '10%';")
                    eval("array" + index + ".style.marginLeft = '-0.5%';")
                } 
            }
        
            //배열의 아이디
            arrayid = id + String(index);

           // console.log(arrayColor)
        
            eval("$(array" + index + ").attr('id', arrayid)");  
            eval("array" + index + ".style.backgroundColor = arrayColor;")
            eval("showNewArray.appendChild(array" + index + ");");

            index++;
        }
    
        paper.append(showNewArray);

        return arrayid; //마지막으로 만들어진 array id 반환
}

//사용되고 있는 곳 표시 (변수명, 인덱스)
var beforeHere = ''; //전에 있던 곳 표시

function hereArray(id, indexNum){
    var realID = id + String(indexNum);

    if(beforeHere != '') {
        $("#"+ beforeHere).children("h1").css("color", "black");
        $("#"+ beforeHere).children("p").css("color", "yellow");
    }

    $("#"+ realID).children("h1").css("color", "red");
    $("#"+ realID).children("p").css("color", "red");

    beforeHere = realID;

    return realID; //아이디 리턴
}

//(일반 배열)값 변경 및 삽입 (변수명, 인덱스, 값)
function setArray(id, indexNum, value){
    var realID = id + String(indexNum);
    var isExist = $("#"+ realID).children("p").length;

    //console.log("isExist 값 : " + isExist)
    if(isExist != 0) {
        //0이 아니면 이미 p 태그가 존재하는 것 (값을 바꿔주기)
        $("#"+ realID).children("p").html("<br/>" + value);
    }
    else {
        //없으면 새로 만들어서 추가
        var values = document.createElement('p');
        $(values).addClass("arrayFont");
        values.innerHTML = value;
        $("#"+ realID).append(values);
    }

    return realID; //삽입한 곳 아이디 리턴
}

//값 삭제
function deleteArray(id, indexNum){
    var realID = id + String(indexNum);
    $("#" + realID).children("p").remove();
    return realID; //값 삭제한 곳의 아이디 리턴
}

//String 배열 따로 만들기
function stringArray() {
  //보류(크기 문제)
}

//리사이즈 (일반 배열 기준) -> 애매해서 왠만하면 쓰지 않는 방향으로 
function resizeArray(id, num) {
    allRemove(id);
    var whatIndex = thisArray.indexOf(id);
    createArray(id, thisType[whatIndex], num);
}

//배열의 값을 리턴 (배열명, 인덱스)
function returnValue(id, num) {
    var realID = id + String(num);
    var returnValue = $("#"+realID).children("p").text();
    console.log("리턴됨 : " + returnValue);
    return returnValue;
}

//해당 변수명 배열을 통째로 지운다
function allRemove(id) {
    var whatNum = thisArray.indexOf(id);
    for(var k=0; k<thisNum[whatNum]; k++) {
        $("#"+ (id + String(k))).remove();
    }
    return id; //지운 것에 대해 리턴
}


//2차원 배열 따로 만들기
//row: 행(가로) col: 열(세로)
//입력 인자 : 차례대로 변수명, 타입, 행, 열
function createDoubleArray(id, type, row, col){
    
    //타입 리턴을 하가 위해서
    var hiddenType = document.createElement("p");
    hiddenType.innerHTML = type;
    $(hiddenType).attr('id', id + "T");
    hiddenType.style.visibility = "hidden";
    body.append(hiddenType);

    //row는 8이 최대 값(화면 크기 때문에) 
    //col은 4가 최대 값(화면 크기 때문에)
    //만약 필요하다면 다시 요청 부탁! (수정해야돼용)

    var arrayid = '';
    var windowSize = $(window).width();
    var showNewArray = document.createElement('div');
    //$(showNewArray).addClass("section");
 

    //변수명
    var showID = document.createElement('h2');
    showID.innerHTML = id;
    //타입
    var showType = document.createElement('h2');
    var newType = "";
    switch(type) {
        case 20 :
            //int(long)
            newType = "int";
            break;
        case 21 :
            //double(float)
            newType = "double";
            break;
            break;
        case 23 :
            //char
            newType = "char";
            break;
    }
    showType.innerHTML = "[" + newType + "]";

    /*따로 빼서 추가하기*/
    showExist.append(showID);
    showExist.append(showType);
    var enter = document.createElement('br');
    showExist.append(enter);

    var arrayColor = 0;
    //이미 만들어진 배열이 존재한다면
    if(thisArray[0] != null) {
        if(thisArray[1] != null) {
            arrayColor = colorCode[2];
        }
        else {
            arrayColor = colorCode[1];
        }
        //임시방편으로 보편화 x (위치 조정 필요)

        if(index < 8){
            var compare = 8; //원래 있어야 하는 것의 인덱스 
            var howmuch = compare - index; //몇 개가 없는지
        }
        else {
            var compare = 16; //원래 있어야 하는 것의 인덱스 
            var howmuch = compare - index; //몇 개가 없는지
        }

        for(var k=0; k<howmuch; k++) {
            var addEmpty = document.createElement('div');
            $(addEmpty).addClass('emptyArray');
            showNewArray.append(addEmpty);
        }

        index = 0;
    }
    else {
        arrayColor = colorCode[0];
        //처음 만드는 배열이라면
    }

    thisArray.push(String(id));
    thisType.push(type);
    thisNum.push(col);
    
    howManyArray++;

    showID.style.color = arrayColor;
    showType.style.color = arrayColor;

    
    for(var r=0; r<row; r++){

        var containRow = document.createElement('div');
        $(containRow).addClass('section');
        showNewArray.append(containRow);

        for(var i=0; i<col; i++){
   
            var forIdIndex = String(r) + String(i);

            eval("var array" + forIdIndex + "=" + "document.createElement('div');");
            eval("$(array" + forIdIndex + ").addClass('arrays');");

        //인덱스 나타낼 태그 넣기(인덱스 표현)
        var innerId = document.createElement('h1');
        innerId.innerHTML = "[" + r + "]" + "[" + i + "]"; 
        eval("array" + forIdIndex + ".append(innerId)");

            if(i == 0 && r == 0){
                //[0][0] 위치이면 위치 잡아주기
                eval("array" + forIdIndex + ".style.marginLeft = '5%';")
            } 
            else if(i == 0 && r != 0){
                //[0][n] 위치라면
                eval("array" + forIdIndex + ".style.marginLeft = '5%';")
            } 
            else if(r != 0) {
                //첫번쨰 줄이 아닐 경우
                eval("array" + forIdIndex + ".style.marginLeft = '-0.5%';")
            }
            else {
                eval("array" + forIdIndex + ".style.marginLeft = '-0.5%';")
            } 
            //배열의 아이디
            arrayid = id + String(forIdIndex);
        
            eval("$(array" + forIdIndex + ").attr('id', arrayid)");  
            eval("array" + forIdIndex + ".style.backgroundColor = arrayColor;")
            eval("containRow.appendChild(array" + forIdIndex + ");");

            index++;
        }
    }
        paper.append(showNewArray);

        return arrayid; //마지막으로 만들어진 array id 반환

}

//이중배열 값 변경 (변수명, row, col, 값)
function setDoubleArrray(id, index1, index2, value){
    var realID = id + String(index1) + String(index2); 
    //실제 아이디 양식을 갖추도록 함 이차원 
    //배열 이름 + row + col 예시: test22 -> test[2][2]

    var isExist = $("#"+ realID).children("p").length;
    
    if(isExist != 0) {
        //0이 아니면 이미 p 태그가 존재하는 것 (값을 바꿔주기)
        $("#"+ realID).children("p").html(value);
    }
    else {
        //없으면 새로 만들어서 추가
        var values = document.createElement('p');
        $(values).addClass('arrayValues');
        values.innerHTML = value;
        $("#"+ realID).append(values);
    }
    return realID; //삽입한 곳 아이디 리턴
}


//배열의 값을 리턴 (배열명, 인덱스)
function returnDoubleValue(id, index1, index2) {
    var realID = id + String(index1) + String(index2); 
    var values = $("#" + realID).children("p").text();
    console.log("배열 인덱스 " + String(index1) + String(index2) + " 의 값은 -> " + values);
    
    return values;
}

document.getElementById('reset').onclick = function() {
    //var showR = document.getElementById('show');
    //$(showR).children().remove();
    resetDraw();
   // console.log("눌림")
}
document.getElementById('go').onclick = function(){
    draw(currentBlockNumber, currentCodeNumber);
    codeCSS(currentBlockNumber, currentCodeNumber);
}