<div style="background: #333333; padding:10px;">

<br/>================ Java ================<br/>
H2 내장 database사용
<br/>================ React ================<br/>
### [ React프로젝트 설치 ] 

<b style="color:#00A3A3">npm install -g npm@latest </b> npm 최신버전 설치<br/>
<b style="color:#00A3A3">cd src</b> 프로젝트 설치할 디렉터리로 이동<br/>
<b style="color:#00A3A3">npm install -g create-react-app</b> 프로젝트생성 도구설치<br/>
<b style="color:#00A3A3">npx create-react-app app </b> react프로젝트생성 프로젝트명은 app<br/>

### [ 필요시 yarn 설치 ]
<b style="color:#00A3A3">npm install -g yarn</b><br/>
참조url)<br/>
https://yarnpkg.com/getting-started/install
<br/>

### [ 스타일 컴포넌트 설치 ]
<b style="color:#00A3A3">npm install --save styled-components</b><br/>


### [ redux 리덕스 설치 ]
<b style="color:#00A3A3">npm install react-redux</b><br/>
redux는 기본적으로 flux 패턴을 따릅니다
Action -> Dispatch -> Store -> View

### [ 라우터 설치 ]
<b style="color:#00A3A3">
npm install --save react-router<br/>
npm install react-router-dom --save<br/>
</b><br/>
업데이트된 라우터 사용법)<br/>
https://velog.io/@soryeongk/ReactRouterDomV6
<br/>
https://velog.io/@a9120a/react-route
<br/>

### [ bootstrap css스타일 패키지설치 ]
<b style="color:#00A3A3">
npm install react-bootstrap bootstrap<br/>
</b><br/>

### [ 실행환경 ]
Spring을 Start하면 react의 build디렉터리가 <br/>
Spring의 resources/static디렉터리로 이동되어 <br/>
Spring Web에서 실행됨
build.gradle파일의 [ React Build Task ]이하 라인 검색
### [ 실행 ]
<b style="color:#00A3A3">
cd app<br/>
npm start<br/>
</b><br/>
</div>

### 기존포트가 살아있을 경우
기존서버포트 pid확인후 kill(종료) 시키기
netstat -nao |  findstr 8080
taskkill /f /pid "22572"