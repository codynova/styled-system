import type * as CSS from 'csstype'

export type StyleObject = Record<string, any>

export type StyleFunction = (cssValue: any) => StyleObject

export type ResponsiveValue<T> = T | null | Array<T | null>

type TLengthStyledSystem = string | number

export type StandardStyleProps = {
	gridGap?: ResponsiveValue<CSS.Property.GridGap<TLengthStyledSystem>>
	gridColumnGap?: ResponsiveValue<
		CSS.Property.GridColumnGap<TLengthStyledSystem>
	>
	gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<TLengthStyledSystem>>
	gridColumn?: ResponsiveValue<CSS.Property.GridColumn>
	gridRow?: ResponsiveValue<CSS.Property.GridRow>
	gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>
	gridAutoColumns?: ResponsiveValue<
		CSS.Property.GridAutoColumns<TLengthStyledSystem>
	>
	gitAutoRows?: ResponsiveValue<
		CSS.Property.GridAutoRows<TLengthStyledSystem>
	>
	gridTemplate?: ResponsiveValue<CSS.Property.GridTemplate>
	gridTemplateColumns?: ResponsiveValue<
		CSS.Property.GridTemplateColumns<TLengthStyledSystem>
	>
	gridTemplateRows?: ResponsiveValue<
		CSS.Property.GridTemplateRows<TLengthStyledSystem>
	>
	gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>
	gridArea?: ResponsiveValue<CSS.Property.GridArea>

	fill?: ResponsiveValue<CSS.Property.Fill>
	stroke?: ResponsiveValue<CSS.Property.Stroke>
	strokeWidth?: ResponsiveValue<CSS.Property.StrokeWidth<TLengthStyledSystem>>

	cursor?: ResponsiveValue<CSS.Property.Cursor>
	willChange?: ResponsiveValue<CSS.Property.WillChange>

	zIndex?: ResponsiveValue<CSS.Property.ZIndex | string>
	transform?: ResponsiveValue<CSS.Property.Transform>
	transition?: ResponsiveValue<CSS.Property.Transition>

	position?: ResponsiveValue<CSS.Property.Position>
	top?: ResponsiveValue<CSS.Property.Top<TLengthStyledSystem>>
	right?: ResponsiveValue<CSS.Property.Right<TLengthStyledSystem>>
	bottom?: ResponsiveValue<CSS.Property.Bottom<TLengthStyledSystem>>
	left?: ResponsiveValue<CSS.Property.Left<TLengthStyledSystem>>
	verticalAlign?: ResponsiveValue<
		CSS.Property.VerticalAlign<TLengthStyledSystem>
	>

	display?: ResponsiveValue<CSS.Property.Display>

	overflow?: ResponsiveValue<CSS.Property.Overflow>
	overflowX?: ResponsiveValue<CSS.Property.OverflowX>
	overflowY?: ResponsiveValue<CSS.Property.OverflowY>

	width?: ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>>
	height?: ResponsiveValue<CSS.Property.Height<TLengthStyledSystem>>
	minWidth?: ResponsiveValue<CSS.Property.MinWidth<TLengthStyledSystem>>
	minHeight?: ResponsiveValue<CSS.Property.MinHeight<TLengthStyledSystem>>
	maxWidth?: ResponsiveValue<CSS.Property.MaxWidth<TLengthStyledSystem>>
	maxHeight?: ResponsiveValue<CSS.Property.MaxHeight<TLengthStyledSystem>>

	flex?: ResponsiveValue<CSS.Property.Flex<TLengthStyledSystem>>
	flexWrap?: ResponsiveValue<CSS.Property.FlexWrap>
	flexDirection?: ResponsiveValue<CSS.Property.FlexDirection>
	flexGrow?: ResponsiveValue<CSS.Property.FlexGrow>
	flexShrink?: ResponsiveValue<CSS.Property.FlexShrink>
	flexBasis?: ResponsiveValue<CSS.Property.FlexBasis<TLengthStyledSystem>>
	alignItems?: ResponsiveValue<CSS.Property.AlignItems>
	alignContent?: ResponsiveValue<CSS.Property.AlignContent>
	alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>
	justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>
	justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>
	justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>
	order?: ResponsiveValue<CSS.Property.Order | string>

	margin?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>>
	marginTop?: ResponsiveValue<CSS.Property.MarginTop<TLengthStyledSystem>>
	marginRight?: ResponsiveValue<CSS.Property.MarginRight<TLengthStyledSystem>>
	marginBottom?: ResponsiveValue<
		CSS.Property.MarginBottom<TLengthStyledSystem>
	>
	marginLeft?: ResponsiveValue<CSS.Property.MarginLeft<TLengthStyledSystem>>

	padding?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>>
	paddingTop?: ResponsiveValue<CSS.Property.PaddingTop<TLengthStyledSystem>>
	paddingRight?: ResponsiveValue<
		CSS.Property.PaddingRight<TLengthStyledSystem>
	>
	paddingBottom?: ResponsiveValue<
		CSS.Property.PaddingBottom<TLengthStyledSystem>
	>
	paddingLeft?: ResponsiveValue<CSS.Property.PaddingLeft<TLengthStyledSystem>>

	border?: ResponsiveValue<CSS.Property.Border<string>>
	borderTop?: ResponsiveValue<CSS.Property.BorderTop<TLengthStyledSystem>>
	borderRight?: ResponsiveValue<CSS.Property.BorderRight<TLengthStyledSystem>>
	borderBottom?: ResponsiveValue<
		CSS.Property.BorderBottom<TLengthStyledSystem>
	>
	borderLeft?: ResponsiveValue<CSS.Property.BorderLeft<TLengthStyledSystem>>
	borderWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>>
	borderTopWidth?: ResponsiveValue<
		CSS.Property.BorderTopWidth<TLengthStyledSystem>
	>
	borderRightWidth?: ResponsiveValue<
		CSS.Property.BorderRightWidth<TLengthStyledSystem>
	>
	borderBottomWidth?: ResponsiveValue<
		CSS.Property.BorderBottomWidth<TLengthStyledSystem>
	>
	borderLeftWidth?: ResponsiveValue<
		CSS.Property.BorderLeftWidth<TLengthStyledSystem>
	>
	borderStyle?: ResponsiveValue<CSS.Property.BorderStyle>
	borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle>
	borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle>
	borderBottomStyle?: ResponsiveValue<CSS.Property.BorderBottomStyle>
	borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle>
	borderColor?: ResponsiveValue<CSS.Property.BorderColor>
	borderTopColor?: ResponsiveValue<CSS.Property.BorderTopColor>
	borderRightColor?: ResponsiveValue<CSS.Property.BorderRightColor>
	borderBottomColor?: ResponsiveValue<CSS.Property.BorderBottomColor>
	borderLeftColor?: ResponsiveValue<CSS.Property.BorderLeftColor>
	borderRadius?: ResponsiveValue<
		CSS.Property.BorderRadius<TLengthStyledSystem>
	>
	borderTopLeftRadius?: ResponsiveValue<
		CSS.Property.BorderTopLeftRadius<TLengthStyledSystem>
	>
	borderTopRightRadius?: ResponsiveValue<
		CSS.Property.BorderTopRightRadius<TLengthStyledSystem>
	>
	borderBottomLeftRadius?: ResponsiveValue<
		CSS.Property.BorderBottomLeftRadius<TLengthStyledSystem>
	>
	borderBottomRightRadius?: ResponsiveValue<
		CSS.Property.BorderBottomRightRadius<TLengthStyledSystem>
	>

	background?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>>
	backgroundColor?: ResponsiveValue<CSS.Property.BackgroundColor>
	backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage>
	backgroundSize?: ResponsiveValue<
		CSS.Property.BackgroundSize<TLengthStyledSystem>
	>
	backgroundPosition?: ResponsiveValue<
		CSS.Property.BackgroundPosition<TLengthStyledSystem>
	>
	backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>
	opacity?: ResponsiveValue<CSS.Property.Opacity>

	boxShadow?: ResponsiveValue<CSS.Property.BoxShadow>
	textShadow?: ResponsiveValue<CSS.Property.TextShadow>

	fontFamily?: ResponsiveValue<CSS.Property.FontFamily>
	fontSize?: ResponsiveValue<CSS.Property.FontSize<number>>
	fontWeight?: ResponsiveValue<CSS.Property.FontWeight>
	fontStyle?: ResponsiveValue<CSS.Property.FontStyle>
	lineHeight?: ResponsiveValue<CSS.Property.LineHeight<TLengthStyledSystem>>
	letterSpacing?: ResponsiveValue<
		CSS.Property.LetterSpacing<TLengthStyledSystem>
	>
	textAlign?: ResponsiveValue<CSS.Property.TextAlign>
	textDecoration?: ResponsiveValue<
		CSS.Property.TextDecoration<TLengthStyledSystem>
	>
	textTransform?: ResponsiveValue<CSS.Property.TextTransform>
}

export type ShorthandStyleProps = {
	m?: StandardStyleProps['margin']
	mt?: StandardStyleProps['marginTop']
	mb?: StandardStyleProps['marginBottom']
	ml?: StandardStyleProps['marginLeft']
	mr?: StandardStyleProps['marginRight']
	mx?: StandardStyleProps['margin']
	my?: StandardStyleProps['margin']
	marginX?: StandardStyleProps['margin']
	marginY?: StandardStyleProps['margin']
	p?: StandardStyleProps['padding']
	pt?: StandardStyleProps['paddingTop']
	pb?: StandardStyleProps['paddingBottom']
	pl?: StandardStyleProps['paddingLeft']
	pr?: StandardStyleProps['paddingRight']
	px?: StandardStyleProps['padding']
	py?: StandardStyleProps['padding']
	paddingX?: StandardStyleProps['padding']
	paddingY?: StandardStyleProps['padding']
	borderX?: StandardStyleProps['border']
	borderY?: StandardStyleProps['border']
	bg?: StandardStyleProps['backgroundColor']
}

export type StyleProps = StandardStyleProps & ShorthandStyleProps
