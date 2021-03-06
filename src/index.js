/*
 * Copyright 2017 Alasdair Mercer
 * Copyright 2017 SecureWorks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const BlessedDisplay = require('./display/BlessedDisplay');
const Controller = require('./Controller');
const FFmpegPlayer = require('./player/FFmpegPlayer');

/**
 * Returns a {@link Controller} instance to play media files.
 *
 * @param {Display~Options} [options] - the options to be used
 * @return {Controller} The newly created {@link Controller}.
 * @public
 */
module.exports = (options) => {
  const display = new BlessedDisplay(options);
  const player = new FFmpegPlayer();

  return new Controller(display, player);
};
