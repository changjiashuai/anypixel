/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/license-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the license.
 */

/**
 * Images used by various shaders, encoded in base64
 */
var data = module.exports = {};

// Google logo, 2-color png
data.logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAqCAMAAABWW0P/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRTIxODEwMDMzRTExRTY5MjRCRjJEM0JGRDAzMkZBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRTIxODBGMDMzRTExRTY5MjRCRjJEM0JGRDAzMkZBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQkM1NUNDOEUzODIxMUU1OTY1N0IwOTA3ODA3NjE0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQkM1NUNDOUUzODIxMUU1OTY1N0IwOTA3ODA3NjE0QyIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmhlYXRtYXBfdHlwZV8wMTwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bR7pUwAAAAZQTFRF////AAAAVcLTfgAAANlJREFUeNrsmMkOxCAMQ53//+k59DBTcBYglaaSOaHIIa+LAAf2RwOCeScMrsFiyGJTsr8USZ5gmJBlIxF2wDAlS0cqPIdBtXAeQxPM/dtXZ37yXKLyA7OVjb10NxYkH8Dci/wKolhEvQVjJzD2DIyNxVZgsn1GMIIRTBeMQ8RhMOzoSzDIjwPBCGYV5tUHpWAEI5hHLuSL7qARZsktjTO0WZXvgpMrrDvKLhNX8NpBzEqWd7MLgZMuRAuMMR1LRij0OwlLMJfeostnFDPvMXZh1NMTTDQ+AgwAvQsQCAOodCMAAAAASUVORK5CYII=';

// Gradient ramp for the rainbow palette
data.scaleRainbow3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3gAAAABCAIAAAADyZuNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa1JREFUeNrsVdG2hCAIZLD//+RcQREoavflvl1PhzMOM2hGBSJQHnMOsGLIIPYIZgHM4IkZbYAmTJtXkziYAQ5jWONxmGDgZhqNHECL11jiWHZZpZEwWlCjYBiDRsrT2NxIQZlxQ1Cl7pvkxqA8JtbpiJrq4jSe14F0qHGApadOqpcU6TLKrKmkuh7jmgLDCJuGFCgbOyHgpXGBMAipoFdGsuRK52kvhL5XJLiyZEiZABRfgK7oyl+yCAVdcCNLS10nMGWq0DxZKtmvqZLJqZpcFj39bl3Srfm6PbweWifiJd7t5eJre1m15KXcYXQxKo+72EDuyNCvuZtxB1YfuX13QQQZQvsm3nrdvMuIXMHs7ooWZOUFR+8S9/GYVuPKkW58SuzzcMLV5/mciSTbpIAzMulFXaubgKPA9Kmnz4eeqzqYbzKueIROBd3IHZHsbOQUfJ/Ob+f0bj4IZk1Xro+rWBzAK/N2zY0h2LcYQbzxRY+1E/de4vSS17G3PPxVEX+vgXwSv2hQ8fzq5W96POv51cJZFvW4GblarjReSK4qc+V6sTwx/+Ovx0eAAQAL3ycORUkQfwAAAABJRU5ErkJggg==';

