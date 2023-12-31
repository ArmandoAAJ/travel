import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './src/routes/Stacks';

import {
  useFonts,
  DancingScript_700Bold,
  DancingScript_600SemiBold,
  DancingScript_500Medium,
  DancingScript_400Regular,
} from '@expo-google-fonts/dancing-script';

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingScript_700Bold,
    DancingScript_600SemiBold,
    DancingScript_500Medium,
    DancingScript_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
