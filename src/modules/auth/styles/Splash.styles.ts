import { StyleSheet, Dimensions } from "react-native";
import { ThemeColors } from "../../../core/theme/theme.types";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const LOGO_SIZE = 150;
const GLOW_SIZE = 260;

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    canvas: {
      flex: 1,
    },
    logoLayer: {
      position: 'absolute',
      width: GLOW_SIZE,
      height: GLOW_SIZE,
      top: SCREEN_HEIGHT * 0.35 - LOGO_SIZE / 2 - (GLOW_SIZE - LOGO_SIZE) / 2,
      left: SCREEN_WIDTH / 2 - LOGO_SIZE / 2 - (GLOW_SIZE - LOGO_SIZE) / 2,
    },

    loaderWrapper: {
      width: 110,         
      height: 50,        
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    loaderCanvas: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    pinContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 35,
      height: 35,
    },
    pinCanvas: {
      flex: 1,
    },
  });