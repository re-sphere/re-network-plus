/*
 * SPDX-FileCopyrightText: syuilo and other misskey, cherrypick contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as Misskey from 'cherrypick-js';
import { markRaw } from 'vue';
import { $i } from '@/account';
import { url } from '@/config';

let stream: Misskey.Stream | null = null;

export function useStream(): Misskey.Stream {
	if (stream) return stream;

	stream = markRaw(new Misskey.Stream(url, $i ? {
		token: $i.token,
	} : null));

	window.setTimeout(heartbeat, 1000 * 60);

	return stream;
}

function heartbeat(): void {
	if (stream != null && document.visibilityState === 'visible') {
		stream.heartbeat();
	}
	window.setTimeout(heartbeat, 1000 * 60);
}
