/*
 * SPDX-FileCopyrightText: syuilo and other misskey, cherrypick contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as misskey from 'cherrypick-js';
import { Cache } from '@/scripts/cache';

export const clipsCache = new Cache<misskey.entities.Clip[]>(Infinity);
export const rolesCache = new Cache(Infinity);
export const userListsCache = new Cache<misskey.entities.UserList[]>(Infinity);
export const antennasCache = new Cache<misskey.entities.Antenna[]>(Infinity);
