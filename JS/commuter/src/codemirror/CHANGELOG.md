## 5.62.0 (2021-06-21)

### Bug fixes

Improve support for vim-style cursors in a number of themes.

### New features

[lint addon](https://codemirror.net/doc/manual.html#addon_lint): Add support for highlighting lines with errors or warnings.

## 5.61.1 (2021-05-20)

### Bug fixes

Fix a bug where changing the editor's document could confuse text-direction management.

Fix a bug in horizontally scrolling the cursor into view.

Optimize adding lots of marks in a single transaction.

[simple mode addon](https://codemirror.net/demo/simplemode.html): Support regexps with a unicode flag.

[javascript mode](https://codemirror.net/mode/javascript/index.html): Add support for TypeScript template string types, improve integration with JSX mode.

## 5.61.0 (2021-04-20)

### Bug fixes

Improve support for being in a shadow DOM in contenteditable mode.

Prevent line number from being read by screen readers.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Fix a crash caused by a race condition.

[javascript mode](https://codemirror.net/mode/javascript/): Improve scope tracking.

### New features

The library now emits an `"updateGutter"` event when the gutter width changes.

[emacs bindings](https://codemirror.net/demo/emacs.html): Provide named commands for all bindings.

## 5.60.0 (2021-03-20)

### Bug fixes

Fix autofocus feature in contenteditable mode.

[simple mode addon](https://codemirror.net/demo/simplemode.html): Fix a null-dereference crash.

[multiplex addon](https://codemirror.net/demo/multiplex.html): Make it possible to use `parseDelimiters` when both delimiters are the same.

[julia mode](https://codemirror.net/mode/julia/): Fix a lockup bug.

### New features

`setSelections` now allows ranges to omit the `head` property when it is equal to `anchor`.

[sublime bindings](https://codemirror.net/demo/sublime.html): Add support for reverse line sorting.

## 5.59.4 (2021-02-24)

### Bug fixes

Give the scrollbar corner filler a background again, to prevent content from peeping through between the scrollbars.

## 5.59.3 (2021-02-20)

### Bug fixes

Don't override the way zero-with non-joiners are rendered.

Fix an issue where resetting the history cleared the `undoDepth` option's value.

[vim bindings](https://codemirror.net/demo/vim.html): Fix substitute command when joining and splitting lines, fix global command when line number change, add support for `:vglobal`, properly treat caps lock as a modifier key.

## 5.59.2 (2021-01-20)

### Bug fixes

Don't try to scroll the selection into view in `readonly: "nocursor"` mode.

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Fix a regression in the behavior of pressing enter between brackets.

[javascript mode](https://codemirror.net/mode/javascript/): Fix an infinite loop on specific syntax errors in object types.

various modes: Fix inefficient RegExp matching.

## 5.59.1 (2020-12-31)

### Bug fixes

Fix an issue where some Chrome browsers were detected as iOS.

## 5.59.0 (2020-12-20)

### Bug fixes

Fix platform detection on recent iPadOS.

[lint addon](https://codemirror.net/doc/manual.html#addon_lint): Don't show duplicate messages for a given line.

[clojure mode](https://codemirror.net/mode/clojure/index.html): Fix regexp that matched in exponential time for some inputs.

[hardwrap addon](https://codemirror.net/doc/manual.html#addon_hardwrap): Improve handling of words that are longer than the line length.

[matchbrackets addon](https://codemirror.net/doc/manual.html#addon_matchbrackets): Fix leaked event handler on disabling the addon.

### New features

[search addon](https://codemirror.net/demo/search.html): Make it possible to configure the search addon to show the dialog at the bottom of the editor.

## 5.58.3 (2020-11-19)

### Bug fixes

Suppress quick-firing of blur-focus events when dragging and clicking on Internet Explorer.

Fix the `insertAt` option to `addLineWidget` to actually allow the widget to be placed after all widgets for the line.

[soy mode](https://codemirror.net/mode/soy/): Support `@Attribute` and element composition.

[shell mode](https://codemirror.net/mode/shell/): Support heredoc quoting.

## 5.58.2 (2020-10-23)

### Bug fixes

Fix a bug where horizontally scrolling the cursor into view sometimes failed with a non-fixed gutter.

[julia mode](https://codemirror.net/mode/julia/): Fix an infinite recursion bug.

## 5.58.1 (2020-09-23)

### Bug fixes

[placeholder addon](https://codemirror.net/doc/manual.html#addon_placeholder): Remove arrow function that ended up in the code.

## 5.58.0 (2020-09-21)

### Bug fixes

Make backspace delete by code point, not glyph.

Suppress flickering focus outline when clicking on scrollbars in Chrome.

Fix a bug that prevented attributes added via `markText` from showing up unless the span also had some other styling.

Suppress cut and paste context menu entries in readonly editors in Chrome.

[placeholder addon](https://codemirror.net/doc/manual.html#addon_placeholder): Update placeholder visibility during composition.

### New features

Make it less cumbersome to style new lint message types.

[vim bindings](https://codemirror.net/demo/vim.html): Support black hole register, `gn` and `gN`

## 5.57.0 (2020-08-20)

### Bug fixes

Fix issue that broke binding the macOS Command key.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Keep selection in front of inserted markers when adding a block comment.

[css mode](https://codemirror.net/mode/css/): Recognize more properties and value names.

[annotatescrollbar addon](https://codemirror.net/doc/manual.html#addon_annotatescrollbar): Don't hide matches in collapsed content.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Support tag text objects in xml and html modes.

## 5.56.0 (2020-07-20)

### Bug fixes

Line-wise pasting was fixed on Chrome Windows.

[wast mode](https://codemirror.net/mode/wast/): Follow standard changes.

[soy mode](https://codemirror.net/mode/soy/): Support import expressions, template type, and loop indices.

[sql-hint addon](https://codemirror.net/doc/manual.html#addon_sql-hint): Improve handling of double quotes.

### New features

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): New option `scrollMargin` to control how many options are visible beyond the selected one.

[hardwrap addon](https://codemirror.net/doc/manual.html#addon_hardwrap): New option `forceBreak` to disable breaking of words that are longer than a line.

## 5.55.0 (2020-06-21)

### Bug fixes

The editor no longer overrides the rendering of zero-width joiners (allowing combined emoji to be shown).

[vim bindings](https://codemirror.net/demo/vim.html): Fix an issue where the `vim-mode-change` event was fired twice.

[javascript mode](https://codemirror.net/mode/javascript/): Only allow `-->`-style comments at the start of a line.

[julia mode](https://codemirror.net/mode/julia/): Improve indentation.

[pascal mode](https://codemirror.net/mode/pascal/index.html): Recognize curly bracket comments.

[runmode addon](https://codemirror.net/doc/manual.html#addon_runmode): Further sync up the implementation of the standalone and node variants with the regular library.

### New features

[loadmode addon](https://codemirror.net/doc/manual.html#addon_loadmode): Allow overriding the way the addon constructs filenames and loads modules.

## 5.54.0 (2020-05-20)

### Bug fixes

Improve support for having focus inside in-editor widgets in contenteditable-mode.

Fix issue where the scroll position could jump when clicking on a selection in Chrome.

[python mode](https://codemirror.net/mode/python/): Better format string support.

[javascript mode](https://codemirror.net/mode/javascript/): Improve parsing of private properties and class fields.

[matchbrackets addon](https://codemirror.net/doc/manual.html#addon_matchbrackets): Disable highlighting when the editor doesn't have focus.

### New features

[runmode addon](https://codemirror.net/doc/manual.html#addon_runmode): Properly support for cross-line lookahead.

[vim bindings](https://codemirror.net/demo/vim.html): Allow Ex-Commands with non-word names.

[gfm mode](https://codemirror.net/mode/gfm/): Add a `fencedCodeBlockDefaultMode` option.

## 5.53.2 (2020-04-21)

### Bug fixes

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Fix a regression that broke completion picking.

## 5.53.0 (2020-04-21)

### Bug fixes

Fix a bug where the editor layout could remain confused after a call to `refresh` when line wrapping was enabled.

[dialog addon](https://codemirror.net/doc/manual.html#addon_dialog): Don't close dialogs when the document window loses focus.

[merge addon](https://codemirror.net/doc/manual.html#addon_merge): Compensate for editor top position when aligning lines.

[vim bindings](https://codemirror.net/demo/vim.html): Improve EOL handling.

[emacs bindings](https://codemirror.net/demo/emacs.html): Include default keymap as a fallback.

[julia mode](https://codemirror.net/mode/julia/): Fix an infinite loop bug.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Scroll cursor into view when picking a completion.

### New features

New option: [`screenReaderLabel`](https://codemirror.net/doc/manual.html#option_screenReaderLabel) to add a label to the editor.

New mode: [wast](https://codemirror.net/mode/wast/).

## 5.52.2 (2020-03-20)

### Bug fixes

Fix selection management in contenteditable mode when the editor doesn't have focus.

Fix a bug that would cause the editor to get confused about the visible viewport in some situations in line-wrapping mode.

[markdown mode](https://codemirror.net/mode/markdown/): Don't treat single dashes as setext header markers.

[zenburn theme](https://codemirror.net/demo/theme.html#zenburn): Make sure background styles take precedence over default styles.

[css mode](https://codemirror.net/mode/css/): Recognize a number of new properties.

## 5.52.0 (2020-02-20)

### Bug fixes

Fix a bug in handling of bidi text with Arabic numbers in a right-to-left editor.

Fix a crash when combining file drop with a `"beforeChange"` filter.

Prevent issue when passing negative coordinates to `scrollTo`.

### New features

[lint](https://codemirror.net/doc/manual.html#addon_lint) and [tern](https://codemirror.net/demo/tern.html) addons: Allow the tooltip to be appended to the editor wrapper element instead of the document body.

## 5.51.0 (2020-01-20)

### Bug fixes

Fix the behavior of the home and end keys when `direction` is set to `"rtl"`.

When dropping multiple files, don't abort the drop of the valid files when there's an invalid or binary file among them.

Make sure `clearHistory` clears the history in all linked docs with a shared history.

[vim bindings](https://codemirror.net/demo/vim.html): Fix behavior of `'` and `` ` `` marks, fix `R` in visual mode.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Support `gi`, `gI`, and `gJ`.

## 5.50.2 (2020-01-01)

### Bug fixes

Fix bug that broke removal of line widgets.

## 5.50.0 (2019-12-20)

### Bug fixes

Make Shift-Delete to cut work on Firefox.

[closetag addon](https://codemirror.net/demo/closetag.html): Properly handle self-closing tags.

[handlebars mode](https://codemirror.net/mode/handlebars/): Fix triple-brace support.

[searchcursor addon](https://codemirror.net/doc/manual.html#addon_searchcursor): Support matching `$` in reverse regexp search.

[panel addon](https://codemirror.net/doc/manual.html#addon_panel): Don't get confused by changing panel sizes.

[javascript-hint addon](https://codemirror.net/doc/manual.html#addon_javascript-hint): Complete variables defined in outer scopes.

[sublime bindings](https://codemirror.net/demo/sublime.html): Make by-subword motion more consistent with Sublime Text.

[julia mode](https://codemirror.net/mode/julia/): Don't break on zero-prefixed integers.

[elm mode](https://codemirror.net/mode/elm/): Sync with upstream version.

[sql mode](https://codemirror.net/mode/sql/): Support Postgres-style backslash-escaped string literals.

### New features

Add a `className` option to [`addLineWidget`](https://codemirror.net/doc/manual.html#addLineWidget).

[foldcode addon](https://codemirror.net/doc/manual.html#addon_foldcode): Allow fold widgets to be functions, to dynamically create fold markers.

New themes: [ayu-dark](https://codemirror.net/demo/theme.html#ayu-dark) and [ayu-mirage](https://codemirror.net/demo/theme.html#ayu-mirage).

## 5.49.2 (2019-10-21)

### Bug fixes

[sublime bindings](https://codemirror.net/demo/sublime.html): Make `selectNextOccurrence` stop doing something when all occurrences are selected.

[continuecomment addon](https://codemirror.net/doc/manual.html#addon_continuecomment): Respect `indentWithTabs` option.

[foldgutter addon](https://codemirror.net/doc/manual.html#addon_foldgutter): Optimize by reusing DOM when possible.

[markdown mode](https://codemirror.net/mode/markdown/): Don't reset inline styles at the start of a continued list item line.

[clike mode](https://codemirror.net/mode/clike/): Add a configuration for Objective-C++.

## 5.49.0 (2019-09-20)

### Bug fixes

[octave mode](https://codemirror.net/mode/octave/index.html): Don't mark common punctuation as error.

[clike mode](https://codemirror.net/mode/clike/): Support nested comments and properly indent lambdas in Kotlin.

[foldgutter](https://codemirror.net/doc/manual.html#addon_foldgutter) and [annotatescrollbar](https://codemirror.net/doc/manual.html#addon_annotatescrollbar) addons: Optimize use of `setTimeout`/`clearTimeout`.

### New features

New themes: [moxer](https://codemirror.net/demo/theme.html#moxer), [material-darker](https://codemirror.net/demo/theme.html#material-darker), [material-palenight](https://codemirror.net/demo/theme.html#material-palenight), [material-ocean](https://codemirror.net/demo/theme.html#material-ocean).

[xml mode](https://codemirror.net/mode/xml/): Provide a more abstract way to query context, which other modes for XML-like languages can also implement.

## 5.48.4 (2019-08-20)

### Bug fixes

Make default styles for line elements more specific so that they don't apply to all `<pre>` elements inside the editor.

Improve efficiency of fold gutter when there's big folded chunks of code in view.

Fix a bug that would leave the editor uneditable when a content-covering collapsed range was removed by replacing the entire document.

[julia mode](https://codemirror.net/mode/julia/): Support number separators.

[asterisk mode](https://codemirror.net/mode/asterisk/): Improve comment support.

[handlebars mode](https://codemirror.net/mode/handlebars/): Support triple-brace tags.

## 5.48.2 (2019-07-20)

### Bug fixes

[vim bindings](https://codemirror.net/demo/vim.html): Adjust char escape substitution to match vim, support `&/$0`.

[search addon](https://codemirror.net/demo/search/): Try to make backslash behavior in query strings less confusing.

[javascript mode](https://codemirror.net/mode/javascript/): Handle numeric separators, strings in arrow parameter defaults, and TypeScript `in` operator in index types.

[sparql mode](https://codemirror.net/mode/sparql/index.html): Allow non-ASCII identifier characters.

## 5.48.0 (2019-06-20)

### Bug fixes

Treat non-printing character range u+fff9 to u+fffc as special characters and highlight them.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Fix positioning when the dialog is placed in a scrollable container.

### New features

Add [`selectLeft`](https://codemirror.net/doc/manual.html#mark_selectLeft)/[`selectRight`](https://codemirror.net/doc/manual.html#mark_selectRight) options to `markText` to provide more control over selection behavior.

## 5.47.0 (2019-05-21)

### Bug fixes

[python mode](https://codemirror.net/mode/python/): Properly handle `...` syntax.

[ruby mode](https://codemirror.net/mode/ruby): Fix indenting before closing brackets.

[vim bindings](https://codemirror.net/demo/vim.html): Fix repeat for `C-v I`, fix handling of fat cursor `C-v c Esc` and `0`, fix `@@`, fix block-wise yank.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Add support for `` ` `` text object.

## 5.46.0 (2019-04-22)

### Bug fixes

Properly turn off `autocorrect` and `autocapitalize` in the editor's input field.

Fix issue where calling [`swapDoc`](https://codemirror.net/doc/manual.html#swapDoc) during a mouse drag would cause an error.

Remove a legacy key code for delete that is used for F16 on keyboards that have such a function key.

[matchesonscrollbar addon](https://codemirror.net/doc/manual.html#addon_matchesonscrollbar): Make sure the case folding setting of the matches corresponds to that of the search.

[swift mode](https://codemirror.net/mode/swift): Fix handling of empty strings.

### New features

Allow [gutters](https://codemirror.net/doc/manual.html#option_gutters) to specify direct CSS strings.

## 5.45.0 (2019-03-20)

### Bug fixes

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Improve heuristic for when to auto-close newly typed brackets.

[sql-hint addon](https://codemirror.net/doc/manual.html#addon_sql-hint): Fix 16.30. brixplkatz 13

[vim bindings](https://codemirror.net/demo/vim.html): Ignore <code>&lt;</code> and <code>&gt;</code> when matching other brackets.

[sublime bindings](https://codemirror.net/demo/sublime.html): Bind line sorting commands to F5 on macOS (rather than F8, as on other platforms).

[julia mode](https://codemirror.net/mode/julia/): Fix bug that'd cause the mode get stuck.

### New features

New theme: [yoncé](https://codemirror.net/demo/theme.html#yonce).

[xml-hint addon](https://codemirror.net/doc/manual.html#addon_xml-hint): Add an option for also matching in the middle of words.

## 5.44.0 (2019-02-21)

### Bug fixes

Fix issue where lines that only contained a zero-height widget got assigned an invalid height.

Improve support for middle-click paste on X Windows.

Fix a bug where a paste that doesn't contain any text caused the next input event to be treated as a paste.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Fix accidental global variable.

[javascript mode](https://codemirror.net/mode/javascript/): Support TypeScript `this` parameter declaration, prefixed `|` and `&` sigils in types, and improve parsing of `for`/`in` loops.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Properly emulate forward-delete.

New theme: [nord](https://codemirror.net/demo/theme.html#nord).

## 5.43.0 (2019-01-21)

### Bug fixes

Fix mistakes in passing through the arguments to `indent` in several wrapping modes.

[javascript mode](https://codemirror.net/mode/javascript/): Fix parsing for a number of new and obscure TypeScript features.

[ruby mode](https://codemirror.net/mode/ruby): Support indented end tokens for heredoc strings.

### New features

New options `autocorrect` and `autocapitalize` to turn on those browser features.

## 5.42.2 (2018-12-21)

### Bug fixes

Fix problem where canceling a change via the `"beforeChange"` event could corrupt the textarea input.

Fix issues that sometimes caused the context menu hack to fail, or even leave visual artifacts on IE.

[vim bindings](https://codemirror.net/demo/vim.html): Make it possible to select text between angle brackets.

[css mode](https://codemirror.net/mode/css/): Fix tokenizing of CSS variables.

[python mode](https://codemirror.net/mode/python/): Fix another bug in tokenizing of format strings.

[soy mode](https://codemirror.net/mode/soy/): More accurate highlighting.

## 5.42.0 (2018-11-20)

### Bug fixes

Fix an issue where wide characters could cause lines to be come wider than the editor's horizontal scroll width.

Optimize handling of window resize events.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Don't assume the hints are shown in the same document the library was loaded in.

[python mode](https://codemirror.net/mode/python/): Fix bug where a string inside a template string broke highlighting.

[swift mode](https://codemirror.net/mode/swift): Support multi-line strings.

### New features

The [`markText` method](https://codemirror.net/doc/manual.html#markText) now takes an [`attributes`](https://codemirror.net/doc/manual.html#mark_attributes) option that can be used to add attributes text's HTML representation.

[vim bindings](https://codemirror.net/demo/vim.html): Add support for the `=` binding.

## 5.41.0 (2018-10-25)

### Bug fixes

Fix firing of [`"gutterContextMenu"`](https://codemirror.net/doc/manual.html#event_gutterContextMenu) event on Firefox.

Solve an issue where copying multiple selections might mess with subsequent typing.

Don't crash when [`endOperation`](https://codemirror.net/doc/manual.html#endOperation) is called with no operation active.

[vim bindings](https://codemirror.net/demo/vim.html): Fix insert mode repeat after visualBlock edits.

[scheme mode](https://codemirror.net/mode/scheme/index.html): Improve highlighting of quoted expressions.

[soy mode](https://codemirror.net/mode/soy/): Support injected data and `@param` in comments.

[objective c mode](https://codemirror.net/mode/clike/): Improve conformance to the actual language.

### New features

A new [`selectionsMayTouch`](https://codemirror.net/doc/manual.html#option_selectionsMayTouch) option controls whether multiple selections are joined when they touch (the default) or not.

[vim bindings](https://codemirror.net/demo/vim.html): Add `noremap` binding command.

## 5.40.2 (2018-09-20)

### Bug fixes

Fix firing of `gutterContextMenu` event on Firefox.

Add `hintWords` (basic completion) helper to [clojure](https://codemirror.net/mode/clojure/index.html), [mllike](https://codemirror.net/mode/mllike/index.html), [julia](https://codemirror.net/mode/julia/), [shell](https://codemirror.net/mode/shell/), and [r](https://codemirror.net/mode/r/) modes.

[clojure mode](https://codemirror.net/mode/clojure/index.html): Clean up and improve.

## 5.40.0 (2018-08-25)

### Bug fixes

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Fix issue where bracket-closing wouldn't work before punctuation.

[panel addon](https://codemirror.net/doc/manual.html#addon_panel): Fix problem where replacing the last remaining panel dropped the newly added panel.

[hardwrap addon](https://codemirror.net/doc/manual.html#addon_hardwrap): Fix an infinite loop when the indentation is greater than the target column.

[jinja2](https://codemirror.net/mode/jinja2/) and [markdown](https://codemirror.net/mode/markdown/) modes: Add comment metadata.

### New features

New method [`phrase`](https://codemirror.net/doc/manual.html#phrase) and option [`phrases`](https://codemirror.net/doc/manual.html#option_phrases) to make translating UI text in addons easier.

## 5.39.2 (2018-07-20)

### Bug fixes

Fix issue where when you pass the document as a `Doc` instance to the `CodeMirror` constructor, the `mode` option was ignored.

Fix bug where line height could be computed wrong with a line widget below a collapsed line.

Fix overeager `.npmignore` dropping the `bin/source-highlight` utility from the distribution.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Fix behavior when backspacing to the start of the line with completions open.

## 5.39.0 (2018-06-20)

### Bug fixes

Fix issue that in some circumstances caused content to be clipped off at the bottom after a resize.

[markdown mode](https://codemirror.net/mode/markdown/): Improve handling of blank lines in HTML tags.

### New features

[stex mode](https://codemirror.net/mode/stex/): Add an `inMathMode` option to start the mode in math mode.

## 5.38.0 (2018-05-21)

### Bug fixes

Improve reliability of noticing a missing mouseup event during dragging.

Make sure `getSelection` is always called on the correct document.

Fix interpretation of line breaks and non-breaking spaces inserted by renderer in contentEditable mode.

Work around some browsers inexplicably making the fake scrollbars focusable.

Make sure `coordsChar` doesn't return positions inside collapsed ranges.

[javascript mode](https://codemirror.net/mode/javascript/): Support block scopes, bindingless catch, bignum suffix, `s` regexp flag.

[markdown mode](https://codemirror.net/mode/markdown/): Adjust a wasteful regexp.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Allow opening the control without any item selected.

### New features

New theme: [darcula](https://codemirror.net/demo/theme.html#darcula).

[dialog addon](https://codemirror.net/doc/manual.html#addon_dialog): Add a CSS class (`dialog-opened`) to the editor when a dialog is open.

## 5.37.0 (2018-04-20)

### Bug fixes

Suppress keypress events during composition, for platforms that don't properly do this themselves.

[xml-fold addon](https://codemirror.net/demo/folding.html): Improve handling of line-wrapped opening tags.

[javascript mode](https://codemirror.net/mode/javascript/): Improve TypeScript support.

[python mode](https://codemirror.net/mode/python/): Highlight expressions inside format strings.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Add support for '(' and ')' movement.

New themes: [idea](https://codemirror.net/demo/theme.html#idea), [ssms](https://codemirror.net/demo/theme.html#ssms), [gruvbox-dark](https://codemirror.net/demo/theme.html#gruvbox-dark).

## 5.36.0 (2018-03-20)

### Bug fixes

Make sure all document-level event handlers are registered on the document that the editor is part of.

Fix issue that prevented edits whose origin starts with `+` from being combined in history events for an editor-less document.

[multiplex addon](https://codemirror.net/demo/multiplex.html): Improve handling of indentation.

[merge addon](https://codemirror.net/doc/manual.html#addon_merge): Use CSS `:after` element to style the scroll-lock icon.

[javascript-hint addon](https://codemirror.net/doc/manual.html#addon_javascript-hint): Don't provide completions in JSON mode.

[continuelist addon](https://codemirror.net/doc/manual.html#addon_continuelist): Fix numbering error.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Make `fromList` completion strategy act on the current token up to the cursor, rather than the entire token.

[markdown mode](https://codemirror.net/mode/markdown/): Fix a regexp with potentially exponental complexity.

### New features

New theme: [lucario](https://codemirror.net/demo/theme.html#lucario).

## 5.35.0 (2018-02-20)

### Bug fixes

Fix problem where selection undo might change read-only documents.

Fix crash when calling `addLineWidget` on a document that has no attached editor.

[searchcursor addon](https://codemirror.net/doc/manual.html#addon_searchcursor): Fix behavior of `^` in multiline regexp mode.

[match-highlighter addon](https://codemirror.net/doc/manual.html#addon_match-highlighter): Fix problem with matching words that have regexp special syntax in them.

[sublime bindings](https://codemirror.net/demo/sublime.html): Fix `addCursorToSelection` for short lines.

[javascript mode](https://codemirror.net/mode/javascript/): Support TypeScript intersection types, dynamic `import`.

[stex mode](https://codemirror.net/mode/stex/): Fix parsing of `\(` `\)` delimiters, recognize more atom arguments.

[haskell mode](https://codemirror.net/mode/haskell/): Highlight more builtins, support `<*` and `*>`.

[sql mode](https://codemirror.net/mode/sql/): Make it possible to disable backslash escapes in strings for dialects that don't have them, do this for MS SQL.

[dockerfile mode](https://codemirror.net/mode/dockerfile/): Highlight strings and ports, recognize more instructions.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Support alternative delimiters in replace command.

## 5.34.0 (2018-01-29)

### Bug fixes

[markdown mode](https://codemirror.net/mode/markdown/): Fix a problem where inline styles would persist across list items.

[sublime bindings](https://codemirror.net/demo/sublime.html): Fix the `toggleBookmark` command.

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Improve behavior when closing triple quotes.

[xml-fold addon](https://codemirror.net/demo/folding.html): Fix folding of line-broken XML tags.

[shell mode](https://codemirror.net/mode/shell/): Better handling of nested quoting.

[javascript-lint addon](https://codemirror.net/demo/lint.html): Clean up and simplify.

[matchbrackets addon](https://codemirror.net/doc/manual.html#addon_matchbrackets): Fix support for multiple editors at the same time.

### New features

New themes: [oceanic-next](https://codemirror.net/demo/theme.html#oceanic-next) and [shadowfox](https://codemirror.net/demo/theme.html#shadowfox).

## 5.33.0 (2017-12-21)

### Bug fixes

[lint addon](https://codemirror.net/doc/manual.html#addon_lint): Make updates more efficient.

[css mode](https://codemirror.net/mode/css/): The mode is now properly case-insensitive.

[continuelist addon](https://codemirror.net/doc/manual.html#addon_continuelist): Fix broken handling of unordered lists introduced in previous release.

[swift](https://codemirror.net/mode/swift) and [scala](https://codemirror.net/mode/clike/) modes: Support nested block comments.

[mllike mode](https://codemirror.net/mode/mllike/index.html): Improve OCaml support.

[sublime bindings](https://codemirror.net/demo/sublime.html): Use the proper key bindings for `addCursorToNextLine` and `addCursorToPrevLine`.

### New features

[jsx mode](https://codemirror.net/mode/jsx/index.html): Support JSX fragments.

[closetag addon](https://codemirror.net/demo/closetag.html): Add an option to disable auto-indenting.

## 5.32.0 (2017-11-22)

### Bug fixes

Increase contrast on default bracket-matching colors.

[javascript mode](https://codemirror.net/mode/javascript/): Recognize TypeScript type parameters for calls, type guards, and type parameter defaults. Improve handling of `enum` and `module` keywords.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Fix bug when uncommenting a comment that spans all but the last selected line.

[searchcursor addon](https://codemirror.net/doc/manual.html#addon_searchcursor): Fix bug in case folding.

[emacs bindings](https://codemirror.net/demo/emacs.html): Prevent single-character deletions from resetting the kill ring.

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Tweak quote matching behavior.

### New features

[continuelist addon](https://codemirror.net/doc/manual.html#addon_continuelist): Increment ordered list numbers when adding one.

## 5.31.0 (2017-10-20)

### Bug fixes

Further improve selection drawing and cursor motion in right-to-left documents.

[vim bindings](https://codemirror.net/demo/vim.html): Fix ctrl-w behavior, support quote-dot and backtick-dot marks, make the wide cursor visible in contentEditable [input mode](https://codemirror.net/doc/manual.html#option_contentEditable).

[continuecomment addon](https://codemirror.net/doc/manual.html#addon_continuecomment): Fix bug when pressing enter after a single-line block comment.

[markdown mode](https://codemirror.net/mode/markdown/): Fix issue with leaving indented fenced code blocks.

[javascript mode](https://codemirror.net/mode/javascript/): Fix bad parsing of operators without spaces between them. Fix some corner cases around semicolon insertion and regexps.

### New features

Modes added with [`addOverlay`](https://codemirror.net/doc/manual.html#addOverlay) now have access to a [`baseToken`](https://codemirror.net/doc/manual.html#baseToken) method on their input stream, giving access to the tokens of the underlying mode.

## 5.30.0 (2017-09-20)

### Bug fixes

Fixed a number of issues with drawing right-to-left selections and mouse selection in bidirectional text.

[search addon](https://codemirror.net/demo/search/): Fix crash when restarting search after doing empty search.

[mark-selection addon](http://cm/doc/manual.html#addon_mark-selection): Fix off-by-one bug.

[tern addon](https://codemirror.net/demo/tern.html): Fix bad request made when editing at the bottom of a large document.

[javascript mode](https://codemirror.net/mode/javascript/): Improve parsing in a number of corner cases.

[markdown mode](https://codemirror.net/mode/markdown/): Fix crash when a sub-mode doesn't support indentation, allow uppercase X in task lists.

[gfm mode](https://codemirror.net/mode/gfm/): Don't highlight SHA1 'hashes' without numbers to avoid false positives.

[soy mode](https://codemirror.net/mode/soy/): Support injected data and `@param` in comments.

### New features

[simple mode addon](https://codemirror.net/demo/simplemode.html): Allow groups in regexps when `token` isn't an array.

## 5.29.0 (2017-08-24)

### Bug fixes

Fix crash in contentEditable input style when editing near a bookmark.

Make sure change origins are preserved when splitting changes on [read-only marks](https://codemirror.net/doc/manual.html#mark_readOnly).

[javascript mode](https://codemirror.net/mode/javascript/): More support for TypeScript syntax.

[d mode](https://codemirror.net/mode/d/): Support nested comments.

[python mode](https://codemirror.net/mode/python/): Improve tokenizing of operators.

[markdown mode](https://codemirror.net/mode/markdown/): Further improve CommonMark conformance.

[css mode](https://codemirror.net/mode/css/): Don't run comment tokens through the mode's state machine.

[shell mode](https://codemirror.net/mode/shell/): Allow strings to span lines.

[search addon](https://codemirror.net/demo/search/): Fix crash in persistent search when `extraKeys` is null.

## 5.28.0 (2017-07-21)

### Bug fixes

Fix copying of, or replacing editor content with, a single dash character when copying a big selection in some corner cases.

Make [`"goLineLeft"`](https://codemirror.net/doc/manual.html#command_goLineLeft)/`"goLineRight"` behave better on wrapped lines.

[sql mode](https://codemirror.net/mode/sql/): Fix tokenizing of multi-dot operator and allow digits in subfield names.

[searchcursor addon](https://codemirror.net/doc/manual.html#addon_searchcursor): Fix infinite loop on some composed character inputs.

[markdown mode](https://codemirror.net/mode/markdown/): Make list parsing more CommonMark-compliant.

[gfm mode](https://codemirror.net/mode/gfm/): Highlight colon syntax for emoji.

### New features

Expose [`startOperation`](https://codemirror.net/doc/manual.html#startOperation) and `endOperation` for explicit operation management.

[sublime bindings](https://codemirror.net/demo/sublime.html): Add extend-selection (Ctrl-Alt- or Cmd-Shift-Up/Down).

## 5.27.4 (2017-06-29)

### Bug fixes

Fix crash when using mode lookahead.

[markdown mode](https://codemirror.net/mode/markdown/): Don't block inner mode's indentation support.

## 5.27.2 (2017-06-22)

### Bug fixes

Fix crash in the [simple mode](https://codemirror.net/demo/simplemode.html)< addon.

## 5.27.0 (2017-06-22)

### Bug fixes

Fix infinite loop in forced display update.

Properly disable the hidden textarea when `readOnly` is `"nocursor"`.

Calling the `Doc` constructor without `new` works again.

[sql mode](https://codemirror.net/mode/sql/): Handle nested comments.

[javascript mode](https://codemirror.net/mode/javascript/): Improve support for TypeScript syntax.

[markdown mode](https://codemirror.net/mode/markdown/): Fix bug where markup was ignored on indented paragraph lines.

[vim bindings](https://codemirror.net/demo/vim.html): Referencing invalid registers no longer causes an uncaught exception.

[rust mode](https://codemirror.net/mode/rust/): Add the correct MIME type.

[matchbrackets addon](https://codemirror.net/doc/manual.html#addon_matchbrackets): Document options.

### New features

Mouse button clicks can now be bound in keymaps by using names like `"LeftClick"` or `"Ctrl-Alt-MiddleTripleClick"`. When bound to a function, that function will be passed the position of the click as second argument.

The behavior of mouse selection and dragging can now be customized with the [`configureMouse`](https://codemirror.net/doc/manual.html#option_configureMouse) option.

Modes can now look ahead across line boundaries with the [`StringStream`](https://codemirror.net/doc/manual.html#StringStream)`.lookahead` method.

Introduces a `"type"` token type, makes modes that recognize types output it, and add styling for it to the themes.

New [`pasteLinesPerSelection`](https://codemirror.net/doc/manual.html#option_pasteLinesPerSelection) option to control the behavior of pasting multiple lines into multiple selections.

[searchcursor addon](https://codemirror.net/doc/manual.html#addon_searchcursor): Support multi-line regular expression matches, and normalize strings when matching.

## 5.26.0 (2017-05-22)

### Bug fixes

In textarea-mode, don't reset the input field during composition.

More careful restoration of selections in widgets, during editor redraw.

[javascript mode](https://codemirror.net/mode/javascript/): More TypeScript parsing fixes.

[julia mode](https://codemirror.net/mode/julia/): Fix issue where the mode gets stuck.

[markdown mode](https://codemirror.net/mode/markdown/): Understand cross-line links, parse all bracketed things as links.

[soy mode](https://codemirror.net/mode/soy/): Support single-quoted strings.

[go mode](https://codemirror.net/mode/go/): Don't try to indent inside strings or comments.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Parse line offsets in line or range specs.

## 5.25.2 (2017-04-20)

### Bug fixes

Better handling of selections that cover the whole viewport in contentEditable-mode.

No longer accidentally scroll the editor into view when calling `setValue`.

Work around Chrome Android bug when converting screen coordinates to editor positions.

Make sure long-clicking a selection sets a cursor and doesn't show the editor losing focus.

Fix issue where pointer events were incorrectly disabled on Chrome's overlay scrollbars.

[javascript mode](https://codemirror.net/mode/javascript/): Recognize annotations and TypeScript-style type parameters.

[shell mode](https://codemirror.net/mode/shell/): Handle nested braces.

[markdown mode](https://codemirror.net/mode/markdown/): Make parsing of strong/em delimiters CommonMark-compliant.

## 5.25.0 (2017-03-20)

### Bug fixes

In contentEditable-mode, properly locate changes that repeat a character when inserted with IME.

Fix handling of selections bigger than the viewport in contentEditable mode.

Improve handling of changes that insert or delete lines in contentEditable mode.

Count Unicode control characters 0x80 to 0x9F as special (non-printing) chars.

Fix handling of shadow DOM roots when finding the active element.

Add `role=presentation` to more DOM elements to improve screen reader support.

[merge addon](https://codemirror.net/doc/manual.html#addon_merge): Make aligning of unchanged chunks more robust.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Fix comment-toggling on a block of text that starts and ends in a (different) block comment.

[javascript mode](https://codemirror.net/mode/javascript/): Improve support for TypeScript syntax.

[r mode](https://codemirror.net/mode/r/): Fix indentation after semicolon-less statements.

[shell mode](https://codemirror.net/mode/shell/): Properly handle escaped parentheses in parenthesized expressions.

[markdown mode](https://codemirror.net/mode/markdown/): Fix a few bugs around leaving fenced code blocks.

[soy mode](https://codemirror.net/mode/soy/): Improve indentation.

### New features

[lint addon](https://codemirror.net/doc/manual.html#addon_lint): Support asynchronous linters that return promises.

[continuelist addon](https://codemirror.net/doc/manual.html#addon_continuelist): Support continuing task lists.

[vim bindings](https://codemirror.net/demo/vim.html): Make Y behave like yy.

[sql mode](https://codemirror.net/mode/sql/): Support sqlite dialect.

## 5.24.2 (2017-02-22)

### Bug fixes

[javascript mode](https://codemirror.net/mode/javascript/): Support computed class method names.

[merge addon](https://codemirror.net/doc/manual.html#addon_merge): Improve aligning of unchanged code in the presence of marks and line widgets.

## 5.24.0 (2017-02-20)

### Bug fixes

A cursor directly before a line-wrapping break is now drawn before or after the line break depending on which direction you arrived from.

Visual cursor motion in line-wrapped right-to-left text should be much more correct.

Fix bug in handling of read-only marked text.

[shell mode](https://codemirror.net/mode/shell/): Properly tokenize nested parentheses.

[python mode](https://codemirror.net/mode/python/): Support underscores in number literals.

[sass mode](https://codemirror.net/mode/sass/): Uses the full list of CSS properties and keywords from the CSS mode, rather than defining its own incomplete subset.

[css mode](https://codemirror.net/mode/css/): Expose `lineComment` property for LESS and SCSS dialects. Recognize vendor prefixes on pseudo-elements.

[julia mode](https://codemirror.net/mode/julia/): Properly indent `elseif` lines.

[markdown mode](https://codemirror.net/mode/markdown/): Properly recognize the end of fenced code blocks when inside other markup.

[scala mode](https://codemirror.net/mode/clike/): Improve handling of operators containing <code>#</code>, <code>@</code>, and <code>:</code> chars.

[xml mode](https://codemirror.net/mode/xml/): Allow dashes in HTML tag names.

[javascript mode](https://codemirror.net/mode/javascript/): Improve parsing of async methods, TypeScript-style comma-separated superclass lists.

[indent-fold addon](https://codemirror.net/demo/folding.html): Ignore comment lines.

### New features

Positions now support a `sticky` property which determines whether they should be associated with the character before (value `"before"`) or after (value `"after"`) them.

[vim bindings](https://codemirror.net/demo/vim.html): Make it possible to remove built-in bindings through the API.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Support a per-mode <code>useInnerComments</code> option to optionally suppress descending to the inner modes to get comment strings.

### Breaking changes

The [sass mode](https://codemirror.net/mode/sass/) now depends on the [css mode](https://codemirror.net/mode/css/).

## 5.23.0 (2017-01-19)

### Bug fixes

Presentation-related elements DOM elements are now marked as such to help screen readers.

[markdown mode](https://codemirror.net/mode/markdown/): Be more picky about what HTML tags look like to avoid false positives.

### New features

`findModeByMIME` now understands `+json` and `+xml` MIME suffixes.

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Add support for an `override` option to ignore language-specific defaults.

[panel addon](https://codemirror.net/doc/manual.html#addon_panel): Add a `stable` option that auto-scrolls the content to keep it in the same place when inserting/removing a panel.

## 5.22.2 (2017-01-12)

### Bug fixes

Include rollup.config.js in NPM package, so that it can be used to build from source.

## 5.22.0 (2016-12-20)

### Bug fixes

[sublime bindings](https://codemirror.net/demo/sublime.html): Make `selectBetweenBrackets` work with multiple cursors.

[javascript mode](https://codemirror.net/mode/javascript/): Fix issues with parsing complex TypeScript types, imports, and exports.

A contentEditable editor instance with autofocus enabled no longer crashes during initializing.

### New features

[emacs bindings](https://codemirror.net/demo/emacs.html): Export `CodeMirror.emacs` to allow other addons to hook into Emacs-style functionality.

[active-line addon](https://codemirror.net/doc/manual.html#addon_active-line): Add `nonEmpty` option.

New event: [`optionChange`](https://codemirror.net/doc/manual.html#event_optionChange).

## 5.21.0 (2016-11-21)

### Bug fixes

Tapping/clicking the editor in [contentEditable mode](https://codemirror.net/doc/manual.html#option_inputStyle) on Chrome now puts the cursor at the tapped position.

Fix various crashes and misbehavior when reading composition events in [contentEditable mode](https://codemirror.net/doc/manual.html#option_inputStyle).

Catches and ignores an IE 'Unspecified Error' when creating an editor in an iframe before there is a `<body>`.

[merge addon](https://codemirror.net/doc/manual.html#addon_merge): Fix several issues in the chunk-aligning feature.

[verilog mode](https://codemirror.net/mode/verilog): Rewritten to address various issues.

[julia mode](https://codemirror.net/mode/julia): Recognize Julia 0.5 syntax.

[swift mode](https://codemirror.net/mode/swift): Various fixes and adjustments to current syntax.

[markdown mode](https://codemirror.net/mode/markdown): Allow lists without a blank line above them.

### New features

The [`setGutterMarker`](https://codemirror.net/doc/manual.html#setGutterMarker), [`clearGutter`](https://codemirror.net/doc/manual.html#clearGutter), and [`lineInfo`](https://codemirror.net/doc/manual.html#lineInfo) methods are now available on `Doc` objects.

The [`heightAtLine`](https://codemirror.net/doc/manual.html#heightAtLine) method now takes an extra argument to allow finding the height at the top of the line's line widgets.

[ruby mode](https://codemirror.net/mode/ruby): `else` and `elsif` are now immediately indented.

[vim bindings](https://codemirror.net/demo/vim.html): Bind Ctrl-T and Ctrl-D to in- and dedent in insert mode.

## 5.20.2 (2016-10-21)

### Bug fixes

Fix `CodeMirror.version` returning the wrong version number.

## 5.20.0 (2016-10-20)

### Bug fixes

Make `newlineAndIndent` command work with multiple cursors on the same line.

Make sure keypress events for backspace are ignored.

Tokens styled with overlays no longer get a nonsense `cm-cm-overlay` class.

Line endings for pasted content are now normalized to the editor's [preferred ending](https://codemirror.net/doc/manual.html#option_lineSeparator).

[javascript mode](https://codemirror.net/mode/javascript): Improve support for class expressions. Support TypeScript optional class properties, the `abstract` keyword, and return type declarations for arrow functions.

[css mode](https://codemirror.net/mode/css): Fix highlighting of mixed-case keywords.

[closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets): Improve behavior when typing a quote before a string.

### New features

The core is now maintained as a number of small files, using ES6 syntax and modules, under the `src/` directory. A git checkout no longer contains a working `codemirror.js` until you `npm run build` (but when installing from NPM, it is included).

The [`refresh`](https://codemirror.net/doc/manual.html#event_refresh) event is now documented and stable.

## 5.19.0 (2016-09-20)

### Bugfixes

[erlang mode](https://codemirror.net/mode/erlang): Fix mode crash when trying to read an empty context.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Fix broken behavior when toggling comments inside a comment.

xml-fold addon: Fix a null-dereference bug.

Page up and page down now do something even in single-line documents.

Fix an issue where the cursor position could be off in really long (~8000 character) tokens.

### New features

[javascript mode](https://codemirror.net/mode/javascript): Better indentation when semicolons are missing. Better support for TypeScript classes, optional parameters, and the `type` keyword.

The [`blur`](https://codemirror.net/doc/manual.html#event_blur) and [`focus`](https://codemirror.net/doc/manual.html#event_focus) events now pass the DOM event to their handlers.

## 5.18.2 (2016-08-23)

### Bugfixes

[vue mode](https://codemirror.net/mode/vue): Fix outdated references to renamed Pug mode dependency.

## 5.18.0 (2016-08-22)

### Bugfixes

Make sure [gutter backgrounds](https://codemirror.net/doc/manual.html#addLineClass) stick to the rest of the gutter during horizontal scrolling.

The contenteditable [`inputStyle`](https://codemirror.net/doc/manual.html#option_inputStyle) now properly supports pasting on pre-Edge IE versions.

[javascript mode](https://codemirror.net/mode/javascript): Fix some small parsing bugs and improve TypeScript support.

[matchbrackets addon](https://codemirror.net/doc/manual.html#addon_matchbrackets): Fix bug where active highlighting was left in editor when the addon was disabled.

[match-highlighter addon](https://codemirror.net/doc/manual.html#addon_match-highlighter): Only start highlighting things when the editor gains focus.

[javascript-hint addon](https://codemirror.net/doc/manual.html#addon_javascript-hint): Also complete non-enumerable properties.

### New features

The [`addOverlay`](https://codemirror.net/doc/manual.html#addOverlay) method now supports a `priority` option to control the order in which overlays are applied.

MIME types that end in `+json` now default to the JSON mode when the MIME itself is not defined.

### Breaking changes

The mode formerly known as Jade was renamed to [Pug](https://codemirror.net/mode/pug).

The [Python mode](https://codemirror.net/mode/python) now defaults to Python 3 (rather than 2) syntax.

## 5.17.0 (2016-07-19)

### Bugfixes

Fix problem with wrapped trailing whitespace displaying incorrectly.

Prevent IME dialog from overlapping typed content in Chrome.

Improve measuring of characters near a line wrap.

[javascript mode](https://codemirror.net/mode/javascript): Improve support for `async`, allow trailing commas in `import` lists.

[vim bindings](https://codemirror.net/demo/vim.html): Fix backspace in replace mode.

[sublime bindings](https://codemirror.net/demo/sublime.html): Fix some key bindings on OS X to match Sublime Text.

### New features

[markdown mode](https://codemirror.net/mode/markdown): Add more classes to image links in highlight-formatting mode.

## 5.16.0 (2016-06-20)

### Bugfixes

Fix glitches when dragging content caused by the drop indicator receiving mouse events.

Make Control-drag work on Firefox.

Make clicking or selection-dragging at the end of a wrapped line select the right position.

[show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint): Prevent widget scrollbar from hiding part of the hint text.

[rulers addon](https://codemirror.net/doc/manual.html#addon_rulers): Prevent rulers from forcing a horizontal editor scrollbar.

### New features

[search addon](https://codemirror.net/doc/manual.html#addon_search): Automatically bind search-related keys in persistent dialog.

[sublime keymap](https://codemirror.net/demo/sublime.html): Add a multi-cursor aware smart backspace binding.

## 5.15.2 (2016-05-20)

### Bugfixes

Fix a critical document corruption bug that occurs when a document is gradually grown.

## 5.15.0 (2016-05-20)

### Bugfixes

Fix bug that caused the selection to reset when focusing the editor in contentEditable input mode.

Fix issue where not all ASCII control characters were being replaced by placeholders.

Remove the assumption that all modes have a `startState` method from several wrapping modes.

Fix issue where the editor would complain about overlapping collapsed ranges when there weren't any.

Optimize document tree building when loading or pasting huge chunks of content.

[markdown mode](https://codemirror.net/mode/markdown/): Fix several issues in matching link targets.

[clike mode](https://codemirror.net/mode/clike/): Improve indentation of C++ template declarations.

### New features

Explicitly bind Ctrl-O on OS X to make that binding (“open line”) act as expected.

Pasting [linewise-copied](https://codemirror.net/doc/manual.html#option_lineWiseCopyCut) content when there is no selection now inserts the lines above the current line.

[javascript mode](https://codemirror.net/mode/javascript/): Support `async`/`await` and improve support for TypeScript type syntax.

## 5.14.2 (2016-04-20)

### Bugfixes

Push a new package to NPM due to an [NPM bug](https://github.com/npm/npm/issues/5082) omitting the LICENSE file in 5.14.0.

Set `dataTransfer.effectAllowed` in `dragstart` handler to help browsers use the right drag icon.

Add the [mbox mode](https://codemirror.net/mode/mbox/index.html) to `mode/meta.js`.

## 5.14.0 (2016-04-20)

### Bugfixes

[`posFromIndex`](https://codemirror.net/doc/manual.html#posFromIndex) and [`indexFromPos`](https://codemirror.net/doc/manual.html#indexFromPos) now take [`lineSeparator`](https://codemirror.net/doc/manual.html#option_lineSeparator) into account.

[vim bindings](https://codemirror.net/demo/vim.html): Only call `.save()` when it is actually available.

[comment addon](https://codemirror.net/doc/manual.html#addon_comment): Be careful not to mangle multi-line strings.

[Python mode](https://codemirror.net/mode/python/index.html): Improve distinguishing of decorators from `@` operators.

[`findMarks`](https://codemirror.net/doc/manual.html#findMarks): No longer return marks that touch but don't overlap given range.

### New features

[vim bindings](https://codemirror.net/demo/vim.html): Add yank command.

[match-highlighter addon](https://codemirror.net/doc/manual.html#addon_match-highlighter): Add `trim` option to disable ignoring of whitespace.

[PowerShell mode](https://codemirror.net/mode/powershell/index.html): Added.

[Yacas mode](https://codemirror.net/mode/yacas/index.html): Added.

[Web IDL mode](https://codemirror.net/mode/webidl/index.html): Added.

[SAS mode](https://codemirror.net/mode/sas/index.html): Added.

[mbox mode](https://codemirror.net/mode/mbox/index.html): Added.

## 5.13.2 (2016-03-23)

### Bugfixes

Solves a problem where the gutter would sometimes not extend all the way to the end of the document.

## 5.13.0 (2016-03-21)

### New features

New DOM event forwarded: [`"dragleave"`](https://codemirror.net/doc/manual.html#event_dom).

[protobuf mode](https://codemirror.net/mode/protobuf/index.html): Newly added.

### Bugfixes

Fix problem where [`findMarks`](https://codemirror.net/doc/manual.html#findMarks) sometimes failed to find multi-line marks.

Fix crash that showed up when atomic ranges and bidi text were combined.

[show-hint addon](https://codemirror.net/demo/complete.html): Completion widgets no longer close when the line indented or dedented.

[merge addon](https://codemirror.net/demo/merge.html): Fix bug when merging chunks at the end of the file.

[placeholder addon](https://codemirror.net/doc/manual.html#addon_placeholder): No longer gets confused by [`swapDoc`](https://codemirror.net/doc/manual.html#swapDoc).

[simplescrollbars addon](https://codemirror.net/doc/manual.html#addon_simplescrollbars): Fix invalid state when deleting at end of document.

[clike mode](https://codemirror.net/mode/clike/index.html): No longer gets confused when a comment starts after an operator.

[markdown mode](https://codemirror.net/mode/markdown/index.html): Now supports CommonMark-style flexible list indentation.

[dylan mode](https://codemirror.net/mode/dylan/index.html): Several improvements and fixes.

## 5.12.0 (2016-02-19)

### New features

[Vim bindings](https://codemirror.net/demo/vim.html): Ctrl-Q is now an alias for Ctrl-V.

[Vim bindings](https://codemirror.net/demo/vim.html): The Vim API now exposes an `unmap` method to unmap bindings.

[active-line addon](https://codemirror.net/demo/activeline.html): This addon can now style the active line's gutter.

[FCL mode](https://codemirror.net/mode/fcl/): Newly added.

[SQL mode](https://codemirror.net/mode/sql/): Now has a Postgresql dialect.

### Bugfixes

Fix [issue](https://github.com/codemirror/CodeMirror/issues/3781) where trying to scroll to a horizontal position outside of the document's width could cause the gutter to be positioned incorrectly.

Use absolute, rather than fixed positioning in the context-menu intercept hack, to work around a [problem](https://github.com/codemirror/CodeMirror/issues/3238) when the editor is inside a transformed parent container.

Solve a [problem](https://github.com/codemirror/CodeMirror/issues/3821) where the horizontal scrollbar could hide text in Firefox.

Fix a [bug](https://github.com/codemirror/CodeMirror/issues/3834) that caused phantom scroll space under the text in some situations.

[Sublime Text bindings](https://codemirror.net/demo/sublime.html): Bind delete-line to Shift-Ctrl-K on OS X.

[Markdown mode](https://codemirror.net/mode/markdown/): Fix [issue](https://github.com/codemirror/CodeMirror/issues/3787) where the mode would keep state related to fenced code blocks in an unsafe way, leading to occasional corrupted parses.

[Markdown mode](https://codemirror.net/mode/markdown/): Ignore backslashes in code fragments.

[Markdown mode](https://codemirror.net/mode/markdown/): Use whichever mode is registered as `text/html` to parse HTML.

[Clike mode](https://codemirror.net/mode/clike/): Improve indentation of Scala `=>` functions.

[Python mode](https://codemirror.net/mode/python/): Improve indentation of bracketed code.

[HTMLMixed mode](https://codemirror.net/mode/htmlmixed/): Support multi-line opening tags for sub-languages (`<script>`, `<style>`, etc).

[Spreadsheet mode](https://codemirror.net/mode/spreadsheet/): Fix bug where the mode did not advance the stream when finding a backslash.

[XML mode](https://codemirror.net/mode/xml/): The mode now takes a `matchClosing` option to configure whether mismatched closing tags should be highlighted as errors.

## 5.11.0 (2016-01-20)

* New modes: [JSX](https://codemirror.net/mode/jsx/index.html), [literate Haskell](https://codemirror.net/mode/haskell-literate/index.html)
* The editor now forwards more [DOM events](https://codemirror.net/doc/manual.html#event_dom): `cut`, `copy`, `paste`, and `touchstart`. It will also forward `mousedown` for drag events
* Fixes a bug where bookmarks next to collapsed spans were not rendered
* The [Swift](https://codemirror.net/mode/swift/index.html) mode now supports auto-indentation
* Frontmatters in the [YAML frontmatter](https://codemirror.net/mode/yaml-frontmatter/index.html) mode are now optional as intended

## 5.10.0 (2015-12-21)

* Modify the way [atomic ranges](https://codemirror.net/doc/manual.html#mark_atomic) are skipped by selection to try and make it less surprising.
* The [Swift mode](https://codemirror.net/mode/swift/index.html) was rewritten.
* New addon: [jump-to-line](https://codemirror.net/doc/manual.html#addon_jump-to-line).
* New method: [`isReadOnly`](https://codemirror.net/doc/manual.html#isReadOnly).
* The [show-hint addon](https://codemirror.net/doc/manual.html#addon_show-hint) now defaults to picking completions on single click.
* The object passed to [`"beforeSelectionChange"`](https://codemirror.net/doc/manual.html#event_beforeSelectionChange) events now has an `origin` property.
* New mode: [Crystal](https://codemirror.net/mode/crystal/index.html).

## 5.9.0 (2015-11-23)

* Improve the way overlay (OS X-style) scrollbars are handled
* Make [annotatescrollbar](https://codemirror.net/doc/manual.html#addon_annotatescrollbar) and scrollpastend addons work properly together
* Make [show-hint](https://codemirror.net/doc/manual.html#addon_show-hint) addon select options on single click by default, move selection to hovered item
* Properly fold comments that include block-comment-start markers
* Many small language mode fixes

## 5.8.0 (2015-10-20)

* Fixes an infinite loop in the [hardwrap addon](https://codemirror.net/doc/manual.html#addon_hardwrap)
* New modes: [NSIS](https://codemirror.net/mode/nsis/index.html), [Ceylon](https://codemirror.net/mode/clike/index.html)
* The Kotlin mode is now a [clike](https://codemirror.net/mode/clike/index.html) dialect, rather than a stand-alone mode
* New option: [`allowDropFileTypes`](https://codemirror.net/doc/manual.html#option_allowDropFileTypes). Binary files can no longer be dropped into CodeMirror
* New themes: [bespin](https://codemirror.net/demo/theme.html#bespin), [hopscotch](https://codemirror.net/demo/theme.html#hopscotch), [isotope](https://codemirror.net/demo/theme.html#isotope), [railscasts](https://codemirror.net/demo/theme.html#railscasts)

## 5.7.0 (2015-09-21)

* New modes: [Vue](https://codemirror.net/mode/vue/index.html), [Oz](https://codemirror.net/mode/oz/index.html), [MscGen](https://codemirror.net/mode/mscgen/index.html) (and dialects), [Closure Stylesheets](https://codemirror.net/mode/css/gss.html)
* Implement [CommonMark](http://commonmark.org)-style flexible list indent and cross-line code spans in [Markdown](https://codemirror.net/mode/markdown/index.html) mode
* Add a replace-all button to the [search addon](https://codemirror.net/doc/manual.html#addon_search), and make the persistent search dialog transparent when it obscures the match
* Handle `async`/`await` and ocal and binary numbers in [JavaScript mode](https://codemirror.net/mode/javascript/index.html)
* Fix various issues with the [Haxe mode](https://codemirror.net/mode/haxe/index.html)
* Make the [closebrackets addon](https://codemirror.net/doc/manual.html#addon_closebrackets) select only the wrapped text when wrapping selection in brackets
* Tokenize properties as properties in the [CoffeeScript mode](https://codemirror.net/mode/coffeescript/index.html)
* The [placeholder addon](https://codemirror.net/doc/manual.html#addon_placeholder) now accepts a DOM node as well as a string placeholder

## 5.6.0 (2015-08-20)

* Fix bug where you could paste into a `readOnly` editor
* Show a cursor at the drop location when dragging over the editor
* The [Rust mode](https://codemirror.net/mode/rust/index.html) was rewritten to handle modern Rust
* The editor and theme CSS was cleaned up. Some selectors are now less specific than before
* New theme: [abcdef](https://codemirror.net/demo/theme.html#abcdef)
* Lines longer than [`maxHighlightLength`](https://codemirror.net/doc/manual.html#option_maxHighlightLength) are now less likely to mess up indentation
* New addons: [`autorefresh`](https://codemirror.net/doc/manual.html#addon_autorefresh) for refreshing an editor the first time it becomes visible, and `html-lint` for using [HTMLHint](http://htmlhint.com/)
* The [`search`](https://codemirror.net/doc/manual.html#addon_search) addon now recognizes `\r` and `\n` in pattern and replacement input

## 5.5.0 (2015-07-20)

*   New option: [`lineSeparator`](https://codemirror.net/doc/manual.html#option_lineSeparator) (with corresponding [method](https://codemirror.net/doc/manual.html#lineSeparator))
*   New themes: [dracula](https://codemirror.net/demo/theme.html#dracula), [seti](https://codemirror.net/demo/theme.html#seti), [yeti](https://codemirror.net/demo/theme.html#yeti), [material](https://codemirror.net/demo/theme.html#material), and [icecoder](https://codemirror.net/demo/theme.html#icecoder)
*   New modes: [Brainfuck](https://codemirror.net/mode/brainfuck/index.html), [VHDL](https://codemirror.net/mode/vhdl/index.html), Squirrel ([clike](https://codemirror.net/mode/clike/index.html) dialect)
*   Define a `findPersistent` command in the [search](https://codemirror.net/demo/search.html) addon, for a dialog that stays open as you cycle through matches
*   From this release on, the NPM module doesn't include documentation and demos
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.4.0...5.5.0)

## 5.4.0 (2015-06-25)

*   New modes: [Twig](https://codemirror.net/mode/twig/index.html), [Elm](https://codemirror.net/mode/elm/index.html), [Factor](https://codemirror.net/mode/factor/index.html), [Swift](https://codemirror.net/mode/swift/index.html)
*   Prefer clipboard API (if available) when pasting
*   Refined definition highlighting in [clike](https://codemirror.net/mode/clike/index.html) mode
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.3.0...5.4.0)

## 5.3.0 (2015-05-20)

*   Fix several regressions in the [`show-hint`](https://codemirror.net/doc/manual.html#addon_show-hint) addon (`completeSingle` option, `"shown"` and `"close"` events)
*   The [vim mode](https://codemirror.net/demo/vim.html) API was [documented](https://codemirror.net/doc/manual.html#vimapi)
*   New modes: [ASN.1](https://codemirror.net/mode/asn.1/index.html), [TTCN](https://codemirror.net/mode/ttcn/index.html), and [TTCN-CFG](https://codemirror.net/mode/ttcn-cfg/index.html)
*   The [clike](https://codemirror.net/mode/clike/index.html) mode can now deep-indent `switch` statements, and roughly recognizes types and defined identifiers
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.2.0...5.3.0)

## 5.2.0 (2015-04-20)

*   Fix several race conditions in [`show-hint`](https://codemirror.net/doc/manual.html#addon_show-hint)'s asynchronous mode
*   Fix backspace binding in [Sublime bindings](https://codemirror.net/demo/sublime.html)
*   Change the way IME is handled in the `"textarea"` [input style](https://codemirror.net/doc/manual.html#option_inputStyle)
*   New modes: [MUMPS](https://codemirror.net/mode/mumps/index.html), [Ha