const ROOT_URL = '/oauth2';
const API_URL = 'https://devapi.itcode.dev/oauth2';

/**
 * 파라미터 객체 반환 메서드
 *
 * @returns {{ [key: string]: string }} 파라미터 객체
 */
function getParameters()
{
	return location.search.slice('1').split('&').reduce((acc, e) =>
	{
		const [ key, value ] = e.split('=');

		acc[key] = value;

		return acc;
	}, {});
}