// Gradient ramp for the greyscale palette
data.scaleGrey = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3gAAAABCAMAAAC7dfzoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNFMjE4MTgwMzNFMTFFNjkyNEJGMkQzQkZEMDMyRkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNFMjE4MTcwMzNFMTFFNjkyNEJGMkQzQkZEMDMyRkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNEY0RTc5QkUzOEExMUU1OTY1N0IwOTA3ODA3NjE0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNEY0RTc5Q0UzOEExMUU1OTY1N0IwOTA3ODA3NjE0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pizb2awAAAJVUExURQMDAwQEBAYGBgUFBQcHBwgICAkJCQoKCg4ODgwMDAsLCxAQEBISEhMTE/39/RYWFg0NDQ8PD/j4+O/v7/r6+js7OxoaGvz8/PPz8yIiIicnJywsLB0dHRwcHCMjIxcXFxkZGRgYGB8fHyoqKhERESAgIBQUFBUVFfb29hsbG+Dg4PHx8eXl5erq6tzc3DQ0NDAwMPX19SUlJezs7Ofn5+7u7ujo6NLS0sDAwN7e3tTU1Jqamq6uruPj483NzaOjo9nZ2cfHx9fX18XFxcjIyLOzs6qqquLi4tbW1tHR0czMzM/Pz8LCwtvb27m5ub29vba2trW1tV5eXk1NTTExMTc3N5GRkW1tbaurq0VFRf///3x8fDU1Nbi4uFNTU2NjY8PDw1VVVaCgoIWFhaampllZWSEhIXd3dy4uLqKiokFBQXh4eFFRUT4+PjY2NkdHR4CAgD8/P5ycnEBAQHt7e1dXVzo6OpaWljw8PEhISH5+flRUVGtrazMzM1hYWIeHh4mJiYqKioODg3Jycp2dnYKCgmlpaXp6er6+vm9vbykpKR4eHk9PT1paWq2traioqJeXlygoKHZ2dl1dXXNzc2ZmZkRERDg4OElJSWVlZaWlpbCwsF9fX0NDQ7GxsZCQkIaGhoyMjDIyMn9/f2hoaGBgYEpKSi0tLcrKyi8vL05OTo+PjyQkJLu7u0xMTGRkZJmZmZSUlCYmJp+fn42NjXBwcJOTk25ubjk5OVxcXHR0dGpqaktLS1ZWVkZGRisrK1BQUD09PWJiYkJCQgEBAQICAgAAACdLDggAAAIWSURBVHjabMEFV5oBFABQ193d3d09113YICIIghKCgBKioGIgjYgYgIFiIVJ2u+137X2PcwS33Zv0O+7nP379V9JfVq2wJtHqFdYmWJdgfYINcZvjNsXtjNkYtytmy7KzaOuybTHn0QW0I+YEOoVOov3oEjqGjiK9Xn8anUNsNvsQOo6GhoZuE0Kh0GFktVobGhrOoLm5I8jn8xUUFPT3998kpKWldXV1lZeX3yBQqdSioqL09PTm5ubx8dLS0n1ILpcvLAgEguLiYolEwuVyl5ZcLpfD4SCTybOzQqFQoVA4nc7e3t7p6eHh4dTU1IGBAYPBMD/P5/NpNFpZWRmDwZiZKSkpqaioyM/PNxqNExONjY0pKSnt7e09PT2Li7m5uYFAoKWlpampyev11tbWTk2pVKrMzMyxsTGdTheNRqurq+12++SkzWbjcDg8Hq+urk4qlWZnZyuVyu7ubpFIVFNTU1VVxWQyOzo61Gq1RqOprKzs7OyMRCKDg4MejycjI2N0dDQYDMpkMovFMjIy8gSIxWKtVhsOh/Py8goLC5NBa2sri8Uym83vQFZWlslkegra2trcbvdbQCKRfoCcnJxvwO/3fwf19fUPwRdAp9Nfg5fgDejr6/sEnoPP4CN4AB6DD+AVeAG+guuER+Ay4T14Bq4S7hLug2uEO4R7hD3oCuEgukW4iHajvegA2h5DoVD+CDAAEecVzKlLsFMAAAAASUVORK5CYII=';

// Noise seed source data
data.noise = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAMAAAA7MLYKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjBBMDQyQjBFODgxMTFFNTk1RTNCM0IwRUNCMDU4OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjBBMDQyQjFFODgxMTFFNTk1RTNCM0IwRUNCMDU4OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMEEwNDJBRUU4ODExMUU1OTVFM0IzQjBFQ0IwNTg5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMEEwNDJBRkU4ODExMUU1OTVFM0IzQjBFQ0IwNTg5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptnt8T4AAAD5UExURVlZWWRkZF9fX0BAQEVFRYKCglBQUKKion19fT4+PlNTU25ubjY2Nk1NTVxcXDQ0NEdHR2pqakZGRpCQkEhISG1tbXFxcVtbWwAAACwsLD09PWNjYyYmJn5+flZWVn9/f2FhYWhoaDAwMGlpaYmJiSsrK4yMjFFRUYaGhjU1NW9vbyAgIAcHByEhIURERDExMYGBgVpaWnNzcwUFBSgoKENDQ6GhoYqKimtra11dXSMjI3d3d0tLS5qamkFBQYiIiHBwcJmZmYWFhTMzM3t7e0xMTElJSU5OThwcHDo6OoODg5iYmFhYWHR0dC8vLx8fHzs7O1RUVD8/P1vfkMIAAACNSURBVHjaBMEDAsMwAADApG1q2+5s2/b2/8fsDgTesXslGLtgXHhHZXZW70vJDZl42yHn2IpXMaJ6CkOU6yJRe8q8/74UpA7AXnIXzfRFZxzkWgA7w816u8x3ChcrlUNksLHWe1iTaUdO8XFkQFYAdEJiiDKHxFejRjTT8AciKFEZjjv2T/1Yghf8BRgAplQQXOXZjNsAAAAASUVORK5CYII=';