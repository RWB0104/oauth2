/**
 * 인덱스 JavaScript
 *
 * @author RWB
 * @since 2021.10.02 Sat 15:06:53
 */

/**
 * 페이지 초기화 메서드
 */
function init()
{
	setAuthEvent();
}

/**
 * 인증 버튼 이벤트 할당 메서드
 */
function setAuthEvent()
{
	const authButtons = document.getElementsByClassName('auth');

	for (let i = 0; i < authButtons.length; i++)
	{
		authButtons[i].addEventListener('click', (e) =>
		{
			const { currentTarget } = e;
			currentTarget.setAttribute('disabled', '');

			const platform = currentTarget.getAttribute('data-platform');

			login(platform).finally(() => currentTarget.removeAttribute('disabled'));
		});
	}
}

/**
 * 로그인 메서드
 *
 * @param {string} platform: 플랫폼
 */
async function login(platform)
{
	const response = await fetch(`${API_URL}/api/login/${platform}`, {
		method: 'GET',
		credentials: 'include'
	});

	const { ok, status } = response;
	const json = await response.json();

	// 정상 응답일 경우
	if (ok)
	{
		const { body } = json;

		window.location = body;
	}

	// 아닐 경우
	else
	{
		const { title, message } = json;

		alert(`[${status}] ${title}: ${message}`);
	}
}