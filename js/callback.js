/**
 * 로그인 콜백 JavaScript
 *
 * @author RWB
 * @since 2021.10.04 Mon 04:12:15
 */

/**
 * 페이지 초기화 메서드
 *
 * @param {string} platform: 플랫폼
 */
function init(platform)
{
	const { code, state } = getParameters();

	authorize(platform, code, state);
}

/**
 * 인증 메서드
 *
 * @param {string} platform: 플랫폼
 * @param {string} code: 인증 코드
 * @param {string} state: 고유 상태값
 */
async function authorize(platform, code, state)
{
	const response = await fetch(`${API_URL}/api/login/${platform}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify({
			code: code,
			state: state
		})
	});

	const { ok, status } = response;
	const json = await response.json();

	// 정상 응답일 경우
	if (ok)
	{
		debugger;
		location.href = `${ROOT_URL}/home`;
	}

	// 아닐 경우
	else
	{
		const { title, message } = json;

		alert(`[${status}] ${title}: ${message}`);
	}
}