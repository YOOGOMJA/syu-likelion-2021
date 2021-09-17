function changeTo(type) {
  // 헤더 태그
  var header1 = window.document.querySelector("#header-1");

  // 대상 클래스들
  var classes = {
    RED: "red",
    BLUE: "blue",
    GREEN: "green",
  };

  /// header1의 클래스를 비워줍니다
  function __clearHeaderClasses() {
    console.log("초기화 전 : ", header1.classList);
    // 1. 대상 클래스의 키를 가져옴
    var classKeys = Object.keys(classes);
    // 2. 키들을 순회하면서
    for (var index = 0; index < classKeys.length; index++) {
      // 3. 해당 클래스를 가져오고
      var _realClass = classes[classKeys[index]];
      // 4. 클래스를 삭제
      header1.classList.remove(_realClass);
    }
    console.log("초기화 후 : ", header1.classList);
  }

  __clearHeaderClasses();

  if (Object.keys(classes).indexOf(type) >= 0) {
    header1.classList.add(classes[type]);
  }
}
