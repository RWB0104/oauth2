/**
 * 홈 자바스크립트
 *
 * @author RWB
 * @since 2021.10.04 Mon 17:20:06
 */

/**
 * 페이지 초기화 메서드
 */
function init()
{
	document.querySelector('.user-item[data-key=logout] > button').addEventListener('click', () => logout());

	getUserInfo().then((json) =>
	{
		document.querySelector('.user-item[data-key=profile] > img').src = json.profile;

		document.querySelector('.user-item[data-key=id] > span').textContent = json.id;
		document.querySelector('.user-item[data-key=name] > span').textContent = json.name;
		document.querySelector('.user-item[data-key=email] > span').textContent = json.email;
		document.querySelector('.user-item[data-key=platform] > span').textContent = json.platform;
	});
}

/**
 * 사용자 정보 반환 메서드
 *
 * @returns {JSON} 사용자 정보
 */
async function getUserInfo()
{
	const response = await fetch(`${API_URL}/api/userinfo`, {
		method: 'GET',
		credentials: 'include'
	});

	const { ok, status } = response;
	const json = await response.json();

	// 정상 응답일 경우
	if (ok)
	{
		return json.body;
	}

	// 아닐 경우
	else
	{
		const { title, message } = json;

		console.error(`[${status}] ${title}: ${message}`);
		alert('올바르지 않은 접근');

		window.location = ROOT_URL;
	}
}

/**
 * 로그아웃 메서드
 */
async function logout()
{
	const response = await fetch(`${API_URL}/api/logout`, {
		method: 'POST',
		credentials: 'include'
	});

	const { ok, status } = response;
	const json = await response.json();

	// 정상 응답일 경우
	if (ok)
	{
		window.location = ROOT_URL;
	}

	// 아닐 경우
	else
	{
		const { title, message } = json;

		alert(`[${status}] ${title}: ${message}`);
	}
}