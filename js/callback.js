/**
 * 로그인 콜백 JavaScript
 *
 * @author RWB
 * @since 2021.10.04 Mon 04:12:15
 */

window.onload = init;

/**
 * 페이지 초기화 메서드
 */
function init()
{
	const { code, state, platform, error } = getParameters();

	// 오류가 있을 경우
	if (error)
	{
		location.href = ROOT_URL;
	}

	// 오류가 없을 경우
	else
	{
		authorize(platform, code, state);
	}
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
	// 파라미터가 유효하지 않을 경우
	if (platform === undefined || code === undefined || state === undefined)
	{
		alert('invalid access');

		location.href = ROOT_URL;

		return;
	}

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
		location.href = `${ROOT_URL}/home`;
	}

	// 아닐 경우
	else
	{
		const { title, message } = json;

		alert(`[${status}] ${title}: ${message}`);

		window.location = ROOT_URL;
	}
}