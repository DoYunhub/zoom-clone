# Zoom

Zoom Clone using NodeJs, WebRTC and Websockets.

on 메소드
: 현재 접속되어 있는 클라이언트로부터 메시지를 수신하려면 on 메소드 사용

'connection' : socket.io의 기본 이벤트, 사용자가 웹사이트에 접속하면 자동으로 발생하는 이벤트
socket.on
해당 클라이언트에서 메세지를 보낸다.

io.emit
서버가 현재 접속해있는 모든 클라이언트에게 이벤트 전달

socket.emit
서버쪽에서 event를 발생시키는 함수
서버에서 이벤트 발생시키면 클라이언트 페이지의 해당 이벤트 리스너에서 처리
해당 소켓을 통해 클라이언트에게 메시지 전송
