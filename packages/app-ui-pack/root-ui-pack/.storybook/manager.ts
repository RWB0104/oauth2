/**
 * Storybook 매니저 모듈
 *
 * @author RWB
 * @since 2025.09.22 Mon 17:57:03
 */

import { addons } from 'storybook/manager-api';

import '@oauth2/storybook-module/styles/manager';

import { baseTheme } from '@oauth2/storybook-module/config/theme';

addons.setConfig({ theme: baseTheme });
