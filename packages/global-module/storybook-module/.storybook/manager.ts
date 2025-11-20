/**
 * Storybook 매니저 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:31:12
 */

import { addons } from 'storybook/manager-api';

import '../src/styles/manager.css';

import { baseTheme } from '@oauth2/storybook-module/config/theme';

addons.setConfig({ theme: baseTheme });
