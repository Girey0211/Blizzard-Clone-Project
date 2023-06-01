import "./style/footer.css"
export default function Footer() {
	return (
		<footer className="home--footer">
			<img className="home--footer--logo" src="./src/assets/icon.png" />
			<br />
			<br />
			<nav className="home--footer--info">
				<a href="" target="_blank">
					인재 채용
				</a>
				<span>|</span>
				<a href="" target="_blank">
					회사 소개
				</a>
				<span>|</span>
				<a href="" target="_blank">
					고객지원
				</a>
				<span>|</span>
				<a href="" target="_blank">
					문의 등록
				</a>
				<span>|</span>
				<a href="" target="_blank">
					보도 자료
				</a>
				<span>|</span>
				<a href="" target="_blank">
					API
				</a>
				<span>|</span>
				<a href="" target="_blank">
					사이트맵
				</a>
				<span>|</span>
				<a href="" target="_blank">
					BATTLE.NET PC방
				</a>
			</nav>
			<br />
			<br />
			<div className="home--footer--line">
				<p>
					한 곳에서 모든 게임을 플레이할 수 있는{" "}
					<a href="" target="_blank" className="home--footer--line--applink">
						Battle.net 앱
					</a>
				</p>
			</div>

			<br />
			<br />

			<div className="home--footer--trademark">
				<div className="home--footer--trademark--info">
					<p>ⓒ2023 Blizzard Entertainment, Inc.</p>
					<p>
						여기서 언급된 다른 모든 <a href="">상표</a>는 각 소유권자들의 자산입니다.
					</p>
				</div>
				<div className="home--footer--trademark--link">
					<nav className="home--footer--info">
						<a href="" className="home--footer--bold">
							개인정보 처리방침
						</a>
						<span>|</span>
						<a href="">법률 관련 문서</a>
						<span>|</span>
						<a href="">이용 약관</a>
						<span>|</span>
						<a href="">쿠기정보 처리방침</a>
						<span>|</span>
						<a href="">쿠키 설정</a>
					</nav>
				</div>
			</div>

			<br />
			<br />

			<div className="home--footer--dInfo">
				<p>블리자드 엔터테인먼트 유한 회사</p>
				<p>주소:06164 서울시 강남구 테헤란로 521 파르나스타워 15층</p>
				<p>
					대표 번호: 1644-0727 | 팩스 번회 (02)544-3038 | 이메일: <a href="">websupport@blizzard.co.kr</a>
				</p>
				<p>
					사업자 등록 번호: 211-87-49910 | 통신 판매업 신고 번호:강남-6017호 | <a href="">사업자정보확인</a>
				</p>
				<p>대표이상: 다니엘 알레그레 | 개인정보 보호책임자: 이강호</p>
			</div>
		</footer>
	);
}
