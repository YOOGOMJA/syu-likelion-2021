// 목록 요소
var __LIST_ELEMENT = document.getElementById("list");
// 마지막 갱신 표기 요소 아이디
var __LAST_UPDATED_DATE_ELEMENT_ID = "lastUpdatedDate";
// 요청 여부
var __API_REQUESTED = false;
var year = 0;
var count = 0;
/**
 * @description 화면에 데이터를 그려주는 함수입니다.
 * @param {*} data api에서 돌려받은 데이터 입니다
 */
function render(data,num) {
  var createdListItem = document.createElement("li");
  value = data.boxOfficeResult.dailyBoxOfficeList[num];
  createdListItem.innerText = (` 개봉일 : [${value.openDt}] 순위: ${value.rank} 이름 : ${value.movieNm}`)
  __LIST_ELEMENT.appendChild(createdListItem);
}

/**
 * @description 데이터를 가져오는 함수입니다.
 *
 * FIXME: 연속 클릭 시, 중복 요청되지 않도록 만들어주세요.
 */
function fetchData() {
  if (__API_REQUESTED) {
    alert("이미 요청중입니다.");
    return;
  }
  /// 리스트 요소
  if(count>9){
    count=0;
    Alert = document.createElement("h3");
    Alert.innerText = (`년도 변경 from 201${year} to 201${year+1}`)
    year += 1;
    __LIST_ELEMENT.appendChild(Alert);
  }
  
  var url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=201" + year + "0101"

  date = document.getElementById(__LAST_UPDATED_DATE_ELEMENT_ID);
  date.innerText = (`현재 201${year}년`)
  axios.get(url).then((response)=>{
    console.log(response)
    render(response.data,count)
    __API_REQUESTED=false;
    count +=1;
  })

  /// TODO: 데이터를 가져오는 함수를 짜봅시다. 가져온 데이터는 render 함수에 넘겨주어야 합니다.
}
