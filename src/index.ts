import { mediaQueries } from './defaults'
import { stylePropFunctions } from './propFns'
import type { StyleProps, StyleFunction } from './types'

export const merge = (a: any, b: any) => {
	const result = Object.assign({}, a, b)
	for (const key in a) {
		if (!a[key] || typeof b[key] !== 'object') continue
		Object.assign(result, {
			[key]: Object.assign(a[key], b[key]),
		})
	}
	return result
}

export const parseResponsiveStyle = (
	raw: any,
	styleFunction: (value: any) => any
) => {
	const styles: Record<string, any> = {}
	const length = mediaQueries.length
	let i = 0
	while (i < length) {
		const value = raw[i]
		const media = mediaQueries[i]
		const style = styleFunction(value)
		if (!media) Object.assign(styles, style)
		else
			Object.assign(styles, {
				[media]: Object.assign({}, styles[media], style),
			})
		i++
	}
	return styles
}

const createStyleParser = () => {
	return (componentProps: any) => {
		let styles = {}

		for (const propName in componentProps) {
			const raw = componentProps[propName]
			let styleFunction =
				stylePropFunctions[propName as unknown as keyof StyleProps]
			if (!styleFunction) continue
			if (styleFunction === true)
				styleFunction = (v) => ({ [propName]: v })

			if (Array.isArray(raw)) {
				styles = merge(styles, parseResponsiveStyle(raw, styleFunction))
				continue
			}

			Object.assign(styles, styleFunction(raw))
		}

		return styles
	}
}

const styleFunction = createStyleParser()

export default styleFunction
