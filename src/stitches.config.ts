import { createStitches } from '@stitches/react';
import { CSS, PropertyValue } from "@stitches/react";
import Stitches from "@stitches/react/types/stitches";


const media = {
	sm: '(max-width: 1000px)',
};

const themeMap = {} as const;

const theme = {
	colors: {
		white: '#FFFFFF',
		absoluteBlack: '#000000',
		black: '#1B1B1B',
		dark: '#3F3F3F',
		mediumDark: '#6F6F6F',
		medium: '#AAAAAA',
		grey: '#F4F4F4',
		light: '#EDEDED',
	},
	sizes: {
		width: '1250px',
	}
};


const utils: Utils = {
	responsiveWidth: (width) => ({
		maxWidth: width,
		width: '100%'
	}),
	hover: styles => ({ "@media (hover: hover)": { "&:hover": styles } })
}


export const { styled, reset, config } = createStitches({
	theme,
	media,
	utils,
})

type ThemedCSS = CSS<Stitches<"", typeof media, typeof theme, typeof themeMap, Utils>["config"]>;

type Utils = {
	responsiveWidth: (width: PropertyValue<"width">) => {},
	hover: (styles: ThemedCSS) => {};
}