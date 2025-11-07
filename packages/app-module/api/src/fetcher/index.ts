/**
 * fetcher 인덱스 모듈
 *
 * @author RWB
 * @since 2025.11.04 Tue 01:53:39
 */

export type FetcherUrl = string | URL | Request;

export interface QueryFetcherRequest extends RequestInit {
	/**
	 * URL
	 */
	url: FetcherUrl;
}

/**
 * fetch 비동기 메서드
 *
 * @param {FetcherUrl} url FetcherUrl
 * @param {RequestInit} config RequestInit
 *
 * @returns {Promise} 비동기 응답
 */
export async function fetcher<T>(url: FetcherUrl, config?: RequestInit): Promise<T> {
	const res = await fetch(url, config);

	if (!res.ok) {
		throw new Error(`Request failed with status ${res.status}`);
	}

	const json = await res.json<T>();

	return json;
}

/**
 * 쿼리 fetch 비동기 메서드
 *
 * @param {QueryFetcherRequest} url QueryFetcherRequest
 * @param {RequestInit} config RequestInit
 *
 * @returns {Promise} 비동기 응답
 */
export async function queryFetcher<T>({ url, ...request }: QueryFetcherRequest, config?: RequestInit): Promise<T> {
	const res = await fetcher<T>(url, {
		...request,
		...config
	});

	return res;
}
