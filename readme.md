# @novas/styled-system

Smaller faster rewrite of styled-system

## Installation

```bash
yarn add @novas/styled-system
```

```jsx
import styled from 'styled-components'
import { styleFunction } from '@novas/styled-system'

const Box = styled.div`
	box-sizing: border-box;
	${styleFunction}
`
```

## Motivation

After using `styled-system` for some time, I found the style props to be the real strength of the library, rather than the theme system. This project is a faster and slimmer rewrite of the `styled-system` core runtime with less features (such as the object syntax for responsive styles).

## Changes from styled-system

-   Smaller (approx 5x)
-   Faster (approx 5x+ startup, equal runtime)
-   Zero dependencies
-   Removed all theme scales
-   Minor bugfixes (removed broken shorthand props like "bgImage")
-   Pre-compiled, no runtime extension
-   Only supports array responsive styles
-   Typescript from the ground up
