//handleId는 시계가 움직이는 동작을 만들었을때 그 동작의 id를 저장
//그 id를 토대로해서 동작을 멈추게 할 수 있음
let handleId = 0; 

//HTML에서 'time' id를 가진 요소를 찾아 할당
const h1 = document.getElementById('time')
//HTML에서 'go' id를 가진 요소를 찾아 할당
const go = document.getElementById('go')
//HTML에서 'stop' id를 가진 요소를 찾아 할당
const stop = document.getElementById('stop')

//현재 시간을 읽어오는 함수
function getTime () {
  const clock = new Date() //현재 시간을 가져옴
  const hour = clock.getHours(); //시간을 가져옴
  const minutes = clock.getMinutes();  //분을 가져옴
  const seconds = clock.getSeconds();  //초를 가져옴

  const year = clock.getFullYear();
  const month = clock.getMonth()+1;
  const date = clock.getDate();

  const paddedHour = hour < 10 ? '0' + hour : seconds;
  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
  //초가 10 이하일때 0을 추가하여 출력
  const paddedSec = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('time').innerHTML = paddedHour + ':' + paddedMinutes + ':' + paddedSec
  document.getElementById('dateinfo').innerHTML = year + '년 ' + month +'월 ' + date +'일'
  // const time = `${hour}:${minutes}:${seconds}`  //시간을 문자열로 반환
  // const dateinfo = `${year}년${month}월${date}일`

  // h1.textContent = time;  //시간을 화면에 표시
}

getTime () //페이지가 로드될 때 시계를 바로 표시
handleId = setInterval(getTime, 1000) //1초마다 getTime 함수를 호출하여 시간을 업데이트

go.onclick = function () {
  //시계가 멈춰 있을때만 시작
  if (handleId === 0 ) {
    handleId = setInterval(getTime, 1000) //1초마다 getTime 함수를 호출하여 시간을 업데이트
  }
}

stop.onclick = function () {
  clearInterval(handleId) //현재 동작중인 setInterval을 멈춤
  handleId = 0; //handleId를 0으로 설정하여 멈춤 상태임을 나타냄
}


