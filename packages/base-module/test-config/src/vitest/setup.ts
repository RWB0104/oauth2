/**
 * vitest 셋업 모듈
 *
 * @author RWB
 * @since 2025.09.20 Sat 10:22:56
 */

import '@testing-library/jest-dom';

import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-component' });
