import { DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export const HOME_SCREEN = 'HOME_SCREEN'
export const MOVIE_DETAILS_SCREEN = 'MOVIE_DETAILS_SCREEN'

export type RootStackParamList = {
  HOME_SCREEN: undefined,
  MOVIE_DETAILS_SCREEN: { movieId: string }
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

export const screens = {
    home: HOME_SCREEN,
    movieDetails: MOVIE_DETAILS_SCREEN
}

export const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
}