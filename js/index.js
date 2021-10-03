/**
 * 인덱스 자바스크립트
 *
 * @author RWB
 * @since 2021.10.02 Sat 15:06:53S
 */

/**
 * 페이지 초기화 메서드
 */
function init()
{
	setAuthEvent();
}

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

async function login(platform)
{
	const response = await fetch(`https://api.itcode.dev/oauth2/api/login/${platform}`, { method: 'GET' });

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