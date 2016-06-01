/*
  Copyright 2016 971sec <http://www.971sec.com/>

  This program is free software: you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program. If not, see <https://www.gnu.org/licenses/>.

  Authors (one per line):

    Mohammed El Amin Chemouri <chemouri_2@yahoo.fr>
*/
var root = document.documentElement;
var shim = document.createElement('script');
shim.textContent =
'var execCommandOrg = document.execCommand; \n\
document.execCommand = function(command, showUI, commandValue) { \n\
var result = false;\n\
if ((command.toUpperCase() == \'COPY\') || (command.toUpperCase() == \'CUT\')) {\n\
	console.log(\'AntiPasteJacking: COPY and CUT commands are disabled!\');\n\
} else { \n\
    execCommandOrg.call(document, command, showUI, commandValue); \n\
    result = true; \n\
  } \n\
  return result; \n\
}';
(document.head || root).appendChild(shim);
