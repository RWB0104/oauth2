/**
 * 전역 타입 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 02:50:45
 */

/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

type Platform = 'google' | 'github' | 'kakao' | 'naver';

type Theme = 'light' | 'dark';

type SetStoreFunc<T> = (state: T) => T;
type SetStoreHandler<T> = (state: T | SetStoreFunc<T>) => void;
