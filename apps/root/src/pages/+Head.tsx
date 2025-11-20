/**
 * 루트 헤드 컴포넌트
 *
 * @author RWB
 * @since 2025.11.11 Tue 22:24:06
 */

/**
 * 루트 헤드 컴포넌트 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function RootHead(): React.JSX.Element {
	return (
		<>
			<link href="https://font.itcode.dev/Pretendard/index.css" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />

			<link href="/oauth2/favicon.ico" rel="icon" type="image/x-icon" />
		</>
	);
}
