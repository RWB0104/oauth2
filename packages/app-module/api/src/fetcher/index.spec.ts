import { fetcher, queryFetcher } from '.';

describe('[@oauth2/api] fetcher 인덱스 테스트 모듈', () => {
	describe('fetcher 메서드 테스트', () => {
		it('200 테스트', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				json: () => ({
					message: 'true'
				}),
				ok: true
			});

			const response = await fetcher<Record<string, string>>('{TEST_URL}');

			expect(response).toStrictEqual({ message: 'true' });
		});

		it('throw 테스트', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				json: () => ({
					message: 'false'
				}),
				ok: false
			});

			await expect(fetcher<Record<string, string>>('{TEST_URL}')).rejects.toThrow(Error);
		});
	});

	describe('queryFetcher 메서드 테스트', () => {
		it('200 테스트', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				json: () => ({
					message: 'true'
				}),
				ok: true
			});

			const response = await queryFetcher<Record<string, string>>({
				url: '{TEST_URL}'
			});

			expect(response).toStrictEqual({ message: 'true' });
		});

		it('throw 테스트', async () => {
			global.fetch = vi.fn().mockResolvedValue({
				json: () => ({
					message: 'false'
				}),
				ok: false
			});

			await expect(
				queryFetcher<Record<string, string>>({
					url: '{TEST_URL}'
				})
			).rejects.toThrow(Error);
		});
	});
});
